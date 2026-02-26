"use client";

import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-secondary pt-24 pb-8 overflow-hidden">
      {/* Ellipse */}
      <div className="absolute left-0 bottom-0 z-0">
        <Image
          src="/images/ellpise.png"
          alt="ellipse"
          width={550}
          height={550}
          className="object-contain opacity-60"
        />
      </div>

      {/* CTA Card */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="bg-[#FBE9EE] border border-primary rounded-xl shadow-md px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-600 text-sm md:text-base">
              Prepare yourself to be a part of exploration of
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              The Beauty of Lahore
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-14 py-2 rounded-lg transition">
              <UserPlus size={18} strokeWidth={2} />
              <span>Sign Up</span>
            </button>

            <button className="flex items-center gap-2 border border-primary text-primary px-14 py-2 rounded-lg hover:bg-primary-dark hover:text-white transition">
              <LogIn size={18} strokeWidth={2} />
              <span>Log In</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-0 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-6">Discover Lahore!</h3>

            <ul className="flex flex-wrap gap-8 text-grayish font-semibold mb-6">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Explore</li>
              <li className="cursor-pointer">Map</li>
              <li className="cursor-pointer">AI Guide</li>
            </ul>
          </div>

          <div className="text-left md:text-right">
            <h4 className="mb-4 font-bold text-start text-gray-800">
              Get the App
            </h4>

            <div className="flex flex-wrap md:flex-nowrap md:justify-end gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 sm:px-10 py-2 rounded-xl transition w-full sm:w-auto">
                <FaGooglePlay size={16} />
                <span className="font-medium">Android</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 sm:px-10 py-2 rounded-xl transition w-full sm:w-auto">
                <FaApple size={18} />
                <span className="font-medium">IOS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-0 mt-3 border-t border-primary-footer opacity-40"></div>

      {/* Bottom Row */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-0 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-md font-semibold text-grayish">
          2026 discoverlahore.com
        </p>

        <div className="flex gap-4 text-primary">
          {[FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram].map(
            (Icon, index) => (
              <div
                key={index}
                className="border border-primary p-2 rounded-full hover:bg-primary hover:text-white transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
