import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ARK Logistics & Maritime",
  description:
    "ARK Logistics & Maritime is a partnership of like-minded experts who identified the demand for reliable and professional services in the region. The team has a solid background in cargo and maritime activities, complemented by a strong local network that can be effectively leveraged. With extensive experience in corporate environments, the team combines vision with the ability to implement plans, setting ARK L&M up for future success. They have worked with esteemed companies, including leading liner, logistics, and maritime service providers. Furthermore, they possess expertise in managing bulk commodities, RO-RO shipments, project cargo, and containers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
