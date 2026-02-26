"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PersonalLahoreGuide() {
  return (
    <section className="w-full bg-lightblue py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-0 grid md:grid-cols-2 items-center gap-10 md:gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your{" "}
            <span className="text-primary relative inline-block">
              Personal
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-primary rounded-full"></span>
            </span>{" "}
            Lahore Guide
          </h1>

          <p className="mt-5 text-lightgrayish max-w-md mx-auto md:mx-0">
            Tell us your mood, budget, and time — we will plan the perfect day
            in Lahore for you. From food crawls to heritage tours, get
            personalized itineraries instantly.
          </p>

          {/* Features List */}
          <motion.ul
            className="mt-6 space-y-3 text-grayish text-left md:text-left max-w-md mx-auto md:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              "Budget-friendly recommendations",
              "Mood-based suggestions",
              "Complete day itineraries",
              "Local tips and insights",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-primary"></span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:scale-105 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
              ✨ Explore Lahore With AI
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative w-full h-[260px] sm:h-[300px] md:h-[350px] mt-10 md:mt-0">
          <Image
            src="/images/ai.png"
            alt="AI Lahore Guide"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}