// import React from "react";
// import { Plane, Truck, Ship, CheckCircle2 } from "lucide-react";

// export function HeroSection() {
//   return (
//     <div className="h-full bg-white">
//       {/* Service Cards */}
//       <div className="">
//         <div className="">
//           <div className="grid grid-cols-1 md:grid-cols-3 ">
//             {/* Land Freight */}
//             <div className="p-16 border group hover:shadow-lg transition-shadow">
//               <div className="flex gap-4 items-center">
//                 <div className="relative w-12 h-12 transition-transform duration-500 ease-in-out transform group-hover:translate-x-full">
//                   <Truck className="w-12 h-12 text-red-600 mb-4 absolute top-0 left-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
//                   <Truck className="w-12 h-12 text-red-600 mb-4 absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 transform -translate-x-full rotate-y-180" />
//                 </div>
//                 {/* <Truck className="w-12 h-12 text-red-600 mb-4" /> */}
//                 <h3 className="text-2xl font-bold mb-4">
//                   Land Freight Services
//                 </h3>
//               </div>

//               <p className="text-gray-600">
//                 Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classic.
//               </p>
//             </div>

//             {/* Ocean Freight */}
//             <div className="p-16 border  hover:shadow-lg transition-shadow">
//               <div className="flex gap-4 items-center">
//                 <Ship className="w-12 h-12 text-red-600 mb-4" />
//                 <h3 className="text-2xl font-bold mb-4">
//                   Ocean Freight Solutions
//                 </h3>
//               </div>
//               <p className="text-gray-600">
//                 Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classic.
//               </p>
//             </div>

//             {/* Air Cargo */}
//             <div className="p-16 border  hover:shadow-lg transition-shadow">
//               <div className="flex gap-4 items-center">
//                 <Plane className="w-12 h-12 text-red-600 mb-4" />
//                 <h3 className="text-2xl font-bold mb-4">
//                   Air Cargo Transportation
//                 </h3>
//               </div>
//               <p className="text-gray-600">
//                 Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classic.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative h-full flex flex-col lg:flex-row items-center bg-white overflow-hidden">
//         <div className="w-full lg:w-1/2">
//           <div className=" xl:absolute left-20 top-[42%] xl:-translate-y-1/2 w-full xl:w-1/2">
//             <img
//               src="/images/plane.png"
//               alt="Airplane"
//               className="w-full h-full"
//             />
//           </div>

//           <div className="py-16 xl:mt-96 ">
//             <div className=" px-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
//                     <CheckCircle2 className="text-white w-4 h-4" />
//                   </div>
//                   <span className="text-lg">Freight Forwarding</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
//                     <CheckCircle2 className="text-white w-4 h-4" />
//                   </div>
//                   <span className="text-lg">Warehousing & Delivery</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
//                     <CheckCircle2 className="text-white w-4 h-4" />
//                   </div>
//                   <span className="text-lg">Customs Clearance</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
//                     <CheckCircle2 className="text-white w-4 h-4" />
//                   </div>
//                   <span className="text-lg">Freight Forwarding</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:pt-40 px-6 w-full lg:w-1/2">
//           <div className="">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
//               Drive Your Business Forward with LogiHub
//             </h1>
//             <p className="text-gray-600 text-lg mb-4">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a piece of classical Latin literature from 45 BC,
//               making it over 2000 years old.
//             </p>
//             <p className="text-gray-600 text-lg mb-8">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//             </p>
//             <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
//               Read More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Truck,
  Ship,
  CheckCircle2,
  Briefcase,
  Box,
  Globe,
  Compass,
  Forklift,
  ChartNoAxesCombined,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-full bg-white">
      {/* Service Cards */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 overflow-hidden pb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 border hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 items-center">
              <Compass className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Advisory</h3>
            </div>
            <p className="text-gray-600">
              We are consultants specializing in the ports, shipping, and
              logistics sector, with a strong focus on the Middle East and
              Africa. Our Advisory supports companies looking to enter or expand
              in these regions by offering market insights, strategic guidance,
              and on-the-ground connections to help them navigate the
              complexities of local operations and drive sustainable growth.
            </p>
          </motion.div>

          {/* Land Freight */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 border group hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 items-center">
              <Globe className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Representation</h3>
            </div>
            <p className="text-gray-600">
              If you're a global shipping or logistics company looking to
              establish a presence in the Middle East, ARK Logistics & Maritime
              can represent you on the ground. We cover over 35 major ports
              across the region, plus a wide network of smaller ports, helping
              you tap into new opportunities without the need for a local
              office.
            </p>
          </motion.div>

          {/* Ocean Freight */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 border hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 items-center">
              <ChartNoAxesCombined className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Commodity Trading</h3>
            </div>
            <p className="text-gray-600">
              ARK Logistics & Maritime Commodity Trading has revolutionized the
              transportation and trading of raw materials by seamlessly
              connecting global sellers and buyers.
            </p>
          </motion.div>

          {/* Air Cargo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 border hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 items-center">
              <Ship className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Freight Brokerage</h3>
            </div>
            <p className="text-gray-600">
              We also handle Freight Brokerage services, where we connect
              regional feeder operators with Carriers and NVOs. Basically, we
              secure container space and match it with those who need it
              most—helping our clients get better rates, save time, and keep
              things moving smoothly.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 border hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 items-center">
              <Forklift className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Logistics</h3>
            </div>
            <p className="text-gray-600">
              We provide Logistics design solutions focused on Africa, ensuring
              transparency and visibility. Our expertise within Project
              logistics ensures that your cargo is safely and efficiently
              delivered within the African hinterland.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-full flex flex-col lg:flex-row items-center bg-white overflow-hidden"
      >
        <div className="w-full lg:w-1/2">
          {/* <div className="xl:absolute left-20 top-1/2 xl:-translate-y-1/2 w-full xl:w-1/2"> */}
          <div>
            <motion.img
              src="/images/cargo-ship-sea6.png"
              alt="Airplane"
              className="w-full h-full"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>

        <div className="pb-4 lg:pt-40 px-6 w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-4xl font-bold mb-6 text-black">
              Propel Your Business Ahead with ARK Logistics & Maritime.
            </h1>
            {/* <p className="text-gray-600 text-lg mb-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p> */}
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
