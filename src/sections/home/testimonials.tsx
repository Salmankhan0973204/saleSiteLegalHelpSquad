"use client";
import CustomTitle from "@/components/cutom-title";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrowBack from "../../assets/home/Arrowback.svg";
import arrowFarward from "../../assets/home/ArrowForward.svg";
import Image from "next/image";
import avater1 from "../../assets/careers/avater1.svg";
import avater2 from "../../assets/careers/avater2.svg";
import avater3 from "../../assets/careers/avater3.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderArray = [
  {
    content: `Erin was proactive, attentive to feedback and interested in delivering a solid work-product. I'll continue relying on her for work.`,
    userName: "Gilbert Stev",
    desc: "Hiring Lawyer",
    avater: avater1,
  },
  {
    content: `“Very happy work with agency, so professional to take work and i feel amazing with this work, so cool keep going and success!”`,
    userName: "Nathalia Solcher",
    desc: "Entrepreneur",
    avater: avater2,
  },
  {
    content: `Hopefully can work again with this agency and great work to see result of product, keep going and be rich!`,
    userName: "Joseph Christ",
    desc: "Entrepreneur",
    avater: avater3,
  },
];

const CustomDots: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        background: active ? "#FEDE4B" : "#ddd",
        borderRadius: "50%",
        margin: "20px 0 0 5px",
        cursor: "pointer",
      }}
    />
  );
};

const Testimonials = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (nextSlide: number) => {
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    if (sliderRef?.current) {
      sliderRef.current.previous();
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  const handleNextSlide = () => {
    if (sliderRef?.current) {
      sliderRef.current.next();
      if (currentSlide < sliderArray.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  return (
    <Box sx={{ padding: "50px" }}>
      <Box sx={{ margin: "50px 0" }}>
        <CustomTitle
          tertiaryText="TESTIMONIALS"
          textFontSize="24px"
          textFontWeight="500"
          textLetterSpacing="20px"
        />
        <CustomTitle
          secondaryText="FROM OUR"
          textFontSize="64px"
          textFontWeight="700"
        />
        <CustomTitle
          primaryText="BELOVED CLIENT"
          textFontSize="64px"
          textFontWeight="700"
        />
      </Box>
      <Box>
        <Carousel
          ref={sliderRef}
          responsive={responsive}
          autoPlay={false}
          swipeable={false}
          draggable={true}
          showDots={false}
          // infinite={true}
          arrows={false}
          beforeChange={handleBeforeChange}
          removeArrowOnDeviceType={["laptop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {sliderArray.map((item, index) => {
            let activeSlide = false;
            if (index === currentSlide) {
              activeSlide = true;
            }
            return (
              <Box className="slider" key={index}>
                <Card sx={style.card(activeSlide)}>
                  <CardContent sx={{ padding: {xs:"0px",sm:"24px"} }}>
                    <Rating
                      sx={{ color: activeSlide ? "#18323A" : "#FEDE4B" }}
                      name="half-rating"
                      defaultValue={5}
                      precision={5}
                    />
                    <Typography sx={style.cardContent(activeSlide)}>
                      {item.content}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        paddingTop: activeSlide ? "50px" : "2px",
                      }}
                      gap={2}
                    >
                      <Image
                        width={56}
                        height={56}
                        src={item.avater}
                        alt="image"
                      />
                      <Box>
                        <Typography sx={style.userName(activeSlide)}>
                          {item.userName}
                        </Typography>
                        <Typography sx={style.userDesc(activeSlide)}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Carousel>

        <Stack
          direction="row"
          gap={3}
          sx={{
            justifyContent: "space-between",
            margin: { xs: "10px", md: "100px" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {sliderArray.map((_, index) => (
              <CustomDots key={index} active={index === currentSlide} />
            ))}
          </Box>
          <Box>
            <Image
              src={arrowBack}
              alt="icon"
              width={64}
              height={64}
              onClick={handlePrevSlide}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={arrowFarward}
              alt="icon"
              width={64}
              height={64}
              onClick={handleNextSlide}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Testimonials;
const style = {
  card: (activeSlide: any) => ({
    padding:{xs:"10px" ,sm: "20px"},
    borderRadius: "12px",
    border: "1px solid #fff",
    width:"auto",
    height: {xs:"250" , sm:activeSlide ? "400px" : "300px"},
    margin:{xs:"0", sm:"0 20px"},
    background: activeSlide
      ? "linear-gradient(107deg, #FEDE4B 43.73%, #FFA115 100.71%)"
      : "transparent",
  }),
  cardContent: (activeSlide: any) => ({
    fontSize: {xs:"16px", sm:activeSlide ? "24px" : "18px"},
    fontWeight: 400,
    color: activeSlide ? "#18323A " : "#fff",
    padding: "20px 0",
  }),
  userName: (activeSlide: any) => ({
    fontWeight: "600",
    fontSize:{xs:"16px" , sm: activeSlide ? "24px" : "18px"},
    color: activeSlide ? "#18323A " : "#fff",
  }),
  userDesc: (activeSlide: any) => ({
    fontWeight: "400",
    fontSize: "14px",
    color: activeSlide ? "#18323A " : "#fff",
    margintop: activeSlide ? "150px" : "0px",
  }),
};
