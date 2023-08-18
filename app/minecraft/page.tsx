"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";

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

import { useState } from "react";

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

export default function Home() {
  const [location, setLocation] = useState<string | null>(null);
  const [planSize, setPlanSize] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  type Plan = {
    id: string;
    locationtag: string;
    location: string;
    ram: string;
    price: string;
    vCore: string;
    storage: string;
    backupSlot: string;
    containerSplit: string;
    link: string;
  };

  const plans: Plan[] = [
    {
      id: "dfw1gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "1 GB",
      price: "$2",
      vCore: "1",
      storage: "10 GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
    },
    {
      id: "dfw2gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "2 GB",
      price: "$4",
      vCore: "2",
      storage: "20 GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
    },
    {
      id: "dfw3gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "3 GB",
      price: "$6",
      vCore: "3",
      storage: "30 GB",
      backupSlot: "1",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "dfw4gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "4 GB",
      price: "$8",
      vCore: "4",
      storage: "40 GB",
      backupSlot: "2",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "dfw5gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "5 GB",
      price: "$10",
      vCore: "5",
      storage: "50 GB",
      backupSlot: "2",
      containerSplit: "3",
      link: "https://example.com",
    },
    {
      id: "dfw6gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "6 GB",
      price: "$12",
      vCore: "6",
      storage: "60 GB",
      backupSlot: "3",
      containerSplit: "3",
      link: "https://example.com",
    },
    {
      id: "dfw8gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "8 GB",
      price: "$16",
      vCore: "8",
      storage: "80 GB",
      backupSlot: "4",
      containerSplit: "4",
      link: "https://example.com",
    },
    {
      id: "dfw10gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "10 GB",
      price: "$20",
      vCore: "8",
      storage: "100 GB",
      backupSlot: "5",
      containerSplit: "5",
      link: "https://example.com",
    },
    {
      id: "dfw16gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "16 GB",
      price: "$32",
      vCore: "8",
      storage: "160 GB",
      backupSlot: "8",
      containerSplit: "8",
      link: "https://example.com",
    },
    {
      id: "dfw20gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "20 GB",
      price: "$40",
      vCore: "8",
      storage: "200 GB",
      backupSlot: "10",
      containerSplit: "10",
      link: "https://example.com",
    },
    {
      id: "dfw24gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "24 GB",
      price: "$48",
      vCore: "8",
      storage: "240 GB",
      backupSlot: "12",
      containerSplit: "12",
      link: "https://example.com",
    },
    {
      id: "dfw32gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      ram: "32 GB",
      price: "$64",
      vCore: "8",
      storage: "320 GB",
      backupSlot: "16",
      containerSplit: "16",
      link: "https://example.com",
    },
    {
      id: "ams1gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "1 GB",
      price: "$2",
      vCore: "1",
      storage: "18 GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
    },
    {
      id: "ams2gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "2 GB",
      price: "$4",
      vCore: "2",
      storage: "36 GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
    },
    {
      id: "ams3gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "3 GB",
      price: "$6",
      vCore: "3",
      storage: "54 GB",
      backupSlot: "1",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "ams4gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "4 GB",
      price: "$8",
      vCore: "4",
      storage: "72 GB",
      backupSlot: "2",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "ams5gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "5 GB",
      price: "$10",
      vCore: "5",
      storage: "90 GB",
      backupSlot: "2",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "ams6gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "6 GB",
      price: "$12",
      vCore: "4",
      storage: "108 GB",
      backupSlot: "3",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "ams8gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "8 GB",
      price: "$16",
      vCore: "8",
      storage: "144 GB",
      backupSlot: "4",
      containerSplit: "2",
      link: "https://example.com",
    },
    {
      id: "ams10gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "10 GB",
      price: "$20",
      vCore: "8",
      storage: "170 GB",
      backupSlot: "5",
      containerSplit: "5",
      link: "https://example.com",
    },
    {
      id: "ams16gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      ram: "16 GB",
      price: "$32",
      vCore: "8",
      storage: "288 GB",
      backupSlot: "8",
      containerSplit: "8",
      link: "https://example.com",
    },
  ];

  type Addon = {
    name: string;
    price: string;
    description: string;
    urlparams: string;
  };

  const addons: Addon[] = [
    {
      name: "Dedicated IP Address",
      price: "$4",
      description:
        "A reserved IP address with the default port (25565 or 19132).",
      urlparams: "&dedicatedip=true",
    },
    {
      name: "Website Hosting",
      price: "FREE",
      description:
        'Use the promo code "WEB" at checkout when you order website hosting to receive free webhosting for the duration of your game server service.',
      urlparams: "&webhosting=1",
    },
    {
      name: "The Shockbyte Treatment 💀",
      price: "$15",
      description:
        "Installing and configuring plugins and modpacks is included in support already. (This isn't actually a real addon)",
      urlparams: "&premiumsupport=1",
    },
    {
      name: "The Premium Treatment 💀",
      price: "$50",
      description:
        "Another server management addon but it's premium and more greedy. (This isn't actually a real addon)",
      urlparams: "&premiumsupport=1",
    },
    // More addons...
  ];

  const toggleAddon = (addonName: string) => {
    setSelectedAddons((prevSelected) =>
      prevSelected.includes(addonName)
        ? prevSelected.filter((a) => a !== addonName)
        : [...prevSelected, addonName]
    );
  };

  const getConcatenatedParams = () => {
    return selectedAddons
      .map((addonName) => {
        const addon = addons.find((a) => a.name === addonName);
        return addon?.urlparams;
      })
      .join("");
  };

  /* Location Selector */
  type LocationType = {
    codename: string;
    name: string;
    flag: string;
  };

  const locations: LocationType[] = [
    { codename: "dfw1", name: "Dallas, Texas", flag: "/images/usflag.svg" },
    {
      codename: "ams1",
      name: "Amsterdam, Netherlands",
      flag: "/images/nlflag.svg",
    },
    // Add more locations as needed
  ];

  /* End Location Selector */
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/minecraft.webp)",
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
                Minecraft Hosting
              </div>
              <p className="py-5 text-md sm:text-lg text-muted-foreground">
                Order a Minecraft server today and get started within minutes.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-zinc-900/30 border rounded-md p-6">
              <Table>
                <TableCaption>
                  Explicit permissions to use Lunes Hosting and MewGem in
                  comparison
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    {Object.keys(hostingCompanies).map((host) => (
                      <TableHead className="text-center" key={host}>
                        {host}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature) => (
                    <TableRow key={feature}>
                      <TableCell className="font-medium">{feature}</TableCell>
                      {Object.values(hostingCompanies).map((company, index) => (
                        <TableCell key={index} className="text-center">
                          {company[feature] === "Yes" ? (
                            <svg
                              fill="none"
                              viewBox="0 0 15 15"
                              height="1em"
                              width="1em"
                              strokeWidth="1"
                              className="h-6 w-6 text-teal-500 inline-block"
                            >
                              <path
                                fill="currentColor"
                                d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181z"
                              />
                            </svg>
                          ) : company[feature] === "No" ? (
                            <svg
                              fill="none"
                              viewBox="0 0 15 15"
                              height="1em"
                              width="1em"
                              className="h-5 w-5 text-red-500 inline-block"
                            >
                              <path
                                fill="currentColor"
                                d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                              />
                            </svg>
                          ) : (
                            <span
                              className={
                                (feature === "Affiliation" &&
                                  company[feature] === "Democrat") ||
                                (feature === "Price per GB in USD" &&
                                  company[feature] === "$1.00")
                                  ? "text-teal-500"
                                  : "text-red-500"
                              }
                            >
                              {company[feature]}
                            </span>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        {/* End of Grid */}
      </div>
      {/* Next section */}
      <div className="flex min-h-screen flex-col">
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
                        In stock, Auto-setup
                      </p>
                    </CardContent>
                  </Card>
                ))}

                <Card className="cursor-not-allowed opacity-25">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                    <CardTitle className="text-lg font-bold">
                      San Jose, California
                    </CardTitle>
                    <img
                      src="/images/usflag.svg"
                      alt="usflag"
                      className="h-6 w-6 mr-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-muted-foreground">
                      Unavailable
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-not-allowed opacity-25">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                    <CardTitle className="text-lg font-bold">
                      Chicago, Illinois
                    </CardTitle>
                    <img
                      src="/images/usflag.svg"
                      alt="usflag"
                      className="h-6 w-6 mr-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-muted-foreground">
                      Unavailable
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-not-allowed opacity-25">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                    <CardTitle className="text-lg font-bold">
                      Tokyo, Japan
                    </CardTitle>
                    <img
                      src="/images/jpflag.svg"
                      alt="usflag"
                      className="h-6 w-6 mr-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-muted-foreground">
                      Coming Soon
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-not-allowed opacity-25">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                    <CardTitle className="text-lg font-bold">
                      Sydney, NSW
                    </CardTitle>
                    <img
                      src="/images/auflag.svg"
                      alt="usflag"
                      className="h-6 w-6 mr-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-muted-foreground">
                      Coming Soon
                    </p>
                  </CardContent>
                </Card>
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

              {/* Marker for Amsterdam */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "47.32%", top: "16.3%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div
                        className={`transition-colors ${
                          selectedLocation === "Amsterdam, Netherlands"
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
                        Amsterdam
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
        <div className="mt-4 grid gap-4 container">
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-semibold text-2xl mt-8">
                Next, select your plan...
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
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 text-muted-forground- opacity-10 text-2xl font-bold">
                        {plan.id}
                      </div>
                      <CardHeader className="space-y-0 pb-0">
                        <CardTitle>
                          <span className="text-lg font-bold">{plan.ram}</span>{" "}
                          <span className="text-sm text-muted-foreground">
                            of RAM
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
                          {plan.vCore} vCore
                          {Number(plan.vCore) > 1 ? "s" : ""}
                          <br />
                          {plan.storage} of storage
                          <br />
                          {plan.backupSlot} Backup slot
                          {Number(plan.backupSlot) > 1 ? "s" : ""}
                          <br />
                          {plan.containerSplit} Container split
                          {Number(plan.containerSplit) > 1 ? "s" : ""}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 container">
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-semibold text-2xl mt-8">
                Then, select optional addons...
              </div>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {addons.map((addon, index) => (
                  <Card
                    key={index}
                    className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                      selectedAddons.includes(addon.name)
                        ? "bg-teal-100/10 border-teal-500"
                        : ""
                    }`}
                    onClick={() => toggleAddon(addon.name)}
                  >
                    <CardHeader className="space-y-0 pb-0">
                      <CardTitle>
                        <span className="text-lg font-bold">{addon.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="pb-2">
                        <span className="text-md pb-1 font-medium">
                          {addon.price}
                        </span>{" "}
                        <span className="text-sm font-medium text-muted-foreground">
                          per month
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {addon.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Next Section */}
        <div className="mt-4 grid gap-4 container">
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-semibold text-2xl mt-8">
                Finally, review your selection...
              </div>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <Card className="p-6 shadow-lg rounded-lg">
                  <div className="h-28 mb-4">fff</div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <div className="col-span-2 flex flex-col space-y-1">
                      <div className="flex justify-between">
                        <div className="text-sm text-gray-400 mb-1">Plan</div>
                        <div className="text-sm text-gray-400 mb-1">Price</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-lg font-bold mb-1">Flared XL</div>
                        <div className="text-sm">$20,000</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-lg font-bold mb-1">
                          Flared XL no base
                        </div>
                        <div className="text-sm">$17,500</div>
                      </div>
                      <div className="mt-[-0.25rem]">
                        <hr className="border-gray-300 mt-1 mb-2" />
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm">Total</div>
                        <div className="text-sm">$38,500</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-6 justify-end space-x-3">
                    <Button variant="secondary">Deploy</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
