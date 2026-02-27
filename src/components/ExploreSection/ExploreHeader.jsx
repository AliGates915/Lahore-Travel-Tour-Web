"use client";

import React from "react";
import { motion } from "framer-motion";

const ExploreHeader = () => {
  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >

          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
          >
            Explore all{" "}
            <span className="relative inline-block text-primary">
              places

              {/* Animated Underline */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-2 h-[4px] bg-primary rounded-full"
              />
            </span>{" "}
            in Lahore
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg text-lightgrayish"
          >
            Whether you are a tourist or a local, we have got you covered with
            the best places, food spots, and personalized recommendations.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default ExploreHeader;