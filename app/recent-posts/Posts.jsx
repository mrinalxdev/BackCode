"use client"

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion'
import { Calendar, User } from "lucide-react";
import { useState } from "react";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title:
        "Optimizing Recommendation Systems using Collaborative Filtering and Matrix Factorization",
      description:
        "Recommendation systems play a vital role in today's digital landscape, influencing user preferences and driving business growth. This project aims to enhance the accuracy and efficiency of recommendation systems by leveraging collaborative filtering and matrix factorization techniques.",
      when: "3 months ago",
      participants: "5 active",
    },
    {
      id: 2,
      title:
        "Deep Learning-based Image Compression using Convolutional Neural Networks",
      description:
        "Exploring efficient image compression techniques using deep learning algorithms to reduce storage requirements and improve data transfer rates.",
      when: "2 months ago",
      participants: "3 active",
    },
    {
      id: 3,
      title:
        "Development of a Smart Home Automation System using IoT and Machine Learning",
      description:
        "Designing and implementing an intelligent home automation system integrating IoT devices and machine learning algorithms for enhanced energy efficiency and user convenience.",
      when: "6 months ago",
      participants: "7 active",
    },
    {
      id: 4,
      title: "Investigating the Impact of Quantum Computing on Cryptography",
      description:
        "Analyzing the effects of quantum computing on cryptographic security and developing quantum-resistant algorithms to ensure secure data transmission.",
      when: "4 months ago",
      participants: "2 active",
    },
    {
      id: 5,
      title:
        "Design and Optimization of a Solar-powered Electric Vehicle Charging System",
      description:
        "Developing sustainable EV charging solutions using solar energy, energy storage systems, and power electronics to reduce carbon footprint.",
      when: "1 month ago",
      participants: "4 active",
    },
    {
      id: 6,
      title:
        "Analysis of Energy Efficiency in Smart Grids using IoT and Machine Learning",
      description:
        "Improving energy efficiency in smart grids through IoT-enabled real-time monitoring, predictive analytics, and optimization techniques.",
      when: "5 months ago",
      participants: "6 active",
    },
    {
      id: 7,
      title:
        "Development of a Low-Cost Prosthetic Limb using 3D Printing and Sensor Integration",
      description:
        "Designing and developing affordable prosthetic limbs using 3D printing, sensor integration, and machine learning algorithms for enhanced user experience.",
      when: "3 months ago",
      participants: "5 active",
    },
  ];

  const [expandedId, setExpandedId] = useState();
  return (
    <motion.div
      className="mt-3 h-[70vh] overflow-y-auto px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          layoutId={post.id}
          onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
          className="w-full bg-transparent p-4 my-4 rounded-lg cursor-pointer hover:bg-slate-800 border ease-in-out duration-150"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.h1
            className="text-xl md:text-2xl font-bold"
            layoutId={`title-${post.id}`}
          >
            {post.title}
          </motion.h1>

          <motion.p
            className="text-sm md:text-md max-w-full my-2 md:my-4"
            layoutId={`description-${post.id}`}
          >
            {expandedId === post.id
              ? post.description
              : `${post.description.slice(0, 100)}...`}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 lg:flex-row lg:justify-between mt-4"
            layoutId={`content-${post.id}`}
          >
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" className="text-sm">
                Read Paper
              </Button>
              <Button variant="outline" className="text-sm">
                Discussions
              </Button>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              <motion.p
                className="text-xs md:text-sm flex items-center gap-2 p-2 bg-yellow-500 text-black rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-4 h-4" /> {post.when}
              </motion.p>
              <motion.p
                className="text-xs md:text-sm flex items-center gap-2 p-2 bg-yellow-500 text-black rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <User className="w-4 h-4" /> {post.participants}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Posts;
