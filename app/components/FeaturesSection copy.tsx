import Link from "next/link";
import { CSSProperties } from "react";
export function GameSection() {
  const games = [
    {
      name: "Minecraft",
      price: "from $2.00/GB",
      bg: "/images/minecraftcard1.jpg",
      link: "/game",
    },
    //... You can add unique images for each game when you have them
  ];

  return (
    <div className="bg-no-repeat flex flex-col">
      <div
        className="border-t text-gray-200 pt-24 bg-black border-zinc-800 border-solid container"
        style={{
          backgroundImage: "linear-gradient(rgb(17, 17, 17), rgb(0, 0, 0))",
        }}
      >
        <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          <div className="items-start gap-1 flex flex-col flex-grow justify-start">
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
                    d="M5.338 1.59a61.44 61.44 0 00-2.837.856.481.481 0 00-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 002.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 00.101.025.615.615 0 00.1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 002.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 00-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 011.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 01-2.517 2.453 7.159 7.159 0 01-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 01-1.048-.625 11.777 11.777 0 01-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 012.185 1.43 62.456 62.456 0 015.072.56z"
                    fill="none"
                    stroke='url("#icon-gradient-fill")'
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
            <div className="pr-5">
              <h3 className="text-2xl font-bold">DDoS Protection</h3>
              <p className="text-neutral-400 mt-3">
                We use hardware and software based DDoS protection to traffic
              </p>
            </div>
          </div>
          <div className="items-start gap-1 flex flex-col flex-grow justify-start">
            <div className="h-12 w-12 items-center flex justify-center mb-6 rounded-lg">
              <svg
                aria-labelledby="speed-icon-title"
                className="h-7 w-7"
                fill="none"
                height="28"
                role="img"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>An icon showing a speedometer</title>
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
                  d="M26.1667 14C26.1667 17.2645 25 22.3333 22.665 22.3333C20.33 22.3333 19.7799 21.4378 18.0075 21.2146M11.7245 21.1329C9.65742 21.3346 8.66668 22.3333 6.33504 22.3333C4.0034 22.3333 2.83334 17.2645 2.83334 14C2.83334 7.55668 8.05669 2.33333 14.5 2.33333C18.3713 2.33333 21.8022 4.21888 23.9244 7.12169M11.7245 21.1329C11.6499 20.3016 11.9307 19.4445 12.567 18.8082C13.5949 17.7803 23.5169 11.2175 25.4433 9.94661M11.7245 21.1329C11.7834 21.7896 12.0643 22.4303 12.567 22.933C13.7061 24.072 15.5528 24.072 16.6918 22.933C16.912 22.7128 17.386 22.0847 18.0075 21.2146M25.4433 9.94661C25.6515 9.80921 25.7664 9.73367 25.7664 9.73367C25.7664 9.73367 25.6741 9.87394 25.5079 10.1256M25.4433 9.94661C25.4653 10.0061 25.4869 10.0657 25.5079 10.1256M18.0075 21.2146C20.2551 18.0681 24.4315 11.7568 25.5079 10.1256"
                  fill="none"
                  stroke='url("#icon-gradient-fill")'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="pr-5">
              <h3 className="text-2xl font-bold">Fastest Next.js builds</h3>
              <p className="text-neutral-400 mt-3">
                Stop waiting for slow builds. Vercel allows you to defers
                building pages at request time. No more inefficient builds (or
                teams).
              </p>
            </div>
          </div>
          <div className="items-start gap-1 flex flex-col flex-grow justify-start">
            <div className="h-12 w-12 items-center flex justify-center mb-6 rounded-lg">
              <svg
                aria-labelledby="scale-icon-title"
                className="h-7 w-7"
                fill="none"
                height="28"
                role="img"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>An icon showing two arrows pointing up and down</title>
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
                  d="M15.1667 16.3333L25.6667 5.83334M25.6667 5.83334H16.3333M25.6667 5.83334V15.1667M12.8333 11.6667L2.33333 22.1667M2.33333 22.1667H11.6667M2.33333 22.1667V12.8333"
                  fill="none"
                  stroke='url("#icon-gradient-fill")'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="pr-5">
              <h3 className="text-2xl font-bold">Scale up and down</h3>
              <p className="text-neutral-400 mt-3">
                API Routes become Vercel Functions, which scale to zero when
                unused or handle millions of requests with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

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
        className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
  [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          height="5em"
          width="5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="icon-gradient-fill"
              x1="4"
              x2="40"
              y1="4"
              y2="24"
            >
              <stop stop-color="white" stop-opacity="0.2"></stop>
              <stop offset="0.1" stop-color="white" stop-opacity="0.4"></stop>
              <stop offset="0.5" stop-color="white"></stop>
              <stop offset="0.75" stop-color="white" stop-opacity="0.4"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M5.338 1.59a61.44 61.44 0 00-2.837.856.481.481 0 00-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 002.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 00.101.025.615.615 0 00.1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 002.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 00-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 011.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 01-2.517 2.453 7.159 7.159 0 01-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 01-1.048-.625 11.777 11.777 0 01-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 012.185 1.43 62.456 62.456 0 015.072.56z"
            fill="url(#icon-gradient-fill)"
          />
        </svg>

        <p className="text-xl font-medium text-white">DDoS Protection</p>
      </div>
    </div>
  );
}

export default GameSection;
