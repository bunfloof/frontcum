export function MostPowerful() {
  return (
    <div
      className="bg-repeat text-green-100 py-64 relative overflow-hidden"
      style={{
        backgroundClip: "border-box, border-box",
        backgroundImage:
          "linear-gradient(27deg, rgba(17,168,169,0.24) 10%, rgba(0, 0, 136, 0) 40.5%), linear-gradient(327deg, rgba(4,129,205,0.24) 10%, rgba(0, 67, 136, 0) 40.5%)",
      }}
    >
      <div className="bg-no-repeat flex flex-col justify-center container">
        <div className="flex">
          <div className="flex-grow p-4">
            <h1
              className="text-[4.00rem] leading-none font-bold mb-11"
              style={{
                letterSpacing: "-0.16rem",
              }}
            >
              Our most powerful servers.
            </h1>

            <p className="text-[1.30rem] leading-7 font-medium my-5">
              Powered by the fastest rated processors in single threading.
              Experience reliable performance, uptime, and support with Foxomy.
            </p>
          </div>
          <div className="flex-grow">
            <svg
              width="36"
              height="36"
              version="1.1"
              viewBox="0 0 210 210"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[50vw] left-[84.22rem] absolute right-[-7.50rem] top-[0.00rem] align-middle overflow-clip opacity-5"
            >
              <path d="m81.854 171.68c-51.546-5.4939-72.446-73.163-31.859-103.15l1.6113-1.1906 0.31351-2.5135c1.4879-11.929 5.947-23.354 11.09-28.414l1.3153-1.2941 0.83087 0.89721c2.8391 3.0658 6.5906 10.398 8.6031 16.815l0.51136 1.6305 1.3304 0.16768c0.7317 0.09223 2.4388 0.44186 3.7935 0.77696l2.4632 0.60927 0.67698-1.3491c3.0642-6.1066 12.093-13.24 14.71-11.623 0.96747 6.0124-2.6133 17.888-0.37131 20.341 1.0166 1.1123 1.9681 2.7392 3.8998 6.6682 4.4114 8.9724 8.6785 12.293 17.624 13.713 4.3124 0.68462 6.5724 2.6542 5.4226 4.7256-2.9401 5.2962-9.8157 8.0924-20.562 8.3624-53.108 1.3345 11.19 61.284 11.19 61.284s-81.77-48.37-20.662-51.242c11.238-4e-3 21.159 3.3794 29.052 9.9088 14.869 12.301 34.29 11.245 43.66-2.3744 3.554-5.1655 4.7844-14.74 2.473-19.243-1.059-2.0633 2.4886 1.4859 4.9734 4.9755 18.977 26.651 6.2407 64.105-24.176 71.099-2.6741 0.61486-62.609 0.98774-67.912 0.42251zm8.4734-91.446c-2.3916-4.4637-7.8859-5.8288-11.705-2.9081-1.5465 1.1828-1.5396 1.4037 0.04063 1.2942 2.186-0.15144 6.5814 0.47678 8.8507 1.265 2.6394 0.91676 3.1515 0.98028 2.8132 0.34891z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostPowerful;
