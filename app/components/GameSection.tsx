import Link from "next/link";
export function GameSection() {
  const games = [
    {
      name: "Minecraft",
      price: "from $2.00/GB",
      bg: "/images/Minecraft_Trails&Tales_.Net_800x450.png",
      link: "/game",
      badge: "Best Selling",
    },
    {
      name: "Custom ✨",
      price: "Use our game switcher!",
      bg: "/images/minecraftcard1.jpg",
      link: "/game",
      badge: "",
    },
  ];

  return (
    <div className="bg-no-repeat flex flex-col container">
      <div className="flex flex-col p-4">
        <h1
          className="text-[3.00rem] leading-none font-bold mb-2 text-green-50"
          style={{
            letterSpacing: "-0.16rem",
          }}
        >
          Game Hosting
        </h1>

        <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50">
          Minecraft is our best-selling game hosting service.
        </p>
      </div>

      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {games.map((game) => (
          <Link href={game.link} key={game.name}>
            <div className="relative rounded-lg transition-transform transform hover:scale-105 h-48 border group ">
              {game.badge !== "" && (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="absolute top-0 right-3 -translate-y-1/2 z-10">
                    <span className="border border-bluey-400 bg-bluey-600 text-bluey-200 gap-1 text-sm font-medium break-words py-1 px-2 rounded mr-1">
                      {game.badge}
                    </span>
                  </div>
                </div>
              )}
              <img
                src={game.bg}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />

              <div className="absolute top-0 h-1/4 w-full" />
              <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-bluey-500 to-transparent flex items-center justify-end pr-4 rounded-md">
                <span className="transition-transform transform group-hover:translate-x-2">
                  <svg
                    viewBox="0 0 320 512"
                    fill="currentColor"
                    width="24px"
                    height="24px"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </span>
              </div>
              <p className="absolute bottom-8 left-4 text-green-50 font-bold text-2xl">
                {game.name}
              </p>
              <p className="absolute bottom-2 left-4 text-green-100 font-medium text-lg">
                {game.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GameSection;
