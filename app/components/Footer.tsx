"use client";
import Link from "next/link";
export function Footer() {
  const linkClassName =
    "inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors";

  const sections = [
    {
      title: "Services",
      links: [
        { label: "Game Hosting", url: "/game" },
        { label: "Minecraft Hosting", url: "/game" },
        { label: "Web Hosting", url: "/web" },
        { label: "Dedicated Servers", url: "/dedicated" },
        { label: "Colocation", url: "/colocation" },
      ],
    },
    {
      title: "Company",
      links: [{ label: "About us", url: "/" }],
    },
    {
      title: "Resources",
      links: [
        {
          label: "Open Ticket",
          url: "https://foxomy.com/billing/submitticket.php",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Acceptable Usage Policy", url: "/aup" },
        { label: "Privacy", url: "/privacy" },
        { label: "Service License Agreement", url: "/sla" },
        { label: "Terms of Service", url: "/terms" },
      ],
    },
  ];

  return (
    <>
      <div className="items-center text-violet-100 py-1 bg-card mt-10 py-6 relative overflow-hidden">
        <div>
          <span
            className="left-0 opacity-[0.20] absolute right-0 top-0 h-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(27deg, rgba(87,230,170), rgba(94,171,194) 51%, rgba(26,163,255,1) 100%)",
            }}
          />
        </div>
      </div>
      <div className="bg-card">
        {" "}
        <footer className="w-full container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <Link
                className="flex-none text-xl font-semibold dark:text-white"
                href="/"
                aria-label="Coems"
              >
                Foxomy
              </Link>
              <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © 2023
              </p>
            </div>
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
                  {section.title}
                </h4>
                <div className="mt-3 grid space-y-3 text-sm">
                  {section.links.map((link) => (
                    <p key={link.label} className={linkClassName}>
                      <Link href={link.url}>{link.label}</Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-5 mt-5 border-zinc-800">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex justify-between items-center">
                <div className="mt-3 sm:hidden">
                  <Link
                    className="flex-none text-xl font-semibold dark:text-white"
                    href="/"
                    aria-label="Coems"
                  >
                    Foxomy
                  </Link>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    © 2023.
                  </p>
                </div>
                {/* Social Brands */}
                <div className="space-x-4"></div>
                {/* End Social Brands */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
