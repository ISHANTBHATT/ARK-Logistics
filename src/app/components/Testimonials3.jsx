// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";

// export const Testimonials3 = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = React.useRef(null);
//   const scrollerRef = React.useRef(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);
//   const [start, setStart] = useState(false);
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   };
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };
//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-[#004041] px-8 py-6 md:w-[450px] bg-[#2F6263]"
//             // style={{
//             //   background:
//             //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
//             // }}
//             key={item.name}
//           >
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
//               ></div>
//               <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
//                 {item.quote}
//               </span>
//               <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
//                 <img
//                   src={item.avatar}
//                   alt={`${item.name}'s avatar`}
//                   className="w-10 h-10 rounded-full object-cover border border-gray-300"
//                 />
//                 <span className="flex flex-col gap-1">
//                   <span className=" text-sm leading-[1.6] text-gray-100 font-normal">
//                     {item.name}
//                   </span>
//                   <span className=" text-sm leading-[1.6] text-gray-100 font-normal">
//                     {item.title}
//                   </span>
//                 </span>
//               </div>
//             </blockquote>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    rating: 3,
    image: "/images/person.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
  {
    name: "Mark Adair",
    rating: 5,
    image: "/images/person2.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
  {
    name: "Simon Konecki",
    rating: 4,
    image: "/images/person.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
  {
    name: "Simon Konecki",
    rating: 4,
    image: "/images/person2.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
];

export const Testimonials3 = () => {
  return (
    <div className="py-12 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What our happy client say</h2>
        <p className=" max-w-3xl mx-auto">
          Veniam proident aute magna anim excepteur et ex consectetur velit
          ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem
          minim. Officia do aliqua adipisicing ullamco in.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-6 relative bg-teal-700 text-white">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-500" />
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-orange-500 fill-orange-500"
                              : "text-gray-300 fill-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block text-teal-500">
          <CarouselPrevious className="h-12 w-12 left-0 -top-10" />
          <CarouselNext className="h-12 w-12 right-0 -top-10" />
        </div>
      </Carousel>
    </div>
  );
};
