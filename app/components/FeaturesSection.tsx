import Link from "next/link";
import { CSSProperties } from "react";
export function FeaturesSection() {

  return (
    <div className="bg-no-repeat flex flex-col">
      <div
        className="border-t text-gray-200 py-12 bg-black border-zinc-800 border-solid"
        style={{
          backgroundImage: "linear-gradient(rgb(17, 17, 17), rgb(0, 0, 0))",
        }}
      >
        <div className="container">
          {" "}
          <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            <div className="items-start gap-1 flex flex-col flex-grow justify-start mb-8">
              <div className="items-center flex justify-center mb-6 rounded-lg">
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
                  className="rounded-xl border border-transparent p-3 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                >
                  <svg
                    aria-labelledby="update-icon-title"
                    className="h-7 w-7"
                    fill="none"
                    height="1em"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>A shield</title>
                    <defs fill="none">
                      <linearGradient
                        fill="none"
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop fill="none" stopColor="white" stopOpacity="0.2" />
                        <stop
                          fill="none"
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop fill="none" offset="0.5" stopColor="white" />
                        <stop
                          fill="none"
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop
                          fill="none"
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      fill="none"
                      stroke='url("#icon-gradient-fill")'
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              </div>
              <div className="pr-5">
                <h3 className="text-2xl font-bold text-green-50">DDoS Protection</h3>
                <p className="text-neutral-400 mt-3">
                  Included DDoS Protection for your servers at the
                  network (L3), transport (L4), and application (L7) layers.
                </p>
              </div>
            </div>
            <div className="items-start gap-1 flex flex-col flex-grow justify-start mb-8">
              <div className="items-center flex justify-center mb-6 rounded-lg">
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
                  className="rounded-xl border border-transparent p-3 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                >
                  <svg
                    aria-labelledby="update-icon-title"
                    className="h-7 w-7"
                    fill="none"
                    height="1em"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>A shield</title>
                    <defs fill="none">
                      <linearGradient
                        fill="none"
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop fill="none" stopColor="white" stopOpacity="0.2" />
                        <stop
                          fill="none"
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop fill="none" offset="0.5" stopColor="white" />
                        <stop
                          fill="none"
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop
                          fill="none"
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      fill="none"
                      stroke='url("#icon-gradient-fill")'
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>
              </div>
              <div className="pr-5">
                <h3 className="text-2xl font-bold text-green-50">Instant Setup</h3>
                <p className="text-neutral-400 mt-3">
                  All services are automatically set up instantly after after
                  payment has been received.
                </p>
              </div>
            </div>
            <div className="items-start gap-1 flex flex-col flex-grow justify-start mb-8">
              <div className="items-center flex justify-center mb-6 rounded-lg">
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
                  className="rounded-xl border border-transparent p-3 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                >
                  <svg
                    aria-labelledby="update-icon-title"
                    className="h-7 w-7"
                    fill="none"
                    height="1em"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>A shield</title>
                    <defs fill="none">
                      <linearGradient
                        fill="none"
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill1e"
                        x1="0"
                        x2="40"
                        y1="0"
                        y2="24"
                      >
                        <stop fill="none" stopColor="white" stopOpacity="0.2" />
                        <stop
                          fill="none"
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop fill="none" offset="0.5" stopColor="white" />
                        <stop
                          fill="none"
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop
                          fill="none"
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M21 21l-6-6m6 6v-4.8m0 4.8h-4.8M3 16.2V21m0 0h4.8M3 21l6-6M21 7.8V3m0 0h-4.8M21 3l-6 6M3 7.8V3m0 0h4.8M3 3l6 6"
                      fill="none"
                      stroke='url("#icon-gradient-fill1e")'
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
              <div className="pr-5">
                <h3 className="text-2xl font-bold text-green-50">Scale up and down</h3>
                <p className="text-neutral-400 mt-3">
                  Easily upgrade and downgrade your service at any time while
                  only paying for the difference.
                </p>
              </div>
            </div>
            <div className="items-start gap-1 flex flex-col flex-grow justify-start mb-8">
              <div className="items-center flex justify-center mb-6 rounded-lg">
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
                  className="rounded-xl border border-transparent p-3 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                >
                  <svg
                    aria-labelledby="update-icon-title"
                    className="h-7 w-7"
                    fill="none"
                    height="1em"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>A shield</title>
                    <defs fill="none">
                      <linearGradient
                        fill="none"
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill1"
                        x1="-3"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop fill="none" stopColor="white" stopOpacity="0.2" />
                        <stop
                          fill="none"
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop fill="none" offset="0.5" stopColor="white" />
                        <stop
                          fill="none"
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop
                          fill="none"
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M14 9a2 2 0 01-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 012 2v5zM18 9h2a2 2 0 012 2v11l-4-4h-6a2 2 0 01-2-2v-1"
                      fill="none"
                      stroke='url("#icon-gradient-fill1")'
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
              <div className="pr-5">
                <h3 className="text-2xl font-bold text-green-50">Managed Support</h3>
                <p className="text-neutral-400 mt-3">
                  Our support team is knowledgeable in all services we have to
                  offer.
                </p>
              </div>
            </div>
            <div className="items-start gap-1 flex flex-col flex-grow justify-start mb-8">
              <div className="items-center flex justify-center mb-6 rounded-lg">
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
                  className="rounded-xl border border-transparent p-3 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                >
                  <svg
                    aria-labelledby="update-icon-title"
                    className="h-7 w-7"
                    fill="none"
                    height="1em"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>A shield</title>
                    <defs fill="none">
                      <linearGradient
                        fill="none"
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill2"
                        x1="0"
                        x2="40"
                        y1="0"
                        y2="24"
                      >
                        <stop fill="none" stopColor="white" stopOpacity="0.2" />
                        <stop
                          fill="none"
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop fill="none" offset="0.5" stopColor="white" />
                        <stop
                          fill="none"
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop
                          fill="none"
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"
                      fill="none"
                      stroke='url("#icon-gradient-fill2")'
                      strokeWidth="1"
                    />
                    <path
                      d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
                      fill="none"
                      stroke='url("#icon-gradient-fill2")'
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
              <div className="pr-5">
                <h3 className="text-2xl font-bold text-green-50">Over 99.99% Uptime </h3>
                <p className="text-neutral-400 mt-3">
                  Our infrastructure is selectively chosen to ensure high
                  availability.
                </p>
              </div>
            </div>
            <div className="items-start gap-1 flex flex-col flex-grow justify-start mb-8">
              <div className="items-center flex justify-center mb-6 rounded-lg">
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
                  className="rounded-xl border border-transparent p-3 text-center [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                >
                  <svg
                    aria-labelledby="update-icon-title"
                    className="h-7 w-7"
                    fill="none"
                    height="1em"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>A shield</title>
                    <defs fill="none">
                      <linearGradient
                        fill="none"
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop fill="none" stopColor="white" stopOpacity="0.2" />
                        <stop
                          fill="none"
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop fill="none" offset="0.5" stopColor="white" />
                        <stop
                          fill="none"
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        />
                        <stop
                          fill="none"
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M6 4 H18 A2 2 0 0 1 20 6 V18 A2 2 0 0 1 18 20 H6 A2 2 0 0 1 4 18 V6 A2 2 0 0 1 6 4 z"
                      fill="none"
                      stroke='url("#icon-gradient-fill")'
                      strokeWidth="1.2"
                    />
                    <path
                      d="M9 9h6v6H9zM15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"
                      fill="none"
                      stroke='url("#icon-gradient-fill")'
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              </div>
              <div className="pr-5">
                <h3 className="text-2xl font-bold text-green-50">Powerful Hardware</h3>
                <p className="text-neutral-400 mt-3">
                  We use appropriate hardware specifically according to the
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
