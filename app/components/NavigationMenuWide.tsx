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
    href: "/coming-soon",
  },
  {
    title: "Ark: Survival Evolved",
    href: "/coming-soon",
  },
  {
    title: "Arma 3",
    href: "/coming-soon",
  },
  {
    title: "Barotrauma",
    href: "/coming-soon",
  },
  {
    title: "BeamMP",
    href: "/coming-soon",
  },
  {
    title: "Factorio",
    href: "/coming-soon",
  },
  {
    title: "Garry's Mod",
    href: "/coming-soon",
  },
  {
    title: "Grand Theft Auto",
    href: "/coming-soon",
  },
  {
    title: "Icarus",
    href: "/coming-soon",
  },
  {
    title: "Killing Floor 2",
    href: "/coming-soon",
  },
  {
    title: "Left 4 Dead 2",
    href: "/coming-soon",
  },
  {
    title: "Minecraft",
    href: "/minecraft",
    gameIcon: "/gameIcons/minecraftgrassblock.png",
  },
  {
    title: "Mordhau",
    href: "/coming-soon",
  },
  {
    title: "Project Zomboid",
    href: "/coming-soon",
  },
  {
    title: "Rust",
    href: "/coming-soon",
  },
  {
    title: "Satisfactory",
    href: "/coming-soon",
  },
  {
    title: "SCP: Secret Laboratory",
    href: "/coming-soon",
  },
  {
    title: "Sons of the Forest",
    href: "/coming-soon",
  },
  {
    title: "Starbound",
    href: "/coming-soon",
  },
  {
    title: "Stardew Valley",
    href: "/coming-soon",
  },
  {
    title: "Team Fortress 2",
    href: "/coming-soon",
  },
  {
    title: "The Forest",
    href: "/coming-soon",
  },
  {
    title: "The Isle",
    href: "/coming-soon",
  },
  {
    title: "Unturned",
    href: "/coming-soon",
  },
  {
    title: "V Rising",
    href: "/coming-soon",
  },
  {
    title: "Valheim",
    href: "/coming-soon",
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
    title: "Billing Panel",
    href: "/coming-soon",
  },
  {
    title: "cPanel (us1.fur)",
    href: "/coming-soon",
  },
  {
    title: "Pterodactyl Panel (panel.fox)",
    href: "/coming-soon",
  },
  {
    title: "Pterodactyl Panel 2 (panel2.fox)",
    href: "/coming-soon",
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
      className={`sticky top-0 h-16 border-b border-transparent transition-colors duration-300 ease-in-out ${
        isScrolled ? "border-zinc-800" : ""
      } flex items-center justify-center px-8 py-4 backdrop-blur bg-zinc/50`}
    >
      <div className="flex items-center justify-between space-x-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-4">
          {/* Add your logo image here */}
          <img src="/path/to/logo.svg" alt="Coems🤑🤑" className="h-8 w-auto" />
          <div>
            {/* Navigation Items */}
            <NavigationMenu
              value={activeItem}
              onValueChange={setActiveItem}
              className="p-2 w-full"
            >
              <NavigationMenuList>
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger>
                    Minecraft Server
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link href="/">
                            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Minecraft
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Start your Minecraft server today!
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        value="minecraft"
                        onClick={closeSubMenu}
                        href="/minecraft"
                        title="Minecraft"
                      >
                        Minecraft is a sandbox video game developed by Mojang.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
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
                  <NavigationMenuTrigger>Cloud Hosting</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute">
                    <ul className="grid w-[200px] p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                      {cloudHosting.map((cloudHosting) => (
                        <ListItem
                          value={cloudHosting.title}
                          onClick={closeSubMenu}
                          key={cloudHosting.title}
                          gameIcon={cloudHosting.gameIcon}
                          href={cloudHosting.href}
                          title={cloudHosting.title}
                        >
                          {cloudHosting?.description}
                        </ListItem>
                      ))}
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
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute">
                  <ul className="grid w-[200px] p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                    {cloudHosting.map((cloudHosting) => (
                      <ListItem
                        value={cloudHosting.title}
                        onClick={closeSubMenu}
                        key={cloudHosting.title}
                        gameIcon={cloudHosting.gameIcon}
                        href={cloudHosting.href}
                        title={cloudHosting.title}
                      >
                        {cloudHosting?.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuList>
                <NavigationMenuItem className="relative">
                  <Link href="/docs" legacyBehavior passHref>
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
