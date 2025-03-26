"use client"

import { forwardRef, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRotateProps {
  texts: string[]
  rotationInterval?: number
  splitBy?: "words" | "characters" | "lines"
  mainClassName?: string
  splitLevelClassName?: string
  elementLevelClassName?: string
}

const TextRotate = forwardRef<HTMLDivElement, TextRotateProps>(
  (
    {
      texts,
      rotationInterval = 2000,
      splitBy = "words",
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTextIndex((current) => 
          current === texts.length - 1 ? 0 : current + 1
        )
      }, rotationInterval)
      return () => clearInterval(interval)
    }, [texts.length, rotationInterval])

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex]
      if (splitBy === "words") {
        const words = currentText.split(" ")
        return words.map((word, i) => ({
          characters: [word],
          needsSpace: i !== words.length - 1,
        }))
      }
      return currentText.split(" ")
    }, [texts, currentTextIndex, splitBy])

    return (
      <AnimatePresence mode="wait">
        <motion.div
          ref={ref}
          key={currentTextIndex}
          className={cn("relative inline-block", mainClassName)}
          {...props}
        >
          {elements.map((element, elementIndex) => (
            <motion.span
              key={elementIndex}
              className={cn("inline-block", elementLevelClassName)}
            >
              {element.characters.map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className={cn("inline-block", splitLevelClassName)}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                  {char}
                </motion.span>
              ))}
              {element.needsSpace && <span className="inline-block">&nbsp;</span>}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    )
  }
)

TextRotate.displayName = "TextRotate"

export { TextRotate }
