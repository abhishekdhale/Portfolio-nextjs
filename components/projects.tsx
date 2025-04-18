"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
            {/* Render Tags Externally Below Each Project */}
            <div className="flex flex-wrap justify-start gap-2 mt-4 mb-8 px-5 sm:px-0 sm:pl-10 sm:group-even:pl-8">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="bg-black/10 text-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full backdrop-blur-[2px] border border-black/5 shadow-lg shadow-black/[0.03] hover:bg-black/20 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/70"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * tagIndex }} // Adjusted delay for per-project tags
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
