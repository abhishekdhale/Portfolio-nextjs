"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { clsx } from "clsx";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  selectedIndex: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
  selectedIndex,
}: ProjectProps) {
  const isActive = index === selectedIndex;

  return (
    <section
      className={clsx(
        "group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[24rem]",
        "transition-all duration-500 ease-out",
        {
          "scale-105 z-10 shadow-2xl": isActive,
          "scale-90 opacity-70": !isActive,
        },
        "hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mx-auto"
      )}
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <div className="flex flex-wrap justify-start gap-2 mt-auto pt-4">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-200 text-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full backdrop-blur-[2px] border border-black/5 shadow-lg shadow-black/[0.03] dark:bg-gray-700 dark:text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className={clsx(
          "absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl",
          "transition",
          "group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2",
          "group-even:right-[initial] group-even:-left-40"
        )}
      />
    </section>
  );
}
