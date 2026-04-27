"use client";

import { useState, useEffect } from "react";

const images = [
  "/hero-coins-globe.jpg",
  "/global-economic-map.jpg",
  "/exchangebureau1.jpg",
];

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500); // Transitions every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      {/* 45% Dark Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/45"></div>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity durationSingular-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 duration-1000" : "opacity-0 duration-1000"
          }`}
        >
          <img
            alt="Hero Background Asset"
            src={src}
            className={`w-full h-full object-cover object-center transform transition-transform duration-[15000ms] ease-out ${
              index === currentIndex ? "scale-[1.05]" : "scale-100"
            }`}
          />
        </div>
      ))}
      
      {/* Subtle indicator dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-primary w-8" : "bg-white/30 hover:bg-white/60 w-1.5"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
