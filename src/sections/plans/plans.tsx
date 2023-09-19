import React from "react";
import PlansHeader from "./plansHeader";
import PerfectPlan from "./perfectPlan";
import PackPlans from "./packPlans";
import PlanDetails from "./planDetails";
import Upgrade from "./upgrade";
import LiveDemo from "./liveDemo";
import LawyersPack from "./lawyersPack";

const PlansPage = () => {
  return (
    <>
      <PlansHeader />
      <PerfectPlan />
      <PackPlans />
      <PlanDetails />
      <Upgrade />
      <LiveDemo />
      <LawyersPack />
    </>
  );
};

export default PlansPage;
