// import React from "react";

// const Footer = () => {
//   return (
//     // bg-[#004041]
//     <footer
//       className="text-white py-20 px-20 relative bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/images/footer-bg.jpg')",
//       }}
//     >
//       {/* <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/footer-bg.jpg')",
//           height: "500px",
//         }}
//       /> */}
//       <div className="absolute inset-0 bg-black/30 z-10" />
//       <div className="container mx-auto px-4 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Corporate Office */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
//             <p className="mb-2">612-7 Roanoke Rd, Toronto,</p>
//             <p className="mb-4">ON M3A 1E3, Canada</p>
//             <p className="mb-2">+1-416-8241228</p>
//             <p>info@email.com</p>
//           </div>

//           {/* Canada Office */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Canada Office</h3>
//             <p className="mb-2">612-7 Roanoke Rd, Toronto,</p>
//             <p className="mb-4">ON M3A 1E3, Canada</p>
//             <p className="mb-2">+1-416-8241228</p>
//             <p>info@email.com</p>
//           </div>

//           {/* Useful Link */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Useful Link</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-gray-300">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-300">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-300">
//                   Our Crew
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-300">
//                   Faq Pages
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-300">
//                   Free Quote
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//             <p className="mb-4">Delivering Excellence in Global Logistics.</p>
//             {/* <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className="flex-grow bg-transparent border-b border-white focus:outline-none"
//               />
//               <button className="whitespace-nowrap hover:text-gray-300">
//                 Subscribe →
//               </button>
//             </div> */}

//             {/* Social Media Icons */}
//             <div className="flex gap-4 mt-8">
//               <a
//                 href="#"
//                 className="border border-white rounded-full p-2 hover:bg-white hover:text-teal-900"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="border border-white rounded-full p-2 hover:bg-white hover:text-teal-900"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="border border-white rounded-full p-2 hover:bg-white hover:text-teal-900"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="border border-white rounded-full p-2 hover:bg-white hover:text-teal-900"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//             </svg>
//             <span className="font-bold text-xl">ARK Logistics & Maritime</span>
//           </div>
//           <p className="text-sm">© 2024 . All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { LiaAnchorSolid } from "react-icons/lia";
// Animation variants
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 },
};

const links = [
  {
    title: "About Us",
    link: "about",
  },
  {
    title: "Services",
    link: "services",
  },
  {
    title: "Clients",
    link: "clients",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

const Footer = () => {
  return (
    <motion.footer
      className="text-white py-20 px-2 lg:px-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/footer-bg2.jpg')",
      }}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Corporate Office */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
            <p className="mb-2">ARK LogMar LLC-FZ</p>
            <p className="mb-2">6th Floor, Meydan Grandstand</p>
            <p className="mb-4">Dubai, UAE</p>
            <p className="mb-2">+971 50 1898269</p>
            <p>director@ark-maritime.com</p>
          </motion.div>

          {/* Canada Office */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">
              REPRESENTATION OFFICE
            </h3>
            <p className="mb-2">U.K | U.S.A and Australia</p>
          </motion.div>

          {/* Useful Link */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Useful Link</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.link} className="hover:text-gray-300">
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            {/* <p className="mb-4">Delivering Excellence in Global Logistics.</p> */}

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              {[
                "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
              ].map((path, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="border border-white rounded-full p-2 hover:bg-white hover:text-secondary"
                  whileHover={hoverEffect}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            {/* <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg> */}
            <LiaAnchorSolid className="w-8 h-8 text-white" />
            <span className="font-bold text-xl">ARK Logistics & Maritime</span>
          </div>
          <p className="text-sm">
            Copyright (C) 2025. Website Designed and Developed by Apace Digital
            Cargo
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
