"use client";
import YouTube from "react-youtube";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";

export function ProofSection() {
  return (
    <div className="bg-no-repeat flex flex-col">
      {/* Faster than fast section */}
      <div className="container">
        <div className="flex flex-col p-4">
          <h1
            className="text-[3.00rem] leading-none font-bold mb-2 text-green-50"
            style={{
              letterSpacing: "-0.16rem",
            }}
          >
            Free Trials
          </h1>

          <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50">
            Experience our services first hand without any obligations.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container">
        <div className="p-4 mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-medium">
                {`Don't just take our words for it. We love getting to know our
                customers, so feel free to drop in the Discord and ask us for a
                free trial.`}
              </p>
              <div className="mt-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://discord.com/widget?id=943233569772425287&theme=dark"
                  width="100%"
                  height="337"
                  allowTransparency={true}
                  frameBorder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <YouTube
                videoId="fNeZUrMlob8"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    // Modify any additional YouTube parameters here
                    autoplay: 0,
                  },
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End of Grid */}
    </div>
  );
}

export default ProofSection;
