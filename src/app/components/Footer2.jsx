// import Image from "next/image";
// import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

// const quickLinks = [
//   { title: "About", href: "#" },
//   { title: "Services", href: "#" },
//   { title: "Blog", href: "#" },
//   { title: "FAQ", href: "#" },
//   { title: "Contact Us", href: "#" },
// ];

// const services = [
//   { title: "Warehouse", href: "#" },
//   { title: "Air Freight", href: "#" },
//   { title: "Ocean Freight", href: "#" },
//   { title: "Road Freight", href: "#" },
//   { title: "Packaging", href: "#" },
// ];

// const community = [
//   { title: "Business Consulting", href: "#" },
//   { title: "Testimonials", href: "#" },
//   { title: "Track Your Shipment", href: "#" },
//   { title: "Privacy Policy", href: "#" },
//   { title: "Terms & Condition", href: "#" },
// ];

// export default function Footer2() {
//   return (
//     <>
//       <section className=" relative bg-[#FF9B3E] py-4 mt-48">
//         <div className=" px-4">
//           <div className=" absolute right-1/2 bottom-0 w-full md:w-1/3 mb-6 md:mb-0">
//             <Image
//               src="/images/man.png"
//               alt="Delivery Person"
//               width={300}
//               height={300}
//               className="object-contain"
//             />
//           </div>
//           <div className="flex flex-wrap items-center justify-end">
//             <div className="w-full md:w-2/3 md:pl-12">
//               <h2 className="text-[#002B5B] text-4xl font-bold mb-6">
//                 Subscribe for offers
//                 <br />
//                 and news
//               </h2>
//               <div className="flex flex-wrap gap-4">
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   className="flex-1 min-w-[200px] px-4 py-3 rounded-md border-0"
//                 />
//                 <button className="bg-[#002B5B] text-white px-8 py-3 rounded-md hover:bg-[#001B3B] transition-colors">
//                   Subscribe Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer className="bg-[#002B5B] text-white pt-16 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             <div>
//               <Image
//                 src="/logo.png"
//                 alt="Logitrago"
//                 width={200}
//                 height={60}
//                 className="mb-6"
//               />
//               <p className="text-gray-300 mb-6">
//                 Many desktop publishing packages and web page editors now use
//                 are dolra ipsum as their default .
//               </p>
//               <div className="flex space-x-4">
//                 {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className="w-10 h-10 bg-[#003B7B] rounded flex items-center justify-center hover:bg-[#FF9B3E] transition-colors"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6">Quick Links</h3>
//               <ul className="space-y-4">
//                 {quickLinks.map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.href}
//                       className="text-gray-300 hover:text-[#FF9B3E]"
//                     >
//                       {link.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6">Services</h3>
//               <ul className="space-y-4">
//                 {services.map((service, index) => (
//                   <li key={index}>
//                     <a
//                       href={service.href}
//                       className="text-gray-300 hover:text-[#FF9B3E]"
//                     >
//                       {service.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6">Community</h3>
//               <ul className="space-y-4">
//                 {community.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={item.href}
//                       className="text-gray-300 hover:text-[#FF9B3E]"
//                     >
//                       {item.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
//             <p>Copyright © 2022 by thewebmax All Rights Reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

"use client";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { title: "About", href: "#" },
  { title: "Services", href: "#" },
  { title: "Blog", href: "#" },
  { title: "FAQ", href: "#" },
  { title: "Contact Us", href: "#" },
];

const services = [
  { title: "Warehouse", href: "#" },
  { title: "Air Freight", href: "#" },
  { title: "Ocean Freight", href: "#" },
  { title: "Road Freight", href: "#" },
  { title: "Packaging", href: "#" },
];

const community = [
  { title: "Business Consulting", href: "#" },
  { title: "Testimonials", href: "#" },
  { title: "Track Your Shipment", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms & Condition", href: "#" },
];

export default function Footer2() {
  return (
    <>
      <section className="relative bg-[#228186] py-4 mt-24 md:mt-48  ">
        <motion.div
          className="px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute right-1/2 bottom-0 w-full md:w-1/3 mb-6 md:mb-0 z-0"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/man.png"
              alt="Delivery Person"
              width={300}
              height={300}
              className="object-contain h-[200px] md:h-auto"
            />
          </motion.div>

          <div className="flex flex-wrap items-center justify-end overflow-hidden">
            <motion.div
              className="w-full md:w-2/3 md:pl-12"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Subscribe for offers
                <br />
                and news
              </h2>
              <div className="flex flex-col md:flex-row gap-4 z-10">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-2 md:py-3 rounded-xl text-sm md:text-base"
                />
                <button className="bg-[#545454] text-white px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-[#3E3E3E] text-sm md:text-base">
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-[#545454] text-white pt-8 md:pt-16 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <Image
                src="/images/Logo_White.png"
                alt="Ark"
                width={200}
                height={60}
                className="mb-6 w-32 h-32"
              />
              <p className="text-gray-300 mb-6">
                Many desktop publishing packages and web page editors now use
                are dolra ipsum as their default .
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    href="#"
                    className="w-10 h-10 bg-[#228186] rounded flex items-center justify-center hover:bg-[#1A6266] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-teal-500"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-teal-500"
                    >
                      {service.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Community</h3>
              <ul className="space-y-4">
                {community.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-teal-500"
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* {[0,1,2,3].map((colIdx) => (
              <motion.div
                key={colIdx}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIdx * 0.1 }}
              >
              </motion.div>
            ))} */}
          </motion.div>

          <motion.div
            className="border-t border-gray-700 pt-8 text-center text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm md:text-base">
              Copyright © 2022 by thewebmax All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
