"use client";
import React from "react";
import ConsultantProfile from "./consultantProfile";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "@/assets/consultant/arrow-right.png";
import left from "@/assets/consultant/left.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import Image from "next/image";

const items = [
  {
    item: <ConsultantProfile />,
    key: 1,
  },
  {
    item: <ConsultantProfile />,
    key: 2,
  },
  {
    item: <ConsultantProfile />,
    key: 3,
  },
];

const ProfilesCarousel = () => {
  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      NextIcon={
        <Box
          sx={{
            position: "absolute",
            top: "-1700px",
            right: "50px",
            cursor: "pointer",
          }}
        >
          <Image src={right} alt="right" />
        </Box>
      }
      PrevIcon={
        <Box
          sx={{
            position: "absolute",
            top: "-1700px",
            left: "50px",
            cursor: "pointer",
          }}
        >
          <Image src={left} alt="right" />
        </Box>
      }
    >
      {items.map((item) => (
        <Box key={item.key}>{item.item}</Box>
      ))}
    </Carousel>
  );
};

export default ProfilesCarousel;
