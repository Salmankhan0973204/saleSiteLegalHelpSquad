"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CustomHeading from "@/components/custom-heading";
import Work from "@/assets/production/work.png";
import slideRounded from "@/assets/production/slider1.png";
import Top from "@/assets/production/Top.png";
import Colonbottom from "@/assets/production/colonbottom.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const TheResultSlider = () => {
  const [centeredSlideIndex, setCenteredSlideIndex] = useState(2);

  const handleSlideChange = (swiper: any) => {
    setCenteredSlideIndex(swiper.realIndex);
  };

  return (
    <Box sx={{ padding: {xs:"50px 10px" , sm:"100px"} }}>
      <Box>
        <CustomHeading
          label="Still not convinced? check out the results"
          textFontSize="36px"
          textFontWeight="700"
          textAlign="center"
        />
      </Box>

      <Box>
        <Swiper
          effect={"coverflow"}
          spaceBetween={100}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 5,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
          onSlideChange={handleSlideChange}
          initialSlide={centeredSlideIndex}
        >
          {[1, 2, 3, 4, 5].map((num: number, index: any) => (
            <SwiperSlide key={index}
              style={{
                boxShadow:
                  "0px 6.88775px 29.08163px -9.18367px rgba(255, 178, 0, 0.15)",
                background: "#FEDE4B",
                position: "relative",
                borderRadius: "7px",
                width: "320px",
                height: "361px",
              }}
            >
              <Box
                sx={{
                  boxShadow:
                    "0px 6.88775px 29.08163px -9.18367px rgba(255, 178, 0, 0.15)",
                  background: "#FEDE4B",
                  position: "relative",
                  borderRadius: "7px",
                  width: "320px",
                  height: "361px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    transform: "translateY(-60px)",
                    zIndex: "999",
                  }}
                >
                  <Image
                    src={slideRounded}
                    alt="icon"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <Box sx={{ textAlign: "center", paddingX: "8px" }}>
                  <Box
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#18323A",
                      paddingBottom: "1rem",
                    }}
                  >
                    Skylar Vetrovs
                  </Box>
                  <Box
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#18323A",
                      lineHeight: "20px",
                    }}
                  >
                    I love this brand, i can’t say anything more than they’re
                    absolutely amazing. You need to buy their products, my life
                    has been changed since using them!
                  </Box>
                </Box>

                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                  }}
                >
                  <Image src={Top} alt="icon" width={30} height={30} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                  }}
                >
                  <Image src={Colonbottom} alt="icon" width={30} height={30} />
                </div>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TheResultSlider;
