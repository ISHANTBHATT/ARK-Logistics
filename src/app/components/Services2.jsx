// import React from "react";
// import { Truck, Ship, Plane } from "lucide-react";
// const services = [
//   {
//     id: "01",
//     title: "Road Freight",
//     icon: Truck,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//   },
//   {
//     id: "02",
//     title: "Shipping Freight",
//     icon: Ship,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//   },
//   {
//     id: "03",
//     title: "Air Freight",
//     icon: Plane,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//   },
// ];

// const Services2 = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-orange-500">WHAT WE DO!</h2>
//           <h3 className="text-3xl font-bold text-navy-900 mt-2">
//             Specialist Logistics Services
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
//               className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg"
//             >
//               <service.icon className="w-12 h-12 text-orange-500 flex-shrink-0" />
//               <div>
//                 <h4 className="text-xl font-bold text-navy-900 mb-2">
//                   <span className="text-orange-500">{service.id}.</span>{" "}
//                   {service.title}
//                 </h4>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services2;

//working
// import { Truck, Ship, Plane } from "lucide-react";
// import Image from "next/image";

// const services = [
//   {
//     number: "01",
//     title: "Road Freight",
//     icon: Truck,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//   },
//   {
//     number: "02",
//     title: "Shipping Freight",
//     icon: Ship,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//   },
//   {
//     number: "03",
//     title: "Air Freight",
//     icon: Plane,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//   },
// ];

// export default function Service2() {
//   return (
//     <section className=" px-4 py-16 text-center bg-[#F2FAFF]">
//       <h2 className="text-4xl md:text-6xl font-bold text-white text-stroke-orange mb-2">
//         WHAT WE DO!
//       </h2>
//       <h1 className="text-3xl md:text-5xl font-bold text-[#002B5B] mb-6">
//         Specialist Logistics Services
//       </h1>
//       <p className="text-gray-600 max-w-3xl mx-auto mb-12">
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry the standard dummy text ever since the when an printer took.
//       </p>

//       <div className="grid md:grid-cols-2 gap-8 items-center px-20">
//         <div className="space-y-4">
//           {services.map((service) => (
//             <div
//               key={service.number}
//               className="flex items-center text-left bg-white "
//             >
//               <div className="w-2 h-24 bg-[#FF9B3E] mr-4"></div>
//               <div className="flex p-4 gap-4 items-center">
//                 <service.icon className="w-16 h-16 text-[#0066FF]" />
//                 <div className="flex-col items-center gap-4 mb-2 py-6">
//                   <h3 className="text-xl font-bold text-[#002B5B]">
//                     <span className="text-[#FF9B3E] text-2xl font-bold">
//                       {service.number}.
//                     </span>
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative h-[500px]">
//           <Image
//             src="/images/t3.png"
//             alt="Logistics Truck"
//             fill
//             className="object-contain rounded-lg z-10"
//           />
//           <div className="absolute bottom-20 right-0 w-full h-20">
//             <Image
//               src="/images/road.png"
//               alt="Road"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Truck, Ship, Plane } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Road Freight",
    icon: Truck,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    number: "02",
    title: "Shipping Freight",
    icon: Ship,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    number: "03",
    title: "Air Freight",
    icon: Plane,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];

export default function Service2() {
  return (
    <section className="px-4 py-16 text-center bg-[#F2FAFF] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white text-stroke-orange mb-2"
      >
        WHAT WE DO!
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-3xl md:text-5xl font-bold text-[#002B5B] mb-6"
      >
        Specialist Logistics Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-gray-600 max-w-3xl mx-auto mb-12"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry the standard dummy text ever since the when an printer took.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 items-center px-4 md:px-20">
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center text-left bg-white hover:shadow-lg hover:shadow-[#228186]"
            >
              <div className="w-2 h-24 bg-[#228186] mr-4"></div>
              <div className="flex p-4 gap-4 items-center">
                <service.icon className="w-16 h-16 text-[#228186] " />
                <div className="flex-col items-center gap-4 mb-2 py-6">
                  <h3 className="text-xl font-bold text-[#002B5B]">
                    <span className="text-[#228186] text-2xl font-bold">
                      {service.number}.
                    </span>{" "}
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative h-[300px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/t3.png"
            alt="Logistics Truck"
            fill
            className="object-contain rounded-lg z-10"
          />
          <div className="absolute bottom-20 right-0 w-full h-20">
            <Image
              src="/images/road.png"
              alt="Road"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
