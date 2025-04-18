"use client";

import React, { useCallback } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const { ref: sectionRef } = useSectionInView("Projects", 0.5);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-28 mb-28 relative">
      <SectionHeading>My projects</SectionHeading>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projectsData.map((project, index) => (
            <div className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_45%] min-w-0 pl-4" key={index}>
              <Project {...project} />
              <div className="flex flex-wrap justify-start gap-2 mt-4 mb-8 px-1">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-black/10 text-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full backdrop-blur-[2px] border border-black/5 shadow-lg shadow-black/[0.03] dark:bg-white/10 dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black focus:outline-none transition ml-2"
        onClick={scrollPrev}
        aria-label="Previous project"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black focus:outline-none transition mr-2"
        onClick={scrollNext}
        aria-label="Next project"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800 dark:text-white" />
      </button>

    </section>
  );
}
