"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Explore Places", path: "/explore-places" },
    { name: "Ai Guide", path: "/ai-guide" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/images/Logo.svg"
            alt="Lahore Travel Tour"
            width={70}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="hidden md:flex space-x-8 font-medium text-grayish"
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.path}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link
                href={item.path}
                className={`relative pb-1 transition-all duration-300 ${
                  pathname === item.path ? "text-primary" : "hover:text-primary"
                }`}
              >
                {item.name}

                {/* Animated Underline */}
                {pathname === item.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/register">
            <button className="bg-primary cursor-pointer font-medium text-white px-8 py-2 rounded-full hover:scale-105 transition duration-300">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pb-4 space-y-4 overflow-hidden"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block transition ${
                  pathname === item.path
                    ? "text-primary font-medium"
                    : "hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => router.push("/register")}
              className="w-full bg-primary text-white py-2 rounded-full hover:opacity-90 transition"
            >
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
