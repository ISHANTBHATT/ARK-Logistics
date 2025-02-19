"use client";
import React from "react";
import { ChevronRight, Compass, Eye, Target } from "lucide-react";
import Image from "next/image";
import Parallax from "../components/Parallex";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const features = [
  "Exceptional service tailored to meet the unique needs of each client.",
  "Experienced team of professionals ensures timely and efficient transportation solutions.",
  "Cutting-edge technology and industry expertise to offer reliable and cost-effective logistics options.",
  "Commitment to sustainability and adherence to the highest safety standards set us apart as a leader in the industry.",
];

const logos = [
  { id: 1, src: "/images/client2.png", alt: "Abstract" },
  { id: 2, src: "/images/client2.png", alt: "YinYangPaint" },
  { id: 3, src: "/images/client2.png", alt: "TechLogo" },
  { id: 4, src: "/images/client2.png", alt: "AbstractLogo" },
  { id: 5, src: "/images/client2.png", alt: "AbstractLogo2" },
  { id: 6, src: "/images/client2.png", alt: "Abstract2" },
];

const Page = () => {
  return (
    <>
      <div className="relative h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/1.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-4 text-lg">
            <a href="/" className="hover:text-orange-500 transition-colors">
              Home
            </a>
            <span>|</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative flex justify-center">
                <div className="max-w-[300px] h-full relative overflow-hidden group shadow-xl shadow-[#2F6263]">
                  <Image
                    src="/images/abt-1.jpg"
                    width={1000}
                    height={1000}
                    alt="Logistics Professional"
                    className="rounded-lg w-full h-full shine-mask"
                  />
                  {/* <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition duration-500 transform 
                  translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%]"
                  ></div> */}
                  {/* <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 translate-x-[-100%] to-transparent transform -rotate-45 transition-all duration-300 group-hover:translate-x-full"></div>
                  </div> */}
                </div>

                <div className="bg-[#004041] absolute -bottom-10 right-20 bg-navy-900 text-white p-8 rounded-lg flex flex-col items-center">
                  <div className="text-5xl font-bold text-orange-500">3+</div>
                  <div className="text-xl mt-2">Continents</div>
                  {/* <div className="text-sm text-gray-400">Since 1996</div> */}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-orange-500 mb-2">
                ABOUT US
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose ARK Logistics & Maritime
              </h3>
              <p className="text-gray-600 mb-8">
                ARK Logistics & Maritime is a collaboration of like-minded
                professionals who recognized the need for professional and
                dependable services in the region. The team boasts a robust
                background in cargo and ocean-related activities, along with a
                powerful network in the area that can be effectively utilized.
              </p>
              <p className="text-gray-600 mb-8">
                With experience in corporate settings, the team possesses both
                the vision and the capability to execute plans, positioning ARK
                L&M for a successful future. They have significant experience
                working with top-tier companies, including major liner,
                logistics, and maritime service providers. Additionally, the
                team is well-versed in handling bulk commodities, RO-RO
                shipments, project cargoes, and containers.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-orange-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              {/* <button
                className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-xl 
              hover:bg-orange-600 transition-colors duration-300"
              >
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <div className="h-full overflow-hidden bg-white p-2 md:p-20 flex flex-col justify-center gap-20">
        {/* Design with Rounded Rectangles */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute -left-20 -bottom-10 w-64 h-48 bg-orange-400 rounded-3xl transform "></div>
            <div className="absolute -right-10 -top-16 w-60 h-56 bg-orange-500 rounded-3xl transform "></div>
            <div className="relative w-full bg-gradient-to-b from-teal-700 to-teal-600 rounded-3xl p-8 shadow-xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-10 h-10 text-white" />
                <h1 className="text-4xl font-bold">Mission</h1>
              </div>
              <h2 className="text-sm md:text-lg  mb-2">
                Our goal is to offer personalized and dependable maritime
                services that surpass the expectations of our clients in the
                Middle East and Africa. We are dedicated to delivering
                exceptional value through our skilled team, innovative
                solutions, and robust partnerships. We aim to foster long-term
                relationships with our customers, earning their trust by
                providing outstanding service, responsiveness, and meticulous
                attention to detail. Our mission is to become the preferred
                partner for our clients, consistently ensuring the highest
                standards of quality and reliability in every facet of our
                operations.
              </h2>
            </div>
          </div>
        </div>

        {/* Design with Circles */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-8 -bottom-14 w-56 h-56 bg-orange-400 rounded-full transform -translate-x-1/4"></div>
            <div className="absolute -right-4 -top-16 w-56 h-56 bg-orange-500 rounded-full transform translate-x-1/4"></div>
            <div className="relative w-full bg-gradient-to-b from-teal-700 to-teal-600 rounded-3xl p-8 shadow-xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-10 h-10 text-white" />
                <h1 className="text-3xl font-bold">Vision</h1>
              </div>
              <h2 className="text-lg  mb-2">
                Our goal is to become the preferred partner for customers
                seeking personalized maritime services in the Middle East and
                Africa.We strive to achieve this by continuously improving our
                offerings and staying attuned to the evolving needs of the
                industry. Our team is committed to innovation and excellence,
                ensuring that every service we provide is tailored to meet the
                unique requirements of our clients.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Parallax />
      {/* <div className="flex flex-col pt-20  text-center">
        <h2 className="text-5xl font-semibold text-red-500 mb-2">
          Our Clients
        </h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          We Are Professional Logistics & Cargo Agency
        </h3>
        <p className="text-gray-600 mb-8">
          Sed ut perspiciatis unde omnis iste natus error volup tatem
          accusantium dolorem que laudantium, totam inventore.
        </p>
      </div>

      <motion.div
        className=" h-32 md:h-40 w-full bg-white p-4 md:p-10  overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <SwiperSlide key={`${logo.id}-${index}`}>
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-12 w-full object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div> */}
    </>
  );
};

export default Page;
