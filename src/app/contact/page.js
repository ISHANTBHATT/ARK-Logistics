// "use client";
// import React, { useState } from "react";
// import { MapPinned, Phone, MailOpen, Clock, Mail, MapPin } from "lucide-react";
// import { motion } from "framer-motion";
// function Page() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = () => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = () => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 overflow-hidden">
//       <div className="relative h-[500px]">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("/images/1.jpg")',
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         </div>

//         {/* Content */}
//         <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-white">
//           <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
//           <div className="flex items-center gap-4 text-lg">
//             <a href="/" className="hover:text-secondary transition-colors">
//               Home
//             </a>
//             <span>|</span>
//             <span>Contact Us</span>
//           </div>
//         </div>
//       </div>

//       {/* Get In Touch Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
//             <p className="text-gray-600 mb-8">
//               The team at ARK Logistics & Maritime is eager to discuss all your
//               cargo and shipping needs.
//             </p>

//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <MapPinned className="w-8 h-8 text-red-600 mb-4" />
//                 <h3 className="font-bold text-xl mb-2">Address</h3>

//                 <p>ARK LogMar LLC-FZ</p>
//                 <p>6th Floor, Meydan Grandstand</p>
//                 <p>License No 2527346.01</p>
//                 <p>Dubai, UAE</p>
//               </div>

//               <div>
//                 <Phone className="w-8 h-8 text-red-600 mb-4" />
//                 <h3 className="font-bold text-xl mb-2">Office Phone</h3>
//                 <p>+971 50 1898269</p>
//               </div>

//               <div>
//                 <MailOpen className="w-8 h-8 text-red-600 mb-4" />
//                 <h3 className="font-bold text-xl mb-2">Email Address</h3>
//                 <p>director@ark-maritime.com</p>
//               </div>

//               {/* <div>
//                 <Clock className="w-8 h-8 text-red-600 mb-4" />
//                 <h3 className="font-bold text-xl mb-2">Working Hours</h3>
//                 <p>(+58) 123-456-7890</p>
//                 <p>+1 718-625-2030</p>
//               </div> */}
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="bg-primary p-8 rounded-xl shadow-lg"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="*Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="*Email address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="*Please enter your phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
//                   required
//                 />
//               </div>
//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="*Your message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
//                   required
//                 ></textarea>
//               </div>
//               <p className="text-sm text-gray-300">
//                 * These fields are required.
//               </p>
//               <button
//                 type="submit"
//                 className="bg-secondary text-white px-8 py-3 rounded-xl hover:bg-red-800 transition-colors"
//               >
//                 SEND MESSAGE
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.1 }}
//         className="w-full h-[450px] relative"
//       >
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925228.5488029!2d54.45357637381895!3d25.06209036289502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1739853447925!5m2!1sen!2sin"
//           className="w-full h-full border-0"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </motion.div>

//       {/* Contact Info Bar */}
//       <div className="bg-primary text-white py-12">
//         <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
//           <div className="flex items-center gap-2">
//             <Phone className="text-red-600 h-6 w-6" />
//             <span>+971 50 1898269</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Mail className="text-red-600 h-6 w-6" />
//             <span>director@ark-maritime.com</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin className="text-red-600 h-6 w-6" />
//             <span>
//               ARK LogMar LLC-FZ 6th Floor, Meydan Grandstand License No
//               2527346.01 Dubai, UAE
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {/* <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5 10l7-7m0 0l7 7m-7-7v18"
//           />
//         </svg>
//       </button> */}
//     </div>
//   );
// }

// export default Page;

"use client";
import React, { useState } from "react";
import { MapPinned, Phone, MailOpen, Clock, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, phone, message } = formData;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: email,
          userName: name,
          phone: phone,
          message: message,
        }),
      });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
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
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center gap-4 text-lg">
            <a href="/" className="hover:text-secondary transition-colors">
              Home
            </a>
            <span>|</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              The team at ARK Logistics & Maritime is eager to discuss all your
              cargo and shipping needs.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <MapPinned className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Address</h3>

                <p>ARK LogMar LLC-FZ</p>
                <p>6th Floor, Meydan Grandstand</p>
                <p>License No 2527346.01</p>
                <p>Dubai, UAE</p>
              </div>

              <div>
                <Phone className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Office Phone</h3>
                <p>+971 50 1898269</p>
              </div>

              <div>
                <MailOpen className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Email Address</h3>
                <p>director@ark-maritime.com</p>
              </div>

              {/* <div>
                <Clock className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                <p>(+58) 123-456-7890</p>
                <p>+1 718-625-2030</p>
              </div> */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-primary p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="*Name"
                  value={formData.name}
                  onChange={handleChange} // now works!
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="*Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="*Please enter your phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <textarea
                name="message"
                placeholder="*Your message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <p className="text-sm text-gray-300">
                * These fields are required.
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-secondary text-white px-8 py-3 rounded-xl hover:bg-red-800 transition-colors"
              >
                {isLoading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full h-[450px] relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925228.5488029!2d54.45357637381895!3d25.06209036289502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1739853447925!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Info Bar */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="text-red-600 h-6 w-6" />
            <span>+971 50 1898269</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-red-600 h-6 w-6" />
            <span>director@ark-maritime.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-red-600 h-6 w-6" />
            <span>
              ARK LogMar LLC-FZ 6th Floor, Meydan Grandstand License No
              2527346.01 Dubai, UAE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
