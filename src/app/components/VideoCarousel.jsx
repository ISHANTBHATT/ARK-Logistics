"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    url: "videos/1.mp4",
    title: "Consultancy",
  },
  {
    id: 2,
    url: "videos/2.mp4",
    title: "Vessel",
  },
  {
    id: 3,
    url: "videos/4.mp4",
    title: "Cargo",
  },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-screen">
      {/* <img
        src={videos[currentIndex].url}
        alt={videos[currentIndex].title}
        className="w-full h-full object-cover"
      /> */}
      <video
        key={videos[currentIndex].url}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videos[currentIndex].url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h3 className="text-white text-3xl font-bold mb-6">
                {videos[currentIndex].title}
              </h3>
              <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
