"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export function NavigationMenuShort() {
  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      {" "}
      {/* Align to top right with padding */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="border border-zinc-800 backdrop-blur bg-zinc/50 inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              width="1.5em"
              height="1.5em"
              version="1.1"
              viewBox="0 0 210 210"
              fill="currentColor"
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m81.854 171.68c-51.546-5.4939-72.446-73.163-31.859-103.15l1.6113-1.1906 0.31351-2.5135c1.4879-11.929 5.947-23.354 11.09-28.414l1.3153-1.2941 0.83087 0.89721c2.8391 3.0658 6.5906 10.398 8.6031 16.815l0.51136 1.6305 1.3304 0.16768c0.7317 0.09223 2.4388 0.44186 3.7935 0.77696l2.4632 0.60927 0.67698-1.3491c3.0642-6.1066 12.093-13.24 14.71-11.623 0.96747 6.0124-2.6133 17.888-0.37131 20.341 1.0166 1.1123 1.9681 2.7392 3.8998 6.6682 4.4114 8.9724 8.6785 12.293 17.624 13.713 4.3124 0.68462 6.5724 2.6542 5.4226 4.7256-2.9401 5.2962-9.8157 8.0924-20.562 8.3624-53.108 1.3345 11.19 61.284 11.19 61.284s-81.77-48.37-20.662-51.242c11.238-4e-3 21.159 3.3794 29.052 9.9088 14.869 12.301 34.29 11.245 43.66-2.3744 3.554-5.1655 4.7844-14.74 2.473-19.243-1.059-2.0633 2.4886 1.4859 4.9734 4.9755 18.977 26.651 6.2407 64.105-24.176 71.099-2.6741 0.61486-62.609 0.98774-67.912 0.42251zm8.4734-91.446c-2.3916-4.4637-7.8859-5.8288-11.705-2.9081-1.5465 1.1828-1.5396 1.4037 0.04063 1.2942 2.186-0.15144 6.5814 0.47678 8.8507 1.265 2.6394 0.91676 3.1515 0.98028 2.8132 0.34891z" />
            </svg>
            Menu
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-98"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-98"
        >
          <div className="border border-zinc-800 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-100/10 rounded-md backdrop-blur bg-zinc/50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-1 py-1 ">
              <Link href="/">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  Home
                </button>
              </Link>
            </div>
            <div className="px-1 py-1 ">
              <Link href="/game">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2m2 4v4h4v2H8v6h2v-2h4v2h2v-6h-2v-2h4V6h-4v4h-4V6H6z" />
                  </svg>
                  Minecraft Hosting
                </button>
              </Link>
              <Link href="/game">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z" />
                  </svg>
                  Game Hosting
                </button>
              </Link>
              <Link href="/web">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <svg
                    viewBox="0 0 52 52"
                    fill="currentColor"
                    strokeWidth="1"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M12.8 8.4h9.6l-1.5 5.7a3.6 3.6 0 0 1-3.4 2.6H13c-1 0-2 .3-2.7 1a4.7 4.7 0 0 0-1.7 4.5c.1.7.4 1.3.8 1.8.4.6 1 1 1.6 1.3.6.3 1.3.5 2 .5h2.7c.5 0 1 .2 1.3.6.3.4.4.9.2 1.4L15.5 34h-3A12.7 12.7 0 0 1 .3 24.2c-.4-2-.4-4 .1-5.8l.2-.7a12.5 12.5 0 0 1 12.2-9.3zm4.8 25.7L26 2.6A3.6 3.6 0 0 1 29.5 0h8.9c2 0 3.9.4 5.6 1.3 3.4 1.8 5.9 5 6.7 8.7.4 2 .3 4-.2 5.8l-.2.7a12.7 12.7 0 0 1-12 9.4h-7.8L32 20a3.6 3.6 0 0 1 3.5-2.6H38c2 0 3.8-1.4 4.3-3.4.2-.7.2-1.4 0-2 0-.7-.3-1.4-.7-1.9A4.6 4.6 0 0 0 38 8.4h-4.8L27 31.5c-.2.8-.7 1.4-1.3 1.9-.6.5-1.3.7-2.1.7z" />
                  </svg>
                  Web Hosting
                </button>
              </Link>
            </div>
            <div className="px-1 py-1 ">
              <Link href="/dedicated">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mr-2 h-5 w-5 scale-75"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 120c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-24c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64zm280 120c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm104-24c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z" />
                  </svg>
                  Dedicated Servers
                </button>
              </Link>
              <Link href="/colocation">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="mr-2 h-5 w-5 scale-75"
                  >
                    <path d="M2 2a2 2 0 00-2 2v1a2 2 0 002 2h1v2H2a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2h-1V7h1a2 2 0 002-2V4a2 2 0 00-2-2H2zm.5 3a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 7a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zM12 7v2H4V7h8z" />
                  </svg>
                  Colocation
                </button>
              </Link>
            </div>
            <div className="px-1 py-1 ">
              <Link href="https://foxomy.com/billing/login">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  Billing Login
                </button>
              </Link>
              <Link href="https://cpanel.furweb.com:2083">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  cPanel Login
                </button>
              </Link>
              <Link href="https://panel2.foxomy.com">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  Pterodactyl panel2.fox Login
                </button>
              </Link>
              <Link href="https://panel.furweb.com">
                <button className="hover:bg-teal-100/10 transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  Pterodactyl panel.fur Login
                </button>
              </Link>
            </div>
          </div>
        </Transition>
      </Menu>
    </div>
  );
}
