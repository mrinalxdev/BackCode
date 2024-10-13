"use client"

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from "../components/Banner";
import Post from "../components/Post";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mt-[4rem]">
        <Banner />
      </div>

      <div className="mt-[2rem] grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {items.map((item) => (
          <Post key={item.id} title={item.title} languages={item.languages} desc={item.desc} link={item.link} />
        ))}
      </div>
    </div>
  );
}