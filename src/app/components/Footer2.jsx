import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { title: "About", href: "#" },
  { title: "Services", href: "#" },
  { title: "Blog", href: "#" },
  { title: "FAQ", href: "#" },
  { title: "Contact Us", href: "#" },
];

const services = [
  { title: "Warehouse", href: "#" },
  { title: "Air Freight", href: "#" },
  { title: "Ocean Freight", href: "#" },
  { title: "Road Freight", href: "#" },
  { title: "Packaging", href: "#" },
];

const community = [
  { title: "Business Consulting", href: "#" },
  { title: "Testimonials", href: "#" },
  { title: "Track Your Shipment", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms & Condition", href: "#" },
];

export default function Footer() {
  return (
    <>
      <section className=" relative bg-[#FF9B3E] py-4">
        <div className=" px-4">
          <div className=" absolute right-1/2 bottom-0 w-full md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/images/man.png"
              alt="Delivery Person"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center justify-end">
            <div className="w-full md:w-2/3 md:pl-12">
              <h2 className="text-[#002B5B] text-4xl font-bold mb-6">
                Subscribe for offers
                <br />
                and news
              </h2>
              <div className="flex flex-wrap gap-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 min-w-[200px] px-4 py-3 rounded-md border-0"
                />
                <button className="bg-[#002B5B] text-white px-8 py-3 rounded-md hover:bg-[#001B3B] transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#002B5B] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="/logo.png"
                alt="Logitrago"
                width={200}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-300 mb-6">
                Many desktop publishing packages and web page editors now use
                are dolra ipsum as their default .
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-[#003B7B] rounded flex items-center justify-center hover:bg-[#FF9B3E] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#FF9B3E]"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-[#FF9B3E]"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Community</h3>
              <ul className="space-y-4">
                {community.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-[#FF9B3E]"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>Copyright © 2022 by thewebmax All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
