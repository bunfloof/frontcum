"use client";
import { CSSProperties } from "react";
import React, { useRef, useState, useEffect, useCallback } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type Location = null | "Dallas" | "Amsterdam";

type Server = {
  name: string;
  flag: string;
  ws: string;
  ping: number;
};

const MarkerSVG = (
  <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
    <path
      fill="currentColor"
      d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z"
    />
  </svg>
);

export function WorldMapSection() {
  const [servers, setServers] = useState<Server[]>([
    {
      name: "San Jose",
      flag: "/images/usflag.svg",
      ws: "wss://stosat-scla-01.sys.comcast.net.prod.hosts.ooklaserver.net:8080/ws?",
      ping: 0,
    },
    {
      name: "Dallas",
      flag: "/images/usflag.svg",
      ws: "wss://speedtest.dal.hivelocity.net.prod.hosts.ooklaserver.net:8080/ws?",
      ping: 0,
    },
    {
      name: "Amsterdam",
      flag: "/images/nlflag.svg",
      ws: "wss://am5.speedtest.gslnetworks.com.prod.hosts.ooklaserver.net:8080/ws?",
      ping: 0,
    },
  ]);

  const [pingingServers, setPingingServers] = useState<Record<string, boolean>>(
    {
      "San Francisco, California": false,
      "Dallas, Texas": false,
      "Amsterdam, Netherlands": false,
    }
  );

  const getPing = async (wsUrl: string) => {
    const ws = new WebSocket(wsUrl);
    return new Promise<number>((resolve) => {
      ws.onopen = () => {
        const start = Date.now();
        ws.send("p");
        ws.onmessage = () => {
          const duration = Date.now() - start;
          resolve(duration);
          ws.close();
        };
      };
    });
  };

  const calculateMedian = (arr: number[]) => {
    const sorted = arr.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  };

  const refreshPing = async (server: Server) => {
    setPingingServers((prev) => ({ ...prev, [server.name]: true }));
    const pings: number[] = [];
    for (let i = 0; i < 3; ++i) {
      const ping = await getPing(server.ws);
      pings.push(ping);
    }
    setPingingServers((prev) => ({ ...prev, [server.name]: false }));
    return calculateMedian(pings);
  };
  useEffect(() => {
    servers.forEach(async (server, index) => {
      const ping = await refreshPing(server);
      setServers((prev) => {
        const updated = [...prev];
        updated[index].ping = ping;
        return updated;
      });
    });
  }, []);

  return (
    <div className="container">
      {/* Grid */}
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 p-4">
        <div className="flex flex-col justify-between">
          <div>
            <h1
              className="text-[3.00rem] leading-none font-bold mb-2 text-green-50"
              style={{
                letterSpacing: "-0.16rem",
              }}
            >
              Server Locations
            </h1>
            <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50 mb-4">
              Choose optimal locations closest to your target audience.
            </p>
            <div className="grid grid-cols-2">
              {servers.map((server) => (
                <div
                  className="flex items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 md:mb-0 p-4 m-2 border rounded-lg"
                  key={server.name}
                >
                  <p className="flex items-center">
                    <img
                      src={server.flag}
                      alt={`${server.name} Flag`}
                      className="h-6 w-6 mr-2"
                    />
                    {server.name}
                    <span
                      className={`ml-2 ${
                        server.ping < 150
                          ? "text-green-500"
                          : server.ping < 300
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {server.ping} ms
                    </span>
                  </p>
                  <button
                    className={`ml-2 ${
                      pingingServers[server.name]
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={pingingServers[server.name]}
                    onClick={async () => {
                      const pingValue = await refreshPing(server);
                      setServers((prev) =>
                        prev.map((s) =>
                          s.name === server.name ? { ...s, ping: pingValue } : s
                        )
                      );
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      style={
                        pingingServers[server.name]
                          ? { animation: "spin 1s linear infinite" }
                          : {}
                      }
                    >
                      <path d="M6 18.7V21a1 1 0 01-2 0v-5a1 1 0 011-1h5a1 1 0 110 2H7.1A7 7 0 0019 12a1 1 0 112 0 9 9 0 01-15 6.7zM18 5.3V3a1 1 0 012 0v5a1 1 0 01-1 1h-5a1 1 0 010-2h2.9A7 7 0 005 12a1 1 0 11-2 0 9 9 0 0115-6.7z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div
            style={
              {
                "--background": "0 0 0",
                "--highlight": "255 255 255",

                "--bg-color":
                  "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
                "--border-color": `linear-gradient(145deg,
        rgb(var(--highlight) / 0.5) 0%,
        rgb(var(--highlight) / 0.2) 33.33%,
        rgb(var(--highlight) / 0.1) 66.67%,
        rgb(var(--highlight) / 0.1) 100%)
      `,
              } as CSSProperties
            }
            className="flex aspect-[2/1] w-full flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
  [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
          >
            <div className="relative mt-5">
              {/* Map section */}
              <img
                src="/images/worldmap.svg"
                alt="World Map"
                className="w-full opacity-20"
              />
              {/* Marker for Dallas */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "6%", top: "25.5%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div className="marker">{MarkerSVG}</div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-zinc-950/30 border-zinc-800 px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        sideOffset={5}
                      >
                        San Jose
                        <Tooltip.Arrow
                          style={{ fill: "var(--zinc-950)", opacity: 0.2 }}
                        />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </Tooltip.Provider>

              {/* Marker for Dallas */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "13.2%", top: "27.5%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div className="marker">{MarkerSVG}</div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-zinc-950/30 border-zinc-800 px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        sideOffset={5}
                      >
                        Dallas
                        <Tooltip.Arrow
                          style={{ fill: "var(--zinc-950)", opacity: 0.2 }}
                        />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </Tooltip.Provider>

              {/* Marker for Amsterdam */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "46.12%", top: "15.43%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div className="marker">{MarkerSVG}</div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-zinc-950/30 border-zinc-800 px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        // Add your tooltip classes here
                        sideOffset={5}
                      >
                        Amsterdam
                        <Tooltip.Arrow
                          style={{ fill: "var(--zinc-950)", opacity: 0.2 }}
                        />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
              </Tooltip.Provider>

              <div
                className="absolute"
                style={{ left: "7.32%", top: "25.87%" }}
              >
                <div className="soonmarker">{MarkerSVG}</div>
              </div>

              <style jsx>{`
                .soonmarker {
                  position: relative;
                  display: inline-block;
                  color: rgba(
                    161,
                    161,
                    161,
                    0.05
                  ); /* Set the color of the marker */
                }

                .marker {
                  position: relative;
                  display: inline-block;
                  color: rgba(
                    20,
                    184,
                    166,
                    1
                  ); /* Set the color of the marker */
                }

                .marker::before {
                  content: "";
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 15px; /* Set the size of the radiating effect */
                  height: 15px;
                  transform: translate(-50%, -50%);
                  border-radius: 50%;
                  background: rgba(
                    20,
                    184,
                    166,
                    0.4
                  ); /* Teal color with opacity */
                  animation: radiate 1.5s infinite;
                }

                @keyframes radiate {
                  0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 0.6;
                  }
                  100% {
                    transform: translate(-50%, -50%) scale(3);
                    opacity: 0;
                  }
                }

                @keyframes spin {
                  to {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
      {/* End of Grid */}
    </div>
  );
}

export default WorldMapSection;
