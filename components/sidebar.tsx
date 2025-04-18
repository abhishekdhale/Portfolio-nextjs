"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with payment integration",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      tags: ["React", "Firebase", "Material UI"],
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-40 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
} 