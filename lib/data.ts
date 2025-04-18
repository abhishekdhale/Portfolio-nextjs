import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import researchIcon from "@/public/CSUDH.webp";
import softwareIcon from "@/public/softwareIcon.png";
import fullstackIcon from "@/public/fullstackIcon.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Research Assistant",
    location: "Los Angeles, CA",
    description:
      "Developed a VR-based assistive app using neural interface technology and .NET Core backend with Redis, enabling gesture-driven interactions for individuals with disabilities. Enhanced real-time performance with machine learning, achieving up to 40% faster interaction and 30% lower latency.",
    icon: researchIcon,
    date: "2023 - Present",
  },
  {
    title: "MS in Computer Science",
    location: "California State University, Dominguez Hills",
    description:
      "Developed a high-performance ad analytics platform using .NET Core, C#, and SQL Server with integrations from Meta, Google, TikTok, and eBay. Optimized data pipelines and dashboards with Redis caching and Angular components, improving data processing speed by 30% and user interactivity by 25%.",
    icon: researchIcon,
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer",
    location: "Cybage Software Pvt Ltd",
    description:
      "Developed a high-performance ad analytics platform using .NET Core, C#, and SQL Server with integrations from Meta, Google, TikTok, and eBay. Optimized data pipelines and dashboards with Redis caching and Angular components, improving data processing speed by 30% and user interactivity by 25%.",
    icon: softwareIcon,
    date: "2021 - 2023",
  },
  {
    title: "BE in Information Technology",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: fullstackIcon,
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Media Investment Optimization Platform NYC Based Client",
    description:
      "I worked as a full-stack developer on this project for 2 years. It's a platform that helps advertisers optimize media investments and maximize ROI.",
    tags: ["c#", ".NET Core", "Redis", "MVC", "MSSQL", "Docker", "Kubernetes", "AWS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Educational Management Solutions for Gov. of US ",
    description:
      "I worked as a developer on this project for 1.5 years. Built a VR assistive app using neural interfaces to enable gesture-based control, improving accessibility and response time.",
    tags: ["C#", ".NET Core", "AI", "React", "Unity", "Belnder"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
