"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../shared/section-heading";
import Image from "next/image";
import { useRef } from "react";
import TiltCard from "../tilt-card";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  const paragraphs = [
    "Hi, I'm Ayush Dubey, a passionate Full Stack Developer with a strong foundation in Computer Science, holding a Bachelor's degree from Guru Nanak Khalsa College, Matunga, where I graduated with a 9.24 CGPA.",
    "My journey in web development began with a deep interest in building scalable, real-world applications, which led me to join NextGen Techno Ventures Pvt. Ltd. as a MERN Stack Developer. During my time there, I gained hands-on experience working on live projects, sharpening my backend skills with Node.js, integrating Firebase SDK, building dynamic charts with Chart.js, and learning tools like Redux Toolkit and Framer Motion.",
    "Eager to take on bigger challenges, I transitioned to Balance Nutrition as a Full Stack Developer, where I was entrusted with migrating their entire backend from PHP to Node.js, designing a scalable and robust backend infrastructure. Here, I expanded my skills in MySQL, implemented Docker for environment consistency, managed deployments on VPS, and worked extensively with tools like Zod, Cloudinary, Sharp, and Google APIs for automated reporting and asset optimization.",
    "I also developed a database backup system using SSH2, and even integrated TensorFlow's MobileNet with Qdrant to create an innovative image embedding search system for the content team.",
    "Alongside my development work, I actively pursued my interest in Data Structures and Algorithms (DSA), completing Striver's A2Z DSA course and solving over 330+ LeetCode problems, covering topics from arrays and trees to graphs and dynamic programming. I'm deeply enthusiastic about software engineering, constantly exploring new technologies, and pushing the boundaries of what I can build. For me, learning never stops—especially when it comes to web development.",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-muted/30 relative overflow-hidden"
      ref={sectionRef}
    >
      <motion.div style={{ opacity, y }} className="container">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 flex justify-center"
          >
            <TiltCard>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 group">
                <Image
                  src="/hero_section_pic.png"
                  alt="Ayush Dubey"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </TiltCard>
          </motion.div>

          <div className="col-span-2 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 0 ? "text-lg" : ""}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
