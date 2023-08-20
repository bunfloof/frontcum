"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs } from "@radix-ui/react-tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SupportCard from "../components/SupportCard";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useRef, useState } from "react";

type HostingCompany = {
  "Plugin and Modpack Installer": string;
  "Server Splitter and Game Changer": string;
  "Subdomain Creator": string;
  "BIPOC owned": string;
  Affiliation: string;
  "Price per GB in USD": string;
};

const hostingCompanies: { [key: string]: HostingCompany } = {
  "This host": {
    "Plugin and Modpack Installer": "Yes",
    "Server Splitter and Game Changer": "Yes",
    "Subdomain Creator": "Yes",
    "BIPOC owned": "Yes",
    Affiliation: "Democrat",
    "Price per GB in USD": "$2.00",
  },
  "Lunes Hosting": {
    "Plugin and Modpack Installer": "No",
    "Server Splitter and Game Changer": "No",
    "Subdomain Creator": "No",
    "BIPOC owned": "No",
    Affiliation: "Republican",
    "Price per GB in USD": "$1.00",
  },
  MewGem: {
    "Plugin and Modpack Installer": "No",
    "Server Splitter and Game Changer": "No",
    "Subdomain Creator": "No",
    "BIPOC owned": "No",
    Affiliation: "Republican",
    "Price per GB in USD": "$1.00",
  },
};

const features: (keyof HostingCompany)[] = [
  "Plugin and Modpack Installer",
  "Server Splitter and Game Changer",
  "Subdomain Creator",
  "BIPOC owned",
  "Affiliation",
  "Price per GB in USD",
];

const MarkerSVG = (
  <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
    <path
      fill="currentColor"
      d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z"
    />
  </svg>
);

export default function Dedicated() {
  const [location, setLocation] = useState<string | null>(null);
  const [planSize, setPlanSize] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedIpv4Address, setSelectedIpv4Address] = useState<string[]>([]);

  type Plan = {
    id: string;
    locationtag: string;
    location: string;
    ram: string;
    price: string;
    cpuname: string;
    cores: string;
    storage: string;
    link: string;
    whmcspid: string;
    ipaddresses: string;
  };

  const plans: Plan[] = [
    {
      id: "dfwi9-10900k",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "32 GB",
      price: "$170",
      cpuname: "Core i9-10900K",
      cores: "20 CPUs",
      storage: "1 TB",
      ipaddresses: "1",
      link: "https://example.com",
      whmcspid: "2",
    },
    {
      id: "dfwi9-13900k",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "48 GB",
      price: "$220",
      cpuname: "Core i9-13900K",
      cores: "32 CPUs",
      storage: "1 TB",
      ipaddresses: "1",
      link: "https://example.com",
      whmcspid: "2",
    },
    {
      id: "dfwr9-7950x",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "48 GB",
      price: "$220",
      cpuname: "Ryzen 9 7950X",
      cores: "32 CPUs",
      storage: "1 TB",
      ipaddresses: "1",
      link: "https://example.com",
      whmcspid: "2",
    },
    {
      id: "dfwr9-7950x3d",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "48 GB",
      price: "$260",
      cpuname: "Ryzen 9 7950X3D",
      cores: "32 CPUs",
      storage: "1 TB",
      ipaddresses: "1",
      link: "https://example.com",
      whmcspid: "2",
    },
  ];

  type Ram = {
    compatibleid: Array<String>;
    name: string;
    price: string;
    urlparams: string;
  };

  const ram: Ram[] = [
    {
      compatibleid: ["dfwi9-10900k"],
      name: "32 GB DDR4 RAM",
      price: "$0",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: ["dfwi9-10900k"],
      name: "64 GB DDR4 RAM",
      price: "$40",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: ["dfwi9-10900k"],
      name: "128 GB DDR4 RAM",
      price: "$80",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: ["dfwi9-13900k", "dfwr9-7950x", "dfwr9-7950x3d"],
      name: "48 GB DDR5 RAM",
      price: "$0",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: ["dfwi9-13900k", "dfwr9-7950x", "dfwr9-7950x3d"],
      name: "96 GB DDR5 RAM",
      price: "$60",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: ["dfwi9-13900k", "dfwr9-7950x", "dfwr9-7950x3d"],
      name: "192 GB DDR5 RAM",
      price: "$120",
      urlparams: "&addons[2]=1",
    },
    // More addons...
  ];

  type Storage = {
    compatibleid: Array<String>;
    name: string;
    price: string;
    urlparams: string;
  };

  const storage: Storage[] = [
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "1 TB NVMe SSD",
      price: "$0",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "2 TB NVMe SSD",
      price: "$40",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "4 TB NVMe SSD",
      price: "$80",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "8 TB NVMe SSD",
      price: "$160",
      urlparams: "&addons[2]=1",
    },
  ];

  type ipv4Address = {
    compatibleid: Array<String>;
    name: string;
    price: string;
    urlparams: string;
  };

  const ipv4Address: ipv4Address[] = [
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "1 IP Address",
      price: "$0",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "8 IP Addresses",
      price: "$16",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "16 IP Addresses",
      price: "$32",
      urlparams: "&addons[2]=1",
    },
    {
      compatibleid: [
        "dfwi9-10900k",
        "dfwi9-13900k",
        "dfwr9-7950x",
        "dfwr9-7950x3d",
      ],
      name: "32 IP Addresses",
      price: "$64",
      urlparams: "&addons[2]=1",
    },
  ];

  const getDefaultRam = (): string | null => {
    const compatibleRams = getCompatibleRam();
    const defaultRam = compatibleRams.find((ram) => ram.price === "$0");
    return defaultRam ? defaultRam.name : null;
  };

  const selectPlan = (plan: Plan) => {
    setSelectedPlan(plan);

    // Find the default RAM that is compatible with the selected plan's id
    const defaultRam = ram.find(
      (r) => r.compatibleid.includes(plan.id) && r.price === "$0"
    );
    if (defaultRam) {
      setSelectedRam([defaultRam.name]);
    }

    // Find the default Storage that is compatible with the selected plan's id
    const defaultStorage = storage.find(
      (s) => s.compatibleid.includes(plan.id) && s.price === "$0"
    );
    if (defaultStorage) {
      setSelectedStorage([defaultStorage.name]);
    }
  };

  const toggleRam = (ramName: string) => {
    setSelectedRam([ramName]);
  };

  const toggleStorage = (storageName: string) => {
    setSelectedStorage([storageName]);
  };

  const toggleIPv4 = (IPv4Name: string) => {
    setSelectedIpv4Address([IPv4Name]);
  };

  /* Location Selector */
  type LocationType = {
    codename: string;
    name: string;
    flag: string;
  };

  const locations: LocationType[] = [
    { codename: "dfw1", name: "Dallas, Texas", flag: "/images/usflag.svg" },
    // Add more locations as needed
  ];

  /* End Location Selector */

  /* Start carousel */

  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef<typeof Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveTab(current),
  };
  const images = [
    "/images/pteroconsole.png",
    "/images/pteroconfig.png",
    "/images/pteroplugin.png",
    "/images/pteromodpack.png",
    "/images/pterosplitter.png",
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  /* End Carousel */

  /* Start Networks */

  type CardType = "AS30277" | "AS399820" | "AS18779" | "AS20278";

  const [selectedCard, setSelectedCard] = useState("AS30277");

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  const getCompatibleRam = (): Ram[] => {
    if (selectedPlan?.id) {
      return ram.filter((ram) => ram.compatibleid.includes(selectedPlan?.id));
    }
    return [];
  };

  useEffect(() => {
    if (selectedPlan) {
      const defaultRam = ram.find(
        (r) => r.compatibleid.includes(selectedPlan.id) && r.price === "$0"
      );
      if (defaultRam) {
        setSelectedRam([defaultRam.name]);
      }
      const defaultStorage = storage.find(
        (r) => r.compatibleid.includes(selectedPlan.id) && r.price === "$0"
      );
      if (defaultStorage) {
        setSelectedStorage([defaultStorage.name]);
      }
      const defaultIpv4Address = ipv4Address.find(
        (r) => r.compatibleid.includes(selectedPlan.id) && r.price === "$0"
      );
      if (defaultIpv4Address) {
        setSelectedIpv4Address([defaultIpv4Address.name]);
      }
    }
  }, [selectedPlan]); // This effect will run every time selectedPlan changes

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/blmserver.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="pt-10"
      >
        {/* Grid */}
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 container">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mt-20 font-semibold text-3xl sm:text-5xl">
                Dedicated Server Hosting
              </div>
              <p className="py-5 text-md sm:text-lg text-muted-foreground">
                Order a dedicated server today and get started within 48 hours.
              </p>
            </div>
          </div>
        </div>
        {/* End of Grid */}
      </div>
      {/* Next section */}
      <div className="flex flex-col">
        {/* Grid */}
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 container mt-8">
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-semibold text-2xl">
                First, select your server location...
              </div>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {locations.map((location, index) => (
                  <Card
                    key={index}
                    className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                      selectedLocation === location.name
                        ? " bg-teal-100/10 border-teal-500"
                        : ""
                    }`}
                    onClick={() => setSelectedLocation(location.name)}
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                      <CardTitle className="text-lg font-bold">
                        {location.name}
                      </CardTitle>
                      <img
                        src={location.flag}
                        alt={`${location.name} flag`}
                        className="h-6 w-6 mr-2"
                      />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-teal-500">
                        up to 48 hours setup
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {/* Map section */}
            <div className="relative mt-5">
              <img
                src="/images/worldmap.svg"
                alt="World Map"
                className="w-full h-full opacity-20"
              />

              {/* Marker for Dallas */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "13.93%", top: "30.1%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div
                        className={`transition-colors ${
                          selectedLocation === "Dallas, Texas"
                            ? "selectedMarker"
                            : "marker"
                        }`}
                      >
                        {MarkerSVG}
                      </div>
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

              <style jsx>{`
                .selectedMarker {
                  position: relative;
                  display: inline-block;
                  color: rgba(
                    20,
                    184,
                    166,
                    1
                  ); /* Set the color of the marker */
                }

                .selectedMarker::before {
                  content: "";
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 15px;
                  height: 15px;
                  transform: translate(-50%, -50%);
                  border-radius: 50%;
                  background: rgba(
                    20,
                    184,
                    166,
                    0.4
                  ); /* Red color with opacity */
                  animation: radiate 1.5s infinite;
                }

                .marker {
                  position: relative;
                  display: inline-block;
                  color: rgba(
                    161,
                    161,
                    161,
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
                    161,
                    161,
                    161,
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
              `}</style>
            </div>
          </div>
        </div>
        {selectedLocation && (
          <div className="mt-4 grid gap-4 container">
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold text-2xl mt-8">
                  Next, select your configuration...
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                  {plans
                    .filter((plan) => plan.location === selectedLocation) // Filter the plans based on the selected location
                    .map((plan, index) => (
                      <Card
                        key={index}
                        className={`relative hover:bg-muted/50 transition-colors cursor-pointer ${
                          selectedPlan?.id === plan.id
                            ? "bg-teal-100/10 border-teal-500 transition-colors"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedPlan(plan);
                          setSelectedRam([]); // Clear the selected ram when a new plan is selected
                        }}
                      >
                        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 text-muted-forground- opacity-10 text-2xl font-bold">
                          {plan.id}
                        </div>
                        <CardHeader className="space-y-0 pb-0">
                          <CardTitle>
                            <span className="text-lg font-bold">
                              {plan.cpuname}
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="pb-2">
                            <span className="text-md pb-1 font-medium">
                              {plan.price}
                            </span>{" "}
                            <span className="text-sm font-medium text-muted-foreground">
                              per month
                            </span>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {plan.ram} DDR
                            {(plan.id === "dfwi9-10900k" && "4") ||
                              (plan.id === "dfwi9-13900k" && "5") ||
                              (plan.id === "dfwr9-7950x" && "5") ||
                              (plan.id === "dfwr9-7950x3d" && "5")}
                            <br />
                            {plan.cores}
                            <br />
                            {plan.storage} NVMe Gen.4 SSD
                            <br />
                            {plan.ipaddresses} IPv4 Address
                            {Number(plan.ipaddresses) > 1 ? "es" : ""}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedLocation && selectedPlan && (
          <div className="mt-4 grid gap-4 container">
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold text-2xl mt-8">
                  Then, select RAM (Optional)...
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                  {getCompatibleRam().map((ram, index) => (
                    <Card
                      key={index}
                      className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                        selectedRam.includes(ram.name)
                          ? "bg-teal-100/10 border-teal-500"
                          : ""
                      }`}
                      onClick={() => toggleRam(ram.name)}
                    >
                      <CardHeader className="space-y-0 pb-0">
                        <CardTitle>
                          <span className="text-lg font-bold">{ram.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="pb-2">
                          <span className="text-md pb-1 font-medium">
                            {ram.price === "$0" ? "" : ram.price}
                          </span>{" "}
                          <span className="text-sm font-medium text-muted-foreground">
                            {ram.price === "$0" ? "Included" : "per month"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedLocation && selectedPlan && (
          <div className="mt-4 grid gap-4 container">
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold text-2xl mt-8">
                  Then, select storage (Optional)...
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                  {storage.map((storage, index) => (
                    <Card
                      key={index}
                      className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                        selectedStorage.includes(storage.name)
                          ? "bg-teal-100/10 border-teal-500"
                          : ""
                      }`}
                      onClick={() => toggleStorage(storage.name)}
                    >
                      <CardHeader className="space-y-0 pb-0">
                        <CardTitle>
                          <span className="text-lg font-bold">
                            {storage.name}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="pb-2">
                          <span className="text-md pb-1 font-medium">
                            {storage.price === "$0" ? "" : storage.price}
                          </span>{" "}
                          <span className="text-sm font-medium text-muted-foreground">
                            {storage.price === "$0" ? "Included" : "per month"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedLocation && selectedPlan && (
          <div className="mt-4 grid gap-4 container">
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold text-2xl mt-8">
                  Then, select IPv4 addresses (Optional)...
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                  {ipv4Address.map((ipv4Address, index) => (
                    <Card
                      key={index}
                      className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                        selectedIpv4Address.includes(ipv4Address.name)
                          ? "bg-teal-100/10 border-teal-500"
                          : ""
                      }`}
                      onClick={() => toggleIPv4(ipv4Address.name)}
                    >
                      <CardHeader className="space-y-0 pb-0">
                        <CardTitle>
                          <span className="text-lg font-bold">
                            {ipv4Address.name}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="pb-2">
                          <span className="text-md pb-1 font-medium">
                            {ipv4Address.price === "$0"
                              ? ""
                              : ipv4Address.price}
                          </span>{" "}
                          <span className="text-sm font-medium text-muted-foreground">
                            {ipv4Address.price === "$0"
                              ? "Included"
                              : "per month"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Next Section */}
        {selectedLocation && selectedPlan && (
          <div className="mt-4 grid gap-4 container">
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold text-2xl mt-8">
                  Finally, review your order...
                </div>
                <div className="mt-4 flex justify-center">
                  <Card className="p-6 shadow-lg rounded-lg w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      <div className="col-span-2 flex flex-col space-y-1">
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-400 mb-1">Plan</div>
                          <div className="text-sm text-gray-400 mb-1">
                            Price
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-md font-bold mb-1">
                            {selectedPlan?.cpuname}
                          </div>
                          <div className="text-sm">{selectedPlan?.price}</div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <div>Configuration</div>
                        </div>
                        {selectedRam.map((ramName) => {
                          const ramItem = ram.find(
                            (item) => item.name === ramName
                          );
                          return (
                            <div className="flex justify-between" key={ramName}>
                              <div className="text-md font-bold mb-1">
                                {ramItem?.name}
                              </div>
                              <div className="text-sm">{ramItem?.price}</div>
                            </div>
                          );
                        })}
                        {selectedStorage.map((storageName) => {
                          const storageItem = storage.find(
                            (item) => item.name === storageName
                          );
                          return (
                            <div
                              className="flex justify-between"
                              key={storageName}
                            >
                              <div className="text-md font-bold mb-1">
                                {storageItem?.name}
                              </div>
                              <div className="text-sm">
                                {storageItem?.price}
                              </div>
                            </div>
                          );
                        })}
                        {selectedIpv4Address.map((ipv4Name) => {
                          const ipv4Item = ipv4Address.find(
                            (item) => item.name === ipv4Name
                          );
                          return (
                            <div
                              className="flex justify-between"
                              key={ipv4Name}
                            >
                              <div className="text-md font-bold mb-1">
                                {ipv4Item?.name}
                              </div>
                              <div className="text-sm">{ipv4Item?.price}</div>
                            </div>
                          );
                        })}
                        <div className="mt-[-0.25rem]">
                          <hr className="border-gray mt-1 mb-2" />
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm">Total</div>
                          <div className="text-sm">
                            $
                            {[
                              selectedPlan?.price,
                              ...selectedRam.map(
                                (name) =>
                                  ram.find((item) => item.name === name)?.price
                              ),
                              ...selectedStorage.map(
                                (name) =>
                                  storage.find((item) => item.name === name)
                                    ?.price
                              ),
                              ...selectedIpv4Address.map(
                                (name) =>
                                  ipv4Address.find((item) => item.name === name)
                                    ?.price
                              ),
                            ]
                              .map((price) =>
                                parseFloat(price?.substring(1) || "0")
                              )
                              .reduce((total, current) => total + current, 0)
                              .toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-6 justify-end space-x-3">
                      <button className="text-teal-500 font-bold bg-teal-500/30 hover:bg-teal-500/40 py-2 px-4 rounded focus:outline-none transition-colors">
                        Contact
                      </button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Next Section */}
      <div className="flex justify-center mt-20">
        <div className="container mx-auto my-auto mt-15">
          <p className="font-semibold text-3xl sm:text-5xl text-center">
            AS200360
          </p>
          <p className="py-5 text-2xl text-center text-muted-foreground">
            BunArcticFloof
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {(["AS30277"] as CardType[]).map((card) => (
                  <Card
                    key={card}
                    onClick={() => handleCardClick(card)}
                    className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                      selectedCard === card
                        ? "bg-teal-100/10 border-teal-500"
                        : ""
                    }`}
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-lg font-bold">
                        {card === "AS30277" && "Dallas, Texas"}
                      </CardTitle>
                      <img
                        src={`/images/${card === "AS30277" && "usflag"}.svg`}
                        alt="flag"
                        className="h-6 w-6 mr-2"
                      />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {selectedCard === "AS30277" && (
              <Card>
                <CardContent className="pb-2 pt-6">
                  <p className="text-xl font-bold mb-2">Network</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          Test IPv4
                        </p>
                      </div>
                      <p className="text-md font-bold">202.5.26.13</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">Address</p>
                      </div>
                      <p className="text-md font-bold">
                        1515 Round Table Dr, Dallas, Texas 75247
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          Facility
                        </p>
                      </div>
                      <p className="text-md font-bold">Carrier-1</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          LookingGlass
                        </p>
                      </div>
                      <Link
                        href="http://lg-dfw1.bunis.gay/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-md font-bold hover:text-muted-foreground transition"
                      >
                        lg-dfw1.bunis.gay
                      </Link>
                    </div>
                  </div>
                  <p className="text-xl font-bold mb-2">
                    Upstreams for AS30277
                  </p>
                  <Table>
                    <TableCaption></TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">ASN</TableHead>

                        <TableHead className="">Name</TableHead>
                        <TableHead className="">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">AS3223</TableCell>
                        <TableCell className="font-medium">
                          Voxility LLP
                        </TableCell>
                        <TableCell className="font-medium">
                          DDoS Protected
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS393398</TableCell>
                        <TableCell className="font-medium">
                          1515 ROUNDTABLE DR PROPERTY, LLC
                        </TableCell>
                        <TableCell className="font-medium">
                          US Datacenter
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="container mt-20">
          <SupportCard />
        </div>
      </div>
    </>
  );
}
