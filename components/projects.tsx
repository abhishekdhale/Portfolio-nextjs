"use client";

import React, { useCallback, useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { type EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const { ref: sectionRef } = useSectionInView("Projects", 0.5);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateScrollSnapState = useCallback((emblaApiInstance: EmblaCarouselType) => {
    setSelectedIndex(emblaApiInstance.selectedScrollSnap());
    setScrollSnaps(emblaApiInstance.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on('select', updateScrollSnapState);
    emblaApi.on('reInit', updateScrollSnapState);

    return () => {
      if (emblaApi) {
        emblaApi.off('select', updateScrollSnapState);
        emblaApi.off('reInit', updateScrollSnapState);
      }
    };
  }, [emblaApi, updateScrollSnapState]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-28 mb-28 relative">
      <SectionHeading>My projects</SectionHeading>

      <div className="embla overflow-hidden py-10" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {projectsData.map((project, index) => (
            <div className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 pl-4" key={index}>
              <Project
                {...project}
                index={index}
                selectedIndex={selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black focus:outline-none transition ml-2"
        onClick={scrollPrev}
        aria-label="Previous project"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black focus:outline-none transition mr-2"
        onClick={scrollNext}
        aria-label="Next project"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800 dark:text-white" />
      </button>

    </section>
  );
}
