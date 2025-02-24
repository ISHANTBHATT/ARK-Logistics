import React from "react";
import {
  Briefcase,
  Building,
  Leaf,
  Box,
  Warehouse,
  ClipboardList,
  ChevronRight,
} from "lucide-react";
// import {
//   Truck,
//   Ship,
//   Plane,
//   Train,
//   Package,
//   ClipboardList,
//   ChevronRight,
// } from "lucide-react";
import { Testimonials3 } from "../components/Testimonials3";
import Parallax from "../components/Parallex";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Consultancy",
    slug: "consultancy",
    icon: Briefcase,
    description:
      "The ARK team brings extensive expertise in Liner Shipping, Ports & Terminals, Digitalization in Shipping, and Vessel Agency that can be utilized for your organization. Additionally, we offer advisory services for regional representation, which includes the commercialization of your products and services, business development, and navigating regulatory processes.",
    content: {
      image: "/images/1.jpg",
      intro: "Consultancy",
      paragraphs: [
        "We offer consultancy services across various facets of the maritime industry, including:",
      ],
      servicesInclue: [
        "Ports & Terminals in the Middle East & Africa: Our in-depth analysis covers port ecosystems, examining different terminal types (bulk, breakbulk, container, offshore & supply, cruise, and leisure). We also assess port users, cargo services, and additional third-party services that ports can offer.",
        "Container Terminal Expertise: We provide capacity and throughput analysis for container terminals. Our insights include competitive scenarios for terminals in the region and projections for future developments.",
        "Advisory for NVOC Setup and Development: We assist with agency negotiations and selection, as well as the creation of standard operating procedures (SOPs) for all operational, documentation, customer service, and trade management aspects.",
        "Specialized Consulting for Maritime Services: Our consulting focuses on the commercialization and development of maritime services at ports, including agency work, vessel husbanding, bunkering, and other marine services.",
        "Commercial Excellence for Maritime Professionals: We highlight best practices in CRM management, budgeting principles, business intelligence, and more.",
        "Commercial Team Management: We support sales team setup, recruitment, training, variable pay mechanisms, and target/KPI setting.",
      ],
    },
  },
  {
    id: "02",
    title: "Agency",
    slug: "agency",
    icon: Building,
    description:
      "We offer a range of services including port clearance, cargo handling, crew and immigration assistance, and various administrative tasks. With our own offices in East Africa, we provide comprehensive commercial agency services for both vessel operators and NVOCs.",
    content: {
      image: "/images/2.jpg",
      intro: "Consultancy",
      paragraphs: [],
      servicesInclue: [],
    },
  },
  {
    id: "03",
    title: "Green Crew Change",
    slug: "green-crew-change",
    icon: Leaf,
    description:
      "One of our primary services is enabling Shipowners and managers to transition their current crew change processes to a Green mode. This involves a systematic analysis of process changes to replace existing procedures with those that minimize carbon emissions.",
    content: {
      image: "/images/1.jpg",
      intro: "Consultancy",
      paragraphs: [],
      servicesInclue: [],
    },
  },
  {
    id: "04",
    title: "Cargo",
    slug: "cargo",
    icon: Box,
    description:
      "Whether you need to ship in single container loads or in bulk, we offer comprehensive solutions for all your supply chain needs. Ensuring you work with just one vendor who delivers clear, transparent, and timely information. We collaborate with dependable partners to connect FOB cargo with CRF cargo.",
    content: {
      image: "/images/2.jpg",
      intro: "Consultancy",
      paragraphs: [],
      servicesInclue: [],
    },
  },
  // {
  //   id: "05",
  //   title: "Warehousing",
  //   icon: warehousing,
  //   description:
  //     "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
  // },
  // {
  //   id: "06",
  //   title: "Project Cargo",
  //   icon: ClipboardList,
  //   description:
  //     "Our aim is to optimize and improve your supply chain so that we can give you the best service.",
  // },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar: "/images/person.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    avatar: "/images/person2.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avatar: "/images/person.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    avatar: "/images/person2.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    avatar: "/images/person.png",
  },
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
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Services</h1>
          <div className="flex items-center gap-4 text-lg">
            <a href="/" className="hover:text-secondary transition-colors">
              Home
            </a>
            <span>|</span>
            <span>Services</span>
          </div>
        </div>
      </div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-secondary mb-2">
              WHAT WE OFFER
            </h2>
            {/* <h3 className="text-4xl font-bold text-gray-900">
              Trusted For Our Services
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg border-[20px] border-gray-100 hover:border-primary transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="h-16 w-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">
                    {service.id}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.slug}`}>
                  <button className="text-primary font-semibold hover:text-blue-900 transition-colors group flex items-center">
                    <ChevronRight className="text-[#004041] h-5 w-5 flex-shrink-0 hidden group-hover:block " />
                    VIEW DETAIL
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
        <Testimonials3 items={testimonials} direction="right" speed="slow" />
      </div> */}
      <Parallax />
    </>
  );
};

export default Page;
