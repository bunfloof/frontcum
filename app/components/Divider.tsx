export function Divider() {
  return (
    <div className="items-center text-violet-100 py-12 relative overflow-hidden">
      <div>
        <span
          className="left-0 opacity-[0.35] absolute right-0 top-0 h-[1px]"
          style={{
            backgroundImage:
              "linear-gradient(27deg, rgba(87,230,170), rgba(94,171,194) 51%, rgba(26,163,255,1) 100%)",
          }}
        />
        <span
          className="bottom-[2.56rem] blur-[33px] left-[76.22rem] opacity-10 absolute right-[-12.50rem] top-[-12.50rem] rounded-full p-1 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 67, 136), rgb(4,129,205))",
          }}
        />
        <span
          className="bottom-[2.56rem] blur-[33px] left-[-12.50rem] opacity-10 absolute right-[76.22rem] top-[-12.50rem] rounded-full p-1 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 0, 136), rgb(17,168,169))",
          }}
        />
      </div>
    </div>
  );
}

export default Divider;
