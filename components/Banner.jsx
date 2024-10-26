"use client";

import React, { useState } from "react";
import { Book, Scale, Search, Shield, ShieldOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto">
      <div className="text-center">
        <div className="mt-[2rem] mb-6 p-2 border text-sm lg:text-[1rem] shadow-xl rounded-[2rem] max-w-[40%] mx-auto text-gray-500 dark:text-gray-400 dark:border-gray-700 dark:shadow-gray-900">
          Working on 6 + Head start codes !!
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          Find <span className="text-primary">Optimized Backend Code</span> for
          Your App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Search for the most efficient backend solutions to integrate into your
          application.
        </p>
      </div>

      <form onSubmit={handleSearch} className="m-4 mt-6 flex gap-2">
        <Input
          placeholder="Search for code ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        <Button type="submit" className="dark:bg-gray-200 dark:text-black">
          <Search />
        </Button>
      </form>

      <div className="flex mx-auto gap-4">
        <Link href="/coming-soon">
          <Button
            variant="outline"
            className="flex gap-2 hover:shadow-lg duration-100 ease-in-out"
          >
            <Book />
            Documentations
          </Button>
        </Link>
        <Link href={"/coming-soon"}>
          <Button
            variant="outline"
            className="flex gap-2 hover:shadow-lg duration-100 ease-in-out"
          >
            <Shield />
            Secured Api Builder
          </Button>
        </Link>
      </div>
    </div>
    
  );
};

export default Banner;
