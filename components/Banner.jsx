"use client"

import React, { useState } from 'react';
import { Scale, Search, ShieldOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from 'next/navigation';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto">
      <h1 className="text-center text-5xl font-bold">
        Search for most optimised backend code to integrate in your app
      </h1>

      <form onSubmit={handleSearch} className="m-4 mt-6 flex gap-2">
        <Input 
          placeholder="Search for code ..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">
          <Search />
        </Button>
      </form>

      <div className="flex mx-auto gap-4">
        <Button
          variant="outline"
          className="flex gap-2 hover:shadow-lg duration-100 ease-in-out"
        >
          <Scale />
          optimized LoadBalancer
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 hover:shadow-lg duration-100 ease-in-out"
        >
          <ShieldOff />
          optimized Ratelimiter
        </Button>
      </div>
    </div>
  );
};

export default Banner;