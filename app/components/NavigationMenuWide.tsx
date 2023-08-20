"use client";

import * as React from "react";
import Link from "next/link";

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
  {
    title: "7 Days to Die",
    href: "/game",
  },
  {
    title: "Ark: Survival Evolved",
    href: "/game",
  },
  {
    title: "Arma 3",
    href: "/game",
  },
  {
    title: "Barotrauma",
    href: "/game",
  },
  {
    title: "BeamMP",
    href: "/game",
  },
  {
    title: "Factorio",
    href: "/game",
  },
  {
    title: "Garry's Mod",
    href: "/game",
  },
  {
    title: "Grand Theft Auto",
    href: "/game",
  },
  {
    title: "Icarus",
    href: "/game",
  },
  {
    title: "Killing Floor 2",
    href: "/game",
  },
  {
    title: "Left 4 Dead 2",
    href: "/game",
  },
  {
    title: "Minecraft",
    href: "/game",
    gameIcon: "/gameIcons/minecraftgrassblock.png",
  },
  {
    title: "Mordhau",
    href: "/game",
  },
  {
    title: "Project Zomboid",
    href: "/game",
  },
  {
    title: "Rust",
    href: "/game",
  },
  {
    title: "Satisfactory",
    href: "/game",
  },
  {
    title: "SCP: Secret Laboratory",
    href: "/game",
  },
  {
    title: "Sons of the Forest",
    href: "/game",
  },
  {
    title: "Starbound",
    href: "/game",
  },
  {
    title: "Stardew Valley",
    href: "/game",
  },
  {
    title: "Team Fortress 2",
    href: "/game",
  },
  {
    title: "The Forest",
    href: "/game",
  },
  {
    title: "The Isle",
    href: "/game",
  },
  {
    title: "Unturned",
    href: "/game",
  },
  {
    title: "V Rising",
    href: "/game",
  },
  {
    title: "Valheim",
    href: "/game",
  },
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
    href: "https://us1.rapidcpanelserver.com:2087/",
  },
  {
    title: "Pterodactyl (panel.fox)",
    href: "https://panel.foxomy.com",
  },
  {
    title: "Pterodactyl 2 (panel2.fox)",
    href: "https://panel2.foxomy.com",
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
  return (
    <nav
      className={`sticky top-0 h-16 z-50 border-b border-transparent transition-colors duration-300 ease-in-out ${
        isScrolled ? "border-zinc-800" : ""
      } flex items-center justify-center px-8 py-4 backdrop-blur bg-zinc/50`}
    >
      <div className="w-full flex flex-row justify-between items-center py-4 px-10 mx-auto container">
        <div className="flex items-center space-x-4">
          {/* Add your logo image here */}
          <Link href="/">
            <p className="hover:text-muted-foreground transition-colors">
              BunArcticFloof
            </p>
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
                    <ul className="grid w-[800px] p-4 md:w-[1000px] md:grid-cols-5 lg:w-[1200px] ">
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
                        value="game"
                        onClick={closeSubMenu}
                        href="/game"
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
                  <Link href="https://foxomy.com/billing/submitticket.php" legacyBehavior passHref>
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
