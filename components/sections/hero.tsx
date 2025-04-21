"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Download,
  MousePointer,
} from "lucide-react";

import { RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import AnimatedText from "../animated-text";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
    },
  };
  const [mouseFill, setMouseFill] = useState("none");
  const easing = cubicBezier(0.175, 0.885, 0.32, 1.275);
  useEffect(() => {
    // Set initial viewport size
    if (typeof window !== "undefined") {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX and clientY instead of x and y for better cross-browser compatibility
      // These coordinates are relative to the viewport
      const x = e.clientX;
      const y = e.clientY;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateTransform = (factor: number) => {
    const xOffset = (mousePosition.x - 0.5) * factor;
    const yOffset = (mousePosition.y - 0.5) * factor;
    return `translate(${xOffset}px, ${yOffset}px)`;
  };

  return (
    <section
      id="home"
      className="min-h-screen  flex flex-col justify-center pt-16 pb-8 relative overflow-hidden"
      ref={heroRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-[100px]"
          style={{ transform: calculateTransform(-20) }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-600/20 to-primary/20 blur-[100px]"
          style={{ transform: calculateTransform(-15) }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-primary animate-pulse" />
                <p className="text-primary font-medium">Hello, I'm</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                Ayush Dubey
                <motion.span
                  className="absolute -z-10 inset-0 bg-primary/10 rounded-md blur-3xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12"
            >
              <AnimatedText
                text="Full Stack Developer"
                className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-primary/10"
              style={{ transform: calculateTransform(10) }}
            >
              <p className="text-lg text-muted-foreground max-w-2xl">
                I build scalable, real-world applications with modern
                technologies. Passionate about creating efficient, user-friendly
                web experiences and solving complex problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group cursor-none relative overflow-hidden"
                onMouseEnter={() => {
                  setMouseFill("white");
                }}
                onMouseLeave={() => {
                  setMouseFill("none");
                }}
              >
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="group">
                <a href="./Ayush_Dubey.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:text-primary-foreground transition-colors duration-300">
                    Download CV
                  </span>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="group">
                <Link href="#contact">
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:text-primary-foreground transition-colors duration-300">
                    Contact Me
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-6 mt-8"
            >
              {[
                {
                  Icon: Github,
                  href: "https://github.com/ayushdubey63",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/ayush-dubey-abb476295/",
                  label: "LinkedIn",
                },
                {
                  Icon: RiTwitterXFill,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  Icon: SiLeetcode,
                  href: "https://leetcode.com/u/ayushdubey001/",
                  label: "LeetCode",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {typeof item.Icon === "function" ? (
                      <item.Icon size={24} />
                    ) : (
                      <item.Icon size={24} />
                    )}
                    <span className="sr-only">{item.label}</span>
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{ transform: calculateTransform(-20) }}
          >
            <div className="relative w-full h-[500px]">
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "10s" }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[350px] h-[350px]">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />

                  <div className="absolute inset-10 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow-reverse" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 group">
                      <Image
                        src="./hero_section_pic.png"
                        alt="Ayush Dubey"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Tech icons around the circle */}
                  {[0, 60, 120, 180, 240, 300].map((degree, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-primary/20"
                      style={{
                        top: `calc(50% + 175px * sin(${degree}deg) - 24px)`,
                        left: `calc(50% + 175px * cos(${degree}deg) - 24px)`,
                      }}
                      whileHover={{ scale: 1.2 }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: i * 0.3,
                      }}
                    >
                      {getTechIcon(i)}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link href="#about">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full animate-bounce"
            >
              <ArrowDown />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Mouse follower */}
      <motion.div
        className="fixed w-6 h-6 top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center"
        animate={{
          // Subtract half the size of the follower (3px since w-6/h-6 is 24px)
          // to center it on the cursor
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          y: { type: "spring", stiffness: 300, damping: 30 },
          scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
          ease: easing,
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
        variants={variants}
      >
        <MousePointer
          fill={`${mouseFill}`}
          className={`text-primary/50  h-4 w-4`}
        />
      </motion.div>
    </section>
  );
}

function getTechIcon(index: number) {
  const icons = [
    <svg
      key="react"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-6 h-6 text-primary"
    >
      <circle cx="12" cy="12" r="2.25" fill="currentColor" />
      <path
        d="M12,4.75c-6,0-9.25,2.83-9.25,7.25s3.25,7.25,9.25,7.25,9.25-2.83,9.25-7.25S18,4.75,12,4.75Z"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M12,4.75c-6,0-9.25,2.83-9.25,7.25s3.25,7.25,9.25,7.25,9.25-2.83,9.25-7.25S18,4.75,12,4.75Z"
        fill="none"
        stroke="currentColor"
        transform="rotate(60 12 12)"
      />
      <path
        d="M12,4.75c-6,0-9.25,2.83-9.25,7.25s3.25,7.25,9.25,7.25,9.25-2.83,9.25-7.25S18,4.75,12,4.75Z"
        fill="none"
        stroke="currentColor"
        transform="rotate(120 12 12)"
      />
    </svg>,
    <svg
      key="node"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-6 h-6 text-primary"
    >
      <path
        d="M12,21.85a1.5,1.5,0,0,1-.75-.2l-2.36-1.37a1.78,1.78,0,0,1-.85-1.56V5.28a1.78,1.78,0,0,1,.85-1.56L11.25,2.35a1.5,1.5,0,0,1,1.5,0l2.36,1.37a1.78,1.78,0,0,1,.85,1.56V18.72a1.78,1.78,0,0,1-.85,1.56l-2.36,1.37A1.5,1.5,0,0,1,12,21.85Z"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M12,21.85a1.5,1.5,0,0,1-.75-.2l-2.36-1.37a1.78,1.78,0,0,1-.85-1.56V5.28a1.78,1.78,0,0,1,.85-1.56L11.25,2.35a1.5,1.5,0,0,1,1.5,0l2.36,1.37a1.78,1.78,0,0,1,.85,1.56V18.72a1.78,1.78,0,0,1-.85,1.56l-2.36,1.37A1.5,1.5,0,0,1,12,21.85Z"
        fill="none"
        stroke="currentColor"
        transform="rotate(60 12 12)"
      />
      <path
        d="M12,21.85a1.5,1.5,0,0,1-.75-.2l-2.36-1.37a1.78,1.78,0,0,1-.85-1.56V5.28a1.78,1.78,0,0,1,.85-1.56L11.25,2.35a1.5,1.5,0,0,1,1.5,0l2.36,1.37a1.78,1.78,0,0,1,.85,1.56V18.72a1.78,1.78,0,0,1-.85,1.56l-2.36,1.37A1.5,1.5,0,0,1,12,21.85Z"
        fill="none"
        stroke="currentColor"
        transform="rotate(120 12 12)"
      />
    </svg>,
    <svg
      key="js"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-6 h-6 text-primary"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M9,16.5c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M15,16.5c0,1.1.9,2,2,2s2-.9,2-2V10"
        fill="none"
        stroke="currentColor"
      />
    </svg>,
    <svg
      key="db"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-6 h-6 text-primary"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="currentColor" />
      <path
        d="M4,5V19c0,1.66,3.58,3,8,3s8-1.34,8-3V5"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M4,12c0,1.66,3.58,3,8,3s8-1.34,8-3"
        fill="none"
        stroke="currentColor"
      />
    </svg>,
    <svg
      key="cloud"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-6 h-6 text-primary"
    >
      <path
        d="M18,18H6a4,4,0,0,1,0-8,6,6,0,0,1,12,0A4,4,0,0,1,18,18Z"
        fill="none"
        stroke="currentColor"
      />
      <line x1="12" y1="13" x2="12" y2="16" stroke="currentColor" />
      <line x1="10" y1="15" x2="14" y2="15" stroke="currentColor" />
    </svg>,
    <svg
      key="mobile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-6 h-6 text-primary"
    >
      <rect
        x="7"
        y="4"
        width="10"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
      />
      <line
        x1="12"
        y1="17"
        x2="12"
        y2="17.01"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>,
  ];

  return icons[index % icons.length];
}
