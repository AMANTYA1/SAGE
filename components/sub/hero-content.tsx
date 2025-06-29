"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <section aria-label="Hero Section">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
      >
        {/* Left Content */}
        <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
          {/* Name */}
          <motion.h2
            variants={slideInFromTop}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            RAVIKUMAR J
          </motion.h2>

          {/* Role/Title */}
          <motion.h3
            variants={slideInFromTop}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium"
          >
            Front-End Developer & UI/UX Designer
          </motion.h3>

          {/* Tagline Box */}
          <motion.div
            variants={slideInFromTop}
            className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0 mt-2"
          >
            <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            <p className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
              Designing Engaging Interfaces with Precision & Depth
            </p>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            variants={slideInFromLeft(0.5)}
            className="text-3xl sm:text-xl md:text-3xl font-bold text-white max-w-[600px] leading-tight"
          >
            Bringing Ideas to Life through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Intuitive
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              3D Web Interfaces
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
          >
            I’m a passionate Front-End Developer who blends creativity with code to build immersive and interactive web experiences. With a strong eye for design and expertise in modern JavaScript frameworks, I specialize in 3D visuals, responsive UI/UX, and performance-focused applications.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className="py-2 px-5 sm:px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-base sm:text-lg font-medium rounded-lg shadow-lg transition-transform transform-gpu hover:-translate-y-1 hover:scale-105 active:scale-95 max-w-[200px] mx-auto md:mx-0"
          >
            Explore My Work
          </motion.a>
        </div>

        {/* Right Side: Profile Picture with 3D Hover */}
        <motion.div
          variants={slideInFromRight(1.2)}
          className="w-full flex justify-center items-center mt-8 md:mt-0 perspective-[1200px]"
        >
          <div className="transition-transform duration-500 transform-gpu hover:rotate-x-6 hover:rotate-y-6 hover:scale-105">
            <Image
              src="/projects/profile pic.webp"
              alt="Ravikumar J"
              width={500}
              height={500}
              priority
              draggable={false}
              className="select-none rounded-full border-4 border-purple-600 shadow-2xl w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
