import { Box } from "@mui/material";
import React from "react";
import FindConsultantHead from "./findConsultantHead";
import AvailableConsultants from "./availableConsultants";

const FindConsultant = () => {
  return (
    <>
      <FindConsultantHead />
      <AvailableConsultants />
    </>
  );
};

export default FindConsultant;
