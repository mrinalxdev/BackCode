'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Post from "../components/Post"

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Banner />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Post key={item.id} title={item.title} languages={item.languages} desc={item.desc} link={item.link} />
          ))}
        </div>
      </main>
    </div>
  )
}