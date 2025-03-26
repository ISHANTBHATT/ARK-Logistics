"use client";
import { HoverEffect } from "@/components/ui/car-hover-effect";
import { motion } from "framer-motion";
function Page() {
  return (
    <>
      <div className="relative h-[500px] ">
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
          <h1 className="text-5xl font-bold mb-4">Clients</h1>
          <div className="flex items-center gap-4 text-lg">
            <a href="/" className="hover:text-secondary transition-colors">
              Home
            </a>
            <span>|</span>
            <span>Clients</span>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto py-20 "
        >
          <HoverEffect items={projects} />
        </motion.div>
      </div>
    </>
  );
}
export const projects = [
  {
    title: "CeeKay Shipping",
    image: "/images/clients1.png",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://ceekayshipping.com/",
  },
  {
    title: "DSV",
    image: "/images/clients2.png",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://www.dsv.com/en-ae/about-dsv/dsv-mena/united-arab-emirates",
  },
  {
    title: "BCG",
    image: "/images/clients3.png",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://www.bcg.com/industries/transportation-logistics/shipping-industry",
  },
  {
    title: "MAK Container Lines",
    image: "/images/clients4.png",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://makcontainerline.com",
  },
];

export default Page;
