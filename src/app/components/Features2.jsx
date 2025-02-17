// import React from "react";

// const features = [
//   {
//     id: "01",
//     title: "Solutions and specialized",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service",
//   },
//   {
//     id: "02",
//     title: "Multiple warehouses",
//     description:
//       "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
//   },
//   {
//     id: "03",
//     title: "Tracking made easy",
//     description:
//       "A tracking number for the entire process, so that you can find the exact position. it will help you",
//   },
// ];

// const Features2 = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
//       {features.map((feature, index) => (
//         <div
//           key={feature.id}
//           className={`relative h-[400px] ${
//             index % 2 === 1 ? "bg-white" : "bg-blue-600"
//           } p-12 flex flex-col justify-center`}
//         >
//           <h3
//             className={`text-7xl font-bold mb-4 ${
//               index % 2 === 1 ? "text-orange-500" : "text-white"
//             }`}
//           >
//             {feature.id}
//           </h3>
//           <h4
//             className={`text-2xl font-bold mb-4 ${
//               index % 2 === 1 ? "text-navy-900" : "text-white"
//             }`}
//           >
//             {feature.title}
//           </h4>
//           <p
//             className={`mb-8 ${
//               index % 2 === 1 ? "text-gray-600" : "text-white"
//             }`}
//           >
//             {feature.description}
//           </p>
//           <button className="w-12 h-12 border-2 border-current flex items-center justify-center">
//             →
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Features2;

//working
// "use client";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// const features = [
//   {
//     number: "01",
//     title: "Solutions and specialized",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service",
//   },
//   {
//     number: "02",
//     title: "Multiple warehouses",
//     description:
//       "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
//   },
//   {
//     number: "03",
//     title: "Tracking made easy",
//     description:
//       "A tracking number for the entire process, so that you can find the exact position. it will help you",
//   },
// ];

// export default function Features2() {
//   return (
//     <section className="relative h-full">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/bg-5.jpg')",
//         }}
//       />
//       <div className="flex justify-center px-4 ">
//         <div className="grid md:grid-cols-3 md:gap-8 items-center">
//           {features.map((feature, index) => (
//             // <div
//             //   key={feature.number}
//             //   className="relative h-[600px] w-96 group overflow-hidden rounded-lg"
//             // >
//             //   <Image
//             //     src={feature.image || "/placeholder.svg"}
//             //     alt={feature.title}
//             //     fill
//             //     className="object-cover"
//             //   />
//             //   <div className=" absolute inset-0 bg-black/30 p-8 flex flex-col justify-end group-hover:justify-center group-hover:bg-white group-hover:text-[#002B5B] text-white items-center text-center">
//             //     <div className="text-6xl font-bold mb-4">{feature.number}</div>
//             //     <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
//             //     <p className="mb-6">{feature.description}</p>
//             //     <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:border-[#002B5B] group-hover:text-[#002B5B] transition-colors">
//             //       <ArrowRight className="w-6 h-6" />
//             //     </button>
//             //   </div>
//             // </div>
//             <motion.div
//               key={feature.number}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="relative h-[400px] md:h-[600px] w-96 group overflow-hidden rounded-lg"
//             >
//               <div className="absolute inset-0 bg-black/30 p-8 flex flex-col justify-end group-hover:justify-center text-white items-center text-center transition-all duration-500 group-hover:bg-white group-hover:text-[#002B5B]">
//                 <div className="text-6xl font-bold mb-4">{feature.number}</div>
//                 <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
//                 <p className="mb-6">{feature.description}</p>
//                 <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:border-[#002B5B] group-hover:text-[#002B5B] transition-colors duration-300">
//                   <ArrowRight className="w-6 h-6" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const features = [
//   {
//     id: 1,
//     number: "01",
//     title: "Solutions and specialized",
//     description:
//       "Our aim is to optimize and improve your supply chain so that we can give you the best service",
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Multiple warehouses",
//     description:
//       "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Tracking made easy",
//     description:
//       "A tracking number for the entire process, so that you can find the exact position. it will help you",
//   },
// ];

// export default function Features2() {
//   return (
//     <section className="relative h-full">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/bg-5.jpg')",
//         }}
//       />
//       <div className="flex justify-center px-4">
//         <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-center">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="relative h-[400px] md:h-[600px] w-full group overflow-hidden rounded-lg"
//             >
//               <div className="absolute inset-0 bg-black/30 p-8 flex flex-col justify-end group-hover:justify-center text-white items-center text-center transition-all duration-500 group-hover:bg-white group-hover:text-[#002B5B]">
//                 <div className="text-6xl font-bold mb-4">{feature.number}</div>
//                 <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
//                 <p className="mb-6">{feature.description}</p>
//                 <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:border-[#002B5B] group-hover:text-[#002B5B] transition-colors duration-300">
//                   <ArrowRight className="w-6 h-6" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Solutions and specialized",
    description:
      "Our aim is to optimize and improve your supply chain so that we can give you the best service",
  },
  {
    number: "02",
    title: "Multiple warehouses",
    description:
      "We provide multiple drop-off and pickup locations so you don't have to worry. And you should not face any kind...",
  },
  {
    number: "03",
    title: "Tracking made easy",
    description:
      "A tracking number for the entire process, so that you can find the exact position. It will help you.",
  },
];

export default function Features2() {
  return (
    <section className="relative h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-5.jpg')",
        }}
      />
      <div className="relative px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative h-[350px] md:h-[600px] w-full max-w-sm group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-end group-hover:justify-center text-white items-center text-center transition-all duration-500 group-hover:bg-white group-hover:text-[#002B5B]">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  {feature.number}
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base mb-5">
                  {feature.description}
                </p>
                <button className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:border-[#002B5B] group-hover:text-[#002B5B] transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
