"use client";
import { NavigationMenuWide } from "../components/NavigationMenuWide";
import { NavigationMenuShort } from "../components/NavigationMenuShort";

export function NavigationMenuHandler() {
  return (
    <>
      {/* For screens smaller than lg (1024px), show NavigationMenuShort */}
      <span className="md:hidden">
        <NavigationMenuShort />
      </span>

      {/* For screens larger than or equal to lg (1024px), show NavigationMenuWide */}
      <span className="hidden md:inline">
        <NavigationMenuWide />
      </span>
    </>
  );
}
