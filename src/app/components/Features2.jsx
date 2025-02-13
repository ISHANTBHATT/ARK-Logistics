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

import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
      "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
  },
  {
    number: "03",
    title: "Tracking made easy",
    description:
      "A tracking number for the entire process, so that you can find the exact position. it will help you",
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
      <div className="flex justify-center px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="relative h-[600px] w-96 group overflow-hidden rounded-lg"
            >
              {/* <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover"
              /> */}
              <div className=" absolute inset-0 bg-black/30 p-8 flex flex-col justify-end text-white items-center text-center">
                <div className="text-6xl font-bold mb-4">{feature.number}</div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="mb-6">{feature.description}</p>
                <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
