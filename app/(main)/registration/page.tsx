import Map from "@/components/Map";
import FormRegistration from "@/components/pages/registration/FormRegistration";
import HeroSection from "@/components/pages/registration/HeroSection";
import React from "react";

const Registration = () => {
  return (
    <>
      <HeroSection />
      <FormRegistration />
      <Map />
    </>
  );
};

export default Registration;
