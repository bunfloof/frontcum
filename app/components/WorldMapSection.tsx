"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type Location = null | "Dallas" | "Amsterdam";

interface LatencyProps {
  location: string;
  flagSrc: string;
  url: string;
  subtract: number;
}

const withClientSideRendering = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithClientSideRendering = (props: P) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    return isClient ? <Component {...props} /> : null;
  };
  WithClientSideRendering.displayName = "WithClientSideRendering";
  return WithClientSideRendering;
};

const LatencyComponent: React.FC<LatencyProps> = ({
  location,
  flagSrc,
  url,
  subtract,
}) => {
  const [latency, setLatency] = useState<number | null>(null);
  const isMountedRef = useRef(true);

  const getLatencyColor = (latencyValue: number) => {
    if (latencyValue < 150) {
      return "text-green-500";
    } else if (latencyValue < 300) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const fetchLatency = useCallback(async () => {
    const latencies: number[] = [];

    const performFetch = async (iteration: number) => {
      const start = performance.now();
      await fetch(url, { mode: "no-cors" });
      const end = performance.now();
      const currentLatency = (end - start - subtract) / 2;
      latencies.push(currentLatency);

      if (iteration < 9) {
        if (isMountedRef.current) setLatency(currentLatency);
        setTimeout(() => performFetch(iteration + 1), 1000);
      } else {
        latencies.sort((a, b) => a - b);
        const mid = Math.floor(latencies.length / 2);
        const median =
          latencies.length % 2 !== 0
            ? latencies[mid]
            : (latencies[mid - 1] + latencies[mid]) / 2;
        if (isMountedRef.current) setLatency(median);
      }
    };

    performFetch(0);
  }, [url, subtract]);

  const handleRefresh = () => {
    setLatency(null);
    fetchLatency();
  };

  useEffect(() => {
    fetchLatency();

    // Cleanup function to update the ref when the component is unmounted
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="flex items-center">
      <p className="flex items-center">
        <img src={flagSrc} alt={`${location} Flag`} className="h-6 w-6 mr-2" />
        {location}
        {latency !== null && (
          <span
            className={`${getLatencyColor(latency)} ml-2`}
          >{` ${latency.toFixed(2)} ms`}</span>
        )}
      </p>
      <button onClick={handleRefresh} className="ml-2">
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M6 18.7V21a1 1 0 01-2 0v-5a1 1 0 011-1h5a1 1 0 110 2H7.1A7 7 0 0019 12a1 1 0 112 0 9 9 0 01-15 6.7zM18 5.3V3a1 1 0 012 0v5a1 1 0 01-1 1h-5a1 1 0 010-2h2.9A7 7 0 005 12a1 1 0 11-2 0 9 9 0 0115-6.7z" />
        </svg>
      </button>
    </div>
  );
};

const ClientRenderedLatencyComponent =
  withClientSideRendering(LatencyComponent);

export function WorldMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(null);

  const MarkerSVG = (
    <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
      <path
        fill="currentColor"
        d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z"
      />
    </svg>
  );

  return (
    <>
      <p className="font-semibold text-3xl sm:text-5xl text-center">
        Server Locations
      </p>
      <p className="py-5 text-md sm:text-lg text-center text-muted-foreground">
        Choose optimal locations closest to your target audience.
      </p>
      <div className="flex justify-center space-x-10">
        <ClientRenderedLatencyComponent
          location="Dallas, Texas"
          flagSrc="/images/usflag.svg"
          url="http://192.3.237.150/"
          subtract={5}
        />

        <ClientRenderedLatencyComponent
          location="Amsterdam, Netherlands"
          flagSrc="/images/nlflag.svg"
          url="http://185.185.40.2/"
          subtract={5}
        />
      </div>
      <div className="relative mt-5">
        {/* Map section */}
        <img
          src="/images/worldmap.svg"
          alt="World Map"
          className="w-full h-full opacity-20"
        />

        {/* Marker for Dallas */}
        <Tooltip.Provider>
          <div className="absolute" style={{ left: "14.43%", top: "30.5%" }}>
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
          <div className="absolute" style={{ left: "47.82%", top: "17%" }}>
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

        <div className="absolute" style={{ left: "19.08%", top: "25.2%" }}>
          <div className="soonmarker">{MarkerSVG}</div>
        </div>

        <div className="absolute" style={{ left: "7.32%", top: "25.87%" }}>
          <div className="soonmarker">{MarkerSVG}</div>
        </div>

        <div className="absolute" style={{ left: "91.22%", top: "29.88%" }}>
          <div className="soonmarker">{MarkerSVG}</div>
        </div>

        <div className="absolute" style={{ left: "95.32%", top: "81.88%" }}>
          <div className="soonmarker">{MarkerSVG}</div>
        </div>

        <style jsx>{`
          .soonmarker {
            position: relative;
            display: inline-block;
            color: rgba(161, 161, 161, 0.8); /* Set the color of the marker */
          }

          .marker {
            position: relative;
            display: inline-block;
            color: rgba(20, 184, 166, 1); /* Set the color of the marker */
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
            background: rgba(20, 184, 166, 0.4); /* Teal color with opacity */
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
        `}</style>
      </div>
    </>
  );
}

export default WorldMapSection;
