"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../shared/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import GlowCard from "../glow-card";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Balance Nutrition",
    period: "Jul 2024 - Present",
    description: [
      "Migrated entire backend from PHP to Node.js, designing a scalable and robust infrastructure",
      "Expanded skills in MySQL, implemented Docker for environment consistency",
      "Managed deployments on VPS and worked with tools like Zod, Cloudinary, and Sharp",
      "Integrated Google APIs for automated reporting and asset optimization",
      "Developed database backup system using SSH2",
      "Integrated TensorFlow's MobileNet with Qdrant for image embedding search",
    ],
    skills: [
      "Node.js",
      "MySQL",
      "Docker",
      "TensorFlow",
      "Cloudinary",
      "Google APIs",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "NextGen Techno Ventures Pvt. Ltd.",
    period: "Jan 2024 - May 2024",
    description: [
      "Gained hands-on experience working on live projects",
      "Sharpened backend skills with Node.js",
      "Integrated Firebase SDK for various applications",
      "Built dynamic charts with Chart.js for data visualization",
      "Learned and implemented tools like Redux Toolkit and Framer Motion",
    ],
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Chart.js",
      "Redux Toolkit",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <section id="experience" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div style={{ opacity, y }} className="container relative z-10">
        <SectionHeading>Experience</SectionHeading>

        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className="text-xl group">
                          {exp.title}
                          <span className="block h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300" />
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 + 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
