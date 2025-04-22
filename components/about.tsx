"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[75rem] text-center sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold capitalize text-gray-900 dark:text-white">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="md:col-span-1 flex justify-center bg-white/80 dark:bg-gray-950/50 p-6 rounded-2xl shadow-xl max-w-sm w-full"
        
        >
          {/* Left side - Profile Card */}
      
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
            <Link
              href="https://medium.com"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            >
              <SiMedium />
            </Link>
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

        <motion.div 
          className="md:col-span-2 text-left text-lg text-gray-700 dark:text-white/80 leading-relaxed space-y-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I'm a passionate Software Engineer with <span className="font-semibold text-blue-600 dark:text-blue-400">4 years of professional experience</span>, including a recent role as a Research Assistant at California State University, Dominguez Hills, where I focused on building scalable and efficient software solutions to drive innovation and elevate user experiences.
          </p>
          <p>
            I hold a <span className="font-semibold text-blue-600 dark:text-blue-400">Master's degree in Computer Science</span> from California State University, Dominguez Hills, and a Bachelor's degree in Information Technology. Prior to my graduate studies, I worked at Cybage Software as a Software Engineer, contributing to the development of secure and impactful software across diverse domains.
          </p>
          <p>
            My expertise spans Mobile, Web, and Cloud development, backed by a strong foundation in modern software engineering practices, clean architecture, and performance-driven development. I thrive in collaborative environments, love solving complex problems, and am always eager to learn and grow.
          </p>
          <p>
            Currently, I am actively seeking full-time software engineering opportunities where I can apply my experience, contribute to meaningful projects, and continue to innovate.
          </p>
          <p>
            Feel free to connect with me via phone or email listed below.
            Let's build something great together!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
