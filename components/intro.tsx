"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode, SiMedium } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Define the titles to cycle through
const titles = [
  "Software Engineer",
  "Full-Stack Developer",
  ".NET Developer",
  "AI Enthusiast" // Added another example
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // State for the current title index
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Effect to cycle titles
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 min-h-screen scroll-mt-[100rem]"
    >
      {/* Left side - Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 dark:bg-gray-950/50 p-6 rounded-2xl shadow-xl max-w-md w-full"
      >
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/profile.jpg"
              alt="Abhishek Dhale"
              width={200}
              height={200}
              priority={true}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          {/* <h2 className="text-3xl font-bold mb-2">Abhishek Dhale</h2> */}
          <div className="h-1 w-20 bg-blue-500 mb-4"></div>
          <p className="text-lg font-medium mb-2">MSCS @ CSUDH</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Graduated May 2025</p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/abhishek-dhale/"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-linkedin flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-linkedin"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://leetcode.com/u/Abhishek_Dhale/"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-leetcode flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-leetcode"
            >
              <SiLeetcode />
            </Link>
            {/* <Link
              href="https://medium.com"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            >
              <SiMedium />
            </Link> */}
            <Link
              href="https://github.com/abhishek-dhale"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            >
              <BsGithub />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right side - Content - Updated Structure */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="max-w-2xl flex flex-col items-start text-left"
      >
        {/* Welcome Box */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md shadow-lg text-lg font-medium">
            Welcome to my Portfolio
          </span>
        </div>

        {/* Greeting */}
        <h1 className="text-3xl md:text-4xl font-medium mb-3 text-gray-800 dark:text-white/90">
          Hi there <span className="inline-block animate-wave">👋</span>
        </h1>

        {/* Name - Added whitespace-nowrap */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 dark:text-white whitespace-nowrap">
          I am <span className="text-blue-500">Abhishek Dhale</span>
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-1 mb-4 max-w-xl">
          Software Engineer with a proven track record of building scalable, high-performance .NET solutions and integrating cutting-edge technologies to drive innovation, efficiency, and real-time impact.
        </p>

        {/* Animated Subtitle/Role */}
        <div className="h-8 mb-6 md:mb-8">
          <motion.p 
            key={titles[currentTitleIndex]}
            className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400" 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {titles[currentTitleIndex]}
          </motion.p>
        </div>
        
        {/* Links - Kept below title/subtitle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="https://drive.google.com/file/d/1ZjsBrvs-hX81fqAnBy4e-su3M55sKFai/view?usp=sharing"
            target="_blank"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-md"
          >
            Resume
          </Link>
          <Link
            href="#projects"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 shadow-md"
            onClick={() => {
              setActiveSection("Projects");
              setTimeOfLastClick(Date.now());
            }}
          >
            Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
