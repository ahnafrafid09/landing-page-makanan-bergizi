import FormContact from "@/components/pages/contact/FormContact";
import HeroSection from "@/components/pages/contact/HeroSection";
import JoinWithUs from "@/components/pages/contact/JoinWithUs";
import Map from "@/components/Map";
import React from "react";

const Contact = () => {
  return (
    <>
      <HeroSection />
      <JoinWithUs />
      <FormContact />
      <Map />
    </>
  );
};

export default Contact;
