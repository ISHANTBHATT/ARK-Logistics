// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function Company2() {
//   return (
//     <main className="min-h-screen py-20 px-40">
//       {/* Company Approach Section */}
//       <section className="relative">
//         <div className="flex justify-between items-center">
//           <div className="space-y-4">
//             <h2 className="text-[#FFA500] tracking-wide text-2xl font-light">
//               COMPANY APPROCH
//             </h2>
//             <h1 className="text-4xl lg:text-5xl font-bold text-[#003366] leading-tight">
//               Reliable Logistic &
//               <br />
//               Transport Solutions
//             </h1>
//           </div>
//           <Button className="bg-[#FF8C00] hover:bg-[#FF7000] text-white px-8 py-6">
//             Read More
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center py-10">
//           <div className="space-y-8">
//             <div className="relative">
//               <div className="bg-[#fff] ">
//                 <div className="relative inline-flex">
//                   <h1 className="text-[350px] block font-bold leading-[300px]">
//                     35
//                   </h1>
//                   <Image
//                     src="/images/2.jpg"
//                     alt="35 years of experience"
//                     width={500}
//                     height={400}
//                     className="w-full absolute top-4 left-0 mix-blend-lighten"
//                   />
//                 </div>
//               </div>

//               <h3 className="text-[#003366] text-4xl font-bold mt-4">
//                 Year&apos;s of experience in transport and logistics services
//               </h3>
//             </div>
//           </div>

//           <div className="relative h-full items-center flex flex-col justify-center">
//             <div className="absolute top-0 right-0 w-60 h-full bg-[#FF8C00] -z-10" />
//             <Card className="bg-white p-8  relative z-10 w-[500px] mr-20 shadow-2xl shadow-blue-500">
//               <div className="space-y-8">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Image
//                       src="/placeholder.svg"
//                       alt="Staff icon"
//                       width={24}
//                       height={24}
//                       className="w-6 h-6"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-4xl font-bold text-[#FF8C00]">
//                       195<span className="text-3xl">+</span>
//                     </h3>
//                     <p className="text-[#003366] font-semibold">
//                       Professional Staff
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Image
//                       src="/placeholder.svg"
//                       alt="Delivery icon"
//                       width={24}
//                       height={24}
//                       className="w-6 h-6"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-4xl font-bold text-[#FF8C00]">
//                       250<span className="text-3xl">+</span>
//                     </h3>
//                     <p className="text-[#003366] font-semibold">
//                       On Time Delievery
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Image
//                       src="/placeholder.svg"
//                       alt="Technology icon"
//                       width={24}
//                       height={24}
//                       className="w-6 h-6"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-4xl font-bold text-[#FF8C00]">
//                       350<span className="text-3xl">+</span>
//                     </h3>
//                     <p className="text-[#003366] font-semibold">
//                       Technology and Media
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       {/* <section className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="relative">
//             <div className="flex gap-8 items-start">
//               <Card className="flex-1 p-8 space-y-4">
//                 <div className="flex justify-center">
//                   <Image
//                     src=""
//                     alt="Testimonial profile"
//                     width={80}
//                     height={80}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div className="text-[#FF8C00] text-6xl font-serif">"</div>
//                 <p className="text-gray-600 italic text-center">
//                   Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut
//                   fugit, sed quia consequuntur magni dolores eos qui ratio ne
//                   voluptatem sequi nesciunt.
//                 </p>
//                 <div className="text-center">
//                   <h4 className="text-2xl font-script text-[#003366]">
//                     Josephine
//                   </h4>
//                   <p className="text-[#FF8C00]">Web Designer</p>
//                 </div>
//               </Card>

//               <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg">
//                 <ArrowLeft className="h-6 w-6 text-[#003366]" />
//               </button>
//               <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg">
//                 <ArrowRight className="h-6 w-6 text-[#003366]" />
//               </button>
//             </div>
//           </div>

//           <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-50">
//             {[1, 2, 3, 4, 5, 6].map((index) => (
//               <Image
//                 key={index}
//                 src="/images/client2.png"
//                 alt={`Partner logo ${index}`}
//                 width={120}
//                 height={60}
//                 className="w-full max-w-[120px] mx-auto"
//               />
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </main>
//   );
// }

"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Company2() {
  const approch = [
    {
      id: 1,
      number: "195",
      title: "Professional Staff",
      image: "/images/c-pic1.png",
    },
    {
      id: 2,
      number: "250",
      title: "On Time Delivery",
      image: "/images/c-pic2.png",
    },
    {
      id: 3,
      number: "350",
      title: "Technology and Media",
      image: "/images/c-pic3.png",
    },
  ];
  return (
    <main className="min-h-screen py-10 md:py-20 px-4 lg:px-40">
      <section className="relative">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-[#228186] text-xl md:text-2xl font-light">
              COMPANY APPROACH
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-[#003366] leading-tight">
              Reliable Logistic &<br />
              Transport Solutions
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button className="bg-[#228186] hover:bg-[#1A6266] text-white px-6 py-4 md:px-8 md:py-6 rounded-xl">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center py-10">
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="bg-[#fff] overflow-hidden flex justify-center py-2">
                <div className="relative inline-flex">
                  <h1 className="text-[200px] md:text-[350px] font-bold leading-[150px] md:leading-[300px]">
                    35
                  </h1>
                  <Image
                    src="/images/2.jpg"
                    alt="35 years of experience"
                    width={500}
                    height={400}
                    className="w-full absolute top-0  md:top-4 left-0 mix-blend-lighten"
                  />
                </div>
              </div>
              <h3 className="text-[#003366] text-2xl md:text-4xl font-bold mt-4">
                Year's experience in transport and logistics services
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="relative h-full justify-center items-center flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-40 md:w-60 h-full bg-[#228186] -z-10" />
            <Card className="bg-white p-4 md:p-8 relative z-10 w-full max-w-[500px] md:mr-20 shadow-2xl shadow-[#228186]">
              <div className="space-y-4 md:space-y-8">
                {approch.map((item, idx) => (
                  <motion.div
                    key={item.i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt="Icon"
                        width={1000}
                        height={1000}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-bold text-[#228186]">
                        {item.number}
                        <span className="text-xl md:text-3xl">+</span>
                      </h3>
                      <p className="text-[#003366] text-sm md:text-base font-semibold">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
