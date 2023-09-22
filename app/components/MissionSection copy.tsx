export function MissionStatement() {
  return (
    <div className="flex flex-col bg-no-repeat">
      {/* Top Divider - Fade from Black to Red */}
      <div
        style={{
          height: "50px", // You can adjust this value to your liking
          background: "linear-gradient(to bottom, black, red)",
        }}
      ></div>

      {/* Main Content with Red Background */}
      <div
        style={{
          backgroundColor: "red",
        }}
        className="flex flex-col"
      >
        <div className="container">
          <div className="p-4">
            <div className="flex flex-col">
              <h1
                className="text-[3.00rem] leading-none font-bold mb-2 text-green-50"
                style={{
                  letterSpacing: "-0.16rem",
                }}
              >
                Our fight for human rights
              </h1>

              <p className="text-[1.30rem] leading-7 font-medium mt-5 text-green-50">
                Filler description
              </p>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              Filler text
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider - Fade from Red to Black */}
      <div
        style={{
          height: "50px", // You can adjust this value to your liking
          background: "linear-gradient(to top, black, red)",
        }}
      ></div>
    </div>
  );
}

export default MissionStatement;
