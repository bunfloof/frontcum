"use client";
import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { RoundSpinner } from "@/components/mynaui/spinner";
import debounce from "lodash/debounce";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/tablecustomwrap";
import Image from "next/image";
import Chart from "chart.js/auto";
import { Switch } from "@/components/ui/switch";

interface ServerInfo {
  [key: string]: any;
}

interface Player {
  id: string;
  name: string;
}

interface Mod {
  modId: string;
  modmarker: string;
}

interface LatencyData {
  time: number;
  latency: number;
}

interface PlayerData {
  time: number;
  online: number;
}

export default function MinecraftServerStatus() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [latencyData, setLatencyData] = useState<LatencyData[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const sizeElement = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });
  const [playerData, setPlayerData] = useState<PlayerData[]>([]);
  const playerChartRef = useRef<HTMLCanvasElement>(null);
  const playerChartInstance = useRef<Chart | null>(null);
  const [livePlayerUpdate, setLivePlayerUpdate] = useState(true);
  const [currentPlayers, setCurrentPlayers] = useState<Player[]>([]);
  const latestRequestRef = useRef<number>(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get("address");
    if (address) {
      setInput(address);
      handleSubmit(address);
    }
  }, []);

  useEffect(() => {
    const updateDivSize = () => {
      if (sizeElement.current) {
        const { offsetWidth, offsetHeight } = sizeElement.current;
        return { width: offsetWidth, height: offsetHeight };
      }
      return null;
    };

    const handleResize = debounce(() => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowSize({ width: newWidth, height: newHeight });

      //console.log("Window was resized or zoomed!");
      //console.log(`New window dimensions: ${newWidth}x${newHeight}`);

      // Always check and update div size
      const newDivSize = updateDivSize();
      if (newDivSize) {
        if (
          newDivSize.width !== divSize.width ||
          newDivSize.height !== divSize.height
        ) {
          //console.log("Div resized");
          setDivSize(newDivSize);
          console.log(
            `New div dimensions: ${newDivSize.width}x${newDivSize.height}`
          );
          if (chartInstance.current) {
            if (newWidth > 1024) {
              chartInstance.current?.resize((newDivSize.width - 64) / 2, 255);
              playerChartInstance.current?.resize(
                (newDivSize.width - 64) / 2,
                255
              );
            } else {
              chartInstance.current?.resize(newDivSize.width - 64, 255);
              playerChartInstance.current?.resize(newDivSize.width - 64, 255);
            }
          }
        } else {
          // console.log("Div size remained the same");
        }
      }
    }, 250); // 250ms debounce time

    // Initial size measurement
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel(); // Cancel any pending debounce
    };
  }, []); // Empty dependency array, we'll handle updates manually

  const debouncedHandleInputChange = useCallback(
    debounce((value: string) => {
      setIsTyping(false);
      if (value.length > 0) {
        handleSubmit(value);
      } else {
        setLoading(false);
        setServerInfo(null);
        setHasSubmitted(false);
        setFeedbackMessage("");
        setFeedbackType("");
      }
    }, 500),
    []
  );

  const validateInput = (value: string): boolean => {
    const ipv4WithOptionalPortPattern =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::\d{1,5})?$/;
    const domainWithOptionalPortPattern =
      /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}(?::\d{1,5})?$/;

    return (
      ipv4WithOptionalPortPattern.test(value) ||
      domainWithOptionalPortPattern.test(value)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    value = value.replace(/^(https?:\/\/|wss?:\/\/)/i, "");
    value = value.replace(/\/+$/, "");

    value = value.replace(/^([^:]+)(:\d+)?\/.*$/, "$1$2");
    setInput(value);
    const isInputValid = validateInput(value);
    setIsValid(isInputValid);
    setIsTyping(true);

    if (!isInputValid && value.length > 0) {
      setFeedbackMessage(
        "Invalid input. Please enter a valid IPv4, IPv6, or FQDN."
      );
      setFeedbackType("error");
    } else {
      setFeedbackMessage("");
      setFeedbackType("");
    }

    debouncedHandleInputChange(value);
  };

  const handleSubmit = async (value: string = input) => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setServerInfo(null);
    setLatencyData([]);
    setPlayerData([]);

    if (!validateInput(value)) {
      setHasSubmitted(false);
      setFeedbackMessage(
        "Invalid input. Please enter a valid IPv4, IPv6, or FQDN."
      );
      setFeedbackType("error");
      return;
    }

    setHasSubmitted(true);
    setLoading(true);

    const currentRequest = ++latestRequestRef.current;

    try {
      const [address, port] = value.split(":");
      const baseUrl =
        "https://foxomy.com/publicapi/bun/minecraftserverstatus/minecraftserverstatus.php";

      // First, try Java server
      let url = new URL(baseUrl);
      url.searchParams.append("address", address);
      if (port) {
        url.searchParams.append("port", port);
      }

      let response = await fetch(url.toString());
      let data = await response.json();

      // If Java server fetch fails, try Bedrock server
      if (!response.ok) {
        url.searchParams.append("bedrock", "true");
        response = await fetch(url.toString());
        data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || `HTTP error! status: ${response.status}`
          );
        }
      }

      const processedData: ServerInfo = {};

      if (data.bedrock) {
        // Process Bedrock server data
        processedData.type = "Bedrock";
        processedData.edition = data.edition;
        if (data.motd?.html) processedData.motd = data.motd.html;
        if (data.version?.name) processedData.version = data.version.name;
        if (data.version?.protocol)
          processedData.protocol = data.version.protocol;
        if (data.players) {
          processedData.playerCount = `${data.players.online}/${data.players.max}`;
        }
        if (data.gameMode) processedData.gameMode = data.gameMode;
        if (data.serverGUID) processedData.serverGUID = data.serverGUID;
        if (data.serverID) processedData.serverID = data.serverID;
      } else {
        // Process Java server data (existing code)
        processedData.type = "Java";
        if (data.latency !== undefined) processedData.status = data.latency;
        if (data.favicon) processedData.icon = data.favicon;
        if (data.version?.name) {
          processedData.version = data.version.name;
          if (data.forgeData) {
            processedData.version += " (Forge detected)";
          }
        }
        if (data.version?.protocol)
          processedData.protocol = data.version.protocol;
        if (
          Array.isArray(data.actualPlayers) &&
          data.actualPlayers.length > 0
        ) {
          processedData.players = data.actualPlayers;
        }
        if (data.srvRecord) processedData.srvRecord = data.srvRecord;
        if (data.forgeData?.mods) {
          const mods = data.forgeData.mods;
          processedData[`mods (${mods.length})`] = mods;
        }
      }

      // Common properties for both Java and Bedrock
      if (data.host) processedData.host = data.host;
      if (data.port) processedData.port = data.port;
      if (data.latency !== undefined) processedData.latency = data.latency;

      if (data.wsUrl) {
        processedData.wsUrl = data.wsUrl;
        connectWebSocket(data.wsUrl);
      } else {
        if (wsRef.current) {
          (wsRef.current as WebSocket).close();
        }
        setLatencyData([]);
      }

      // Fetch IP information (existing code)
      const ipInfoUrl = `https://foxomy.com/publicapi/bun/ip/ipinformation.php?api=ipinfo&ip=${address}`;
      const ipInfoResponse = await fetch(ipInfoUrl);
      const ipInfoData = await ipInfoResponse.json();

      if (ipInfoData) {
        processedData.location = `${ipInfoData.city}, ${ipInfoData.region}, ${ipInfoData.country}`;
        processedData.isp = ipInfoData.asn?.name || "Unknown";
      }

      if (currentRequest === latestRequestRef.current) {
        setServerInfo(processedData);
        setFeedbackMessage(`Successfully fetched server info for ${value}`);
        setFeedbackType("success");

        const newUrl = `${
          window.location.pathname
        }?address=${encodeURIComponent(value)}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    } catch (error) {
      if (currentRequest === latestRequestRef.current) {
        console.error(`Error fetching server information:`, error);
        setServerInfo(null);
        setFeedbackMessage(
          error instanceof Error ? error.message : "Failed to fetch server data"
        );
        setFeedbackType("error");
      }
    } finally {
      if (currentRequest === latestRequestRef.current) { // only set loading to false if latest req
        setLoading(false);
      }
    }
  };

  const connectWebSocket = (url: string) => {
    if (wsRef.current) {
      wsRef.current.close();
    }

    setLatencyData([]); // Clear previous data
    setPlayerData([]);

    const ws = new WebSocket(url);

    ws.onopen = () => {
      //console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const currentTime = Date.now();

      if (data.latency !== undefined) {
        setLatencyData((prevData) => {
          const newData = [
            ...prevData,
            { time: currentTime, latency: data.latency },
          ];
          return newData.length > 30 ? newData.slice(-30) : newData;
        });
      }

      if (data.players && livePlayerUpdate) {
        setServerInfo((prevInfo) => ({
          ...prevInfo,
          players: data.players.sample || [],
          playerCount: `${data.players.online}/${data.players.max}`,
        }));
      }

      if (data.players && data.players.online !== undefined) {
        setPlayerData((prevData) => {
          const newData = [
            ...prevData,
            { time: currentTime, online: data.players.online },
          ];
          return newData.length > 30 ? newData.slice(-30) : newData;
        });
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      //console.log("WebSocket connection closed");
    };

    wsRef.current = ws;

    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send("s");
      }
    }, 10000);

    return () => clearInterval(interval);
  };

  const handleButtonSubmit = () => {
    if (input.length > 0) {
      handleSubmit();
    }
  };

  const renderModList = (mods: Mod[]) => (
    <div>
      {mods.map((mod, index) => (
        <div key={index}>{`${mod.modId} (${mod.modmarker})`}</div>
      ))}
    </div>
  );

  const renderPlayerList = (players: Player[]) => (
    <div className="flex flex-wrap gap-2">
      {players.map((player) => (
        <div key={player.id} className="flex items-center">
          <Image
            src={`https://foxomy.com/publicapi/bun/minecraftavatars/minecrafthelm.php?uuid=${player.id}`}
            alt={`${player.name}'s head`}
            width={24}
            height={24}
            className="mr-1"
          />
          <span>{player.name}</span>
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    //console.log("boom");
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    //console.log(latencyData);
    if (latencyData.length == 0 && chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
      console.log("destroyed chart");
      console.log(chartInstance.current);
    }
    if (chartRef.current && latencyData.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        //console.log("ctx exists");
        if (!chartInstance.current) {
          console.log("creating chart");
          // Create the chart instance if it doesn't exist
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: [],
              datasets: [
                {
                  label: "Latency",
                  data: [],
                  fill: {
                    target: "origin",
                    above: "rgba(75, 192, 192, 0.2)",
                  },
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              color: "rgba(255, 255, 255, 0.8)",
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Time",
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Latency (ms)",
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  suggestedMin: 0,
                  suggestedMax: 200,
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                },
                tooltip: {
                  titleColor: "rgba(255, 255, 255, 1)",
                  bodyColor: "rgba(255, 255, 255, 0.8)",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
              },
            },
          });
        }

        // Update chart data
        if (chartInstance.current) {
          chartInstance.current.data.labels = latencyData.map((d) =>
            new Date(d.time).toLocaleTimeString()
          );
          chartInstance.current.data.datasets[0].data = latencyData.map(
            (d) => d.latency
          );
          chartInstance.current.update("none"); // Update without animation
        }
      }
    }
    // Player chart effect
    if (playerData.length == 0 && playerChartInstance.current) {
      playerChartInstance.current.destroy();
      playerChartInstance.current = null;
    }
    if (playerChartRef.current && playerData.length > 0) {
      const ctx = playerChartRef.current.getContext("2d");
      if (ctx) {
        if (!playerChartInstance.current) {
          playerChartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: [],
              datasets: [
                {
                  label: "Players",
                  data: [],
                  fill: {
                    target: "origin",
                    above: "rgba(250, 204, 21, 0.2)",
                  },
                  borderColor: "rgb(250, 204, 21)",
                  tension: 0.1,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              color: "rgba(255, 255, 255, 0.8)",
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Time",
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Players Online",
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.6)",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  suggestedMin: 0,
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                },
                tooltip: {
                  titleColor: "rgba(255, 255, 255, 1)",
                  bodyColor: "rgba(255, 255, 255, 0.8)",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
              },
            },
          });
        }

        // Update player chart data
        if (playerChartInstance.current) {
          playerChartInstance.current.data.labels = playerData.map((d) =>
            new Date(d.time).toLocaleTimeString()
          );
          playerChartInstance.current.data.datasets[0].data = playerData.map(
            (d) => d.online
          );
          playerChartInstance.current.update("none"); // Update without animation
        }
      }
    }
  }, [latencyData, playerData]);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(0deg 0% 0%), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/ipip.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom 15%",
        }}
        className="pt-10"
      >
        <div className="container mx-auto px-4 mb-10">
          <div className="text-3xl sm:text-5xl font-semibold mt-20">
            Minecraft Server Status Lookup
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Get the status of a Minecraft server quickly
          </p>
        </div>
      </div>
      <div className="bg-black flex-grow">
        <div className="container mx-auto px-4 py-10 ">
          <div className="mb-4">
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Enter Minecraft server address (e.g., vampsmp.furweb.com)"
                  value={input}
                  onChange={handleInputChange}
                  className={`px-4 py-2 w-full rounded-md border ${
                    isValid ? "border-gray-300" : "border-red-500"
                  } ${isTyping ? "pr-10" : ""}`}
                />
                <div
                  className={`absolute inset-y-0 right-0 flex items-center pr-3 transition-opacity duration-75 ease-in-out ${
                    isTyping ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <RoundSpinner color="slate400" />
                </div>
              </div>
              <button
                onClick={handleButtonSubmit}
                className="transition-colors bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>

            <p className="mt-2 text-sm">
              <span
                className={`transition-opacity duration-300 ease-in-out ${
                  isTyping ? "opacity-0 pointer-events-none" : "opacity-100"
                } ${
                  feedbackType === "error"
                    ? "text-red-600"
                    : feedbackType === "success"
                    ? "text-green-400"
                    : ""
                }`}
              >
                {feedbackMessage}
              </span>
              &#8203;
            </p>
          </div>

          <div ref={sizeElement} className="w-full">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <RoundSpinner />
              </div>
            ) : serverInfo ? (
              <div className="bg-zinc-900/30 border rounded-md mb-4">
                <Table>
                  <TableBody>
                    {Object.entries(serverInfo).map(([key, value]) => {
                      if (key === "wsUrl") return null; // Skip wsUrl
                      if (
                        key === "players" &&
                        (!Array.isArray(value) || value.length === 0)
                      )
                        return null; // Skip players if empty

                      // Custom order for specific keys
                      const customOrder = [
                        "type",
                        "status",
                        "host",
                        "port",
                        "icon",
                        "motd",
                        "version",
                        "protocol",
                        "playerCount",
                        "players",
                        "gameMode",
                        "serverGUID",
                        "serverID",
                        "edition",
                        "srvRecord",
                        "location",
                        "isp",
                      ];

                      // Sort function for custom order
                      const sortedEntries = Object.entries(serverInfo).sort(
                        ([a], [b]) => {
                          const indexA = customOrder.indexOf(a);
                          const indexB = customOrder.indexOf(b);
                          return (
                            (indexA === -1 ? Infinity : indexA) -
                            (indexB === -1 ? Infinity : indexB)
                          );
                        }
                      );

                      // Find the current entry
                      const currentEntry = sortedEntries.find(
                        ([k]) => k === key
                      );

                      if (!currentEntry) return null;

                      return (
                        <TableRow key={key}>
                          <TableCell className="font-semibold break-words">
                            {key}
                          </TableCell>
                          <TableCell className="break-all">
                            {key === "icon" ? (
                              <Image
                                src={value as string}
                                alt="Server Icon"
                                width={64}
                                height={64}
                              />
                            ) : key === "motd" ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: value as string,
                                }}
                              />
                            ) : key === "players" ? (
                              renderPlayerList(value as Player[])
                            ) : key.startsWith("mods") ? (
                              renderModList(value as Mod[])
                            ) : (
                              (value as React.ReactNode)
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {/* Add Latency Graph to the table */}
                    {/* Latency Graph */}
                    <TableRow>
                      <TableCell colSpan={2} className="p-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                          {/* Latency Graph */}
                          <div className="w-full lg:w-1/2">
                            <div className="font-semibold mb-2">
                              Latency Graph
                            </div>
                            <div className="h-64 w-full">
                              <canvas ref={chartRef}></canvas>
                            </div>
                            <p>
                              Current Latency:{" "}
                              {latencyData[latencyData.length - 1]?.latency}ms
                            </p>
                          </div>
                          {/* Players Online Graph */}
                          <div className="w-full lg:w-1/2">
                            <div className="font-semibold mb-2">
                              Players Graph
                            </div>
                            <div className="h-64 w-full">
                              <canvas ref={playerChartRef}></canvas>
                            </div>
                            <p>
                              Current Players:{" "}
                              {playerData[playerData.length - 1]?.online}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            ) : hasSubmitted ? (
              <div className="flex justify-center items-center h-64">
                <p>Failed to load server data</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
