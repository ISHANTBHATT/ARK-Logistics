import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "End-to-End Delivery",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "images/s1.jpg",
  },
  {
    title: "Priority Air Freight",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    title: "Express Air Freight",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "images/s4.jpg",
  },
  {
    title: "Warehousing",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    hoverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="group relative h-[500px] overflow-hidden border-r-2 border-white">
      {/* Hover Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transform scale-100 translate-y-[5%] group-hover:opacity-100 group-hover:scale-[1.2] group-hover:-translate-y-[1%]"
        style={{
          backgroundImage: `url(${service.hoverImage})`,
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/60" /> */}
      <div className="absolute right-0 top-0 flex justify-end ">
        <Image
          src="/images/arrow.png"
          width={1000}
          height={800}
          className="w-40 h-40 group-hover:scale-[0.6] transition-transform "
        />
      </div>
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-200 mb-4">{service.description}</p>
        <button className="flex items-center gap-2 text-white font-medium group/btn">
          Read More
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function ServiceGrid() {
  return (
    <div className="h-full bg-white">
      {/* Header */}
      <div className=" py-16">
        <h2 className="text-5xl font-bold text-center mb-16">What We Offer</h2>

        {/* Services Grid with Background Container */}
        <div className="relative">
          {/* Common Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/service-bg.png')",
              height: "500px",
            }}
          />

          {/* Services Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceGrid;
