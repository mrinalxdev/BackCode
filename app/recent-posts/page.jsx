"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HouseIcon, MessageCircle, PencilIcon, User2 } from "lucide-react";
import Banner from "./Banner";
import Posts from "./Posts";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { width: "240px", transition: { duration: 0.3 } },
    closed: { width: "70px", transition: { duration: 0.3 } },
  };

  const linkTextVariants = {
    open: {
      opacity: 1,
      x: 0,
      display: "inline-block",
      transition: { delay: 0.2 },
    },
    closed: {
      opacity: 0,
      x: -10,
      display: "none",
      transition: { duration: 0.1 },
    },
  };

  const navItems = [
    { icon: HouseIcon, text: "Home", href: "#" },
    { icon: MessageCircle, text: "Post", href: "#" },
    { icon: PencilIcon, text: "Discussions", href: "#" },
  ];

  return (
    <div className="flex h-screen">
      <motion.div
        className="bg-slate-800 text-white p-4 flex flex-col"
        initial="open"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="flex items-center mb-8">
          <span className="text-2xl font-bold">
            <Logo />
          </span>
          <motion.span
            className="text-xl font-semibold ml-2"
            variants={linkTextVariants}
          >
            Research<span className="text-yellow-500">Hub</span>
          </motion.span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200 ${
                    isOpen ? "" : "justify-center"
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <motion.span variants={linkTextVariants} className="ml-2">
                    {item.text}
                  </motion.span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-4 border-t border-slate-700">
          <a
            href="#"
            className={`flex items-center p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200 ${
              isOpen ? "" : "justify-center"
            }`}
          >
            <User2 className="w-6 h-6 flex-shrink-0" />
            <motion.span variants={linkTextVariants} className="ml-2">
              Profile
            </motion.span>
          </a>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="self-end mt-4"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </Button>
      </motion.div>
      <div className="flex-1 p-4">
        <div>
          <Banner />
          <h1 className="mt-12 ml-2">Recent Posts</h1>
          <Posts />
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-graduation-cap"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    </div>
  );
};
