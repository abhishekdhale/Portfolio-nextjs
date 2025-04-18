"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontContent: {
    title: string;
    image: string;
  };
  backContent: {
    title: string;
    description: string;
  };
  tags: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, tags }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full h-[300px] perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full transition-transform duration-500 transform-style-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
            <img
              src={frontContent.image}
              alt={frontContent.title}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{frontContent.title}</h3>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center rotate-y-180">
            <h3 className="text-xl font-semibold mb-4">{backContent.title}</h3>
            <p className="text-center">{backContent.description}</p>
          </div>
        </motion.div>
      </div>
      {/* Tags below the card */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function FlipCards() {
  const cards = [
    {
      front: {
        title: "Education",
        image: "/education.jpg",
      },
      back: {
        title: "My Education",
        description: "Graduated with a degree in Accounting and completed a coding bootcamp in full-stack web development.",
      },
      tags: ["Accounting", "Coding Bootcamp", "Full-Stack Development"]
    },
    {
      front: {
        title: "Skills",
        image: "/skills.jpg",
      },
      back: {
        title: "Technical Skills",
        description: "Proficient in React, Next.js, Node.js, MongoDB, TypeScript, and Prisma.",
      },
      tags: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      front: {
        title: "Experience",
        image: "/experience.jpg",
      },
      back: {
        title: "Work Experience",
        description: "Looking for a full-time position as a software developer.",
      },
      tags: ["Software Development", "Web Development", "Full-Stack"]
    },
    {
      front: {
        title: "Hobbies",
        image: "/hobbies.jpg",
      },
      back: {
        title: "My Interests",
        description: "Enjoy playing video games, watching movies, learning history and philosophy, and playing guitar.",
      },
      tags: ["Gaming", "Movies", "History", "Philosophy", "Guitar"]
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {cards.map((card, index) => (
        <FlipCard
          key={index}
          frontContent={card.front}
          backContent={card.back}
          tags={card.tags}
        />
      ))}
    </div>
  );
} 