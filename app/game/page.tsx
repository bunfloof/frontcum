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
import { Checkbox } from "@radix-ui/themes";
import { Badge } from "@radix-ui/themes";
import * as Popover from "@radix-ui/react-popover";
import { Separator } from "@/components/ui/separator";

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

export default function Minecraft() {
  const [location, setLocation] = useState<string | null>(null);
  const [planSize, setPlanSize] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null
  );
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [pingResults, setPingResults] = useState<PingResultType>({});

  /* Pop over */
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy username");
  const discordUsername = "furcon";
  const telegramURL = "https://t.me/bun2003";
  const discordServerURL = "https://discord.gg/uQkn7vVqj6";

  const WHMCSURL =
    "https://foxomy.com/billing/submitticket.php?step=2&deptid=2";

  const handleJoinDiscordServer = () => {
    window.open(discordServerURL, "_blank", "noopener,noreferrer");
  };
  const handleTelegramLink = () => {
    window.open(telegramURL, "_blank", "noopener,noreferrer");
  };
  const handleWHMCSLink = () => {
    window.open(WHMCSURL, "_blank", "noopener,noreferrer");
  };
  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText(discordUsername);
      setCopyButtonText("Username copied");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    if (copyButtonText === "Username copied") {
      const timer = setTimeout(() => {
        setCopyButtonText("Copy username");
      }, 1500); // revert back to original text after 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [copyButtonText]);

  type Plan = {
    id: string;
    locationtag: string;
    location: string;
    ram: string;
    price: string;
    vCore: string;
    CPUName: string;
    storage: string;
    backupSlot: string;
    containerSplit: string;
    link: string;
    whmcspid: string;
  };

  const plans: Plan[] = [
    {
      id: "dfw1gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "1 GB",
      price: "$2",
      vCore: "16",
      storage: "20/Unlimited GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
      whmcspid: "2",
    },
    {
      id: "dfw2gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "2 GB",
      price: "$4",
      vCore: "16",
      storage: "40/Unlimited GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
      whmcspid: "3",
    },
    {
      id: "dfw3gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "3 GB",
      price: "$6",
      vCore: "16",
      storage: "60/Unlimited GB",
      backupSlot: "1",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "4",
    },
    {
      id: "dfw4gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "4 GB",
      price: "$8",
      vCore: "16",
      storage: "80/Unlimited GB",
      backupSlot: "2",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "5",
    },
    {
      id: "dfw5gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "5 GB",
      price: "$10",
      vCore: "16",
      storage: "100/Unlimited GB",
      backupSlot: "2",
      containerSplit: "3",
      link: "https://example.com",
      whmcspid: "6",
    },
    {
      id: "dfw6gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "6 GB",
      price: "$12",
      vCore: "16",
      storage: "120/Unlimited GB",
      backupSlot: "3",
      containerSplit: "3",
      link: "https://example.com",
      whmcspid: "7",
    },
    {
      id: "dfw8gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "8 GB",
      price: "$16",
      vCore: "16",
      storage: "160/Unlimited GB",
      backupSlot: "4",
      containerSplit: "4",
      link: "https://example.com",
      whmcspid: "9",
    },
    {
      id: "dfw10gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "10 GB",
      price: "$20",
      vCore: "16",
      storage: "200/Unlimited GB",
      backupSlot: "5",
      containerSplit: "5",
      link: "https://example.com",
      whmcspid: "10",
    },
    {
      id: "dfw16gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "16 GB",
      price: "$32",
      vCore: "16",
      storage: "320/Unlimited GB",
      backupSlot: "8",
      containerSplit: "8",
      link: "https://example.com",
      whmcspid: "11",
    },
    {
      id: "dfw20gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "20 GB",
      price: "$40",
      vCore: "16",
      storage: "400/Unlimited GB",
      backupSlot: "10",
      containerSplit: "10",
      link: "https://example.com",
      whmcspid: "12",
    },
    {
      id: "dfw24gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "24 GB",
      price: "$48",
      vCore: "16",
      storage: "480/Unlimited GB",
      backupSlot: "12",
      containerSplit: "12",
      link: "https://example.com",
      whmcspid: "26",
    },
    {
      id: "dfw32gb",
      locationtag: "dfw",
      location: "Dallas, Texas",
      CPUName: "13900KS",
      ram: "32 GB",
      price: "$64",
      vCore: "16",
      storage: "640/Unlimited GB",
      backupSlot: "16",
      containerSplit: "16",
      link: "https://example.com",
      whmcspid: "27",
    },
    {
      id: "ams1gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "1 GB",
      price: "$2",
      vCore: "1",
      storage: "18 GB/Unlimited GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
      whmcspid: "25",
    },
    {
      id: "ams2gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "2 GB",
      price: "$4",
      vCore: "2",
      storage: "36 GB/Unlimited GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
      whmcspid: "28",
    },
    {
      id: "ams3gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "3 GB",
      price: "$6",
      vCore: "3",
      storage: "54 GB/Unlimited GB",
      backupSlot: "1",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "29",
    },
    {
      id: "ams4gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "4 GB",
      price: "$8",
      vCore: "4",
      storage: "72 GB/Unlimited GB",
      backupSlot: "2",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "30",
    },
    {
      id: "ams5gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "5 GB",
      price: "$10",
      vCore: "5",
      storage: "90 GB/Unlimited GB",
      backupSlot: "2",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "31",
    },
    {
      id: "ams6gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "6 GB",
      price: "$12",
      vCore: "6",
      storage: "108 GB/Unlimited GB",
      backupSlot: "3",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "32",
    },
    {
      id: "ams8gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "8 GB",
      price: "$16",
      vCore: "8",
      storage: "144 GB/Unlimited GB",
      backupSlot: "4",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "33",
    },
    {
      id: "ams10gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "10 GB",
      price: "$20",
      vCore: "8",
      storage: "170 GB/Unlimited GB",
      backupSlot: "5",
      containerSplit: "5",
      link: "https://example.com",
      whmcspid: "34",
    },
    {
      id: "ams16gb",
      locationtag: "ams",
      location: "Amsterdam, Netherlands",
      CPUName: "7950X3D",
      ram: "16 GB",
      price: "$32",
      vCore: "8",
      storage: "288 GB/Unlimited GB",
      backupSlot: "8",
      containerSplit: "8",
      link: "https://example.com",
      whmcspid: "35",
    },
    {
      id: "fra1gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "1 GB",
      price: "$1",
      vCore: "1",
      storage: "10 GB/Limited GB",
      backupSlot: "1",
      containerSplit: "1",
      link: "https://example.com",
      whmcspid: "43",
    },
    {
      id: "fra2gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "2 GB",
      price: "$2",
      vCore: "2",
      storage: "20 GB/Limited GB",
      backupSlot: "2",
      containerSplit: "1",
      link: "https://example.com",
      whmcspid: "44",
    },
    {
      id: "fra3gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "3 GB",
      price: "$3",
      vCore: "3",
      storage: "30 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "45",
    },
    {
      id: "fra4gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "4 GB",
      price: "$4",
      vCore: "4",
      storage: "40 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "2",
      link: "https://example.com",
      whmcspid: "46",
    },
    {
      id: "fra5gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "5 GB",
      price: "$5",
      vCore: "4",
      storage: "50 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "3",
      link: "https://example.com",
      whmcspid: "47",
    },
    {
      id: "fra6gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "6 GB",
      price: "$6",
      vCore: "4",
      storage: "60 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "3",
      link: "https://example.com",
      whmcspid: "48",
    },

    {
      id: "fra7gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "7 GB",
      price: "$7",
      vCore: "4",
      storage: "70 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "3",
      link: "https://example.com",
      whmcspid: "49",
    },
    {
      id: "fra8gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "8 GB",
      price: "$8",
      vCore: "4",
      storage: "80 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "4",
      link: "https://example.com",
      whmcspid: "50",
    },
    {
      id: "fra9gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "9 GB",
      price: "$9",
      vCore: "4",
      storage: "90 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "4",
      link: "https://example.com",
      whmcspid: "51",
    },
    {
      id: "fra10gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "10 GB",
      price: "$10",
      vCore: "4",
      storage: "100 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "5",
      link: "https://example.com",
      whmcspid: "52",
    },
    {
      id: "fra12gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "12 GB",
      price: "$12",
      vCore: "4",
      storage: "120 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "6",
      link: "https://example.com",
      whmcspid: "53",
    },
    {
      id: "fra14gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "14 GB",
      price: "$14",
      vCore: "4",
      storage: "140 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "7",
      link: "https://example.com",
      whmcspid: "54",
    },
    {
      id: "fra16gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "16 GB",
      price: "$16",
      vCore: "4",
      storage: "160 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "8",
      link: "https://example.com",
      whmcspid: "55",
    },
    {
      id: "fra20gb",
      locationtag: "fra",
      location: "Frankfurt, Germany",
      CPUName: "7900X",
      ram: "20 GB",
      price: "$20",
      vCore: "4",
      storage: "200 GB/Limited GB",
      backupSlot: "3",
      containerSplit: "10",
      link: "https://example.com",
      whmcspid: "56",
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
      urlparams: "&configoption[1]=1",
    },
    {
      name: "Website Hosting",
      price: "FREE",
      description:
        'Use the promo code "WEB" at checkout when you order website hosting to receive free webhosting for the duration of your game server service.',
      urlparams: "&addons[1]=1",
    },
    {
      name: "The Shockbyte Treatment 💀",
      price: "$15",
      description:
        "Installing and configuring plugins and modpacks is included in support already. (This isn't actually a real addon)",
      urlparams: "&addons[2]=1",
    },
    {
      name: "The Premium Treatment 💀",
      price: "$50",
      description:
        "Another server management addon but it's premium and more greedy. (This isn't actually a real addon)",
      urlparams: "&addons[2]=1",
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

  const getTotalPrice = () => {
    let total = 0;

    if (selectedPlan && selectedPlan.price) {
      total = parseFloat(selectedPlan.price.replace("$", ""));
    }

    selectedAddons.forEach((addonName) => {
      const addon = addons.find((a) => a.name === addonName);
      if (
        addon &&
        addon.price !== "FREE" &&
        addon.name !== "The Shockbyte Treatment 💀" &&
        addon.name !== "The Premium Treatment 💀"
      ) {
        total += parseFloat(addon.price.replace("$", ""));
      }
    });

    return `$${total.toFixed(2)}`;
  };

  /* Location Selector */
  type LocationType = {
    codename: string;
    name: string;
    flag: string;
    wsUrl?: string;
    outOfStock: boolean;
    content?: string;
    CPUcontent?: string;
  };

  type PingResultType = {
    [key: string]: number;
  };

  const locations: LocationType[] = [
    {
      codename: "dfw1",
      name: "Dallas, Texas",
      flag: "/images/usflag.svg",
      wsUrl:
        "wss://speedtest.dal.hivelocity.net.prod.hosts.ooklaserver.net:8080/ws?",
      outOfStock: false,
      content: "Premium ($2/GB)",
      CPUcontent: "Intel Core i9-13900KS",
    },
    {
      codename: "ams1",
      name: "Amsterdam, Netherlands",
      flag: "/images/nlflag.svg",
      wsUrl: "wss://speedtesta.kpn.com:8080/ws?",
      outOfStock: true,
      content: "Premium ($2/GB)",
      CPUcontent: "AMD Ryzen 9 7950X3D",
    },
    {
      codename: "fra1",
      name: "Frankfurt, Germany",
      flag: "/images/deflag.svg",
      wsUrl: "wss://speedtest-fra.melbicom.net:8080/ws?",
      outOfStock: false,
      content: "Budget ($1/GB)",
      CPUcontent: "AMD Ryzen 9 7900X",
    },
    // ... other locations
  ];

  const getConcatenatedParams = () => {
    return selectedAddons
      .map((addonName) => {
        const addon = addons.find((a) => a.name === addonName);
        return addon?.urlparams;
      })
      .join("");
  };

  const WHMCSLink = `https://foxomy.com/billing/cart.php?a=add&pid=${
    selectedPlan?.whmcspid
  }${getConcatenatedParams()}`;

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

  const getPing = async (wsUrl: string): Promise<number> => {
    const ws = new WebSocket(wsUrl);
    return new Promise<number>((resolve) => {
      ws.onopen = () => {
        const start = Date.now();
        ws.send("p");
        ws.onmessage = () => {
          const duration = Date.now() - start;
          resolve(duration);
          ws.close();
        };
      };
      ws.onerror = () => {
        resolve(Infinity); // If there's an error, return Infinity to represent an unreachable server.
      };
    });
  };

  useEffect(() => {
    locations.forEach(async (location) => {
      if (location.wsUrl) {
        const pings = [];
        for (let i = 0; i < 3; i++) {
          pings.push(await getPing(location.wsUrl));
        }

        const avgPing = pings.reduce((a, b) => a + b) / pings.length;
        setPingResults((prev) => ({ ...prev, [location.codename]: avgPing }));
      }
    });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), linear-gradient(rgba(0, 140, 115, 0.5), rgba(0, 0, 0, 0)), url(/images/minecraftborderfade.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="pt-32"
      >
        {/* Grid */}
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 container">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mt-20 font-semibold text-3xl sm:text-5xl">
                Game Hosting
              </div>
              <p className="py-5 text-md sm:text-lg text-muted-foreground">
                Order a Minecraft server today and get started within minutes.
              </p>
              <p className="text-md sm:text-lg text-muted-foreground">
                Need help or have questions?
                <br />
                <Popover.Root>
                  Please open an on-site{" "}
                  <Button variant="secondary" onClick={handleWHMCSLink}>
                    ticket
                  </Button>{" "}
                  or direct{" "}
                  <Popover.Trigger asChild>
                    <Button variant="secondary">message</Button>
                  </Popover.Trigger>{" "}
                  a staff.
                  <Popover.Portal>
                    <Popover.Content
                      className="bg-zinc-900 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                      sideOffset={5}
                    >
                      <div className="flex flex-col gap-[7px]">
                        <div className="flex flex-col gap-[10px]">
                          <div className="text-sm font-medium">
                            Message Bun on Telegram
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Message Bun directly on Telegram.
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Username: bun2003
                          </div>
                          <Button
                            variant="secondary"
                            className="p-1"
                            onClick={handleTelegramLink}
                          >
                            t.me/bun2003
                          </Button>
                          <Separator />
                          <div className="text-sm font-medium">
                            Message Bun on Discord
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Send Bun a friend request on Discord and message
                            them directly.
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Username: {discordUsername}
                          </div>
                          <Button
                            variant="secondary"
                            className="p-1"
                            onClick={handleCopyUsername}
                          >
                            {copyButtonText}
                          </Button>
                          <Separator />
                          <div className="text-sm font-medium">
                            Community Discord Server
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Join the community Discord server to chat with the
                            community and get help from other members.
                          </div>

                          <Button
                            variant="secondary"
                            className="p-1"
                            onClick={handleJoinDiscordServer}
                          >
                            Join Discord server
                          </Button>
                        </div>
                      </div>

                      <Popover.Arrow className="fill-white/10" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-zinc-900/30 border rounded-md p-6">
              <Table>
                <TableCaption>
                  Lunes Host and Mewgem are my friends who gave me permission to
                  compare them, don't bully them.
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
      <div className="flex flex-col bg-black">
        {/* Grid */}
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 container mt-8">
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-semibold text-2xl">
                First, select your game server location...
              </div>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {locations.map((location, index) => (
                  <Card
                    key={index}
                    className={`relative hover:bg-muted/50 transition-colors cursor-pointer ${
                      selectedLocation?.name === location.name
                        ? " bg-teal-100/10 border-teal-500"
                        : ""
                    } ${location.outOfStock ? "opacity-40" : ""}`}
                    onClick={() => {
                      setSelectedLocation(location);
                      selectedLocation?.name != location.name && setSelectedPlan(null);
                    }}
                  >
                    <div className="absolute top-0 right-5 -translate-y-1/2">
                      <span
                        className={`items-center ${
                          location.content?.toLowerCase().includes("premium") &&
                          "border border-teal-700 bg-teal-900 text-teal-300"
                        } ${
                          location.content?.toLowerCase().includes("budget") &&
                          "border border-gray-500 bg-gray-700 text-gray-200"
                        } gap-1 text-xs font-medium break-words py-1 px-2 rounded mr-1`}
                      >
                        {location.CPUcontent}
                      </span>
                      <span
                        className={`items-center ${
                          location.content?.toLowerCase().includes("premium") &&
                          "border border-teal-700 bg-teal-900 text-teal-300"
                        } ${
                          location.content?.toLowerCase().includes("budget") &&
                          "border border-gray-500 bg-gray-700 text-gray-200"
                        } gap-1 text-xs font-medium break-words py-1 px-2 rounded`}
                      >
                        {location.content}
                      </span>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-6 pr-0 flex items-center justify-center">
                        <div
                          className={`p-1 border-2 rounded flex ${
                            selectedLocation?.name === location.name
                              ? "bg-teal-100/10 border-teal-500"
                              : "border-zinc-600"
                          }`}
                        >
                          {selectedLocation?.name === location.name ? (
                            <svg
                              className="h-4 w-4 text-teal-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586 16.707 5.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-4 w-4 opacity-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586 16.707 5.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
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
                            {pingResults[location.codename]
                              ? `${pingResults[location.codename].toFixed(
                                  2
                                )} ms`
                              : "Pinging..."}
                          </p>
                          <p>
                            <span
                              className={`text-sm font-medium ${
                                location.outOfStock
                                  ? "text-red-500"
                                  : "text-teal-500"
                              }`}
                            >
                              {location.outOfStock
                                ? "Out of stock"
                                : "In stock"}
                            </span>
                          </p>
                        </CardContent>
                      </div>
                    </div>
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
                          selectedLocation?.name === "Dallas, Texas"
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
                          selectedLocation?.name === "Amsterdam, Netherlands"
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

              {/* Marker for Frankfurt */}
              <Tooltip.Provider>
                <div
                  className="absolute"
                  style={{ left: "48.32%", top: "16.3%" }}
                >
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <div
                        className={`transition-colors ${
                          selectedLocation?.name === "Frankfurt, Germany"
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
                        Frankfurt
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
                    .filter((plan) => plan.location === selectedLocation.name) // Filter the plans based on the selected location
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
                        <div className="flex flex-row">
                          <div className="p-6 pr-0 flex items-center justify-center">
                            <div
                              className={`p-1 border-2 rounded flex ${
                                selectedPlan?.id === plan.id
                                  ? "bg-teal-100/10 border-teal-500"
                                  : "border-zinc-600"
                              }`}
                            >
                              {selectedPlan?.id === plan.id ? (
                                <svg
                                  className="h-4 w-4 text-teal-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586 16.707 5.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="h-4 w-4 opacity-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586 16.707 5.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 text-muted-forground- opacity-10 text-2xl font-bold">
                            {plan.id}
                          </div>
                          <div className="flex-grow">
                            <CardHeader className="space-y-0 pb-0">
                              <CardTitle>
                                <span className="text-lg font-bold">
                                  {plan.ram}
                                </span>{" "}
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
                                {plan.vCore} shared {plan.CPUName} vCore
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
                          </div>
                        </div>
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
        {selectedLocation &&
          selectedPlan &&
          selectedLocation?.name !== "San Jose, California (FREE)" && (
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
                        <div className="flex flex-row">
                          <div className="p-6 pr-0 flex items-center justify-center">
                            <div
                              className={`p-1 border-2 rounded flex ${
                                selectedAddons.includes(addon.name)
                                  ? "bg-teal-100/10 border-teal-500"
                                  : "border-zinc-600"
                              }`}
                            >
                              {selectedAddons.includes(addon.name) ? (
                                <svg
                                  className="h-4 w-4 text-teal-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586 16.707 5.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="h-4 w-4 opacity-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586 16.707 5.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <CardHeader className="space-y-0 pb-0">
                              <CardTitle>
                                <span className="text-lg font-bold">
                                  {addon.name}
                                </span>
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
                          </div>
                        </div>
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
                  <Card className="p-6 shadow-lg rounded-lg w-full md:w-1/2 ">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      <div className="col-span-2 flex flex-col space-y-1">
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <div>Plan</div>
                          <div>Price</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-md font-bold mb-1">
                            {selectedPlan?.id}
                            <br />
                            ├─ Location: {selectedPlan?.location}
                            <br />
                            ├─ RAM: {selectedPlan?.ram} <br />
                            ├─ Storage: {selectedPlan?.storage} <br />
                            ├─ vCores: {selectedPlan?.vCore} <br />
                            ├─ Backups: {selectedPlan?.backupSlot} <br />
                            └─ Splits: {selectedPlan?.containerSplit}
                          </div>
                          <div className="text-sm">{selectedPlan?.price}</div>
                        </div>

                        {selectedAddons.length > 0 && (
                          <>
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <div>Addons</div>
                            </div>
                            {selectedAddons.map((addonName) => {
                              const addon = addons.find(
                                (a) => a.name === addonName
                              );
                              return addon ? (
                                <div className="flex justify-between">
                                  <div className="text-md font-bold mb-1">
                                    {addon.name}
                                  </div>
                                  <div className="text-sm">
                                    {addon.name.includes("Treatment")
                                      ? "FREE"
                                      : addon.price}
                                  </div>
                                </div>
                              ) : null;
                            })}
                          </>
                        )}
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
                      {selectedPlan && !selectedLocation.outOfStock ? (
                        <button
                          onClick={handleOpenWHMCSLink}
                          className="border border-teal-500 text-teal-500 font-bold bg-teal-800/30 hover:bg-teal-500/40 py-2 px-4 rounded focus:outline-none transition-colors"
                        >
                          Continue
                        </button>
                      ) : (
                        <button className="cursor-not-allowed border border-red-500 text-red-500 font-bold bg-red-800/30 hover:bg-red-500/40 py-2 px-4 rounded focus:outline-none transition-colors">
                          Out of stock
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
    </>
  );
}
