"use client";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";

export function DDoSSection() {
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
            Proprietary DDoS Protection
          </h1>

          <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50">
            Custom filters specifically designed for individual game and web
            applications (Layer 7).
          </p>
        </div>
      </div>

      {/* SVG Animated section */}
      <div className="container">
        <div className="p-16 pt-4">
          <img
            src="/images/antiddos.svg"
            alt="antiddos"
            className="w-full"
          />
        </div>
        <div className="p-16 pt-4">
          <img
            src="/images/DDoSDesign.svg"
            alt="antiddos"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default DDoSSection;
