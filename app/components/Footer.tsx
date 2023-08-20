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

  const legalLinks = [
    { label: "Terms", url: "/terms" },
    { label: "Privacy", url: "/privacy" },
  ];

  return (
    <footer className="w-full container py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Coems"
          >
            BunArcticFloof
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
      <div className="pt-5 mt-5 border-t border-zinc-800">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  className={linkClassName}
                  href={link.url}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-3 sm:hidden">
              <Link
                className="flex-none text-xl font-semibold dark:text-white"
                href="/"
                aria-label="Coems"
              >
                BunArcticFloof
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
  );
}

export default Footer;
