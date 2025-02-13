// import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const services = [
//   {
//     id: "05",
//     title: "Warehousing",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "06",
//     title: "Project Cargo",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "01",
//     title: "Air Freight",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
// ];

// const AllServices2 = () => {
//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-white text-stroke-orange">
//             ALL SERVICES
//           </h2>
//           <h3 className="text-3xl font-bold text-[#002B5B] mt-2">
//             Trusted For Our Services
//           </h3>
//           <p className="text-gray-600 mt-4">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry the standard dummy text ever since the when an printer
//             took.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white p-8 rounded-lg border-t-4 border-orange-500"
//             >
//               <div className="text-4xl font-bold text-orange-500 mb-4">
//                 {service.id}
//               </div>
//               <h4 className="text-2xl font-bold text-navy-900 mb-4">
//                 {service.title}
//               </h4>
//               <p className="text-gray-600 mb-6">{service.description}</p>
//               <button className="text-navy-900 font-semibold hover:text-orange-500 transition-colors">
//                 VIEW DETAIL
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8 space-x-2">
//           <button className="p-2 bg-navy-900 text-white rounded">
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button className="p-2 bg-navy-900 text-white rounded">
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllServices2;

//v0
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const services = [
//   {
//     id: "01",
//     title: "Air Freight",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "02",
//     title: "Sea Freight",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "03",
//     title: "Road Transport",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "04",
//     title: "Rail Freight",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "05",
//     title: "Warehousing",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
//   {
//     id: "06",
//     title: "Project Cargo",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
//   },
// ];

// export default function AllServices2() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? services.length - 1 : prevIndex - 1
//     );
//   };

//   // Helper function to get index with wrapping
//   const getIndex = (index) => {
//     return (index + services.length) % services.length;
//   };

//   // Get the three visible services
//   const visibleServices = [
//     services[getIndex(currentIndex)],
//     services[getIndex(currentIndex + 1)],
//     services[getIndex(currentIndex + 2)],
//   ];

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-white py-20">
//       {/* Background decoration */}
//       <div
//         className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20153711-sOeNVsqlQ5NfTEkj3g4pSLmiW2OHyH.png')] bg-no-repeat bg-left-bottom opacity-5"
//         style={{ backgroundSize: "50% auto" }}
//       />

//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 uppercase mb-4">
//             All Services
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
//             Trusted For Our Services
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry the standard dummy text ever since the when an printer
//             took.
//           </p>
//         </div>

//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <AnimatePresence mode="popLayout">
//               {visibleServices.map((service, index) => (
//                 <motion.div
//                   key={`${service.id}-${index}`}
//                   initial={{ opacity: 0, x: index === 2 ? 100 : -100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: index === 0 ? -100 : 100 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 30,
//                     mass: 1,
//                   }}
//                   className="relative p-6 bg-white rounded-lg border-2 border-transparent hover:border-orange-400 transition-colors group"
//                 >
//                   <div className="text-5xl font-bold text-orange-400 mb-4">
//                     {service.id}
//                   </div>
//                   <h3 className="text-2xl font-bold text-[#002147] mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 mb-6">{service.description}</p>
//                   <a
//                     href="#"
//                     className="inline-block text-[#002147] font-semibold hover:text-orange-400 transition-colors"
//                   >
//                     VIEW DETAIL
//                   </a>
//                   {/* Orange border accent */}
//                   <div className="absolute top-0 right-0 w-24 h-1 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Navigation buttons */}
//           <div className="flex justify-center gap-2">
//             <button
//               onClick={prev}
//               className="p-2 rounded-full bg-[#002147] text-white hover:bg-orange-400 transition-colors"
//               aria-label="Previous service"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={next}
//               className="p-2 rounded-full bg-[#002147] text-white hover:bg-orange-400 transition-colors"
//               aria-label="Next service"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//bolt
// "use client";
// import { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Warehouse,
//   Package,
//   Plane,
//   Ship,
//   Truck,
//   TrainFront,
// } from "lucide-react";

// const services = [
//   {
//     id: "01",
//     title: "Air Freight",
//     description:
//       "Global air freight solutions with express delivery options and real-time tracking for time-sensitive cargo.",
//     icon: Plane,
//   },
//   {
//     id: "02",
//     title: "Ocean Freight",
//     description:
//       "Reliable sea freight services with flexible container solutions and competitive rates for international shipping.",
//     icon: Ship,
//   },
//   {
//     id: "03",
//     title: "Road Transport",
//     description:
//       "Comprehensive road transportation network covering local and interstate routes with dedicated fleet services.",
//     icon: Truck,
//   },
//   {
//     id: "04",
//     title: "Rail Freight",
//     description:
//       "Sustainable rail freight solutions for bulk cargo with extensive network coverage and intermodal options.",
//     icon: TrainFront,
//   },
//   {
//     id: "05",
//     title: "Warehousing",
//     description:
//       "State-of-the-art warehousing facilities with inventory management and distribution services.",
//     icon: Warehouse,
//   },
//   {
//     id: "06",
//     title: "Project Cargo",
//     description:
//       "Specialized handling of oversized and heavy-lift cargo with end-to-end project management.",
//     icon: Package,
//   },
// ];

// function AllServices2() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((current) => (current + 1) % services.length);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex(
//         (current) => (current - 1 + services.length) % services.length
//       );
//     }
//   };

//   useEffect(() => {
//     // Auto-slide timer
//     const timer = setInterval(nextSlide, 3000);

//     // Reset animation state
//     if (isAnimating) {
//       const animTimer = setTimeout(() => setIsAnimating(false), 500);
//       return () => {
//         clearTimeout(animTimer);
//         clearInterval(timer);
//       };
//     }

//     return () => clearInterval(timer);
//   }, [isAnimating]);

//   const getVisibleServices = () => {
//     const services3 = [];
//     for (let i = 0; i < 3; i++) {
//       const index = (currentIndex + i) % services.length;
//       services3.push(services[index]);
//     }
//     return services3;
//   };

//   const visibleServices = getVisibleServices();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-4">
//             ALL SERVICES
//           </h2>
//           <h3 className="text-5xl font-bold text-[#002B5B] mb-6">
//             Trusted For Our Services
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive logistics solutions tailored to your needs. From air
//             freight to project cargo, we deliver excellence across all
//             transportation modes.
//           </p>
//         </div>

//         {/* Services Carousel */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out ${
//                 isAnimating
//                   ? "opacity-0 transform translate-x-4"
//                   : "opacity-100 transform translate-x-0"
//               }`}
//             >
//               {visibleServices.map((service) => {
//                 const Icon = service.icon;
//                 return (
//                   <div
//                     key={service.id}
//                     className="relative overflow-hidden group rounded-lg p-8 transition-all duration-300
//                       border border-gray-200 hover:shadow-lg hover:border-orange-300 bg-white"
//                   >
//                     <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-orange-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />

//                     <div className="relative">
//                       <span className="text-5xl font-bold text-orange-500/20 mb-4 block">
//                         {service.id}
//                       </span>

//                       <div className="flex items-center mb-4">
//                         <div className="p-3 bg-orange-50 rounded-lg mr-4">
//                           <Icon className="w-8 h-8 text-orange-500" />
//                         </div>
//                         <h4 className="text-2xl font-bold text-[#002B5B]">
//                           {service.title}
//                         </h4>
//                       </div>

//                       <p className="text-gray-600 mb-6 line-clamp-3">
//                         {service.description}
//                       </p>

//                       <button className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group">
//                         VIEW DETAIL
//                         <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center mt-12 gap-4">
//             <button
//               onClick={prevSlide}
//               disabled={isAnimating}
//               className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={isAnimating}
//               className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllServices2;

// "use client";
// import { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Warehouse,
//   Package,
//   Plane,
//   Ship,
//   Truck,
//   TrainFront,
// } from "lucide-react";

// const services = [
//   {
//     id: "01",
//     title: "Air Freight",
//     description:
//       "Global air freight solutions with express delivery options and real-time tracking for time-sensitive cargo.",
//     icon: Plane,
//   },
//   {
//     id: "02",
//     title: "Ocean Freight",
//     description:
//       "Reliable sea freight services with flexible container solutions and competitive rates for international shipping.",
//     icon: Ship,
//   },
//   {
//     id: "03",
//     title: "Road Transport",
//     description:
//       "Comprehensive road transportation network covering local and interstate routes with dedicated fleet services.",
//     icon: Truck,
//   },
//   {
//     id: "04",
//     title: "Rail Freight",
//     description:
//       "Sustainable rail freight solutions for bulk cargo with extensive network coverage and intermodal options.",
//     icon: TrainFront,
//   },
//   {
//     id: "05",
//     title: "Warehousing",
//     description:
//       "State-of-the-art warehousing facilities with inventory management and distribution services.",
//     icon: Warehouse,
//   },
//   {
//     id: "06",
//     title: "Project Cargo",
//     description:
//       "Specialized handling of oversized and heavy-lift cargo with end-to-end project management.",
//     icon: Package,
//   },
// ];

// function AllServices2() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((current) => (current + 1) % services.length);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex(
//         (current) => (current - 1 + services.length) % services.length
//       );
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         {/* Header Section (same as before) */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-4">
//             ALL SERVICES
//           </h2>
//           <h3 className="text-5xl font-bold text-[#002B5B] mb-6">
//             Trusted For Our Services
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive logistics solutions tailored to your needs. From air
//             freight to project cargo, we deliver excellence across all
//             transportation modes.
//           </p>
//         </div>
//         {/* Services Carousel */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out -mx-4"
//               style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
//               onTransitionEnd={() => setIsAnimating(false)}
//             >
//               {services.map((service) => {
//                 const Icon = service.icon;
//                 return (
//                   <div key={service.id} className="w-1/3 flex-shrink-0 px-4">
//                     <div className="relative overflow-hidden group rounded-xl p-8 transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-orange-300 bg-white hover:-translate-y-2 h-full">
//                       <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />

//                       <div className="relative">
//                         <span className="text-5xl font-bold text-orange-500/20 mb-4 block transition-transform duration-300 group-hover:-translate-y-2">
//                           {service.id}
//                         </span>

//                         <div className="flex items-center mb-4">
//                           <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mr-4 shadow-md">
//                             <Icon className="w-8 h-8 text-orange-600" />
//                           </div>
//                           <h4 className="text-2xl font-bold text-[#002B5B]">
//                             {service.title}
//                           </h4>
//                         </div>

//                         <p className="text-gray-600 mb-6 line-clamp-3">
//                           {service.description}
//                         </p>

//                         <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-all group">
//                           VIEW DETAIL
//                           <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation Buttons (same as before) */}
//           <div className="flex justify-center mt-12 gap-4">
//             <button
//               onClick={prevSlide}
//               disabled={isAnimating}
//               className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={isAnimating}
//               className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllServices2;

// "use client";
// import { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Warehouse,
//   Package,
//   Plane,
//   Ship,
//   Truck,
//   TrainFront,
// } from "lucide-react";

// const services = [
//   {
//     id: "01",
//     title: "Air Freight",
//     description:
//       "Global air freight solutions with express delivery options and real-time tracking for time-sensitive cargo.",
//     icon: Plane,
//   },
//   {
//     id: "02",
//     title: "Ocean Freight",
//     description:
//       "Reliable sea freight services with flexible container solutions and competitive rates for international shipping.",
//     icon: Ship,
//   },
//   {
//     id: "03",
//     title: "Road Transport",
//     description:
//       "Comprehensive road transportation network covering local and interstate routes with dedicated fleet services.",
//     icon: Truck,
//   },
//   {
//     id: "04",
//     title: "Rail Freight",
//     description:
//       "Sustainable rail freight solutions for bulk cargo with extensive network coverage and intermodal options.",
//     icon: TrainFront,
//   },
//   {
//     id: "05",
//     title: "Warehousing",
//     description:
//       "State-of-the-art warehousing facilities with inventory management and distribution services.",
//     icon: Warehouse,
//   },
//   {
//     id: "06",
//     title: "Project Cargo",
//     description:
//       "Specialized handling of oversized and heavy-lift cargo with end-to-end project management.",
//     icon: Package,
//   },
// ];

// function AllServices2() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((current) => (current + 1) % services.length);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex(
//         (current) => (current - 1 + services.length) % services.length
//       );
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         {/* Header Section (same as before) */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-4">
//             ALL SERVICES
//           </h2>
//           <h3 className="text-5xl font-bold text-[#002B5B] mb-6">
//             Trusted For Our Services
//           </h3>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Comprehensive logistics solutions tailored to your needs. From air
//             freight to project cargo, we deliver excellence across all
//             transportation modes.
//           </p>
//         </div>
//         {/* Services Carousel */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out -mx-4"
//               style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
//               onTransitionEnd={() => setIsAnimating(false)}
//             >
//               {services.map((service) => {
//                 const Icon = service.icon;
//                 return (
//                   <div key={service.id} className="w-1/3 flex-shrink-0 px-4">
//                     <div className="relative overflow-hidden group rounded-xl p-8 transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-orange-300 bg-white hover:-translate-y-2 h-full">
//                       <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />

//                       <div className="relative">
//                         <span className="text-5xl font-bold text-orange-500/20 mb-4 block transition-transform duration-300 group-hover:-translate-y-2">
//                           {service.id}
//                         </span>

//                         <div className="flex items-center mb-4">
//                           <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mr-4 shadow-md">
//                             <Icon className="w-8 h-8 text-orange-600" />
//                           </div>
//                           <h4 className="text-2xl font-bold text-[#002B5B]">
//                             {service.title}
//                           </h4>
//                         </div>

//                         <p className="text-gray-600 mb-6 line-clamp-3">
//                           {service.description}
//                         </p>

//                         <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-all group">
//                           VIEW DETAIL
//                           <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation Buttons (same as before) */}
//           <div className="flex justify-center mt-12 gap-4">
//             <button
//               onClick={prevSlide}
//               disabled={isAnimating}
//               className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={isAnimating}
//               className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllServices2;

"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Warehouse,
  Package,
  Plane,
  Ship,
  Truck,
  TrainFront,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Air Freight",
    description:
      "Global air freight solutions with express delivery options and real-time tracking for time-sensitive cargo.",
    icon: Plane,
  },
  {
    id: "02",
    title: "Ocean Freight",
    description:
      "Reliable sea freight services with flexible container solutions and competitive rates for international shipping.",
    icon: Ship,
  },
  {
    id: "03",
    title: "Road Transport",
    description:
      "Comprehensive road transportation network covering local and interstate routes with dedicated fleet services.",
    icon: Truck,
  },
  {
    id: "04",
    title: "Rail Freight",
    description:
      "Sustainable rail freight solutions for bulk cargo with extensive network coverage and intermodal options.",
    icon: TrainFront,
  },
  {
    id: "05",
    title: "Warehousing",
    description:
      "State-of-the-art warehousing facilities with inventory management and distribution services.",
    icon: Warehouse,
  },
  {
    id: "06",
    title: "Project Cargo",
    description:
      "Specialized handling of oversized and heavy-lift cargo with end-to-end project management.",
    icon: Package,
  },
];

// Cloning the services for infinite scrolling effect
const extendedServices = [...services, ...services];

function AllServices2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === 0 ? extendedServices.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const transitionEndHandler = () => {
      setIsAnimating(false);

      // Reset index when reaching the duplicated section
      if (currentIndex >= services.length) {
        setCurrentIndex(0);
      }
    };

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-4">
            ALL SERVICES
          </h2>
          <h3 className="text-5xl font-bold text-[#002B5B] mb-6">
            Trusted For Our Services
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your needs. From air
            freight to project cargo, we deliver excellence across all
            transportation modes.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex % services.length) * 33.333
                }%)`,
              }}
              onTransitionEnd={() => setIsAnimating(false)}
            >
              {extendedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="relative overflow-hidden group rounded-xl p-8 transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-orange-300 bg-white hover:-translate-y-2 h-full">
                      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />

                      <div className="relative">
                        <span className="text-5xl font-bold text-orange-500/20 mb-4 block transition-transform duration-300 group-hover:-translate-y-2">
                          {service.id}
                        </span>

                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mr-4 shadow-md">
                            <Icon className="w-8 h-8 text-orange-600" />
                          </div>
                          <h4 className="text-2xl font-bold text-[#002B5B]">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {service.description}
                        </p>

                        <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-500 transition-all group">
                          VIEW DETAIL
                          <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="p-2 rounded-full bg-[#002B5B] text-white hover:bg-[#003B7B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices2;
