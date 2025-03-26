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

// import React from "react";
// import {
//   Waves as Wave,
//   Ship,
//   ArrowUpRight,
//   Facebook,
//   Twitter,
//   Instagram,
//   MoveDown,
//   ChevronRight,
// } from "lucide-react";

// export function Banner() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="videos/5.mp4" type="video/mp4" />
//       </video>

//       <div className="relative z-20 min-h-screen">

//         <main className="px-8 pt-40">
//           <div className="max-w-3xl">
//             <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
//               Your Home By The Sea
//             </div>
//             <h1 className="text-6xl font-semibold text-white mb-4">
//               Surrender to Waves
//             </h1>
//             <h2 className="text-5xl font-semibold text-white mb-8">
//               Discover the Shore
//             </h2>
//             <div className="flex space-x-4">
//               <button className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-100">
//                 Sea View Rentals <ArrowUpRight className="w-4 h-4 ml-2" />
//               </button>
//               <button className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-100">
//                 Build a house <ArrowUpRight className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </div>
//         </main>

//         <div className="absolute bottom-8 w-full px-8">
//           <div className="flex items-center text-white">
//             <div className="flex space-x-8">
//               <div className="flex items-center">
//                 <Wave className="w-5 h-5 mr-2" />
//                 <span>450 Meters from the Coast</span>
//               </div>
//               <div className="flex items-center">
//                 <Ship className="w-5 h-5 mr-2" />
//                 <span>No storm can stop us</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-30">
//           <a
//             href="#"
//             className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
//           >
//             <Facebook className="w-5 h-5 text-white" />
//           </a>
//           <a
//             href="#"
//             className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
//           >
//             <Twitter className="w-5 h-5 text-white" />
//           </a>
//           <a
//             href="#"
//             className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
//           >
//             <Instagram className="w-5 h-5 text-white" />
//           </a>
//         </div>

//         <div className=" absolute right-8 bottom-40">
//           <div className="text-white rotate-90 flex items-center">
//             <span className="mr-6">SCROLL</span>
//             <div className=" -rotate-90">
//               <MoveDown className="w-12 h-12" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//working
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Waves as Wave,
//   Ship,
//   ArrowUpRight,
//   Facebook,
//   Twitter,
//   Instagram,
//   MoveDown,
// } from "lucide-react";
// import { GiAnchor } from "react-icons/gi";
// import { LiaAnchorSolid } from "react-icons/lia";
// import Link from "next/link";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const socialVariants = {
//   hidden: { opacity: 0, scale: 0.5 },
//   visible: { opacity: 1, scale: 1 },
// };

// export function Banner() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Video Background with fade-in */}
//       <motion.video
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="videos/6.mp4" type="video/mp4" />
//       </motion.video>
//       {/* <div className="absolute inset-0  bg-gradient-to-b from-gray-100/40 to-transparent" /> */}
//       {/* Content Container */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative z-20 min-h-screen"
//       >
//         {/* Main Content */}
//         <main className="px-8 absolute top-1/3">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6"
//             >
//               Specialized Logistics and Maritime Solutions
//             </motion.div>

//             <div className="flex space-x-4 items-center">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-6xl font-semibold text-white mb-4"
//               >
//                 ARK
//               </motion.h1>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="flex gap-4 text-6xl font-semibold text-white mb-8"
//             >
//               Logistics & {/* <GiAnchor className="text-white w-12 h-12" /> */}
//               Maritime
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex space-x-4"
//             >
//               <Link href="/about">
//                 <motion.button
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-100"
//                 >
//                   About us
//                   <ArrowUpRight className="w-4 h-4 ml-2" />
//                 </motion.button>
//               </Link>
//               <Link href="/contact">
//                 <motion.button
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-100"
//                 >
//                   Contact us
//                   <ArrowUpRight className="w-4 h-4 ml-2" />
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </div>
//         </main>

//         {/* Footer */}
//         {/* <div className="absolute bottom-8 w-full px-8">
//           <div className="flex items-center text-white">
//             <div className="flex space-x-8">
//               <motion.div
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 1.2 }}
//                 className="flex items-center"
//               >
//                 <Wave className="w-5 h-5 mr-2" />
//                 <span>450 Meters from the Coast</span>
//               </motion.div>
//               <motion.div
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 1.2 }}
//                 className="flex items-center"
//               >
//                 <Ship className="w-5 h-5 mr-2" />
//                 <span>No storm can stop us</span>
//               </motion.div>
//             </div>
//           </div>
//         </div> */}

//         {/* Social Links */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 delayChildren: 1.5,
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//           className="absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-30"
//         >
//           {[Facebook, Twitter, Instagram].map((Icon, index) => (
//             <motion.a
//               key={index}
//               variants={socialVariants}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               href="#"
//               className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
//             >
//               <Icon className="w-5 h-5 text-white" />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <div className="absolute right-8 bottom-40">
//           <div className="text-white rotate-90 flex items-center">
//             <span className="mr-6">SCROLL</span>
//             <motion.div
//               animate={{
//                 x: [0, 20, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className=""
//             >
//               <LiaAnchorSolid className="w-12 h-12 -rotate-90" />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Waves as Wave,
//   Ship,
//   ArrowUpRight,
//   Facebook,
//   Twitter,
//   Instagram,
//   MoveDown,
// } from "lucide-react";
// import { GiAnchor } from "react-icons/gi";
// import { LiaAnchorSolid } from "react-icons/lia";
// import Link from "next/link";

// // Animation variants (same as before)
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const socialVariants = {
//   hidden: { opacity: 0, scale: 0.5 },
//   visible: { opacity: 1, scale: 1 },
// };
// export function Banner() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <motion.video
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="videos/6.mp4" type="video/mp4" />
//       </motion.video>

//       {/* Content Container */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative z-20 min-h-screen"
//       >
//         {/* Main Content */}
//         <main className="px-4 md:px-8 absolute top-[40%] md:top-1/3">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base"
//             >
//               Specialized Logistics and Maritime Solutions
//             </motion.div>

//             <div className="flex space-x-4 items-center">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-2 md:mb-4"
//               >
//                 ARK
//               </motion.h1>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="flex gap-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 md:mb-8"
//             >
//               Logistics & Maritime
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col md:flex-row gap-y-4 md:space-x-4"
//             >
//               <Link href="/about" className="w-full md:w-auto">
//                 <motion.button
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center hover:bg-gray-100 text-sm md:text-base"
//                 >
//                   About us
//                   <ArrowUpRight className="w-4 h-4 ml-2" />
//                 </motion.button>
//               </Link>
//               <Link href="/contact" className="w-full md:w-auto">
//                 <motion.button
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center hover:bg-gray-100 text-sm md:text-base"
//                 >
//                   Contact us
//                   <ArrowUpRight className="w-4 h-4 ml-2" />
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </div>
//         </main>

//         {/* Social Links */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 delayChildren: 1.5,
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//           className="absolute right-4 md:right-8 top-1/3 md:top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 md:space-y-4 z-30"
//         >
//           {[Facebook, Twitter, Instagram].map((Icon, index) => (
//             <motion.a
//               key={index}
//               variants={socialVariants}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               href="#"
//               className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
//             >
//               <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <div className="absolute right-4 md:right-8 bottom-20 md:bottom-40 w-8 h-20">
//           <div className="text-white rotate-90 flex items-center">
//             <span className="mr-4 md:mr-6 text-sm md:text-base">SCROLL</span>
//             <motion.div
//               animate={{
//                 x: [0, 20, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <LiaAnchorSolid className="w-8 h-8 md:w-12 md:h-12 -rotate-90" />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Twitter, Instagram } from "lucide-react";
import { LiaAnchorSolid } from "react-icons/lia";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export function Banner() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="videos/6.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0"></div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-20 min-h-screen"
      >
        {/* Centered Main Content */}
        <main className="px-4 md:px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/3 md:left-8 md:translate-x-0 md:translate-y-0 w-full">
          <div className="max-w-3xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base"
            >
              Specialized Logistics and Maritime Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-2 md:mb-4"
            >
              ARK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center md:justify-start gap-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 md:mb-8"
            >
              Logistics & Maritime
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row gap-y-4 md:space-x-4 items-center"
            >
              <Link href="/about" className="w-full md:w-auto">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center hover:bg-gray-100 text-sm md:text-base"
                >
                  About us
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full md:w-auto">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center hover:bg-gray-100 text-sm md:text-base"
                >
                  Contact us
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1.5,
                staggerChildren: 0.2,
              },
            },
          }}
          className="absolute right-4 md:right-8 top-1/4 md:top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 md:space-y-4 z-30"
        >
          {[Facebook, Twitter, Instagram].map((Icon, index) => (
            <motion.a
              key={index}
              variants={socialVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute right-4 md:right-8 bottom-20 md:bottom-40 w-8 h-20">
          <div className="text-white rotate-90 flex items-center">
            <span className="mr-4 md:mr-6 text-sm md:text-base">SCROLL</span>
            <motion.div
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LiaAnchorSolid className="w-8 h-8 md:w-12 md:h-12 -rotate-90" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
