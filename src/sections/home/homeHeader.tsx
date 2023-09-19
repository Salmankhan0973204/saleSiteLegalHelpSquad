import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import homeBg from "../../assets/home/home-head.png";
import CustomTitle from "@/components/cutom-title";
import CustomButton from "@/components/custom-button";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <Stack sx={style.homeBackground}>
      <Container maxWidth="xl">
        <Box sx={{ padding: {xs:"80px 0 20px" ,md: "200px 0 50px" }}}>
          <CustomTitle
            tertiaryText="LEGAL HELP SQUAD"
            textLetterSpacing="10px"
            textFontSize="36px"
            textFontWeight="600"
          />
        </Box>
        <Box>
          <CustomTitle
            primaryText="ARE"
            secondaryText="LEGAL"
            tertiaryText="CHALLENGES HOLDING YOU"
            quaternaryText="BACK ?"
            
          />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "16px", md: "19px" },
            fontWeight: "400px",
            color: "#fff",
            padding: { xs: "50px 0px", md: "50px 0px" },
          }}
        >
          Legal Help Squad is here to empower you with expert legal assistance
          across a range of sectors, including complex immigration matters. Our
          platform connects you with dedicated freelancers, ensuring tailored
          solutions for your specific needs.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="/sign-in">  <CustomButton label="REGISTER/LOGIN" /> </Link>
        </Box>
      </Container>
    </Stack>
  );
};

export default HomeHeader;

const style = {
  homeBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${homeBg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  },
};
