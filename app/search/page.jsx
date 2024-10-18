"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Post from '@/components/Post';
import Navbar from '@/components/Navbar';

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    if (q) {
      fetch(`/api/search?q=${encodeURIComponent(q)}`)
        .then(response => response.json())
        .then(data => setResults(data));
    }
  }, [q]);

  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold my-8">Search Results for "{q}"</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {results.map((item) => (
          <Post key={item.id} title={item.title} languages={item.languages} desc={item.desc} link={item.link} />
        ))}
      </div>
      {results.length === 0 && <div className='h-screen'>
        We are working hard to bring many head starts for your backend projects !!
        </div>}
    </div>
  );
}