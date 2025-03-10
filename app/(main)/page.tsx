import CallToAction from "@/components/CallToAction";
import Calendar from "@/components/pages/about/Calendar";
import HeroSection from "@/components/pages/home/HeroSection";
import KnowAboutUs from "@/components/pages/home/KnowAboutUs";
import ProgramObjective from "@/components/pages/home/ProgramObjective";
import WhatWeDo from "@/components/pages/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnowAboutUs />
      <ProgramObjective />
      <WhatWeDo />
      <CallToAction />
      <Calendar />
    </>
  );
}
