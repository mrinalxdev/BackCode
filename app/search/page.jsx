"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Post from "@/components/Post";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    if (q) {
      fetch(`/api/search?q=${encodeURIComponent(q)}`)
        .then((response) => response.json())
        .then((data) => setResults(data));
    }
  }, [q]);

  return (
    <Suspense>
      <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 dark:from-black dark:to-slate-900">
        <Navbar />
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold my-8 dark:text-white">Search Results for "{q}"</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {results.map((item) => (
              <Post
                key={item.id}
                title={item.title}
                languages={item.languages}
                desc={item.desc}
                link={item.link}
              />
            ))}
          </div>
          {results.length === 0 && (
            <div className="h-screen dark:text-gray-300">
              We are working hard to bring many head starts for your backend
              projects !!
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
}
