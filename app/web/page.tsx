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

export default function Minecraft() {
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
    addondomains: string;
    subdomains: string;
    price: string;
    storage: string;
    link: string;
    whmcspid: string;
  };

  const plans: Plan[] = [
    {
      id: "jax10web",
      locationtag: "jax",
      location: "Jacksonville, Florida",
      ram: "1 GB",
      addondomains: "1",
      subdomains: "3",
      price: "$2",
      storage: "10 GB",
      link: "https://example.com",
      whmcspid: "36",
    },
    {
      id: "jax20web",
      locationtag: "jax",
      location: "Jacksonville, Florida",
      ram: "2 GB",
      addondomains: "2",
      subdomains: "Unlimited",
      price: "$4",
      storage: "20 GB",
      link: "https://example.com",
      whmcspid: "37",
    },
    {
      id: "jax30web",
      locationtag: "jax",
      location: "Jacksonville, Florida",
      ram: "3 GB",
      addondomains: "3",
      subdomains: "Unlimited",
      price: "$6",
      storage: "30 GB",
      link: "https://example.com",
      whmcspid: "38",
    },
    {
      id: "jax40web",
      locationtag: "jax",
      location: "Jacksonville, Florida",
      ram: "3 GB",
      addondomains: "4",
      subdomains: "Unlimited",
      price: "$8",
      storage: "40 GB",
      link: "https://example.com",
      whmcspid: "39",
    },
    {
      id: "jaxunlweb",
      locationtag: "jax",
      location: "Jacksonville, Florida",
      ram: "3 GB",
      addondomains: "Unlimited",
      subdomains: "Unlimited",
      price: "$10",
      storage: "Unmetered",
      link: "https://example.com",
      whmcspid: "40",
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
      name: "Jacksonville, Florida",
      flag: "/images/usflag.svg",
    },
    // Add more locations as needed
  ];

  const WHMCSLink = `https://foxomy.com/billing/cart.php?a=add&pid=${selectedPlan?.whmcspid}`;

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

  type CardType = "AS11721";

  const [selectedCard, setSelectedCard] = useState("AS11721");

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(var(--background)), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/whalecum.jpg)",
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
                Web Hosting
              </div>
              <p className="py-5 text-md sm:text-lg text-muted-foreground">
                Order website hosting today and get started within minutes.
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
                        In stock, Auto-setup
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

              {/* Marker for Jacksonville */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "17.93%", top: "30.1%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div
                        className={`transition-colors ${
                          selectedLocation === "Jacksonville, Florida"
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
                        Jacksonville
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
                              {plan.storage}
                            </span>{" "}
                            <span className="text-sm text-muted-foreground">
                              {plan.storage === "Unmetered" ? "" : "of"} storage
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
                            {plan.storage}{" "}
                            {plan.storage === "Unmetered" ? "" : "of"} storage
                            <br />
                            {plan.addondomains} Addon domain
                            {Number(plan.addondomains) > 1 ? "s" : ""}
                            <br />
                            {plan.subdomains} Subdomain
                            {Number(plan.subdomains) > 1 ? "s" : ""}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Unmetered and unlimited specifications goes towards the fair
                  usage policy.
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
                      {selectedPlan && (
                        <button
                          onClick={handleOpenWHMCSLink}
                          className="text-teal-500 font-bold bg-teal-500/30 hover:bg-teal-500/40 py-2 px-4 rounded focus:outline-none transition-colors"
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="container mt-20">
          {/* Testing */}
          <div>
            <p className="font-semibold text-3xl sm:text-5xl text-center">
              Our Web Panel
            </p>
            <p className="py-5 text-md sm:text-lg text-center text-muted-foreground">
              {`Easily manage your website with cPanel. We have many third-party addons.`}
            </p>

            <Slider ref={sliderRef} {...settings}>
              {images.map((image) => (
                <div key={image}>
                  <Image
                    src={image}
                    alt="image"
                    className="mx-auto"
                    width={1280}
                    height={1600}
                    priority
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* Next Section */}
      <div className="flex justify-center">
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
                {(["AS11721"] as CardType[]).map((card) => (
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
                        {card === "AS11721" && "Jacksonville, Florida"}
                      </CardTitle>
                      <img
                        src={`/images/${card === "AS11721" && "usflag"}.svg`}
                        alt="flag"
                        className="h-6 w-6 mr-2"
                      />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {selectedCard === "AS11721" && (
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
                      <p className="text-md font-bold">64.44.162.14</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">Address</p>
                      </div>
                      <p className="text-md font-bold">
                        421 Church St W, Jacksonville, FL 32202
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          Facility
                        </p>
                      </div>
                      <p className="text-md font-bold">Nexeon - SBA Edge</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <p className="text-xs text-muted-foreground">
                          LookingGlass
                        </p>
                      </div>
                      <Link
                        href="http://lg-jax1.bunis.gay/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-md font-bold hover:text-muted-foreground transition"
                      >
                        lg-jax1.bunis.gay
                      </Link>
                    </div>
                  </div>
                  <p className="text-xl font-bold mb-2">
                    Upstreams for AS11721
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
                          Path Network, Inc.
                        </TableCell>
                        <TableCell className="font-medium">
                          DDoS Protection
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS53264</TableCell>
                        <TableCell className="font-medium">
                          SBA Edge, LLC
                        </TableCell>
                        <TableCell className="font-medium">
                          US Datacenter
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS394437</TableCell>
                        <TableCell className="font-medium">
                          PS Lightwave
                        </TableCell>
                        <TableCell className="font-medium">Peering</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS20473</TableCell>
                        <TableCell className="font-medium">
                          The Constant Company, LLC
                        </TableCell>
                        <TableCell className="font-medium">Peering</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS6939</TableCell>
                        <TableCell className="font-medium">
                          Hurricane Electric LLC
                        </TableCell>
                        <TableCell className="font-medium">Peering</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS3257</TableCell>
                        <TableCell className="font-medium">
                          GTT Communications Inc.
                        </TableCell>
                        <TableCell className="font-medium">Peering</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS19151</TableCell>
                        <TableCell className="font-medium">
                          BroadbandONE, LLC
                        </TableCell>
                        <TableCell className="font-medium">Peering</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AS5580</TableCell>
                        <TableCell className="font-medium">
                          GTT Communications Netherlands B.V.
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
