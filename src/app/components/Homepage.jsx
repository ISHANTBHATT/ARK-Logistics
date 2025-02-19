import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import ServiceGrid from "./ServiceGrid";
import { HeroSection } from "./HeroSection";
import { WhyChoose } from "./WhyChoose";
import Stats from "./Stats";
import Team from "./Team";
import VideoCarousel from "./VideoCarousel";
import Contact from "./Contact";
import { Testimonials } from "./Testimonials";
import Footer from "./Footer";

function Homepage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <HeroSection />
      {/* <Stats /> */}
      <ServiceGrid />
      <WhyChoose />
      <VideoCarousel />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
