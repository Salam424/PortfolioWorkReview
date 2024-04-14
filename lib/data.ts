import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Sphere from "@/public/Sphere.png";
import CloudShare from "@/public/CloudShare.png";
import AlienWare from "@/public/Alienware.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Sphere",
    description:
      "This is an Instagram clone that I built in early 2024. This website allows users to share their life with friends.",
    tags: [
      "React.js",
      "MongoDB",
      "Typescript",
      "Tailwind",
      "Tanstack Query / React Query",
      "Other tools",
    ],
    imageUrl: Sphere,
    href: "https://sphere-dusky.vercel.app/",
  },
  {
    title: "Cloud Share",
    description:
      "A file-sharing website that allows users to share their files safely with friends and family.",
    tags: [
      "Next.js",
      "JavaScript",
      "Tailwind",
      "Firebase Storage",
      "Firebase Database",
    ],
    imageUrl: CloudShare,
    href: "https://cloud-share-h3g0c0ncw-abdussalams-projects-8065c5cb.vercel.app/",
  },
  {
    title: "Alienware",
    description:
      "A website promoting gaming microphones, featuring a beautiful design and clean code.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: AlienWare,
    href: "https://alienware-web.vercel.app/",
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
  "Tailwind",
  "Firebase Database",
  "Firebase Storage",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "TanStack Query / React Query",
  "RestAPI",

  "Express",
] as const;
