import Navbar from "@/components/Navbar";
import { BicepsFlexed, Mail, MoveRight } from "lucide-react";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 dark:from-black dark:to-slate-900">
      <Navbar />

      <div className="mx-auto max-w-[70%] mt-[8rem] h-[70%] ">
        <div className="text-center flex items-center justify-center h-[80%] flex-col">
          <Biceps />
          <div className="flex flex-col text-center">
            <h1 className="mt-2 font-semibold text-xl font-sans dark:text-gray-200">
              We're still
            </h1>
            <h1 className="mt-2 text-[5rem] font-bold font-sans dark:text-white">
              COOKING UP NEW FEATURES.
            </h1>
            <h1 className="mt-4 text-2xl dark:text-gray-200">
              I will be launching few features soon next month !! <br /> Stay
              Tune.
            </h1>
          </div>
          <Link href={"https://x.com/Hi_Mrinal"}>
            <div className="mt-[5.5rem] flex items-center gap-5 bg-gray-400 dark:bg-gray-700 px-2 py-2 rounded-full cursor-pointer">
              <div className="bg-black rounded-full">
                <div className="text-white p-2 rounded-full">
                  <Mail className="text-white size-7" />
                </div>
              </div>
              <div className="">
                <h1 className="dark:text-white">Notify Me</h1>
              </div>
              <div>
                <MoveRight className="dark:text-white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

const Biceps = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-biceps-flexed"
      >
        <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
        <path d="M15 14a5 5 0 0 0-7.584 2" />
        <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
      </svg>
    </div>
  );
};
