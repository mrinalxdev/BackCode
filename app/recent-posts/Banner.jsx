import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  preload: false,
});

const Banner = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-[10px]">
      <h1 className={`${poppins.className} text-5xl font-semibold px-2`}>
        Good Afternoon, Mrinal
      </h1>
      <p className={`${poppins} font-light px-4 pt-2 `}>
        Click on the research topics to enter the discussion room .
      </p>
    </div>
  );
};

export default Banner;
