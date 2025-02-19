import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Parallax() {
  return (
    <div className="h-[650px]">
      {/* Hero Section with Parallax */}
      <div className="relative h-full  overflow-hidden">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/3.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        </div>

        {/* Content with Scroll Animation */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight transform transition duration-1000 hover:scale-105">
            Shall we commence our work today?
          </h1>
          {/* <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 transition-opacity duration-500 hover:opacity-90">
            We turn you on to pro lighting strategies to highlight features
            create intrigue and make the most of indoor and outdoor rooms
          </p> */}
          <Link href="contact">
            <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Animated Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Parallax;
