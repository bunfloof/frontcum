"use client";

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

const NavigationMenuDemo = () => {
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
  return (
    <>
      <div className="w-full text-white bg-black/[0.6]">
        <div className="items-center flex justify-between mx-auto py-4 px-10 container">
          <div
            className="cursor-pointer text-2xl font-semibold"
          >
            kitten.network
          </div>
          
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

      <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
        <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-background p-1 shadow-[0_2px_10px]">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Learn{" "}
              <CaretDownIcon
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="border shadow-blackA7 bg-popover data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <svg
                        aria-hidden
                        width="38"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="white"
                      >
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-foreground">
                        Radix Primitives
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Unstyled, accessible components for React.
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Overview{" "}
              <CaretDownIcon
                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="border absolute top-0 left-0 w-full sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/docs/primitives/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/docs/primitives/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/docs/primitives/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/docs/primitives/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/docs/primitives/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/docs/primitives/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="https://github.com/radix-ui"
            >
              Github
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-popover border" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-background transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </>
  );
};

type ListItemProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
  href: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2]">{title}</div>
          <p className="leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
