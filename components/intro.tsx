"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode, SiMedium } from "react-icons/si";

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 min-h-screen">
      {/* Left side - Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 dark:bg-gray-950/50 p-6 rounded-2xl shadow-xl max-w-sm w-full"
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
          <h2 className="text-3xl font-bold mb-2">Abhishek Dhale</h2>
          <div className="h-1 w-20 bg-blue-500 mb-4"></div>
          <p className="text-lg font-medium mb-2">MSCS @ CSUDH</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Graduating May 2025</p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/abhishek-dhale/"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://leetcode.com/u/Abhishek_Dhale/"
              target="_blank"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <SiLeetcode />
            </Link>
            <Link
              href="https://medium.com"
              target="_blank"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <SiMedium />
            </Link>
            <Link
              href="https://github.com/abhishek-dhale"
              target="_blank"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <BsGithub />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right side - Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="max-w-xl"
      >
        <h1 className="text-6xl font-bold mb-6">Hello</h1>
        <p className="text-2xl mb-8">I am Abhishek and I code.</p>
        
        <div className="flex gap-4 mb-8">
          <Link
            href="https://drive.google.com/file/d/1ZjsBrvs-hX81fqAnBy4e-su3M55sKFai/view?usp=sharing"
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          >
            Resume
          </Link>
          <Link
            href="#projects"
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          >
            Projects
          </Link>
        </div>

        <div className="text-lg space-y-4">
          <p>
            I am currently working as a Software Engineer Research Assistant at CSUDH,
            building scalable and efficient software to drive innovation
            and redefine user experiences.
          </p>
          <p>
            I have completed my Bachelor's in Information Technology and currently pursuing Master's in Computer Science from
            California State University, Dominguez Hills. Previously, I
            worked as a Software Engineer at Cybage Software, where I
            contributed to developing secure and innovative
            solutions.
          </p>
          <p>
            I have a solid background in Mobile, Cloud, and Web
            development, along with proficiency in various other areas of
            software development.
          </p>
          <p>
            I am actively pursuing full-time software engineer
            opportunities to utilize my exceptional academic
            achievements and hands-on experience. Feel free to reach
            out to me via phone/email mentioned below.
          </p>
          <p>Have a great day!!</p>
        </div>
      </motion.div>
    </section>
  );
}
