import React from "react";
import careersBg from "../../assets/careers/Group.png";
import { Box, Container, Typography } from "@mui/material";
import CustomTitle from "@/components/cutom-title";
import CustomButton from "@/components/custom-button";

const CareersHeader = () => {
  return (
    <Box sx={style.careersBackground}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box sx={style.mainContent}>
          <Box>
            <CustomTitle
              primaryText="CAREERS"
              secondaryText="AT"
              tertiaryText="LEGAL HELP SQUAD"
              textFontSize="80px"
            />
          </Box>
          <Box gap={2} sx={{ display: "flex", flexWrap: "wrap" }}>
            <Typography sx={style.headerContent}>Culture</Typography>
            <Typography sx={style.headerContent}>Core Values</Typography>
            <Typography sx={style.headerContent}>Awards</Typography>
            <Typography sx={style.headerContent}>Benefits</Typography>
            <Typography sx={style.headerContent}>Locations</Typography>
            <Typography sx={style.headerContent}>Openings</Typography>
            <Typography sx={{ fontWeight: "700", fontSize: "25px" }}>
              Students
            </Typography>
          </Box>
          <Box sx={{ margin: "50px 0" }}>
            <CustomButton label="BROWNS OPEN POSITIONS" />
          </Box>
        </Box>
        
        <Box sx={{ background: "#FBE997", padding: {xs:"10px" , md:"30px 50px"} }}>
          <Typography
            sx={{
              fontSize: {xs:"20px", md:"35px"},
              color: "#18323A",
              fontWeight: 600,
              textAlign: "center",
              padding:{xs:"10px" , md:"30px 50px"},
            }}
          >
            Help Systems has a new name, Legal Help Squad, but our commitment to
            our people remains the same.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default CareersHeader;
const style = {
  careersBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${careersBg.src}) `,
    backgroundSize: "cover",
    height: "100vh",
  },
  mainContent: {
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 20px",
    
  },
  headerContent: {
    "::after": {
      content: `" | "`,
    },
    fontWeight: "700",
    fontSize: "25px",
  },
};
