export function Footer() {
  const linkClassName =
    "inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200";

  const sections = [
    {
      title: "Services",
      links: [
        "Game Hosting",
        "Minecraft Hosting",
        "Dedicated Servers",
        "Colocation",
      ],
    },
    {
      title: "Company",
      links: ["About us"],
    },
    {
      title: "Resources",
      links: ["Open Ticket"],
    },
    {
      title: "Developers",
      links: ["Status", "GitHub"],
    },
  ];

  return (
    <footer className="w-full container py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Coems"
          >
            Bun
          </a>
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
                <p key={link}>
                  <a className={linkClassName} href="#">
                    {link}
                  </a>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm">
              {["Terms", "Privacy", "Status"].map((link) => (
                <a key={link} className={linkClassName} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-3 sm:hidden">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Coems"
              >
                Bun
              </a>
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
