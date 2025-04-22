import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaJava, FaDocker, FaJenkins, FaJira, FaWindows, FaDatabase, FaBrain, FaRobot, FaSyncAlt, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbBrandRedux, TbBrandGraphql, TbBrandDjango, TbBrandFramerMotion, TbBrandAngular, TbBrandAzure } from "react-icons/tb";
import { SiPrisma, SiMongodb, SiApollographql, SiExpress, SiDotnet, SiSpringboot, SiKubernetes, SiRedis, SiMicrosoftsqlserver, SiMicrosoftazure, SiAzuredevops } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { GrDocumentText, GrObjectUngroup } from "react-icons/gr";
import { MdApi, MdSettingsEthernet, MdComputer } from "react-icons/md";
import { BsCodeSlash, BsQuestionCircle } from "react-icons/bs";
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
    name: "About",
    hash: "#about",
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
    tags: ["C#", ".NET Core", "Redis", "MVC", "MSSQL", "Docker", "Kubernetes", "AWS"],
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
    title: "The Hub",
    description:
      "Contributed to the development of an internal Employee Management System at Cybage, streamlining HR operations and improving data efficiency.",
    tags: ["C#", ".NET Core","React", "SQL", "Jenkins"],
    imageUrl: wordanalyticsImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  // Core Web
  { name: "HTML", icon: React.createElement(FaHtml5), color: "#E34F26" },
  { name: "CSS", icon: React.createElement(FaCss3Alt), color: "#1572B6" },
  { name: "JavaScript", icon: React.createElement(IoLogoJavascript), color: "#F7DF1E" },
  { name: "TypeScript", icon: React.createElement(TbBrandTypescript), color: "#3178C6" },

  // Frontend Frameworks
  { name: "React", icon: React.createElement(FaReact), color: "#61DAFB" },
  { name: "Angular", icon: React.createElement(TbBrandAngular), color: "#DD0031" },
  { name: "Next.js", icon: React.createElement(TbBrandNextjs), color: "#000000" },

  // Backend & Runtimes
  { name: "Node.js", icon: React.createElement(FaNodeJs), color: "#339933" },
  { name: ".NET Core", icon: React.createElement(SiDotnet), color: "#512BD4" },
  { name: "Spring Boot", icon: React.createElement(SiSpringboot), color: "#6DB33F" },
  { name: "Python", icon: React.createElement(FaPython), color: "#3776AB" },

  // Databases & Caching
  { name: "SQL Server", icon: React.createElement(SiMicrosoftsqlserver), color: "#CC2927" },
  { name: "PostgreSQL", icon: React.createElement(BiLogoPostgresql), color: "#4169E1" },
  { name: "MongoDB", icon: React.createElement(SiMongodb), color: "#47A248" },
  { name: "Redis", icon: React.createElement(SiRedis), color: "#DC382D" },
  { name: "Caching", icon: React.createElement(FaSyncAlt), color: "#DC382D" }, // Using sync icon, Redis color
  { name: "Entity Framework", icon: React.createElement(FaDatabase), color: "#512BD4" }, // Using generic DB icon, .NET color

  // DevOps & Cloud
  { name: "Git", icon: React.createElement(FaGitAlt), color: "#F05032" },
  { name: "Docker", icon: React.createElement(FaDocker), color: "#2496ED" },
  { name: "Kubernetes", icon: React.createElement(SiKubernetes), color: "#326CE5" },
  { name: "Jenkins", icon: React.createElement(FaJenkins), color: "#D24939" },
  { name: "Azure DevOps", icon: React.createElement(SiAzuredevops), color: "#0078D7" },
  { name: "CI/CD", icon: React.createElement(FaSyncAlt), color: "#6c757d" }, // Using sync icon

  // Concepts & Methodologies
  { name: "Agile", icon: React.createElement(BsQuestionCircle), color: "#6c757d" },
  { name: "JIRA", icon: React.createElement(FaJira), color: "#0052CC" },
  { name: "OOP", icon: React.createElement(GrObjectUngroup), color: "#6c757d" },
  { name: "LINQ", icon: React.createElement(BsCodeSlash), color: "#512BD4" }, // Using code icon, .NET color
  { name: "RESTful APIs", icon: React.createElement(MdApi), color: "#6c757d" },
  { name: "Web API", icon: React.createElement(FaNetworkWired), color: "#512BD4" }, // Using network icon, .NET color
  { name: "Microservices Architecture", icon: React.createElement(FaProjectDiagram), color: "#6c757d" },
  { name: "Multithreading", icon: React.createElement(MdSettingsEthernet), color: "#6c757d" },

  // Specialized
  { name: "Virtual Reality (VR)", icon: React.createElement(FaRobot), color: "#6c757d" },
  { name: "Machine Learning", icon: React.createElement(FaBrain), color: "#6c757d" },

] as const;
