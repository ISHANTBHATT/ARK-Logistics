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

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Waves as Wave, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`w-full fixed top-0 z-50 ${
        isScrolled ? "bg-[#006957]/80 " : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center text-white"
        >
          <Wave className="w-6 h-6 mr-2" />
          <span className="text-xl font-semibold">Coastliner 7</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center space-x-8 text-white"
        >
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/services" className="hover:text-gray-300">
            Services
          </a>
          <a href="/clients" className="hover:text-gray-300">
            Clients
          </a>
          <a href="/career" className="hover:text-gray-300">
            Career
          </a>
          <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
            Contact <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
