"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../shared/section-heading";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import GlowCard from "../glow-card";

const projects = [
  {
    title: "Chatsphere",
    description: "Real-Time Communication App",
    image: "/project1.png",
    demoLink: "https://chat-frontend-beige-seven.vercel.app",
    githubLink: "https://github.com/ayushdubey63",
    features: [
      "Developed secure JWT-based authentication system for scalable user access",
      "Implemented real-time messaging and group chat using Socket.IO",
      "Deployed WebRTC with Coturn server on VPS for high-quality video calls",
      "Automated status updates with node-cron, running every 15 minutes",
      "Integrated Nodemailer for email verification, improving onboarding efficiency",
      "Built responsive UI with React, Tailwind CSS, and Tanstack Query",
      "Managed PostgreSQL database with Knex for optimized data operations",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "WebRTC",
      "PostgreSQL",
      "Tailwind CSS",
      "Tanstack Query",
    ],
  },
  {
    title: "E-Commerce Store",
    description: "Full-featured online shopping platform",
    image: "/placeholder.svg?height=400&width=600",
    demoLink: "https://example.com",
    githubLink: "https://github.com/AyushDubey63/chat_frontend",
    features: [
      "Built a responsive e-commerce platform with React.js and Node.js",
      "Implemented user authentication and authorization with JWT",
      "Created product catalog with filtering, sorting, and search functionality",
      "Developed shopping cart and checkout process with Stripe integration",
      "Implemented order tracking and history for users",
      "Built admin dashboard for product and order management",
      "Optimized performance with Redis caching and lazy loading",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "MongoDB",
      "Stripe",
      "Redis",
      "Express.js",
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <section
      id="projects"
      className="py-20 bg-muted/30 relative"
      ref={sectionRef}
    >
      <motion.div style={{ opacity, y }} className="container relative z-10">
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlowCard className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-4 justify-center">
                        <Button
                          asChild
                          size="sm"
                          variant="secondary"
                          className="backdrop-blur-md bg-white/20"
                        >
                          <Link
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="secondary"
                          className="backdrop-blur-md bg-white/20"
                        >
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.05 + 0.3,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4 md:hidden">
                      <Button asChild>
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
