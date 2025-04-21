"use client";

import type React from "react";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="relative inline-flex flex-col items-center">
        <motion.div
          className="absolute -top-10 text-[120px] font-bold opacity-5 text-primary select-none pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold relative z-10">
          {children}
        </h2>

        <motion.div
          className="flex items-center gap-3 mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="w-10 h-1 bg-primary rounded-full" />
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
