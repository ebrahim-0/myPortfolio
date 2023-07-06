export default function Footer({ theme }) {
  return (
    <div
      className={`${
        theme === "black" ? "text-white" : "text-black"
      } p-7 border-t-[1px]  border-slate-300`}
      style={{ borderColor: `${theme === "black" ? "white" : "black"}` }}
    >
      <p className="text-center">Copyright ©2023 All rights reserved</p>
    </div>
  );
}
