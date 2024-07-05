"use client";
import React, { useState, useEffect, useCallback } from "react";
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

interface IPInfo {
  apiName: string;
  country: string;
  region: string;
  city: string;
  isp: string;
  org?: string;
  latitude: number | null;
  longitude: number | null;
  responseTime: number;
  error?: string;
}

const API_SOURCES = [
  "ipinfo",
  "ipstack",
  "ipregistry",
  "foxomy",
  "foxomy-cn",
  "extremeip",
];

export default function IPGeolocationLookup() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [ipInfoArray, setIpInfoArray] = useState<Record<string, IPInfo | null>>(
    {}
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [resolvedIP, setResolvedIP] = useState<string | null>(null);
  const [resolutionError, setResolutionError] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [isResolving, setIsResolving] = useState(false);
  const [lastValidResolution, setLastValidResolution] = useState<{
    input: string;
    ip: string;
  } | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get("address");
    if (address) {
      setInput(address);
      handleSubmit(address);
    }
  }, []);

  const debouncedHandleInputChange = useCallback(
    debounce((value: string) => {
      setIsTyping(false);
      if (value.length > 0) {
        handleSubmit(value);
      } else {
        setLoading({});
        setIpInfoArray({});
        setHasSubmitted(false);
        setFeedbackMessage("");
        setFeedbackType("");
      }
    }, 500),
    []
  );

  const validateInput = (value: string): boolean => {
    value = value.replace(/^(https?:\/\/|wss?:\/\/)/i, "");

    value = value.replace(/:\d+$/, "");

    const ipv4Pattern =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    const ipv6Pattern = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;

    const domainPattern =
      /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

    return (
      ipv4Pattern.test(value) ||
      ipv6Pattern.test(value) ||
      domainPattern.test(value)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    value = value.replace(/^(https?:\/\/|wss?:\/\/)/i, "");
    value = value.replace(/\/+$/, "");
    value = value.replace(/^([^:]+)(:\d+)?\/.*$/, '$1$2');
    setInput(value);
    setIsValid(validateInput(value));
    setIsTyping(true);
    setFeedbackMessage("");
    setFeedbackType("");

    debouncedHandleInputChange(value);
  };

  useEffect(() => {
    if (!isTyping && !isResolving) {
      if (!isValid && input.length > 0) {
        setFeedbackMessage(
          "Invalid input. Please enter a valid IPv4, IPv6, or FQDN."
        );
        setFeedbackType("error");
      } else if (hasSubmitted && isValid) {
        if (resolvedIP) {
          setFeedbackMessage(`Resolved ${input} to ${resolvedIP}`);
          setFeedbackType("success");
        } else if (resolutionError) {
          if (lastValidResolution && lastValidResolution.input === input) {
            setFeedbackMessage(
              `Resolved ${input} to ${lastValidResolution.ip}`
            );
            setFeedbackType("success");
          } else {
            setFeedbackMessage(`Failed to resolve ${input} into an IP address`);
            setFeedbackType("error");
          }
        }
      }
    }
  }, [
    isTyping,
    isResolving,
    isValid,
    input,
    hasSubmitted,
    resolvedIP,
    resolutionError,
    lastValidResolution,
  ]);

  const handleSubmit = async (value: string) => {
    if (!validateInput(value)) {
      setIpInfoArray({});
      setResolvedIP(null);
      setResolutionError(null);
      setHasSubmitted(false);
      return;
    }

    setHasSubmitted(true);
    setIsResolving(true);

    const ipv4Pattern =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Pattern = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;

    if (!ipv4Pattern.test(value) && !ipv6Pattern.test(value)) {
      try {
        const resolveResponse = await fetch(
          `https://foxomy.com/publicapi/bun/ip/ipinformation.php?resolveip=${value}`
        );
        const resolveData = await resolveResponse.json();
        if (resolveData.ip) {
          setResolvedIP(resolveData.ip);
          setResolutionError(null);
          setLastValidResolution({ input: value, ip: resolveData.ip });
        } else {
          throw new Error(resolveData.error || "Failed to resolve domain");
        }
      } catch (error) {
        console.error(`Error resolving domain:`, error);
        setResolvedIP(null);
        setResolutionError(
          error instanceof Error ? error.message : "Failed to resolve domain"
        );
      }
    } else {
      setResolvedIP(value);
      setResolutionError(null);
      setLastValidResolution({ input: value, ip: value });
    }

    setIsResolving(false);

    API_SOURCES.forEach(async (api) => {
      setLoading((prev) => ({ ...prev, [api]: true }));
      const startTime = Date.now();
      try {
        const response = await fetch(
          `https://foxomy.com/publicapi/bun/ip/ipinformation.php?api=${api}&ip=${value}`
        );
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        const data = await response.json();
        if (!response.ok || data.error) {
          throw new Error(
            data.error || `HTTP error! status: ${response.status}`
          );
        }
        const processedData = processApiData(api, data, responseTime);
        setIpInfoArray((prev) => ({ ...prev, [api]: processedData }));
      } catch (error) {
        console.error(`Error fetching IP information for ${api}:`, error);
        setIpInfoArray((prev) => ({
          ...prev,
          [api]: {
            apiName: api,
            error:
              error instanceof Error ? error.message : "Failed to fetch data",
            responseTime: Date.now() - startTime,
            country: "",
            region: "",
            city: "",
            isp: "",
            latitude: null,
            longitude: null,
          } as IPInfo,
        }));
      } finally {
        const newUrl = `${window.location.pathname}?address=${encodeURIComponent(
          value
        )}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
        setLoading((prev) => ({ ...prev, [api]: false }));
      }
    });
  };

  const processApiData = (
    api: string,
    data: any,
    responseTime: number
  ): IPInfo => {
    let info: IPInfo = {
      apiName: api,
      country: "",
      region: "",
      city: "",
      isp: "",
      latitude: null,
      longitude: null,
      responseTime,
    };

    switch (api) {
      case "ipinfo":
        info = {
          ...info,
          country: data.country,
          region: data.region,
          city: data.city,
          isp: data.asn?.name || "",
          latitude: parseFloat(data.loc?.split(",")[0]) || 0,
          longitude: parseFloat(data.loc?.split(",")[1]) || 0,
        };
        break;
      case "ipstack":
        info = {
          ...info,
          country: data.country_name,
          region: data.region_name,
          city: data.city,
          isp: data.connection?.isp || "",
          latitude: data.latitude,
          longitude: data.longitude,
        };
        break;
      case "ipregistry":
        info = {
          ...info,
          country: data.location?.country?.name || "",
          region: data.location?.region?.name || "",
          city: data.location?.city || "",
          isp: data.connection?.organization || "",
          org: data.company?.name,
          latitude: data.location?.latitude || 0,
          longitude: data.location?.longitude || 0,
        };
        break;
      case "foxomy":
        info = {
          ...info,
          country: data.country,
          region: data.region,
          city: data.city,
          isp: data.isp,
          latitude: data.coordinates?.latitude || 0,
          longitude: data.coordinates?.longitude || 0,
        };
        break;
      case "foxomy-cn":
        info = {
          ...info,
          country: data.country,
          region: data.region,
          city: data.city,
          isp: data.isp,
          org: data.org,
          latitude: data.latitude,
          longitude: data.longitude,
        };
        break;
      case "extremeip":
        info = {
          ...info,
          country: data.country,
          region: data.region,
          city: data.city,
          isp: data.isp,
          org: data.org,
          latitude: parseFloat(data.lat) || 0,
          longitude: parseFloat(data.lon) || 0,
        };
        break;
    }

    return info;
  };

  const handleButtonSubmit = () => {
    if (input.length > 0) {
      handleSubmit(input);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(0deg 0% 0%), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/los-angeles-banner.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom 15%",
        }}
        className="pt-10"
      >
        <div className="container mx-auto px-4 mb-10">
          <div className="text-3xl sm:text-5xl font-semibold mt-20">
            IP Geolocation Lookup
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Get the approximate location of an IP address.
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
                  placeholder="Enter IPv4, IPv6, or FQDN"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {API_SOURCES.map((api) => (
              <div key={api} className="w-full">
                {loading[api] ? (
                  <div className="flex justify-center items-center h-64">
                    <RoundSpinner />
                  </div>
                ) : ipInfoArray[api] ? (
                  <div className="relative">
                    <div className="absolute top-1 right-1 text-sm text-gray-500">
                      {api} ({ipInfoArray[api]!.responseTime} ms)
                    </div>
                    {ipInfoArray[api]!.error ? (
                      <div className="flex justify-center items-center h-64 text-red-500">
                        {ipInfoArray[api]!.error}
                      </div>
                    ) : (
                      <div className="bg-zinc-900/30 border rounded-md">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-1/3">Property</TableHead>
                              <TableHead className="w-2/3">Value</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {Object.entries(ipInfoArray[api]!).map(
                              ([key, value]) => {
                                if (
                                  key !== "apiName" &&
                                  key !== "latitude" &&
                                  key !== "longitude" &&
                                  key !== "responseTime" &&
                                  key !== "error"
                                ) {
                                  return (
                                    <TableRow key={key}>
                                      <TableCell className="font-semibold break-words">
                                        {key}
                                      </TableCell>
                                      <TableCell className="break-words">
                                        {key === "isp" && ipInfoArray[api]!.org
                                          ? `${value} (${
                                              ipInfoArray[api]!.org
                                            })`
                                          : value}
                                      </TableCell>
                                    </TableRow>
                                  );
                                }
                                return null;
                              }
                            )}
                            <TableRow>
                              <TableCell className="font-medium break-words">
                                Coordinates
                              </TableCell>
                              <TableCell className="break-words">
                                {ipInfoArray[api]!.latitude !== null &&
                                ipInfoArray[api]!.longitude !== null
                                  ? `${ipInfoArray[api]?.latitude?.toFixed(
                                      4
                                    )}, ${ipInfoArray[api]?.longitude?.toFixed(
                                      4
                                    )}`
                                  : "N/A"}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </div>
                ) : hasSubmitted ? (
                  <div className="flex justify-center items-center h-64">
                    <p>Failed to load data</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
