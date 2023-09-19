"use client";
import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LeftSideImg from "../../../assets/leftSide.png";
import Logo from "@/assets/mainLogo.png";
import Image from "next/image";
import GlobalButton from "@/components/button/button";
import CustomTitle from "@/components/cutom-title";

const LeftSide = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(570));

  const buttonData = [
    {
      name: "Client",
      onClick: () => {},
    },
    {
      name: "Consultant",
      onClick: () => {},
    },
    {
      name: "Law Firm",
      onClick: () => {},
    },
  ];

  const disc = {
    color: "#FFF",
    textAlign: "center",
    fontSize: "26px",
    fontWeight: 500,
    marginBottom: isMobile ? "3rem" : "5rem",
  };

  return (
    <Box sx={styles.leftMain}>
      <Box
        sx={{ paddingTop: "6rem", paddingBottom: "6rem", textAlign: "center" }}
      >
        <Image src={Logo} alt="Logo" width={280} height={128} />
      </Box>

      <Box>
        <Typography sx={styles.welcome}>WELCOME TO</Typography>
        {/* <Typography sx={styles.title}>LEGAL HELP SQUAD</Typography> */}
        <CustomTitle
          primaryText="LEGAL"
          secondaryText="HELP"
          tertiaryText="SQUAD"
          textFontSize="54.216px"
          textFontWeight="700"
        />
        <Typography sx={disc}>A Legal Freelancer Marketplace</Typography>
      </Box>
      <Typography sx={styles.register}>Register As</Typography>
      <Box sx={{ textAlign: "center" }}>
        <Grid container spacing={2}>
          {buttonData.map((item: any, i) => (
            <Grid key={i} item xs={12} sm={12} md={12} lg={4}>
              <GlobalButton onClick={item.onClick}>{item.name}</GlobalButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LeftSide;

const styles = {
  leftMain: {
    background: `url(${LeftSideImg.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    height: "100%",
    width: "100%",
  },
  welcome: {
    color: "#FEDE4B",
    fontSize: "24.397px",
    fontWeight: 600,
    textAlign: "center",
  },
  title: {
    color: "#FEDE4B",
    textAlign: "center",
    fontSize: "54.216px",
    fontWeight: 700,
  },
  disc: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "26px",
    fontWeight: 500,
    marginBottom: "5rem",
  },
  register: {
    color: "#FEDE4B",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "50px",
    marginBottom: "3rem",
  },
  btns: {
    textAlign: "center",
  },
};
