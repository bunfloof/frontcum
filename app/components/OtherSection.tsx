import Link from "next/link";
export function OtherSection() {
  const others = [
    {
      name: "Web Hosting",
      price: "from $2.00/mo",
      bg: "/images/cpanelcard1.jpg",
      link: "/web",
    },
    {
      name: "Dedicated",
      price: "from $130.00/mo",
      bg: "/images/dedicatedcard1.jpg",
      link: "/dedicated",
    },
    {
      name: "Colocation",
      price: "from $150.00/mo",
      bg: "/images/colocationcard1.jpg",
      link: "/colocation",
    },
    //... You can add unique images for each game when you have them
  ];

  return (
    <div className="bg-no-repeat flex flex-col container pt-12">
      <div className="flex flex-col p-4">
        <h1
          className="text-[3.00rem] leading-none font-bold mb-2 text-green-50"
          style={{
            letterSpacing: "-0.16rem",
          }}
        >
          Other Hosting
        </h1>
        <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50">
          Custom solutions.
        </p>
      </div>

      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {others.map((other) => (
          <Link href={other.link}>
            <div
              key={other.name}
              className="relative rounded-md overflow-hidden transition-transform transform hover:scale-105 h-48"
            >
              <img
                src={other.bg}
                alt={other.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent from-emerald-800/50" />
              <p className="absolute bottom-8 left-4 text-green-50 font-bold text-2xl">
                {other.name}
              </p>
              <p className="absolute bottom-2 left-4 text-green-100 font-medium text-lg">
                {other.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OtherSection;
