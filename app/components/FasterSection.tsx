"use client";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";

export function FasterSection() {
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
            Faster than fast
          </h1>

          <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50">
            Game server CPUs rated by single thread performance. (Source:{" "}
            <Link
              href="https://www.cpubenchmark.net/singleThread.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-blue-300"
            >
              Passmark
            </Link>
            )
          </p>
        </div>
      </div>

      {/* Chart section */}
      <div className="container">
        {/* 13900KS */}
        <div className="w-full text-gray-100 flex flex-col md:flex-row justify-start p-4">
          <div className="flex items-center gap-2 w-full sm:w-3/3 md:w-1/3 mb-4 sm:mb-3">
            <p>Intel Core i9-13900KS</p>
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <svg
                    width="36"
                    height="36"
                    version="1.1"
                    viewBox="0 0 210 210"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stop-color="rgb(30,116,255)"
                          stop-opacity="1"
                        />
                        <stop
                          offset="100%"
                          stop-color="rgb(81,161,118)"
                          stop-opacity="1"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill='url("#grad1")'
                      d="m81.854 171.68c-51.546-5.4939-72.446-73.163-31.859-103.15l1.6113-1.1906 0.31351-2.5135c1.4879-11.929 5.947-23.354 11.09-28.414l1.3153-1.2941 0.83087 0.89721c2.8391 3.0658 6.5906 10.398 8.6031 16.815l0.51136 1.6305 1.3304 0.16768c0.7317 0.09223 2.4388 0.44186 3.7935 0.77696l2.4632 0.60927 0.67698-1.3491c3.0642-6.1066 12.093-13.24 14.71-11.623 0.96747 6.0124-2.6133 17.888-0.37131 20.341 1.0166 1.1123 1.9681 2.7392 3.8998 6.6682 4.4114 8.9724 8.6785 12.293 17.624 13.713 4.3124 0.68462 6.5724 2.6542 5.4226 4.7256-2.9401 5.2962-9.8157 8.0924-20.562 8.3624-53.108 1.3345 11.19 61.284 11.19 61.284s-81.77-48.37-20.662-51.242c11.238-4e-3 21.159 3.3794 29.052 9.9088 14.869 12.301 34.29 11.245 43.66-2.3744 3.554-5.1655 4.7844-14.74 2.473-19.243-1.059-2.0633 2.4886 1.4859 4.9734 4.9755 18.977 26.651 6.2407 64.105-24.176 71.099-2.6741 0.61486-62.609 0.98774-67.912 0.42251zm8.4734-91.446c-2.3916-4.4637-7.8859-5.8288-11.705-2.9081-1.5465 1.1828-1.5396 1.4037 0.04063 1.2942 2.186-0.15144 6.5814 0.47678 8.8507 1.265 2.6394 0.91676 3.1515 0.98028 2.8132 0.34891z"
                    />
                  </svg>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-zinc-900/90 border px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
                    Foxomy
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>

          <div className="flex items-center gap-4 border border-zinc-800 border-solid rounded-lg p-1 w-full sm:w-3/3 md:w-2/3">
            <div
              className="h-8 w-full bg-neutral-700 rounded"
              style={{
                width: "97.2517%",
              }}
            >
              <div
                className="h-full rounded"
                style={{
                  backgroundImage:
                    "linear-gradient(288.43deg, rgb(30,116,255) 28.29%, rgb(81,161,118) 78.78%)",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <p>4,769</p>
              <div className="relative h-6 w-6">
                <img className="h-full w-full" src="/images/bunlogo.svg" />
              </div>
            </div>
          </div>
        </div>
        {/* 7950X3D */}
        <div className="w-full text-gray-100  flex flex-col md:flex-row justify-start p-4">
          <div className="flex items-center gap-2 w-full sm:w-3/3 md:w-1/3 mb-4 sm:mb-3">
            <p>AMD Ryzen 9 7950X3D</p>
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <svg
                    width="36"
                    height="36"
                    version="1.1"
                    viewBox="0 0 210 210"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stop-color="rgb(30,116,255)"
                          stop-opacity="1"
                        />
                        <stop
                          offset="100%"
                          stop-color="rgb(81,161,118)"
                          stop-opacity="1"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill='url("#grad1")'
                      d="m81.854 171.68c-51.546-5.4939-72.446-73.163-31.859-103.15l1.6113-1.1906 0.31351-2.5135c1.4879-11.929 5.947-23.354 11.09-28.414l1.3153-1.2941 0.83087 0.89721c2.8391 3.0658 6.5906 10.398 8.6031 16.815l0.51136 1.6305 1.3304 0.16768c0.7317 0.09223 2.4388 0.44186 3.7935 0.77696l2.4632 0.60927 0.67698-1.3491c3.0642-6.1066 12.093-13.24 14.71-11.623 0.96747 6.0124-2.6133 17.888-0.37131 20.341 1.0166 1.1123 1.9681 2.7392 3.8998 6.6682 4.4114 8.9724 8.6785 12.293 17.624 13.713 4.3124 0.68462 6.5724 2.6542 5.4226 4.7256-2.9401 5.2962-9.8157 8.0924-20.562 8.3624-53.108 1.3345 11.19 61.284 11.19 61.284s-81.77-48.37-20.662-51.242c11.238-4e-3 21.159 3.3794 29.052 9.9088 14.869 12.301 34.29 11.245 43.66-2.3744 3.554-5.1655 4.7844-14.74 2.473-19.243-1.059-2.0633 2.4886 1.4859 4.9734 4.9755 18.977 26.651 6.2407 64.105-24.176 71.099-2.6741 0.61486-62.609 0.98774-67.912 0.42251zm8.4734-91.446c-2.3916-4.4637-7.8859-5.8288-11.705-2.9081-1.5465 1.1828-1.5396 1.4037 0.04063 1.2942 2.186-0.15144 6.5814 0.47678 8.8507 1.265 2.6394 0.91676 3.1515 0.98028 2.8132 0.34891z"
                    />
                  </svg>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-zinc-900/90 border px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
                    Foxomy
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>

          <div className="flex items-center gap-4 border border-zinc-800 border-solid rounded-lg p-1 w-full sm:w-3/3 md:w-2/3">
            <div
              className="h-8 w-full bg-neutral-700 rounded"
              style={{
                width: "77.2517%",
              }}
            >
              <div
                className="h-full rounded"
                style={{
                  backgroundImage:
                    "linear-gradient(288.43deg, rgb(30,116,255) 28.29%, rgb(81,161,118) 78.78%)",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <p>4,161</p>
              <div className="relative h-6 w-6">
                <img className="h-full w-full" src="/images/bunlogo.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-gray-100  flex flex-col md:flex-row justify-start p-4">
          <div className="flex items-center gap-2 w-full sm:w-3/3 md:w-1/3 mb-4 sm:mb-3">
            <p>AMD Ryzen 9 5950X</p>
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <img src="/images/luneshost.png" width="28" height="28" />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-zinc-900/90 border px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
                    Lunes Hosting
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>

            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <img src="/images/apex_logo.png" width="28" height="28" />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-zinc-900/90 border px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
                    Apex Hosting
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>

          <div className="flex items-center gap-4 border border-zinc-800 border-solid rounded-lg p-1 w-full sm:w-3/3 md:w-2/3">
            <div
              className="h-8 w-full bg-neutral-700 rounded"
              style={{
                width: "62.71%",
              }}
            >
              <div
                className="h-full rounded border border-white/[0.4] border-solid rounded"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, rgb(92, 92, 92), rgb(31, 31, 31))",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <p>3,468</p>
              <div className="relative h-6 w-6">
                <img className="h-full w-full" src="/images/bunlogo.svg" />
              </div>
            </div>
          </div>
        </div>
        {/* E-2236 */}
        <div className="w-full text-gray-100  flex flex-col md:flex-row justify-start p-4">
          <div className="flex items-center gap-2 w-full sm:w-3/3 md:w-1/3 mb-4 sm:mb-3">
            <p>Intel Xeon E-2236</p>

            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <img
                    src="/images/shockbyte_logo.png"
                    width="26"
                    height="26"
                  />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-zinc-900/90 border px-[15px] py-[10px] text-[15px] leading-none rounded-[4px] shadow-[hsl(0_0%_0%_/_35%)_0px_10px_38px_-10px,_hsl(0_0%_0%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
                    Shockbyte
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>

          <div className="flex items-center gap-4 border border-zinc-800 border-solid rounded-lg p-1 w-full sm:w-3/3 md:w-2/3">
            <div
              className="h-8 w-full bg-neutral-700 rounded"
              style={{
                width: "49.65%",
              }}
            >
              <div
                className="h-full rounded border border-white/[0.4] border-solid rounded"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, rgb(92, 92, 92), rgb(31, 31, 31))",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <p>2,845</p>
              <div className="relative h-6 w-6">
                <img className="h-full w-full" src="/images/bunlogo.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FasterSection;
