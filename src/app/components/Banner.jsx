// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const slides = [
//   {
//     title: "Reliable Global Ocean Freight Solutions",
//     image: "/images/1.jpg",
//     description: "Your trusted partner in international shipping and logistics",
//     buttonText: "About Company",
//   },
//   {
//     title: "Air Freight Services Worldwide",
//     image: "/images/2.jpg",
//     description: "Fast and secure air transportation solutions",
//     buttonText: "Our Services",
//   },
//   {
//     title: "Integrated Logistics Solutions",
//     image: "/images/3.jpg",
//     description: "End-to-end supply chain management",
//     buttonText: "Learn More",
//   },
// ];

// export function Banner() {
//   return (
//     <Carousel className="w-full">
//       <CarouselContent>
//         {slides.map((slide, index) => (
//           <CarouselItem key={index}>
//             <div className="relative h-[600px] w-full overflow-hidden">
//               <Image
//                 src={slide.image || "/placeholder.svg"}
//                 alt={slide.title}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//               <div className="absolute inset-0 bg-teal-900/60">
//                 <div className="container mx-auto h-full flex items-center">
//                   <div className="max-w-3xl text-white space-y-6 p-4">
//                     <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                       {slide.title}
//                     </h1>
//                     <p className="text-xl md:text-2xl">{slide.description}</p>
//                     <Button size="lg" variant="destructive">
//                       {slide.buttonText}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="left-4" />
//       <CarouselNext className="right-4" />
//     </Carousel>
//   );
// }

import React from "react";
import {
  Waves as Wave,
  Ship,
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  MoveDown,
  ChevronRight,
} from "lucide-react";

export function Banner() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="videos/5.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

      {/* Content */}
      <div className="relative z-20 min-h-screen">
        {/* Main Content */}
        <main className="px-8 pt-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              Your Home By The Sea
            </div>
            <h1 className="text-6xl font-semibold text-white mb-4">
              Surrender to Waves
            </h1>
            <h2 className="text-5xl font-semibold text-white mb-8">
              Discover the Shore
            </h2>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-100">
                Sea View Rentals <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-100">
                Build a house <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="absolute bottom-8 w-full px-8">
          <div className="flex items-center text-white">
            <div className="flex space-x-8">
              <div className="flex items-center">
                <Wave className="w-5 h-5 mr-2" />
                <span>450 Meters from the Coast</span>
              </div>
              <div className="flex items-center">
                <Ship className="w-5 h-5 mr-2" />
                <span>No storm can stop us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Now positioned on the right side */}
        <div className=" absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-30">
          <a
            href="#"
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className=" absolute right-8 bottom-40">
          <div className="text-white rotate-90 flex items-center">
            <span className="mr-6">SCROLL</span>
            <div className=" -rotate-90">
              <MoveDown className="w-12 h-12" />
            </div>

            {/* <div className="w-16 h-px bg-white">
              <ChevronRight />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default App;
