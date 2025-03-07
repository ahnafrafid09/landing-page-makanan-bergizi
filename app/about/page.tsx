import Calendar from "@/components/pages/about/Calendar";
import CallToAction from "@/components/pages/about/CallToAction";
import HeroSection from "@/components/pages/about/HeroSection";
import Journey from "@/components/pages/about/Journey";
import VideoPlayer from "@/components/pages/about/VideoPlayer";
import VisionMision from "@/components/pages/about/VisionMision";
import React from "react";

const About = () => {
  return (
    <>
      <HeroSection />
      <VideoPlayer />
      <VisionMision />
      <Journey />
      <CallToAction />
      <Calendar />
    </>
  );
};

export default About;
