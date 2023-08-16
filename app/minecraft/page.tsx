import React from "react";

export default function Home() {
  const backgroundFadeStyle = {
    backgroundImage: `url('/minecraft.webp')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  };

  const gradientOverlayStyle = {
    content: "''",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-between p-24 relative"
        style={backgroundFadeStyle}
      >
        <div style={{ ...gradientOverlayStyle, width: "25%" }} />
        <div>
          <div className="mt-20 text-4xl font-bold">Minecraft Hosting</div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <div className="mt-20 text-2xl">My next section</div>
        </div>
      </div>
    </>
  );
}
