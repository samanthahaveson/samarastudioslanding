"use client"

import { motion } from "framer-motion"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { TextRotate } from "@/components/ui/text-rotate"

const exampleImages = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1711054824441-064a99073a0b.avif?alt=media&token=8d8a1c5c-0805-434b-90ca-738f21daed19",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1711054824441-064a99073a0b.avif?alt=media&token=8d8a1c5c-0805-434b-90ca-738f21daed19",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/wave_photo-1679814561282-2f735b0ce81f.avif?alt=media&token=eb736fc2-0027-46dc-9f8a-f1f8b1174457",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/wave_photo-1679814561282-2f735b0ce81f.avif?alt=media&token=eb736fc2-0027-46dc-9f8a-f1f8b1174457",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1525361970864-7d5a27a0540f.avif?alt=media&token=63927308-daa5-43ac-a6a8-b7b215f48454",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1525361970864-7d5a27a0540f.avif?alt=media&token=63927308-daa5-43ac-a6a8-b7b215f48454",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/boy_photo-1728650295285-e6d61f7900f5.avif?alt=media&token=ff0eda6f-67cb-48c3-a01a-3471564420c4",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/boy_photo-1728650295285-e6d61f7900f5.avif?alt=media&token=ff0eda6f-67cb-48c3-a01a-3471564420c4",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/premium_photo-1728587433640-4d06fab92e43%20(1).avif?alt=media&token=43f12a01-ce23-42fd-abf0-2770777dee16",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/premium_photo-1728587433640-4d06fab92e43%20(1).avif?alt=media&token=43f12a01-ce23-42fd-abf0-2770777dee16",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1525361970864-7d5a27a0540f.avif?alt=media&token=63927308-daa5-43ac-a6a8-b7b215f48454",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1525361970864-7d5a27a0540f.avif?alt=media&token=63927308-daa5-43ac-a6a8-b7b215f48454",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1711054824441-064a99073a0b.avif?alt=media&token=8d8a1c5c-0805-434b-90ca-738f21daed19",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1711054824441-064a99073a0b.avif?alt=media&token=8d8a1c5c-0805-434b-90ca-738f21daed19",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1711054824441-064a99073a0b.avif?alt=media&token=8d8a1c5c-0805-434b-90ca-738f21daed19",
    author: "Mathilde Langevin",
    link: "https://firebasestorage.googleapis.com/v0/b/samara-studios.firebasestorage.app/o/photo-1711054824441-064a99073a0b.avif?alt=media&token=8d8a1c5c-0805-434b-90ca-738f21daed19",
    title: "A table topped with two wine glasses and plates",
  },
]

function LandingHero() {
  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      {/* Floating Images */}
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement depth={0.5} className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]">
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]">
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]">
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]">
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]">
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      {/* Hero Text & Buttons */}
      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto">
        <motion.h1
          className="
            text-3xl 
            sm:text-5xl 
            md:text-7xl 
            lg:text-8xl 
            text-center 
            font-calendas 
            tracking-tight 
            whitespace-pre 
            leading-tight
          "
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          {/* First line: Samara */}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Samara
          </span>

          {/* Second line: imagine your [rotating text] */}
          <br />
          <span
            className="
              inline-flex 
              items-center 
              space-x-1 
              text-[0.75em] 
              leading-none
            "
          >
            <span>imagine your </span>
            <span className="inline-flex items-center text-[#457ff4]">
              <TextRotate
                texts={[
                  "sound 🎵",
                  "vibe ✨",
                  "groove 🪩",
                  "beat 🕶",
                  "energy 🔥",
                  "rhythm 🎶",
                  "melody 🎤",
                ]}
                rotationInterval={3000}
                splitBy="words"
                mainClassName="inline-flex items-center"
              />
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-overusedGrotesk pt-2 sm:pt-4 md:pt-8 lg:pt-10"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Built for music artists, creators and fans.
        </motion.p>

        {/* Byline */}
        <motion.p
          className="text-xs sm:text-sm md:text-base lg:text-lg text-center font-overusedGrotesk text-muted-foreground mt-1 sm:mt-2"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}
        >
          If you would like to join our early access testing group, join the waitlist.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-row justify-center space-x-4 items-center mt-6 sm:mt-10 md:mt-16 lg:mt-20 text-xs">
          <motion.button
            className="
              sm:text-base 
              md:text-lg 
              lg:text-xl 
              font-semibold 
              tracking-tight 
              text-white
              bg-[#457ff4]
              px-4 py-2 
              sm:px-5 sm:py-2.5 
              md:px-6 md:py-3 
              lg:px-8 lg:py-3 
              rounded-full 
              z-20 
              shadow-2xl 
              font-calendas
            "
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <a
              href="https://form.typeform.com/to/V9W6CJho"
              target="_blank"
              rel="noopener noreferrer"
            >
              join waitlist <span className="font-serif ml-1">→</span>
            </a>
          </motion.button>

          <motion.button
            className="
              sm:text-base 
              md:text-lg 
              lg:text-xl 
              font-semibold 
              tracking-tight 
              text-background
              bg-foreground
              px-4 py-2 
              sm:px-5 sm:py-2.5 
              md:px-6 md:py-3 
              lg:px-8 lg:py-3 
              rounded-full 
              z-20 
              shadow-2xl 
              font-calendas
            "
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
            onClick={() => (window.location.href = "mailto:sam@samarastudios.com")}
          >
            contact
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default LandingHero
