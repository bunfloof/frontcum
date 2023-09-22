import Link from "next/link";
export function GameSection() {
  const games = [
    {
      name: "Minecraft",
      price: "from $2.00/GB",
      bg: "/images/minecraftcard1.jpg",
      link: "/game",
    },
    {
      name: "Custom ✨",
      price: "Use our game switcher!",
      bg: "/images/minecraftcard1.jpg",
      link: "/game",
    },
    //... You can add unique images for each game when you have them
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
          Powered by Intel Core i9-13900KS and AMD Ryzen 9 7950X3D.
        </p>
      </div>

      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {games.map((game) => (
          <Link href={game.link} key={game.name}>
            <div className="relative rounded-md overflow-hidden transition-transform transform hover:scale-105 h-48 border">
              <img
                src={game.bg}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent from-emerald-800/50" />
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
