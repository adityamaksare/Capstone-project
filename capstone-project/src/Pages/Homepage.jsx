import React from "react";
import Hero from "../Components/Hero";
import Highligths from "../Components/Highlights";
import Testimonials from "../Components/Testimonials";
import AboutSection from "../Components/AboutSection";
export const Homepage = () => {
  return (
    <div>
      <Hero />
      <Highligths />
      <Testimonials />
      <AboutSection />
    </div>
  );
};
