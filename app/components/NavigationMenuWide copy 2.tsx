"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

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
    <div className={`w-full sticky top-0  border-b border-transparent transition-colors duration-300 ease-in-out ${
      isScrolled ? "border-zinc-800" : ""
    }`}>
      <div className={`container items-center justify-center backdrop-blur bg-zinc/50`}>
        <div className="items-center flex justify-between mx-auto py-4">
          <a
            className="cursor-pointer text-2xl font-semibold"
            href="https://kitten.network/"
          >
            kitten.network
          </a>
          
          <div className="gap-4 flex">
            <a
              className="items-center backdrop-blur-lg gap-1 cursor-pointer flex font-medium py-2 px-4 rounded-md"
              href="https://kitten.network/as/48581"
            >
              <span>AS48581</span>
            </a>
            <a
              className="items-center backdrop-blur-lg gap-1 cursor-pointer flex font-medium py-2 px-4 rounded-md"
              href="https://kitten.network/as/50224"
            >
              <span>AS50224</span>
            </a>
            <a
              className="items-center backdrop-blur-lg gap-1 cursor-pointer flex font-medium py-2 px-4 rounded-md"
              href="https://kitten.network/as/203635"
            >
              <span>AS203635</span>
            </a>
            <a
              className="items-center backdrop-blur-lg gap-1 cursor-pointer flex font-medium py-2 px-4 rounded-md"
              href="https://kitten.network/geofeed"
            >
              <span>Geofeed</span>
            </a>
            <a
              className="items-center bg-blue-100/[0.1] gap-1 cursor-pointer flex font-medium py-2 px-4 rounded-md"
              href="https://kitten.network/mailto:hello@kitten.systems"
            >
              <span>Contact</span>
              <svg
                className="h-4 w-4"
                fill="none"
                height="1em"
                viewBox="0 0 16 16"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
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
