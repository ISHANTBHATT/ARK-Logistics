// "use client";
// import { useRouter, useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Truck, Ship, Plane, Train } from "lucide-react";

// const services = [
//   {
//     id: "01",
//     title: "Consultancy",
//     slug: "consultancy",
//     icon: Plane,
//     description:
//       "The ARK team brings extensive expertise in Liner Shipping, Ports & Terminals, Digitalization in Shipping, and Vessel Agency that can be utilized for your organization. Additionally, we offer advisory services for regional representation, which includes the commercialization of your products and services, business development, and navigating regulatory processes.",
//     content: {
//       image: "/images/2.jpg",
//       intro: "Consultancy",
//       paragraphs: [
//         "We offer consultancy services across various facets of the maritime industry, including:",
//       ],
//       servicesInclude: [
//         "Ports & Terminals in the Middle East & Africa: Our in-depth analysis covers port ecosystems, examining different terminal types (bulk, breakbulk, container, offshore & supply, cruise, and leisure). We also assess port users, cargo services, and additional third-party services that ports can offer.",
//         "Container Terminal Expertise: We provide capacity and throughput analysis for container terminals. Our insights include competitive scenarios for terminals in the region and projections for future developments.",
//         "Advisory for NVOC Setup and Development: We assist with agency negotiations and selection, as well as the creation of standard operating procedures (SOPs) for all operational, documentation, customer service, and trade management aspects.",
//         "Specialized Consulting for Maritime Services: Our consulting focuses on the commercialization and development of maritime services at ports, including agency work, vessel husbanding, bunkering, and other marine services.",
//         "Commercial Excellence for Maritime Professionals: We highlight best practices in CRM management, budgeting principles, business intelligence, and more.",
//         "Commercial Team Management: We support sales team setup, recruitment, training, variable pay mechanisms, and target/KPI setting.",
//       ],
//     },
//   },
//   {
//     id: "02",
//     title: "Agency",
//     slug: "agency",
//     icon: Truck,
//     description:
//       "We offer a range of services including port clearance, cargo handling, crew and immigration assistance, and various administrative tasks. With our own offices in East Africa, we provide comprehensive commercial agency services for both vessel operators and NVOCs.",
//     content: {
//       image: "/images/2.jpg",
//       intro: "Agency",
//       paragraphs: [
//         "We offer a range of services including port clearance, cargo handling, crew and immigration assistance, and various administrative tasks. With our own offices in East Africa, we provide comprehensive commercial agency services for both vessel operators and NVOCs.",
//         "Port procedures vary depending on the port of call, but generally, we follow these steps:",
//       ],
//       servicesInclude: [
//         "Collaborating with port authorities to secure necessary permits and clearances for the vessel's arrival and departure.",
//         "Collaborating with port authorities to secure necessary permits and clearances for the vessel's arrival and departure.",
//         "Working alongside stevedores and terminal operators to streamline cargo loading and unloading processes.",
//         "Arranging for bunkering, fresh water, and other supplies to be delivered to the vessel.",
//         "Coordinating with immigration and customs officials to support crew changes, visa requirements, and customs clearances.",
//         "Partnering with surveyors, repair teams, and other service providers to address any maintenance or repair needs for the vessel.",
//         "Managing administrative responsibilities, including documenting the vessel's movements and submitting required reports to port authorities and the principal.",
//         "Providing regular updates and maintaining communication with the principal about the vessel's status and any issues that arise during the port call.",
//       ],
//     },
//   },
//   {
//     id: "03",
//     title: "Green Crew Change",
//     slug: "green-crew-change",
//     icon: Ship,
//     description:
//       "One of our primary services is enabling Shipowners and managers to transition their current crew change processes to a Green mode. This involves a systematic analysis of process changes to replace existing procedures with those that minimize carbon emissions.",
//     content: {
//       image: "/images/2.jpg",
//       intro: "Green Crew Change",
//       paragraphs: [
//         "One of our primary services is enabling Shipowners and managers to transition their current crew change processes to a Green mode. This involves a systematic analysis of process changes to replace existing procedures with those that minimize carbon emissions.",
//         "Our dedicated team will guarantee that every step of the journey—from crew pick-up at the airport or vessel to drop-off at the airport or vessel—utilizes eco-friendly practices. We will employ electric vehicles and partner with hotels that have been audited for their reduced carbon footprint. Throughout the entire journey, our team will document all aspects and provide a comprehensive report on the carbon reduction calculations.",
//         "This allows Shipowners and managers to accurately document their carbon reduction efforts, which can be included in the mandatory ESG reporting, ensuring they contribute to a cleaner and more sustainable future.",
//       ],
//       servicesInclude: [],
//     },
//   },
//   {
//     id: "04",
//     title: "Cargo",
//     slug: "cargo",
//     icon: Train,
//     description:
//       "Whether you need to ship in single container loads or in bulk, we offer comprehensive solutions for all your supply chain needs. Ensuring you work with just one vendor who delivers clear, transparent, and timely information. We collaborate with dependable partners to connect FOB cargo with CRF cargo.",
//     content: {
//       image: "/images/2.jpg",
//       intro: "Cargo",
//       paragraphs: [
//         "We assist with your cargo movement needs through our extensive network of Liner, Breakbulk, and Bulk carriers. Our service offers seamless integration across all transport modes, ensuring you have complete visibility and transparency throughout the entire movement process. For both FCL and LCL shipments, we provide a range of options across various carriers, allowing you to secure the best price for maximum value.",
//         "Our dedicated team collaborates with multiple stakeholders, including ocean carriers, air carriers, truckers, customs officials, cargo handlers, and others, based on your instructions, to give you a comprehensive overview of your cargo movements.",
//         "At ARK, we also have a team of seasoned cargo brokers who specialize in sourcing and providing transport options for bulk cargo across the globe. Our expertise encompasses the movement of commodities such as grains, fertilizers, and construction materials in bulk, as well as steel coils, RORO, and project cargoes in Breakbulk.",
//         "We are specialized agency and logistics service providers in East Africa, with our own offices and extensive experience in cargo sourcing.",
//         "Contact us today for any of your cargo movement requirements.",
//       ],
//       servicesInclude: [],
//     },
//   },
// ];

// const ServiceDetail = () => {
//   const router = useRouter();
//   const { slug } = useParams();

//   const service = services.find((service) => service.slug === slug);

//   if (!service) return <div>Service not found</div>;

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="relative h-[400px]">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url("${service.content.image}")` }}
//         >
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//         <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-8">
//           <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
//             {service.title}
//           </h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <Link
//           href="/services"
//           className="inline-flex items-center text-[#2F6263] hover:text-[#004041] mb-8"
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back to Services
//         </Link>

//         <div className="w-full container mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//             {service.content.intro}
//           </h2>

//           <div className="prose prose-lg">
//             {service.content.paragraphs.map((paragraph, index) => (
//               <p key={index} className="mb-6">
//                 {paragraph}
//               </p>
//             ))}

//             {/* <h3 className="text-xl font-semibold mb-4">
//               Our {service.title} Services Include:
//             </h3> */}

//             <ul className="space-y-3 list-disc pl-6 mb-6">
//               {service.content.servicesInclude.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;

"use client";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  Briefcase,
  Building,
  Box,
  Leaf,
  ArrowLeft,
  Globe,
  ChartNoAxesCombined,
  Ship,
  Forklift,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  // {
  //   id: "01",
  //   title: "Consultancy",
  //   slug: "consultancy",
  //   icon: Briefcase,
  //   description:
  //     "The ARK team brings extensive expertise in Liner Shipping, Ports & Terminals, Digitalization in Shipping, and Vessel Agency that can be utilized for your organization. Additionally, we offer advisory services for regional representation, which includes the commercialization of your products and services, business development, and navigating regulatory processes.",
  //   content: {
  //     image: "/images/2.jpg",
  //     intro: "Consultancy",
  //     paragraphs: [
  //       "We offer consultancy services across various facets of the maritime industry, including:",
  //     ],
  //     servicesInclude: [
  //       "Ports & Terminals in the Middle East & Africa: Our in-depth analysis covers port ecosystems, examining different terminal types (bulk, breakbulk, container, offshore & supply, cruise, and leisure). We also assess port users, cargo services, and additional third-party services that ports can offer.",
  //       "Container Terminal Expertise: We provide capacity and throughput analysis for container terminals. Our insights include competitive scenarios for terminals in the region and projections for future developments.",
  //       "Advisory for NVOC Setup and Development: We assist with agency negotiations and selection, as well as the creation of standard operating procedures (SOPs) for all operational, documentation, customer service, and trade management aspects.",
  //       "Specialized Consulting for Maritime Services: Our consulting focuses on the commercialization and development of maritime services at ports, including agency work, vessel husbanding, bunkering, and other marine services.",
  //       "Commercial Excellence for Maritime Professionals: We highlight best practices in CRM management, budgeting principles, business intelligence, and more.",
  //       "Commercial Team Management: We support sales team setup, recruitment, training, variable pay mechanisms, and target/KPI setting.",
  //     ],
  //   },
  // },
  // {
  //   id: "02",
  //   title: "Agency",
  //   slug: "agency",
  //   icon: Building,
  //   description:
  //     "We offer a range of services including port clearance, cargo handling, crew and immigration assistance, and various administrative tasks. With our own offices in East Africa, we provide comprehensive commercial agency services for both vessel operators and NVOCs.",
  //   content: {
  //     image: "/images/2.jpg",
  //     intro: "Agency",
  //     paragraphs: [
  //       "We offer a range of services including port clearance, cargo handling, crew and immigration assistance, and various administrative tasks. With our own offices in East Africa, we provide comprehensive commercial agency services for both vessel operators and NVOCs.",
  //       "Port procedures vary depending on the port of call, but generally, we follow these steps:",
  //     ],
  //     servicesInclude: [
  //       "Collaborating with port authorities to secure necessary permits and clearances for the vessel's arrival and departure.",
  //       "Collaborating with port authorities to secure necessary permits and clearances for the vessel's arrival and departure.",
  //       "Working alongside stevedores and terminal operators to streamline cargo loading and unloading processes.",
  //       "Arranging for bunkering, fresh water, and other supplies to be delivered to the vessel.",
  //       "Coordinating with immigration and customs officials to support crew changes, visa requirements, and customs clearances.",
  //       "Partnering with surveyors, repair teams, and other service providers to address any maintenance or repair needs for the vessel.",
  //       "Managing administrative responsibilities, including documenting the vessel's movements and submitting required reports to port authorities and the principal.",
  //       "Providing regular updates and maintaining communication with the principal about the vessel's status and any issues that arise during the port call.",
  //     ],
  //   },
  // },
  // {
  //   id: "03",
  //   title: "Green Crew Change",
  //   slug: "green-crew-change",
  //   icon: Leaf,
  //   description:
  //     "One of our primary services is enabling Shipowners and managers to transition their current crew change processes to a Green mode. This involves a systematic analysis of process changes to replace existing procedures with those that minimize carbon emissions.",
  //   content: {
  //     image: "/images/2.jpg",
  //     intro: "Green Crew Change",
  //     paragraphs: [
  //       "One of our primary services is enabling Shipowners and managers to transition their current crew change processes to a Green mode. This involves a systematic analysis of process changes to replace existing procedures with those that minimize carbon emissions.",
  //       "Our dedicated team will guarantee that every step of the journey—from crew pick-up at the airport or vessel to drop-off at the airport or vessel—utilizes eco-friendly practices. We will employ electric vehicles and partner with hotels that have been audited for their reduced carbon footprint. Throughout the entire journey, our team will document all aspects and provide a comprehensive report on the carbon reduction calculations.",
  //       "This allows Shipowners and managers to accurately document their carbon reduction efforts, which can be included in the mandatory ESG reporting, ensuring they contribute to a cleaner and more sustainable future.",
  //     ],
  //     servicesInclude: [],
  //   },
  // },
  // {
  //   id: "04",
  //   title: "Cargo",
  //   slug: "cargo",
  //   icon: Box,
  //   description:
  //     "Whether you need to ship in single container loads or in bulk, we offer comprehensive solutions for all your supply chain needs. Ensuring you work with just one vendor who delivers clear, transparent, and timely information. We collaborate with dependable partners to connect FOB cargo with CRF cargo.",
  //   content: {
  //     image: "/images/2.jpg",
  //     intro: "Cargo",
  //     paragraphs: [
  //       "We assist with your cargo movement needs through our extensive network of Liner, Breakbulk, and Bulk carriers. Our service offers seamless integration across all transport modes, ensuring you have complete visibility and transparency throughout the entire movement process. For both FCL and LCL shipments, we provide a range of options across various carriers, allowing you to secure the best price for maximum value.",
  //       "Our dedicated team collaborates with multiple stakeholders, including ocean carriers, air carriers, truckers, customs officials, cargo handlers, and others, based on your instructions, to give you a comprehensive overview of your cargo movements.",
  //       "At ARK, we also have a team of seasoned cargo brokers who specialize in sourcing and providing transport options for bulk cargo across the globe. Our expertise encompasses the movement of commodities such as grains, fertilizers, and construction materials in bulk, as well as steel coils, RORO, and project cargoes in Breakbulk.",
  //       "We are specialized agency and logistics service providers in East Africa, with our own offices and extensive experience in cargo sourcing.",
  //       "Contact us today for any of your cargo movement requirements.",
  //     ],
  //     servicesInclude: [],
  //   },
  // },
  {
    id: "01",
    title: "Advisory",
    slug: "advisory",
    icon: Compass,
    description:
      "We are consultants specializing in the ports, shipping, and logistics sector, with a strong focus on the Middle East and Africa. Our Advisory supports companies looking to enter or expand in these regions by offering market insights, strategic guidance, and on-the-ground connections to help them navigate the complexities of local operations and drive sustainable growth.",
    content: {
      image: "/images/2.jpg",
      paragraphs: [],
      servicesInclude: [
        "We provide specialized advisory services within the ports and terminals sector, with a particular emphasis on the commercial side of operations. This includes supporting concession and lease negotiations, developing pricing strategies and tariff structures, advising on cargo throughput optimization, evaluating revenue models, and guiding client engagement strategies for shipping lines, logistics providers, and other key stakeholders. Our role is to help operators and investors unlock commercial value, improve competitiveness, and align their terminal offerings with market demand.",
        "We provide strategic insights into the liner shipping sector, focusing on key commercial functions such as network and service planning, trade lane analysis, pricing and yield management, customer segmentation, and negotiations with key clients and port stakeholders. We also assist with market entry strategies and optimizing commercial performance, helping carriers stay competitive and adapt to changing market dynamics.",
        "We offer expert advisory on port agency functions, covering the full spectrum of services including vessel coordination, cargo handling, customs compliance, crew management, and port logistics. Our focus is on optimizing operations, ensuring smooth port calls, and providing seamless communication between shipping lines, terminal operators, and regulatory bodies to enhance efficiency and minimize delays.",
      ],
    },
  },
  {
    id: "02",
    title: "Representation",
    slug: "representation",
    icon: Globe,
    description:
      "If you're a global shipping or logistics company looking to establish a presence in the Middle East, ARK Logistics & Maritime can represent you on the ground. We cover over 35 major ports across the region, plus a wide network of smaller ports, helping you tap into new opportunities without the need for a local office.",
    content: {
      image: "/images/2.jpg",
      paragraphs: [],
      servicesInclude: [
        "By partnering with us, your organization can gain official representation in the region, symbolized by your flag on the map, and immediate access to local services such as regulatory compliance, procurement, and payment processes.",
        "Our involvement with local associations, regulatory bodies, and industry events enhances your organization's reputation as a thought leader in your industry.",
        "Additionally, we offer cost-effective representation and utilize local facilities for meetings with customers and stakeholders, ensuring your organization's influential presence in the Middle Eastern maritime sector",
      ],
    },
  },
  {
    id: "03",
    title: "Commodity Trading",
    slug: "commodity-trading",
    icon: ChartNoAxesCombined,
    description:
      "ARK Logistics & Maritime Commodity Trading has revolutionized the transportation and trading of raw materials by seamlessly connecting global sellers and buyers.",
    content: {
      image: "/images/2.jpg",
      paragraphs: [],
      servicesInclude: [
        "We provide a complete solution that simplifies the logistics involved in maritime commodity trading. Our primary products in this sector include steel, bitumen, and fertilizers.",
        "Bridging the gap between sellers offering their cargo on FOB terms and buyers requiring delivery on CRF/CIF terms.",
        "Our seasoned team of commodity brokers leverages an expansive network of buyers and sellers to enhance value in both time and cost for our clients.",
        "With a solid five-year history of successfully sourcing, transporting, and selling steel products, ARK has established a stellar reputation for reliability and customer satisfaction, making us a trusted partner in the world of maritime logistics and commodity trading.",
      ],
    },
  },
  {
    id: "04",
    title: "Freight Brokerage",
    slug: "freight-brokerage",
    icon: Ship,
    description:
      "We also handle Freight Brokerage services, where we connect regional feeder operators with Carriers and NVOs. Basically, we secure container space and match it with those who need it most—helping our clients get better rates, save time, and keep things moving smoothly.",
    content: {
      image: "/images/2.jpg",
      paragraphs: [],
      servicesInclude: [
        "Our Freight Brokerage services streamline the shipping process by efficiently matching available container space from regional feeder operators with the specific needs of carriers and Non-Vessel Operating Common Carriers (NVOs), ensuring optimal logistics solutions.",
        "By leveraging our extensive network and industry expertise, we negotiate competitive rates and terms, allowing our clients to benefit from cost-effective shipping options while maintaining high service quality.",
        "Additionally, we provide real-time tracking and support throughout the shipping process, ensuring transparency and reliability, which helps our clients manage their supply chains more effectively.",
      ],
    },
  },
  {
    id: "05",
    title: "Logistics",
    slug: "logistics",
    icon: Forklift,
    description:
      "We provide Logistics design solutions focused on Africa, ensuring transparency  and visibility. Our expertise within Project logistics ensures that your cargo is safely and efficiently delivered within the African hinterland.",
    content: {
      image: "/images/2.jpg",
      paragraphs: [
        "We provide Logistics design solutions focused on Africa, ensuring transparency  and visibility. Our expertise within Project logistics ensures that your cargo is safely and efficiently delivered within the African hinterland.",
      ],
      servicesInclude: [],
    },
  },
];

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);

  if (!service) return <div>Service not found</div>;

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] max-h-[800px] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url("${service.content.image}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-[#00404170] to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl"
          >
            <IconComponent
              className="h-12 w-12 text-white mb-4"
              strokeWidth={1.5}
            />
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-white/90 mb-6">{service.description}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/services"
            className="mb-12 inline-flex items-center px-6 py-3 bg-white text-[#004041] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#00404110] hover:border-[#00404130]"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-semibold">All Services</span>
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="prose prose-xl text-gray-700 mb-16">
              {service.content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-lg leading-relaxed mb-8 text-gray-600"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {service.content.servicesInclude.length > 0 && (
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#00404110]">
                <h3 className="text-2xl font-bold text-[#004041] mb-8 flex items-center">
                  <span className="mr-3">📋</span>
                  Service Highlights
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {service.content.servicesInclude.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex p-6 bg-blue-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
