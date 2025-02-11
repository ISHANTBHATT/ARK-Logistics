import React from "react";
import { ArrowRight, Plane, Package, Users, Truck } from "lucide-react";

function ServiceItem({ title, description, icon: Icon }) {
  return (
    <div className="flex items-start space-x-4 py-8 group cursor-pointer">
      <div className="w-8 h-8 text-red-600 mt-1">
        <Icon size={32} />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 pr-4">{description}</p>
      </div>
      <div className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight />
      </div>
    </div>
  );
}

export function WhyChoose() {
  const services = [
    {
      title: "Express Air Transport",
      description:
        "Flexible and efficient road transportation across local and international routes.",
      icon: Plane,
    },
    {
      title: "Maximum Cargo Flexibility",
      description:
        "Flexible and efficient road transportation across local and international routes.",
      icon: Package,
    },
    {
      title: "Personalized Shipping Solutions",
      description:
        "Flexible and efficient road transportation across local and international routes.",
      icon: Users,
    },
    {
      title: "Maximum Cargo Flexibility",
      description:
        "Flexible and efficient road transportation across local and international routes.",
      icon: Truck,
    },
  ];

  return (
    <div className="h-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between py-10">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Why Choose Us for Your
            <br />
            Logistics Needs?
          </h1>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-red-600 font-semibold hover:text-red-700 flex items-center"
            >
              Read More
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4 divide-y divide-gray-100">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <img
              src="/images/container.png"
              alt="Drone carrying cargo container"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
