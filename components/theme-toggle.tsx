"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <div className="flex items-center justify-center rounded-full p-1 bg-muted/80 backdrop-blur-sm">
      {[
        { value: "light", icon: Sun },
        { value: "dark", icon: Moon },
        { value: "system", icon: Monitor },
      ].map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`relative rounded-full p-2 transition-all duration-300 ${
            theme === value ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${value} theme`}
        >
          {theme === value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <Icon className="relative z-10 h-4 w-4" />
        </button>
      ))}
    </div>
  )
}
