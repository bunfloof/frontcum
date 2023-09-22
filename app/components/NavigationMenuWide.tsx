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
    title: "Pterodactyl 1 (panel.fur)",
    href: "https://panel.furweb.com",
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
        isScrolled ? "border-zinc-950/30" : ""
      } flex items-center justify-center px-8 py-4 backdrop-blur bg-zinc/50`}
    >
      <div className="w-full flex flex-row justify-between items-center py-4 px-10 mx-auto container">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <svg
                className="transition-colors"
                width="36"
                height="36"
                version="1.1"
                viewBox="0 0 210 210"
                fill={isHovered ? "rgb(161,161,170)" : "currentColor"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m81.854 171.68c-51.546-5.4939-72.446-73.163-31.859-103.15l1.6113-1.1906 0.31351-2.5135c1.4879-11.929 5.947-23.354 11.09-28.414l1.3153-1.2941 0.83087 0.89721c2.8391 3.0658 6.5906 10.398 8.6031 16.815l0.51136 1.6305 1.3304 0.16768c0.7317 0.09223 2.4388 0.44186 3.7935 0.77696l2.4632 0.60927 0.67698-1.3491c3.0642-6.1066 12.093-13.24 14.71-11.623 0.96747 6.0124-2.6133 17.888-0.37131 20.341 1.0166 1.1123 1.9681 2.7392 3.8998 6.6682 4.4114 8.9724 8.6785 12.293 17.624 13.713 4.3124 0.68462 6.5724 2.6542 5.4226 4.7256-2.9401 5.2962-9.8157 8.0924-20.562 8.3624-53.108 1.3345 11.19 61.284 11.19 61.284s-81.77-48.37-20.662-51.242c11.238-4e-3 21.159 3.3794 29.052 9.9088 14.869 12.301 34.29 11.245 43.66-2.3744 3.554-5.1655 4.7844-14.74 2.473-19.243-1.059-2.0633 2.4886 1.4859 4.9734 4.9755 18.977 26.651 6.2407 64.105-24.176 71.099-2.6741 0.61486-62.609 0.98774-67.912 0.42251zm8.4734-91.446c-2.3916-4.4637-7.8859-5.8288-11.705-2.9081-1.5465 1.1828-1.5396 1.4037 0.04063 1.2942 2.186-0.15144 6.5814 0.47678 8.8507 1.265 2.6394 0.91676 3.1515 0.98028 2.8132 0.34891z" />
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
