// "use client";
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     title: "The New Logistic Revolutions",
//     subtitle: "Safety, quality, professionalism.",
//     image: "/images/bg-1.jpg",
//   },
//   {
//     title: "Modern Delivery Solutions",
//     subtitle: "Fast, reliable, worldwide.",
//     image: "/images/bg-4.jpg",
//   },
//   {
//     title: "Global Logistics Network",
//     subtitle: "Connected across continents.",
//     image: "/images/bg-5.jpg",
//   },
// ];

// function Banner2() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {/* Background Image with Overlay */}
//           <div className="absolute inset-0">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50" />
//           </div>

//           {/* Content */}
//           <div className="relative h-full flex items-center justify-center">
//             <div className="text-center text-white px-4">
//               <h1 className="text-5xl md:text-7xl font-bold mb-4">
//                 {slide.title}
//               </h1>
//               <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
//               <div className="flex gap-4 justify-center">
//                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
//                   ABOUT US
//                 </button>
//                 <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md transition-colors">
//                   CONTACT
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentSlide
//                 ? "bg-white w-8"
//                 : "bg-white/50 hover:bg-white/75"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Banner2;

"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "The New Logistic Revolutions",
    subtitle: "Safety, quality, professionalism.",
    image: "/images/bg-1.jpg",
  },
  {
    title: "Modern Delivery Solutions",
    subtitle: "Fast, reliable, worldwide.",
    image: "/images/bg-4.jpg",
  },
  {
    title: "Global Logistics Network",
    subtitle: "Connected across continents.",
    image: "/images/bg-5.jpg",
  },
];

function Banner2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 1000);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden perspective-1000">
      {/* Slides Container */}
      <div
        className={`relative h-full w-full transition-transform duration-1000 ease-in-out ${
          isTransitioning ? "translate-z--100" : ""
        }`}
      >
        {slides.map((slide, index) => {
          const position = index - currentSlide;
          const isActive = position === 0;

          return (
            <div
              key={index}
              className={`absolute inset-0 transform transition-transform duration-1000 ease-in-out`}
              style={{
                transform: `rotateX(${position * 90}deg) translateZ(${
                  position * 100
                }vh)`,
                zIndex: isActive ? 1 : 0,
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 transform translate-z-50">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-4 justify-center animate-fade-in-up animate-delay-400 items-center">
                    <button className="bg-[#228186] hover:bg-[#1A6266] text-white px-8 py-3 rounded-xl transition-colors">
                      ABOUT US
                    </button>
                    <div className="">
                      <p>or</p>
                    </div>
                    <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-xl transition-colors">
                      CONTACT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner2;
