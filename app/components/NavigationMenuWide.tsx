"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const gameServers: {
  title: string;
  href: string;
  description?: string;
  gameIcon?: string;
}[] = [
  // {
  //   title: "7 Days to Die",
  //   href: "/game",
  // },
  // {
  //   title: "Ark: Survival Evolved",
  //   href: "/game",
  // },
  // {
  //   title: "Arma 3",
  //   href: "/game",
  // },
  // {
  //   title: "Barotrauma",
  //   href: "/game",
  // },
  // {
  //   title: "BeamMP",
  //   href: "/game",
  // },
  // {
  //   title: "Factorio",
  //   href: "/game",
  // },
  // {
  //   title: "Garry's Mod",
  //   href: "/game",
  // },
  // {
  //   title: "Grand Theft Auto",
  //   href: "/game",
  // },
  // {
  //   title: "Icarus",
  //   href: "/game",
  // },
  // {
  //   title: "Killing Floor 2",
  //   href: "/game",
  // },
  // {
  //   title: "Left 4 Dead 2",
  //   href: "/game",
  // },
  {
    title: "Minecraft",
    href: "/game",
    gameIcon: "/gameIcons/minecraftgrassblock.png",
  },
  // {
  //   title: "Mordhau",
  //   href: "/game",
  // },
  // {
  //   title: "Project Zomboid",
  //   href: "/game",
  // },
  // {
  //   title: "Rust",
  //   href: "/game",
  // },
  // {
  //   title: "Satisfactory",
  //   href: "/game",
  // },
  // {
  //   title: "SCP: Secret Laboratory",
  //   href: "/game",
  // },
  // {
  //   title: "Sons of the Forest",
  //   href: "/game",
  // },
  // {
  //   title: "Starbound",
  //   href: "/game",
  // },
  // {
  //   title: "Stardew Valley",
  //   href: "/game",
  // },
  // {
  //   title: "Team Fortress 2",
  //   href: "/game",
  // },
  // {
  //   title: "The Forest",
  //   href: "/game",
  // },
  // {
  //   title: "The Isle",
  //   href: "/game",
  // },
  // {
  //   title: "Unturned",
  //   href: "/game",
  // },
  // {
  //   title: "V Rising",
  //   href: "/game",
  // },
  // {
  //   title: "Valheim",
  //   href: "/game",
  // },
];

const cloudHosting: {
  title: string;
  href: string;
  description?: string;
  gameIcon?: string;
}[] = [
  {
    title: "Discord Bot Hosting (NodeJS/Python)",
    href: "/coming-soon",
  },
  {
    title: "Dedicated Servers",
    href: "/coming-soon",
  },
  {
    title: "Web Hosting (cPanel)",
    href: "/coming-soon",
  },
];

const LoginDropdown: {
  title: string;
  href: string;
  description?: string;
  gameIcon?: string;
}[] = [
  {
    title: "Billing (WHMCS1)",
    href: "https://foxomy.com/billing/login",
  },
  {
    title: "cPanel (us1.rap)",
    href: "https://cpanel.furweb.com:2083/",
  },
  {
    title: "Pterodactyl 2 (panel2.fox)",
    href: "https://panel2.foxomy.com",
  },
  {
    title: "Pterodactyl 1 (panel.fox)",
    href: "https://panel.foxomy.com",
  },
];

export function NavigationMenuWide() {
  const [activeItem, setActiveItem] = React.useState("");
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeSubMenu = () => {
    setActiveItem("");
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <nav
      className={`fixed top-0 w-full h-16 z-50 border-b border-transparent transition-colors duration-300 ease-in-out ${
        isScrolled ? "border-zinc-50/5" : ""
      } flex items-center justify-center px-8 py-4 backdrop-blur bg-zinc/50`}
    >
      <div className="w-full flex flex-row justify-between items-center py-4 px-10 mx-auto container">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* SVG Logo */}
              <svg
                className="transition-colors"
                width="114"
                height="24"
                version="1.1"
                viewBox="0 0 114 24"
                fill={isHovered ? "rgb(161,161,170)" : "currentColor"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.12466 23.4107C0.288205 22.4689 -3.29465 10.8684 3.66312 5.72781L3.93934 5.5237L3.99309 5.09282C4.24816 3.04784 5.01257 1.08927 5.89423 0.221845L6.11971 0L6.26215 0.153807C6.74885 0.679373 7.39196 1.93632 7.73696 3.03638L7.82463 3.31589L8.05269 3.34464C8.17813 3.36045 8.47077 3.42039 8.70301 3.47783L9.12527 3.58228L9.24133 3.351C9.76662 2.30416 11.3144 1.08129 11.763 1.35849C11.9289 2.38919 11.315 4.425 11.6994 4.84552C11.8737 5.0362 12.0368 5.3151 12.3679 5.98864C13.1242 7.52676 13.8557 8.09601 15.3892 8.33944C16.1284 8.4568 16.5159 8.79444 16.3188 9.14954C15.8148 10.0575 14.6361 10.5368 12.7939 10.5831C3.68962 10.8119 14.7121 21.0889 14.7121 21.0889C14.7121 21.0889 0.694424 12.7969 11.1701 12.3046C13.0966 12.3039 14.7973 12.8839 16.1504 14.0032C18.6994 16.112 22.0287 15.9309 23.635 13.5962C24.2443 12.7107 24.4552 11.0693 24.0589 10.2974C23.8774 9.94368 24.4856 10.5521 24.9115 11.1503C28.1647 15.7191 25.9814 22.1398 20.7671 23.3387C20.3086 23.4441 10.0337 23.5076 9.12466 23.4107ZM10.5772 7.73421C10.1673 6.969 9.22538 6.73498 8.57067 7.23567C8.30556 7.43844 8.30674 7.47631 8.57764 7.45754C8.95238 7.43158 9.70588 7.53927 10.0949 7.67439C10.5474 7.83155 10.6352 7.84244 10.5772 7.73421Z"
                  fill="url(#paint0_linear_2_7)"
                />
                <path
                  d="M39.2642 19V4.45455H48.8949V6.99006H42.3395V10.456H48.2557V12.9915H42.3395V19H39.2642Z"
                  fill="url(#paint1_linear_2_7)"
                />
                <path
                  d="M55.0348 19.2131C53.9316 19.2131 52.9775 18.9787 52.1726 18.5099C51.3724 18.0365 50.7545 17.3783 50.3189 16.5355C49.8833 15.688 49.6655 14.7055 49.6655 13.5881C49.6655 12.4612 49.8833 11.4763 50.3189 10.6335C50.7545 9.78598 51.3724 9.12784 52.1726 8.65909C52.9775 8.18561 53.9316 7.94886 55.0348 7.94886C56.138 7.94886 57.0897 8.18561 57.8899 8.65909C58.6948 9.12784 59.3151 9.78598 59.7507 10.6335C60.1863 11.4763 60.4041 12.4612 60.4041 13.5881C60.4041 14.7055 60.1863 15.688 59.7507 16.5355C59.3151 17.3783 58.6948 18.0365 57.8899 18.5099C57.0897 18.9787 56.138 19.2131 55.0348 19.2131ZM55.049 16.8693C55.5509 16.8693 55.9699 16.7273 56.3061 16.4432C56.6423 16.1544 56.8956 15.7614 57.0661 15.2642C57.2412 14.767 57.3288 14.2012 57.3288 13.5668C57.3288 12.9323 57.2412 12.3665 57.0661 11.8693C56.8956 11.3722 56.6423 10.9792 56.3061 10.6903C55.9699 10.4015 55.5509 10.2571 55.049 10.2571C54.5424 10.2571 54.1162 10.4015 53.7706 10.6903C53.4297 10.9792 53.1716 11.3722 52.9964 11.8693C52.826 12.3665 52.7408 12.9323 52.7408 13.5668C52.7408 14.2012 52.826 14.767 52.9964 15.2642C53.1716 15.7614 53.4297 16.1544 53.7706 16.4432C54.1162 16.7273 54.5424 16.8693 55.049 16.8693Z"
                  fill="url(#paint2_linear_2_7)"
                />
                <path
                  d="M64.5092 8.09091L66.5121 11.9048L68.5646 8.09091H71.6683L68.5078 13.5455L71.7535 19H68.6641L66.5121 15.2287L64.3956 19H61.2706L64.5092 13.5455L61.3842 8.09091H64.5092Z"
                  fill="url(#paint3_linear_2_7)"
                />
                <path
                  d="M78.0035 19.2131C76.9003 19.2131 75.9463 18.9787 75.1413 18.5099C74.3411 18.0365 73.7232 17.3783 73.2876 16.5355C72.852 15.688 72.6342 14.7055 72.6342 13.5881C72.6342 12.4612 72.852 11.4763 73.2876 10.6335C73.7232 9.78598 74.3411 9.12784 75.1413 8.65909C75.9463 8.18561 76.9003 7.94886 78.0035 7.94886C79.1068 7.94886 80.0585 8.18561 80.8587 8.65909C81.6636 9.12784 82.2839 9.78598 82.7195 10.6335C83.1551 11.4763 83.3729 12.4612 83.3729 13.5881C83.3729 14.7055 83.1551 15.688 82.7195 16.5355C82.2839 17.3783 81.6636 18.0365 80.8587 18.5099C80.0585 18.9787 79.1068 19.2131 78.0035 19.2131ZM78.0178 16.8693C78.5196 16.8693 78.9387 16.7273 79.2749 16.4432C79.611 16.1544 79.8643 15.7614 80.0348 15.2642C80.21 14.767 80.2976 14.2012 80.2976 13.5668C80.2976 12.9323 80.21 12.3665 80.0348 11.8693C79.8643 11.3722 79.611 10.9792 79.2749 10.6903C78.9387 10.4015 78.5196 10.2571 78.0178 10.2571C77.5111 10.2571 77.085 10.4015 76.7393 10.6903C76.3984 10.9792 76.1404 11.3722 75.9652 11.8693C75.7947 12.3665 75.7095 12.9323 75.7095 13.5668C75.7095 14.2012 75.7947 14.767 75.9652 15.2642C76.1404 15.7614 76.3984 16.1544 76.7393 16.4432C77.085 16.7273 77.5111 16.8693 78.0178 16.8693Z"
                  fill="url(#paint4_linear_2_7)"
                />
                <path
                  d="M85.3402 19V8.09091H88.2237V10.0156H88.3516C88.5788 9.37642 88.9576 8.87216 89.4879 8.50284C90.0182 8.13352 90.6527 7.94886 91.3913 7.94886C92.1394 7.94886 92.7763 8.13589 93.3018 8.50994C93.8274 8.87926 94.1778 9.38116 94.353 10.0156H94.4666C94.6892 9.39062 95.0916 8.8911 95.674 8.51705C96.2611 8.13826 96.9548 7.94886 97.755 7.94886C98.773 7.94886 99.5992 8.2732 100.234 8.92188C100.873 9.56581 101.192 10.4796 101.192 11.6634V19H98.174V12.2599C98.174 11.6539 98.013 11.1993 97.691 10.8963C97.3691 10.5933 96.9666 10.4418 96.4837 10.4418C95.9344 10.4418 95.5059 10.617 95.1982 10.9673C94.8904 11.313 94.7365 11.7699 94.7365 12.3381V19H91.8033V12.196C91.8033 11.661 91.6494 11.2348 91.3416 10.9176C91.0386 10.6004 90.6385 10.4418 90.1413 10.4418C89.8052 10.4418 89.5021 10.527 89.2322 10.6974C88.9671 10.8632 88.7564 11.0975 88.6001 11.4006C88.4439 11.6989 88.3658 12.0492 88.3658 12.4517V19H85.3402Z"
                  fill="url(#paint5_linear_2_7)"
                />
                <path
                  d="M105.06 23.0909C104.676 23.0909 104.316 23.0601 103.98 22.9986C103.649 22.9418 103.374 22.8684 103.156 22.7784L103.838 20.5199C104.193 20.6288 104.513 20.688 104.797 20.6974C105.086 20.7069 105.334 20.6406 105.543 20.4986C105.756 20.3565 105.929 20.1151 106.061 19.7741L106.239 19.3125L102.325 8.09091H105.507L107.766 16.1023H107.879L110.159 8.09091H113.362L109.122 20.179C108.919 20.7661 108.642 21.2775 108.291 21.7131C107.946 22.1534 107.508 22.492 106.977 22.7287C106.447 22.9702 105.808 23.0909 105.06 23.0909Z"
                  fill="url(#paint6_linear_2_7)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_2_7"
                    x1="3"
                    y1="-2.5"
                    x2="113"
                    y2="26.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015463" />
                    <stop offset="0.0846748" stop-color="#603917" />
                    <stop offset="0.156492" stop-color="#7CC0EA" />
                    <stop offset="0.228189" stop-color="#F498C0" />
                    <stop offset="0.352297" stop-color="#EE3124" />
                    <stop offset="0.476978" stop-color="#F57F29" />
                    <stop offset="0.598075" stop-color="#FFD600" />
                    <stop offset="0.719004" stop-color="#58B947" />
                    <stop offset="0.837592" stop-color="#0054A6" />
                    <stop offset="0.95355" stop-color="#78249F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Link>
          <div>
            {/* Navigation Items */}
            <NavigationMenu
              value={activeItem}
              onValueChange={setActiveItem}
              className="p-2 w-full"
            >
              <NavigationMenuList>
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger>Game Server</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute">
                    <ul className="grid w-[400px] p-4 md:w-[400px] lg:w-[400px] ">
                      {gameServers.map((gameServers) => (
                        <ListItem
                          value={gameServers.title}
                          onClick={closeSubMenu}
                          key={gameServers.title}
                          gameIcon={gameServers.gameIcon}
                          href={gameServers.href}
                          title={gameServers.title}
                        >
                          {gameServers?.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger>Other Hosting</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link href="/web">
                            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Webhosting
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                NodeJS, PHP (WordPress), Python, and Ruby
                                supported!
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        value="web"
                        onClick={closeSubMenu}
                        href="/web"
                        title="Webhosting"
                      >
                        Powered by cPanel.
                      </ListItem>
                      <ListItem
                        value="dedicated"
                        onClick={closeSubMenu}
                        href="/dedicated"
                        title="Dedicated Server"
                      >
                        Unmanaged and root access.
                      </ListItem>
                      <ListItem
                        value="colocation"
                        onClick={closeSubMenu}
                        href="/colocation"
                        title="Colocation"
                      >
                        Bring your own rack server.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* More Navigation Items */}
          <ul className="flex space-x-4">
            <NavigationMenu
              value={activeItem}
              onValueChange={setActiveItem}
              className="p-2 w-full"
            >
              <NavigationMenuList>
                <NavigationMenuItem className="relative">
                  <Link
                    href="https://foxomy.com/billing/submitticket.php"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger>Login</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute">
                    <ul className="grid w-[150px] p-4 md:w-[200px] md:grid-cols-1 lg:w-[300px] ">
                      {LoginDropdown.map((LoginDropdown) => (
                        <ListItem
                          value={LoginDropdown.title}
                          onClick={closeSubMenu}
                          key={LoginDropdown.title}
                          gameIcon={LoginDropdown.gameIcon}
                          href={LoginDropdown.href}
                          title={LoginDropdown.title}
                        >
                          {LoginDropdown?.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    href: string;
    title: string;
    gameIcon?: string;
    value: string;
    onClick: () => void;
  }
>(
  (
    { className, title, gameIcon, children, href, value, onClick, ...props },
    ref
  ) => {
    return (
      <li>
        <Link href={href} legacyBehavior passHref>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-bluey-300/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            onClick={onClick}
            data-value={value}
            {...props}
          >
            <div className="flex items-center text-sm font-medium leading-none">
              <img
                src={gameIcon || "/gameIcons/placeholder.png"}
                alt={title}
                className="mr-2 h-5 w-auto"
              />
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
