"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../shared/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef } from "react";
import {
  Database,
  Globe,
  Layout,
  Server,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { PiQueueBold } from "react-icons/pi";
import {
  SiNextdotjs,
  SiMui,
  SiShadcnui,
  SiFramer,
  SiExpress,
  SiSocketdotio,
  SiWebrtc,
  SiEjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithub,
  SiGit,
  SiCloudinary,
  SiGoogleearthengine,
} from "react-icons/si";
import { FaSquareJs, FaAws } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { TbCloudComputing } from "react-icons/tb";

const skillCategories = [
  {
    name: "frontend",
    label: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: [
      { name: "React.js", icon: <FaReact className="h-6 w-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
      { name: "JavaScript", icon: <FaSquareJs className="h-6 w-6" /> },
      { name: "TypeScript", icon: <BiLogoTypescript className="h-6 w-6" /> },
      { name: "Redux Toolkit", icon: <TbBrandRedux className="h-6 w-6" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="h-6 w-6" /> },
      { name: "Material-UI (MUI)", icon: <SiMui className="h-6 w-6" /> },
      { name: "ShadCN", icon: <SiShadcnui className="h-6 w-6" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-6 w-6" /> },
      { name: "CSS3", icon: <FaCss3 className="h-6 w-6" /> },
      { name: "Framer Motion", icon: <SiFramer className="h-6 w-6" /> },
    ],
  },
  {
    name: "backend",
    label: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-6 w-6" /> },
      { name: "Express.js", icon: <SiExpress className="h-6 w-6" /> },
      { name: "RESTful API Development", icon: <Globe className="h-6 w-6" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="h-6 w-6" /> },
      { name: "WebRTC", icon: <SiWebrtc className="h-6 w-6" /> },
      {
        name: "Server-Sent Events (SSE)",
        icon: <Server className="h-6 w-6" />,
      },
      { name: "EJS", icon: <SiEjs className="h-6 w-6" /> },
      { name: "BullMQ", icon: <PiQueueBold className="h-6 w-6" /> },
    ],
  },
  {
    name: "database",
    label: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
      { name: "MySQL", icon: <SiMysql className="h-6 w-6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" /> },
      { name: "Redis", icon: <SiRedis className="h-6 w-6" /> },
      {
        name: "QDrant",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 49 56"
            fill="none"
          >
            <g clipPath="url(#clip0_4688_32471)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.8438 14.0017L48.8468 14L36.7206 7L24.5979 0L12.4719 7L0.349609 14L0.350208 14.0016V41.9996L12.4729 48.9996L24.5988 56V56.0007L32.3558 51.5252L32.3561 51.5246L32.3558 51.5244V42L24.5989 46.4796L16.5957 41.8604L8.59623 37.2415V18.7626L16.5957 14.1437L24.5989 9.52477L32.5983 14.1437L40.6015 18.7626V56.0004L40.6009 56L40.602 56.0025L48.8477 51.2436V14.0022L48.8438 14.0017ZM24.5989 36.9585L32.3558 32.4793V23.5244L24.5989 19.0451L16.8419 23.5244V32.4793L24.5989 36.9585Z"
                fill="#7d3af1"
              />
            </g>
            <defs>
              <clipPath id="clip0_4688_32471">
                <rect
                  width="48.3"
                  height="56"
                  fill="white"
                  transform="translate(0.349609)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ],
  },
  {
    name: "devops",
    label: "DevOps & Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="h-6 w-6" /> },
      { name: "Git", icon: <SiGit className="h-6 w-6" /> },
      { name: "GitHub", icon: <SiGithub className="h-6 w-6" /> },
      { name: "CI/CD", icon: <AiOutlineDeploymentUnit className="h-6 w-6" /> },
      { name: "Agile Methodologies", icon: <Wrench className="h-6 w-6" /> },
      { name: "Microservices", icon: <Layers className="h-6 w-6" /> },
      {
        name: "Cloud Computing",
        icon: <TbCloudComputing className="h-6 w-6" />,
      },
      { name: "AWS", icon: <FaAws className="h-6 w-6" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="h-6 w-6" /> },
      { name: "WATI", icon: <Globe className="h-6 w-6" /> },
    ],
  },
  {
    name: "other",
    label: "Other",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
          >
            <g fill="none" stroke="#7d3af1" stroke-width="2">
              <circle cx="50" cy="20" r="10" fill="#7d3af1" />
              <line x1="50" y1="30" x2="30" y2="50" />
              <line x1="50" y1="30" x2="70" y2="50" />
              <circle cx="30" cy="50" r="10" fill="#7d3af1" />
              <circle cx="70" cy="50" r="10" fill="#7d3af1" />
              <line x1="30" y1="60" x2="10" y2="80" />
              <line x1="30" y1="60" x2="50" y2="80" />
              <line x1="70" y1="60" x2="50" y2="80" />
              <line x1="70" y1="60" x2="90" y2="80" />
              <circle cx="10" cy="80" r="10" fill="#7d3af1" />
              <circle cx="50" cy="80" r="10" fill="#7d3af1" />
              <circle cx="90" cy="80" r="10" fill="#7d3af1" />

              <line
                x1="50"
                y1="20"
                x2="50"
                y2="10"
                stroke-linecap="round"
                stroke-dasharray="4"
              />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="0"
                stroke-linecap="round"
                stroke-dasharray="4"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "Software Engineering",
        icon: <SiGoogleearthengine className="h-6 w-6 " />,
      },
      { name: "Problem Solving", icon: <Wrench className="h-6 w-6" /> },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div style={{ opacity, y }} className="container relative z-10">
        <SectionHeading>Skills</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-5 md:grid-cols-5 mb-8 relative overflow-hidden">
              {skillCategories.map((category, index) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="relative z-10 data-[state=active]:text-primary-foreground flex items-center gap-2"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  <span className="relative z-10">{category.icon}</span>
                  <span className={`relative hidden md:inline z-10`}>
                    {category.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-muted/30 p-6 rounded-lg border border-primary/10 min-h-[300px]">
              {skillCategories.map((category) => (
                <TabsContent
                  key={category.name}
                  value={category.name}
                  className="mt-0"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(147, 51, 234, 0.3)",
                        }}
                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <div className="text-primary">{skill.icon}</div>
                        </div>
                        <span className="text-center font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
}
