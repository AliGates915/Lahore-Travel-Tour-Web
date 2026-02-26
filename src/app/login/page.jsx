"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FALLBACK_SLIDES } from "@/components/data/authData";



export default function LoginPage() {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const router = useRouter();
  const UNSPLASH_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  // Fetch Unsplash Images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://api.unsplash.com/photos/random", {
          params: {
            query: "Lahore tourism",
            count: 3,
            orientation: "landscape",
            client_id: UNSPLASH_KEY,
          },
        });

        const data = Array.isArray(res.data) ? res.data : [];

        // If API returns empty -> fallback
        if (!data.length) {
          setUseFallback(true);
          setImages([]);
          return;
        }

        setImages(data);
        setUseFallback(false);
      } catch (err) {
        // If API fails (rate limit / 403 / network etc.) -> fallback
        console.error("Unsplash error:", err?.response?.data || err.message);
         setImages([]); // clear old images
        setActive(0); // reset slider
        setUseFallback(true); // force fallbackZ
      }
    };

    fetchImages();
  }, [UNSPLASH_KEY]);

  // Auto Slider (works for both Unsplash and fallback)
  useEffect(() => {
    const slidesLength = useFallback ? FALLBACK_SLIDES.length : images.length;
    if (!slidesLength) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slidesLength);
    }, 4000);

    return () => clearInterval(interval);
  }, [images, useFallback]);

  // Current slide image
  const currentImage = useFallback
    ? FALLBACK_SLIDES[active]?.src
    : images?.[active]?.urls?.regular || "/images/ad.webp";

  // Current overlay title/description
  const overlayTitle = useFallback
    ? FALLBACK_SLIDES[active]?.title
    : images?.[active]?.alt_description || "Welcome to Lahore";

  const overlaySubtitle = useFallback
    ? FALLBACK_SLIDES[active]?.subtitle
    : "Login to explore";

  const dotsCount = useFallback ? FALLBACK_SLIDES.length : images.length || 3;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden px-4">
      {/* Rotated Background - Hide on small screens */}
      <div className="hidden sm:block absolute w-[800px] h-[600px] bg-gradient-to-r from-primary via-secondary to-primary-dark rotate-[-6deg] rounded-3xl"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-[800px] sm:h-[600px] bg-white rounded-3xl shadow-2xl flex overflow-hidden">
        {/* Left Image Section - Hidden on small screens */}
        <div className="hidden sm:block relative w-1/2 h-full overflow-hidden">
          <Image
            src={currentImage}
            alt="Lahore"
            fill
            priority
            className="object-cover transition-opacity duration-700"
          />

          {/* Glass Overlay */}
          <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-lg px-6 py-4 rounded-xl text-white w-[240px]">
            <h2 className="text-base font-semibold capitalize">
              {overlayTitle}
            </h2>
            <p className="text-xs opacity-90">{overlaySubtitle}</p>

            {/* Dots */}
            <div className="flex gap-2 mt-3">
              {Array.from({ length: dotsCount }).map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition ${
                    index === active ? "bg-white scale-110" : "bg-white/50"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Login Section */}
        <div className="w-full sm:w-1/2 flex items-center justify-center bg-gray-50 sm:rounded-l-[50px] p-6 sm:p-0">
          <div className="w-full max-w-[320px]">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
              Login your account!
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <div className="text-right text-xs mt-2 text-gray-500 hover:text-primary cursor-pointer">
                  Forgot password?
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg text-sm bg-gradient-to-r from-primary to-primary-mid text-white font-medium hover:opacity-90 transition"
              >
                Continue
              </button>
            </form>

            <p className="text-xs text-gray-600 mt-5 text-center">
              Dont have an account?{" "}
              <span
                onClick={() => router.push("/register")}
                className="text-primary cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}