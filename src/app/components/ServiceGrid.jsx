// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// const services = [
//   {
//     title: "End-to-End Delivery",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "images/s1.jpg",
//   },
//   {
//     title: "Priority Air Freight",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
//   },
//   {
//     title: "Express Air Freight",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "images/s4.jpg",
//   },
//   {
//     title: "Warehousing",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
// ];

// function ServiceCard({ service }) {
//   return (
//     <div className="group relative h-[500px] overflow-hidden border-r-2 border-white">
//       {/* Hover Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-0 transform scale-100 translate-y-[5%] group-hover:opacity-100 group-hover:scale-[1.2] group-hover:-translate-y-[1%]"
//         style={{
//           backgroundImage: `url(${service.hoverImage})`,
//           transition: "opacity 0.4s ease, transform 0.4s ease",
//         }}
//       />

//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/60" /> */}
//       <div className="absolute right-0 top-0 flex justify-end ">
//         <Image
//           src="/images/arrow.png"
//           width={1000}
//           height={800}
//           className="w-40 h-40 group-hover:scale-[0.6] transition-transform "
//         />
//       </div>
//       {/* Content */}
//       <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
//         <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
//         <p className="text-gray-200 mb-4">{service.description}</p>
//         <button className="flex items-center gap-2 text-white font-medium group/btn">
//           Read More
//           <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
//         </button>
//       </div>
//     </div>
//   );
// }

// function ServiceGrid() {
//   return (
//     <div className="h-full bg-white">
//       {/* Header */}
//       <div className=" py-16">
//         <h2 className="text-5xl font-bold text-center mb-16">What We Offer</h2>

//         {/* Services Grid with Background Container */}
//         <div className="relative">
//           {/* Common Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/images/service-bg.png')",
//               height: "500px",
//             }}
//           />

//           {/* Services Grid */}
//           <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
//             {services.map((service, index) => (
//               <ServiceCard key={index} service={service} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceGrid;

// "use client";

// import React, { useRef, useEffect } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// const services = [
//   {
//     title: "End-to-End Delivery",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "/images/s1.jpg",
//   },
//   {
//     title: "Priority Air Freight",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
//   },
//   {
//     title: "Express Air Freight",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "/images/s4.jpg",
//   },
//   {
//     title: "Warehousing",
//     description:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     hoverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
// ];

// function ServiceCard({ service, index }) {
//   return (
//     <motion.div
//       className="group relative h-[500px] overflow-hidden border-r-2 border-white"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.5 }}
//       transition={{ delay: index * 0.2, duration: 0.6 }}
//     >
//       {/* Hover Image */}
//       {/* <motion.div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${service.hoverImage})` }}
//         initial={{ opacity: 0, scale: 1, y: "5%" }}
//         whileHover={{ opacity: 1, scale: 1.2, y: "-1%" }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//       /> */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-0 transform scale-100 translate-y-[5%] group-hover:opacity-100 group-hover:scale-[1.2] group-hover:-translate-y-[1%]"
//         style={{
//           backgroundImage: `url(${service.hoverImage})`,
//           transition: "opacity 0.4s ease, transform 0.4s ease",
//         }}
//       />

//       {/* Arrow Image */}
//       <motion.div
//         className="absolute right-0 top-0 flex justify-end"
//         initial={{ scale: 1 }}
//         whileHover={{ scale: 0.6 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Image
//           src="/images/arrow.png"
//           width={1000}
//           height={800}
//           className="w-40 h-40"
//           alt="Arrow"
//         />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         className="absolute inset-0 p-8 flex flex-col justify-end text-white"
//         initial={{ opacity: 1 }}
//         whileHover={{ opacity: 0.8 }}
//         transition={{ duration: 0.3 }}
//       >
//         <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
//         <p className="text-gray-200 mb-4">{service.description}</p>
//         <motion.button
//           className="flex items-center gap-2 text-white font-medium group/btn"
//           whileHover={{ x: 5 }}
//         >
//           Read More
//           <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }

// function ServiceGrid() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { threshold: 0.2, triggerOnce: true });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="h-full bg-white"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//     >
//       {/* Header */}
//       <motion.div
//         className="py-16"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-5xl font-bold text-center mb-16">What We Offer</h2>

//         {/* Services Grid with Background Container */}
//         <div className="relative">
//           {/* Common Background Image */}
//           <motion.div
//             className="absolute inset-0 bg-cover bg-center h-[500px]"
//             style={{ backgroundImage: "url('/images/service-bg.png')" }}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           />

//           {/* Services Grid */}
//           <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
//             {services.map((service, index) => (
//               <ServiceCard key={index} service={service} index={index} />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default ServiceGrid;

"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Advisory",
    slug: "advisory",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "/images/Advisory.jpg",
  },
  {
    title: "Representation",
    slug: "representation",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "/images/Consultancy.jpg",
  },
  {
    title: "Commodity Trading",
    slug: "commodity-trading",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "/images/agency.jpg",
  },
  {
    title: "Freight Brokerage",
    slug: "freight-brokerage",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "/images/brokerage.jpg",
  },
  {
    title: "Logistics",
    slug: "logistics",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "/images/Logistics.jpg",
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="group relative h-[500px] overflow-hidden border-r-2 border-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Hover Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transform scale-100 translate-y-[5%] group-hover:opacity-100 group-hover:scale-[1.2] group-hover:-translate-y-[1%]"
        style={{
          backgroundImage: `url(${service.hoverImage})`,
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      />

      {/* Arrow Image */}
      <motion.div
        className="absolute right-0 top-0 flex justify-end"
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/arrow.png"
          width={1000}
          height={800}
          className="w-40 h-40"
          alt="Arrow"
        />
      </motion.div>
      <div className="absolute inset-0  group-hover:bg-black/30" />
      {/* Content */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col justify-end text-white"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
        {/* <p className="text-gray-200 mb-4">{service.description}</p> */}
        <Link href={`/services/${service.slug}`}>
          <motion.button
            className="flex items-center gap-2 text-white font-medium group/btn"
            whileHover={{ x: 5 }}
          >
            Read More
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function ServiceGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const calculateBackgroundHeight = () => {
      const numServices = services.length;
      let numColumns;

      if (window.innerWidth < 768) {
        numColumns = 1;
      } else if (window.innerWidth < 1024) {
        numColumns = 2;
      } else {
        numColumns = 5;
      }

      const numRows = Math.ceil(numServices / numColumns);
      return numRows * 500; // Each card is 500px tall
    };

    // Set the initial height
    setBackgroundHeight(calculateBackgroundHeight());

    // Update height on window resize
    const handleResize = () => {
      setBackgroundHeight(calculateBackgroundHeight());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-16">What We Offer</h2>

        {/* Services Grid with Background Container */}
        <div className="relative">
          {/* Common Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/bg-7.jpeg')",
              height: `${backgroundHeight}px`, // Dynamic height
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Services Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServiceGrid;
