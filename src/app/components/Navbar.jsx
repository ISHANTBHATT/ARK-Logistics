// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Waves as Wave, Phone, ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
// export function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 650) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const isHomePage = pathname === "/";
//   return (
//     // <header className="w-full">
//     //   {/* Top bar */}
//     //   <div className="bg-teal-900/90 text-white py-2 px-4">
//     //     <div className="container mx-auto flex justify-between items-center">
//     //       <p className="text-sm">
//     //         612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada
//     //       </p>
//     //       <div className="flex items-center gap-4">
//     //         <div className="hidden md:flex items-center gap-4">
//     //           <Link href="#" className="hover:text-teal-200">
//     //             FB
//     //           </Link>
//     //           <Link href="#" className="hover:text-teal-200">
//     //             TW
//     //           </Link>
//     //           <Link href="#" className="hover:text-teal-200">
//     //             LI
//     //           </Link>
//     //           <Link href="#" className="hover:text-teal-200">
//     //             IG
//     //           </Link>
//     //           <Link href="#" className="hover:text-teal-200">
//     //             PIN
//     //           </Link>
//     //         </div>
//     //         <Link href="mailto:Info@email.com" className="hover:text-teal-200">
//     //           Info@email.com
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   {/* Main navigation */}
//     //   <nav className="bg-teal-900/80 text-white py-4 px-4">
//     //     <div className="container mx-auto flex justify-between items-center">
//     //       <Link href="/" className="flex items-center gap-2">
//     //         <span className="text-red-600 text-2xl font-bold">LogiHub</span>
//     //       </Link>

//     //       <div className="hidden md:flex items-center gap-8">
//     //         <Link href="#" className="hover:text-teal-200">
//     //           Home
//     //         </Link>
//     //         <Link href="#" className="hover:text-teal-200">
//     //           Pages
//     //         </Link>
//     //         <Link href="#" className="hover:text-teal-200">
//     //           Services
//     //         </Link>
//     //         <Link href="#" className="hover:text-teal-200">
//     //           Blog
//     //         </Link>
//     //         <Link href="#" className="hover:text-teal-200">
//     //           Contact
//     //         </Link>
//     //         <Link href="#" className="hover:text-teal-200">
//     //           + Track Your Order
//     //         </Link>
//     //       </div>

//     //       <Button
//     //         variant="destructive"
//     //         className="hidden md:flex items-center gap-2"
//     //       >
//     //         <Phone className="w-4 h-4" />
//     //         <span>+1-416-8241228</span>
//     //       </Button>
//     //     </div>
//     //   </nav>
//     // </header>

//     <nav
//       className={`w-full fixed top-0 z-50 ${
//         isScrolled || !isHomePage
//           ? "bg-[#006957]/80 "
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="flex items-center justify-between px-8 py-6">
//         <div className="flex items-center text-white">
//           <Wave className="w-6 h-6 mr-2" />
//           <span className="text-xl font-semibold">Coastliner 7</span>
//         </div>

//         <div className="flex items-center space-x-8 text-white">
//           <a href="#" className="hover:text-gray-300">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Destinations
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Ships
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             My Cruise
//           </a>
//           <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
//             Contact <ArrowUpRight className="w-4 h-4 ml-1" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

//working
// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Waves as Wave, Phone, ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// export function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 400) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const isHomePage = pathname === "/";
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className={`w-full fixed top-0 z-50 ${
//         isScrolled || !isHomePage ? "bg-gray-100" : "bg-transparent text-black"
//       }`}
//     >
//       <div className="flex items-center justify-between px-8 ">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="flex items-center text-white "
//         >
//           {/* <Wave className="w-6 h-6 mr-2" /> */}
//           <Image
//             src="/images/logo4.png"
//             width={1000}
//             height={1000}
//             className="w-32 h-full"
//           />
//           {/* <span className="text-xl font-semibold">Logistics & Maritime</span> */}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className={`flex items-center space-x-8 py-6${
//             isScrolled ? "bg-black" : "text-white"
//           }`}
//         >
//           <a href="/" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="/about" className="hover:text-gray-400">
//             About
//           </a>
//           <a href="/services" className="hover:text-gray-400">
//             Services
//           </a>
//           <a href="/clients" className="hover:text-gray-400">
//             Clients
//           </a>
//           {/* <a href="/career" className="hover:text-gray-300">
//             Career
//           </a> */}
//           <Link href="/contact" className="hover:text-gray-300">
//             <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
//               Contact <ArrowUpRight className="w-4 h-4 ml-1" />
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  // Variants for the full screen overlay menu animation
  const overlayVariants = {
    hidden: { clipPath: "circle(0% at 100% 0%)", opacity: 0 },
    visible: {
      clipPath: "circle(150% at 100% 0%)",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      clipPath: "circle(0% at 100% 0%)",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full fixed top-0 z-50 ${
        isScrolled || !isHomePage ? "bg-gray-100" : "bg-transparent text-black"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            <Image
              src="/images/logo4.png"
              width={1000}
              height={1000}
              className="w-32 h-full"
              alt="Logo"
            />
          </motion.div>
        </Link>
        <div className="hidden md:flex space-x-8 text-black items-center">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/clients" className="hover:text-gray-400">
            Clients
          </Link>
          <Link href="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
              Contact <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-black z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center"
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="mb-6 text-2xl text-white hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="mb-6 text-2xl text-white hover:text-gray-400"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="mb-6 text-2xl text-white hover:text-gray-400"
            >
              Services
            </Link>
            <Link
              href="/clients"
              onClick={() => setIsMenuOpen(false)}
              className="mb-6 text-2xl text-white hover:text-gray-400"
            >
              Clients
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-white text-black px-6 py-3 rounded-full flex items-center">
                Contact <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
