// import React from "react";
// import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//         <div>
//           <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
//           <p className="text-gray-600 mb-12">
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classic random text.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
//               <div className="space-y-2">
//                 <p className="flex items-center gap-2">
//                   <MapPin className="w-5 h-5 lg:w-8 lg:h-8" />
//                   612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Phone className="w-5 h-5" />
//                   +1-416-8241228
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Mail className="w-5 h-5" />
//                   info@email.com
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold mb-4">Canada Office</h3>
//               <div className="space-y-2">
//                 <p className="flex items-center gap-2">
//                   <MapPin className="w-5 h-5 lg:w-8 lg:h-8" />
//                   612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Phone className="w-5 h-5" />
//                   +1-416-8241228
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Mail className="w-5 h-5" />
//                   info@email.com
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-red-700 transition-colors">
//             Contact Us
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
//             alt="World Map"
//             className="w-full h-full object-cover rounded-lg"
//           />
//           <div className="absolute bottom-8 left-8 bg-teal-800 text-white p-4 rounded-lg max-w-xs">
//             <p className="text-sm">
//               612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Contact = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-12">
            The team at ARK Logistics & Maritime is eager to discuss all your
            cargo and shipping needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-12 h-12 lg:w-20 lg:h-20" />
                  ARK LogMar LLC-FZ 6th Floor, Meydan Grandstand License No
                  2527346.01 Dubai, UAE
                </div>
                <p className="flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  +971 50 1898269
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  director@ark-maritime.com
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4">
                REPRESENTATION OFFICE
              </h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 lg:w-8 lg:h-8" />
                  U.K | U.S.A and Australia
                </p>
                {/* <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +1-416-8241228
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  info@email.com
                </p> */}
              </div>
            </motion.div>
          </div>
          <Link href="/contact">
            <motion.button
              className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div className="relative" variants={itemVariants}>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
            alt="World Map"
            className="w-full h-full object-cover rounded-lg"
          />
          <motion.div
            className="absolute bottom-8 left-8 bg-primary text-white p-4 rounded-lg max-w-xs"
            whileHover={{ scale: 1.1 }}
          >
            <p className="text-sm">ARK Logistics & Maritime Dubai, UAE</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
