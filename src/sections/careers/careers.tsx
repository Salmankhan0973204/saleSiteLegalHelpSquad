import React from "react";
import CareersHeader from "./careersHeader";
import Services from "./services";
import CoreValaues from "./coreValues";
import Benefits from "./Benefits";
import HiringProcess from "./hiringProcess";
import FrequentlyAskedQuestions from "./frequentlyAskedQuestions";

const Careers = () => {
  return (
    <>
      <CareersHeader />
      <Services />
      <CoreValaues/>
      <Benefits/>
      <HiringProcess />
      <FrequentlyAskedQuestions/>
    </>
  ); 
};

export default Careers;
