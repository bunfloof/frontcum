"use client";
import React, { useRef, useEffect, useState } from "react";

interface ServerStatus {
  description?: { text?: string };
  players?: {
    max?: number;
    online?: number;
    sample?: { id?: string; name?: string }[];
  };
  version?: { name?: string; protocol?: number };
  modinfo?: { type?: string; modList?: { modid?: string; version?: string }[] };
  modpackData?: {
    projectID?: number;
    name?: string;
    version?: string;
    versionID?: number;
    isMetadata?: boolean;
  };
  favicon?: string;
  latency?: number;
  htmlMotd?: string;
  htmlPlayers?: string;
  actualPlayers?: { id?: string; name?: string }[];
  srvRecord?: string | null;
  host?: string;
  port?: string;
}

export default function MinecraftServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);
  const portRef = useRef<HTMLInputElement>(null);

  const fetchServerStatus = async () => {
    const address = addressRef.current?.value;
    const port = portRef.current?.value;

    if (address) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://foxomy.com/publicapi/bun/minecraftserverstatus/minecraftserverstatus.php?address=${address}${
            port ? `&port=${port}` : ""
          }`
        );
        const data = await response.json();
        setServerStatus(data);
      } catch (error) {
        console.error("Error fetching server status:", error);
      }
      setLoading(false);
    }
  };

  return (
    <>
      {/* Background and Title */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/bannerpalestine.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
        className="pt-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-3xl sm:text-5xl font-semibold mt-20">
            Minecraft Server Status Tool
          </div>
          <p className="text-md sm:text-lg text-muted-foreground py-5">
            Established September of 2020
          </p>
        </div>
      </div>

      {/* Server Status Form */}
      <div className="container mx-auto px-4 py-10">
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Server Address
          </label>
          <input
            type="text"
            id="address"
            ref={addressRef}
            className="mt-1 px-4 py-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="port"
            className="block text-sm font-medium text-gray-700"
          >
            Port (optional)
          </label>
          <input
            type="text"
            id="port"
            ref={portRef}
            className="mt-1 px-4 py-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={fetchServerStatus}
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? "Loading..." : "Check Server Status"}
        </button>
      </div>

      {/* Server Status Display */}
      {serverStatus && (
        <div className="container mx-auto px-4 text-white">
          <div className="bg-black shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Server Status
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                {serverStatus.host && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Host</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.host}
                    </dd>
                  </div>
                )}
                {serverStatus.port && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Port</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.port}
                    </dd>
                  </div>
                )}
                {serverStatus.latency !== undefined && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Latency
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.latency} ms
                    </dd>
                  </div>
                )}
                {serverStatus.favicon && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Favicon
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <img
                        src={serverStatus.favicon}
                        alt="Server Favicon"
                        className="w-8 h-8"
                      />
                    </dd>
                  </div>
                )}
                {serverStatus.htmlMotd && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">MOTD</dt>
                    <dd
                      className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      dangerouslySetInnerHTML={{
                        __html: serverStatus.htmlMotd,
                      }}
                    ></dd>
                  </div>
                )}
                {serverStatus.htmlPlayers && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Players
                    </dt>
                    <dd
                      className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      dangerouslySetInnerHTML={{
                        __html: serverStatus.htmlPlayers,
                      }}
                    ></dd>
                  </div>
                )}
                {serverStatus.version?.name && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Version
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.version.name}
                    </dd>
                  </div>
                )}
                {serverStatus.version?.protocol !== undefined && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Protocol
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.version.protocol}
                    </dd>
                  </div>
                )}
                {serverStatus.modpackData?.name && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Modpack
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.modpackData.name}
                    </dd>
                  </div>
                )}
                {serverStatus.modpackData?.version && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Modpack Version
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.modpackData.version}
                    </dd>
                  </div>
                )}
                {serverStatus.modinfo?.modList && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Mod List
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        {serverStatus.modinfo.modList.map((mod, index) => (
                          <li
                            key={index}
                            className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                          >
                            <div className="w-0 flex-1 flex items-center">
                              <span className="ml-2 flex-1 w-0 truncate">
                                {mod.modid} - {mod.version}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                {serverStatus.actualPlayers && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Online Players
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        {serverStatus.actualPlayers.map((player) => (
                          <li
                            key={player.id}
                            className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                          >
                            <div className="w-0 flex-1 flex items-center">
                              <img
                                src={`https://foxomy.com/publicapi/bun/minecraftavatars/minecrafthelm.php?uuid=${player.id}`}
                                alt={player.name}
                                className="w-8 h-8 mr-2"
                              />
                              <span className="ml-2 flex-1 w-0 truncate">
                                {player.name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                {serverStatus.srvRecord && (
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      SRV Record
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {serverStatus.srvRecord}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
