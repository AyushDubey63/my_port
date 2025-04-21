"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Sparkles } from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: any
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    const iconComponents = [Code, Database, Globe, Layout, Server, Sparkles]
    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 12; i++) {
      const Icon = iconComponents[i % iconComponents.length]
      newIcons.push({
        id: i,
        Icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 16,
        delay: Math.random() * 2,
        duration: Math.random() * 10 + 15,
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-primary/20 dark:text-primary/10"
          initial={{ x: `${icon.x}%`, y: `${icon.y}%`, opacity: 0 }}
          animate={{
            x: [`${icon.x}%`, `${(icon.x + 10) % 100}%`, `${icon.x}%`],
            y: [`${icon.y}%`, `${(icon.y + 15) % 100}%`, `${icon.y}%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <icon.Icon size={icon.size} />
        </motion.div>
      ))}
    </div>
  )
}
