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

import { useRef, useState } from "react";
import { StringToBoolean } from "class-variance-authority/types";

const MarkerSVG = (
  <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
    <path
      fill="currentColor"
      d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z"
    />
  </svg>
);

export default function Colocation() {
  const [location, setLocation] = useState<string | null>(null);
  const [planSize, setPlanSize] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  type Plan = {
    name: string;
    id: string;
    locationtag: string;
    location: string;
    rackspace: string;
    power: string;
    bandwidth: string;
    port: string;
    ipv4address: string;
    price: string;
    link: string;
    whmcspid: string;
  };

  const plans: Plan[] = [
    {
      name: "1U shared",
      id: "sjc1u",
      locationtag: "sjc",
      location: "San Jose, California",
      rackspace: "1U",
      power: "1 Amp (208V)",
      bandwidth: "20 TB",
      port: "1 Gbps Dedicated",
      ipv4address: "/29 (5 Usable)",
      price: "$150",
      link: "https://example.com",
      whmcspid: "2",
    },
    {
      name: "20U shared",
      id: "sjc20U",
      locationtag: "sjc",
      location: "San Jose, California",
      rackspace: "4U",
      power: "20amp 208v Circuit",
      bandwidth: "Unmetered",
      port: "10 Gbps Dedicated",
      ipv4address: "/27 (29 Usable)",
      price: "$3000",
      link: "https://example.com",
      whmcspid: "2",
    },
    {
      name: "45U full cabinet",
      id: "sjc45U",
      locationtag: "sjc",
      location: "San Jose, California",
      rackspace: "45U",
      power: "3KW (A+B)",
      bandwidth: "Unmetered",
      port: "10 Gbps Dedicated",
      ipv4address: "/27 (29 Usable)",
      price: "$6750",
      link: "https://example.com",
      whmcspid: "2",
    },
  ];

  type Addon = {
    name: string;
    price: string;
    description: string;
    urlparams: string;
  };

  const toggleAddon = (addonName: string) => {
    setSelectedAddons((prevSelected) =>
      prevSelected.includes(addonName)
        ? prevSelected.filter((a) => a !== addonName)
        : [...prevSelected, addonName]
    );
  };

  const getTotalPrice = () => {
    let total = 0;

    if (selectedPlan && selectedPlan.price) {
      total = parseFloat(selectedPlan.price.replace("$", ""));
    }

    return `$${total.toFixed(2)}`;
  };

  /* Location Selector */
  type LocationType = {
    codename: string;
    name: string;
    flag: string;
  };

  const locations: LocationType[] = [
    {
      codename: "jax1",
      name: "San Jose, California",
      flag: "/images/usflag.svg",
    },
    // Add more locations as needed
  ];

  const WHMCSLink = `https://foxomy.com/billing/cart.php?a=add&pid=${selectedPlan?.whmcspid}}`;

  const handleOpenWHMCSLink = () => {
    window.open(WHMCSLink, "_self");
  };

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
    "/images/cpanel1.png",
    "/images/cpanel2.png",
    "/images/cpanel3.png",
    "/images/jetbackup.png",
    "/images/nodeapp.png",
    "/images/pythonapp.png",
    "/images/softaculous.png",
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  /* End Carousel */

  /* Start Networks */

  type CardType = "AS11878";

  const [selectedCard, setSelectedCard] = useState("AS11878");

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/blmserver.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
        className="pt-10"
      >
        {/* Grid */}
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 container">
          <div className="flex flex-col justify-between mb-10">
            <div>
              <div className="mt-20 font-semibold text-3xl sm:text-5xl">
                Colocation
              </div>
              <p className="py-5 text-md sm:text-lg text-muted-foreground">
                {`Place your rack in our datacenter and we’ll provide the power,
                cooling, and network.`}
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
                        In stock
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

              {/* Marker for San Jose */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "6.43%", top: "24.34%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div
                        className={`transition-colors ${
                          selectedLocation === "San Jose, California"
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
                        San Jose
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
                            <span className="text-lg font-bold">
                              {plan.name}
                            </span>{" "}
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
                            {plan.power}
                            <br />
                            {plan.bandwidth} bandwidth
                            <br />
                            {plan.port} Port
                            <br />
                            {plan.ipv4address} IPv4 addresses
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Unmetered specifications goes towards the fair usage policy.
                </p>
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
                  Finally, review your selection...
                </div>
                <div className="mt-4 flex justify-center">
                  <Card className="p-6 shadow-lg rounded-lg min-w-[368px]">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      <div className="col-span-2 flex flex-col space-y-1">
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <div>Plan</div>
                          <div>Price</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-md font-bold mb-1">
                            {selectedPlan?.id}
                          </div>
                          <div className="text-sm">{selectedPlan?.price}</div>
                        </div>
                        <div className="mt-[-0.25rem]">
                          <hr className="border-gray mt-1 mb-2" />
                        </div>
                        <div className="flex justify-between">
                          <div className="text-sm">Total</div>
                          <div className="text-sm">{getTotalPrice()}</div>
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
                {(["AS11878"] as CardType[]).map((card) => (
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
                        {card === "AS11878" && "San Jose, California"}
                      </CardTitle>
                      <img
                        src={`/images/${card === "AS11878" && "usflag"}.svg`}
                        alt="flag"
                        className="h-6 w-6 mr-2"
                      />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {selectedCard === "AS11878" && (
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
                      <p className="text-md font-bold">173.249.199.2</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">Address</p>
                      </div>
                      <p className="text-md font-bold">
                        1 S Market St San Jose, CA 95113
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          Facility
                        </p>
                      </div>
                      <p className="text-md font-bold">
                        {`Pls dont ddos me or i'll cum :3`}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          LookingGlass
                        </p>
                      </div>
                      <Link
                        href="http://lg-sjc1.bunis.gay/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-md font-bold hover:text-muted-foreground transition"
                      >
                        lg-sjc1.bunis.gay
                      </Link>
                    </div>
                  </div>
                  <p className="text-xl font-bold mb-2">
                    Upstreams for AS11878
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
                        <TableCell className="font-medium">AS36236</TableCell>
                        <TableCell className="font-medium">
                          NetActuate
                        </TableCell>
                        <TableCell className="font-medium">Peering</TableCell>
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
