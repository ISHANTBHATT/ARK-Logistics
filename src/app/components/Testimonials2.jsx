// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const testimonials = [
//   {
//     id: 1,
//     name: "Josephine",
//     role: "Web Designer",
//     image: "https://placehold.co/100x100",
//     quote:
//       "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
//   },
//   {
//     id: 2,
//     name: "Penelope",
//     role: "Developer",
//     image: "https://placehold.co/100x100",
//     quote:
//       "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
//   },
//   {
//     id: 3,
//     name: "Peter Len",
//     role: "Web Designer",
//     image: "https://placehold.co/100x100",
//     quote:
//       "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
//   },
// ];

// const Testimonials2 = () => {
//   return (
//     <div className="bg-blue-600 py-16">
//       <div className="container mx-auto px-4">
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="bg-white p-8 rounded-lg text-center max-w-3xl mx-auto">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-20 h-20 rounded-full mx-auto mb-6"
//                 />
//                 <div className="text-6xl text-orange-500 mb-6">"</div>
//                 <p className="text-gray-600 mb-6">{testimonial.quote}</p>
//                 <h4 className="text-2xl font-bold text-navy-900 mb-2">
//                   {testimonial.name}
//                 </h4>
//                 <p className="text-orange-500">{testimonial.role}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonials2;

//working
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Josephine",
//     role: "Web Designer",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     quote:
//       "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
//   },
//   {
//     id: 2,
//     name: "Penelope",
//     role: "Developer",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//     quote:
//       "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
//   },
//   {
//     id: 3,
//     name: "Peter Len",
//     role: "Web Designer",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     quote:
//       "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
//   },
// ];

// const logos = [
//   { id: 1, src: "/images/client2.png", alt: "Abstract" },
//   { id: 2, src: "/images/client2.png", alt: "YinYangPaint" },
//   { id: 3, src: "/images/client2.png", alt: "TechLogo" },
//   { id: 4, src: "/images/client2.png", alt: "AbstractLogo" },
//   { id: 5, src: "/images/client2.png", alt: "AbstractLogo2" },
//   { id: 6, src: "/images/client2.png", alt: "Abstract2" },
// ];

// function Testimonials2() {
//   return (
//     <div className="h-full bg-[#2196f3] flex items-center justify-center p-14">
//       <div
//         className=" relative w-full bg-white rounded-lg p-20 flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/bg-6.jpg')" }}
//       >
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           spaceBetween={30}
//           slidesPerView={1}
//           className="relative"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="flex flex-col items-center text-center px-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-20 h-20 rounded-full mb-8"
//                 />
//                 <div className="flex justify-center mb-6">
//                   <svg className="w-12 h-12 text-gray-300" viewBox="0 0 24 24">
//                     <path
//                       fill="currentColor"
//                       d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
//                     />
//                   </svg>
//                 </div>
//                 <p className="text-gray-600 mb-8 max-w-2xl">
//                   {testimonial.quote}
//                 </p>
//                 <h3 className="text-2xl font-script mb-2">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-[#ff9800]">{testimonial.role}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//           <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
//             <ChevronLeft className="w-8 h-8 text-gray-400" />
//           </button>
//           <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
//             <ChevronRight className="w-8 h-8 text-gray-400" />
//           </button>
//         </Swiper>

//         <div className=" absolute -bottom-20 h-40 grid grid-cols-6 gap-8 items-center bg-white p-10 shadow-2xl">
//           {logos.map((logo) => (
//             <img
//               key={logo.id}
//               src={logo.src}
//               alt={logo.alt}
//               className="h-12 w-full object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials2;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Josephine",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
  },
  {
    id: 2,
    name: "Penelope",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
  },
  {
    id: 3,
    name: "Peter Len",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Nemo enim ipsam voluptate voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio ne voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi",
  },
];

const logos = [
  { id: 1, src: "/images/client2.png", alt: "Abstract" },
  { id: 2, src: "/images/client2.png", alt: "YinYangPaint" },
  { id: 3, src: "/images/client2.png", alt: "TechLogo" },
  { id: 4, src: "/images/client2.png", alt: "AbstractLogo" },
  { id: 5, src: "/images/client2.png", alt: "AbstractLogo2" },
  { id: 6, src: "/images/client2.png", alt: "Abstract2" },
];

function Testimonials2() {
  return (
    <div className="h-full bg-[#228186] flex items-center justify-center p-4 md:p-8 lg:p-14">
      <motion.div
        className="relative w-full bg-white rounded-lg p-8 md:p-20 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg-6.jpg')" }}
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="relative w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="flex flex-col items-center text-center px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-8"
                />
                <div className="flex justify-center mb-6">
                  <svg className="w-12 h-12 text-gray-300" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 mb-8 max-w-2xl">
                  {testimonial.quote}
                </p>
                <h3 className="text-2xl font-script mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-[#ff9800]">{testimonial.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 !text-[#228186]">
            <ChevronLeft className="w-8 h-8 text-[gray-400]" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 !text-[#228186]">
            <ChevronRight className="w-8 h-8 text-gray-400" />
          </button>
        </Swiper>

        {/* <motion.div
          className="absolute -bottom-20 h-32 md:h-40 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center bg-white p-4 md:p-10 shadow-xl md:shadow-2xl w-[90%]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {logos.map((logo) => (
            <motion.img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-12 w-full object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div> */}
        <motion.div
          className="flex items-center justify-center absolute -bottom-20 h-32 md:h-40 w-[90%] bg-white p-4 md:p-10 shadow-xl md:shadow-2xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex animate-scroll ">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/6 px-4"
              >
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-12 w-full object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Testimonials2;
