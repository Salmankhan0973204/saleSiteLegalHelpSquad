import React, { FC } from 'react'
import HomeHeader from './homeHeader'
import ManagementSystem from './managementSystem'
import WorkOpportunities from './workOpportunities'
import LegalAssistance from './legalAssistance'
import LawyersJoin from './lawyersJoin'
import PostProject from './postProject'
import Pricing from './pricing'
import Advantage from './advantage'
import Testimonials from './testimonials'
const HomePage : FC = () => {
  return (
    <>
      <HomeHeader />
      <ManagementSystem />
      <WorkOpportunities />
      <LegalAssistance />
      <LawyersJoin />
      <PostProject />
      <Pricing />
      <Advantage />
      <Testimonials/>
    </>
  );
}

export default HomePage 


