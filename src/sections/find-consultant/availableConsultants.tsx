"use client";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Pagination, Rating, Typography } from "@mui/material";
import AvailIMG from "@/assets/consultant/availableIcon.png";
import HeartIcon from "@/assets/consultant/HeartPing.png";
import consultant from "@/assets/consultant/colsuntand.jpg";
import Consulatant1 from "@/assets/consultant/consultantING.jpg";
import Like from "@/assets/consultant/like.png";
import Location from "@/assets/consultant/Location.png";
import Image from "next/image";

const colsultantdata = [
  {
    id: "1",
    image: consultant,
    name: "David Marshall",
    available: true,
    localion: "Located in Wirral",
    price: "$68",
    job: "hr",
    jobTitle: "Family Law Consultant",
    new: true,
    recommendationValue: "4",
    Skills: ["Law", "Family"],
  },
  {
    id: "2",
    image: Consulatant1,
    name: "David Marshall",
    available: false,
    localion: "Located in Doncaster",
    price: "$682",
    job: "job",
    jobTitle: "Consultant & Employment Lawyer",
    new: false,
    recommendationValue: "2",
    Skills: ["Law"],
  },
  {
    id: "3",
    image: Consulatant1,
    name: "David Marshall",
    available: false,
    localion: "Located in Doncaster",
    price: "$682",
    job: "job",
    jobTitle: "Consultant & Employment Lawyer",
    new: false,
    recommendationValue: "2",
    Skills: ["Law", "Family", "Employment law"],
  },
  {
    id: "4",
    image: Consulatant1,
    name: "David Marshall",
    available: false,
    localion: "Located in Doncaster",
    price: "$682",
    job: "job",
    jobTitle: "Consultant & Employment Lawyer",
    new: false,
    recommendationValue: "2",
    Skills: ["Law", "Family", "Employment law", "5 years experience"],
  },
  {
    id: "5",
    image: Consulatant1,
    name: "David Marshall",
    available: false,
    localion: "Located in Doncaster",
    price: "$682",
    job: "job",
    jobTitle: "Consultant & Employment Lawyer",
    new: false,
    recommendationValue: "2",
    Skills: [
      "Law",
      "Family",
      "Employment law",
      "5 years experience",
      "Recruitment",
    ],
  },
  {
    id: "6",
    image: Consulatant1,
    name: "David Marshall",
    available: false,
    localion: "Located in Doncaster",
    price: "$682",
    job: "job",
    jobTitle: "Consultant & Employment Lawyer",
    new: false,
    recommendationValue: "2",
    Skills: ["Law", "Family", "Employment law", "5 years experience"],
  },
];

const AvailableConsultants = () => {
  const [value, setValue] = React.useState(5);

  const router = useRouter();

  return (
    <Box sx={{ padding: { lg: "110px", sm: "30px", xs: "30px" } }}>
      <Box
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#FEDE4B",
          marginY: "2rem",
        }}
      >
        90 “ consultants” available
      </Box>

      <Box>
        <Grid container spacing={"20px"} justifyContent={"center"}>
          {colsultantdata.length &&
            colsultantdata.map((item, i) => {
              return (
                <Grid key={i} item lg={4} sm={6} md={6} xs={12}>
                  <Box
                    onClick={() => router.push("/find-consultant/" + item.id)}
                    sx={{
                      borderRadius: "20px",
                      background: "White",
                      boxShadow: "0px 44px 54px -20px rgba(39, 44, 42, 0.12)",
                      padding: "16px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${item.image.src}) `,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "auto",
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "250px",
                        borderRadius: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: item.available
                            ? "space-between"
                            : "flex-end",
                        }}
                      >
                        {item.available && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius: "20px",
                              background: "#ECF3F4",
                              padding: "8px",
                            }}
                          >
                            <Image src={AvailIMG} alt="available" />
                            <Box
                              sx={{
                                fontSize: "24px",
                                fontWeight: "400",
                                color: "#4B4B4B",
                              }}
                            >
                              Available
                            </Box>
                          </Box>
                        )}
                        <Box sx={{ display: "math" }}>
                          <Image src={HeartIcon} alt="like" />
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography>{item.name}</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <Image src={Location} alt="location" />
                            <Typography>{item.localion}</Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            borderRadius: "20px",
                            background: "#FEDE4B",
                            padding: "6px",
                            color: "#18323A",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {item.price}/{item.job}
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: { sm: "column", lg: "row" },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "#18323A",
                              width: { xs: "auto", lg: "130px" },
                              lineHeight: "25px",
                            }}
                          >
                            {item.jobTitle}
                          </Box>

                          {item.new && (
                            <Box
                              sx={{
                                borderRadius: "2px",
                                background: "rgba(18, 207, 201, 0.10)",
                                margin: { xs: " 0 25px", md: "0" },
                                color: "#12CFC9",
                              }}
                            >
                              New
                            </Box>
                          )}
                        </Box>

                        <Box sx={{ marginTop: "2rem" }}>
                          <Box sx={{ textAlign: { xs: "start", sm: "end" } }}>
                            <Rating
                              name="read-only"
                              value={value}
                              readOnly
                              size="small"
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius: "20px",
                              background: "#ECF3F4",
                              padding: "8px",
                            }}
                          >
                            <Image src={Like} alt="available" />
                            <Box
                              sx={{
                                fontSize: "11px",
                                fontWeight: "500",
                                color: "#4B4B4B",
                              }}
                            >
                              {item.recommendationValue} recommendations
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        flexWrap: "wrap",
                        marginTop: "2rem",
                        height:{xs:"50px" , md:"auto"},
                      }}
                    >
                      {item.Skills.map((item, i) => {
                        return (
                          <Box
                            key={i}
                            sx={{
                              padding: "4px 10px 6px 10px",
                              borderRadius: "8px",
                              background: "rgba(254, 222, 75, 0.45)",
                              fontSize: "11px",
                              fontWeight: "500",
                              color: "#0A1F24",
                            }}
                          >
                            {item}
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <Pagination
          sx={{
            "& .MuiPaginationItem-page": {
              backgroundColor: "white",
              color: "#A0A3BD",
              fontSize: "14px",
              fontWeight: "600",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#FEDE4B",
              color: "#18323A",
              fontSize: "14px",
              fontWeight: "600",
            },
            "& .MuiPaginationItem-page.Mui-disabled": {
              color: "gray",
              fontSize: "14px",
              fontWeight: "600",
            },
            "& .MuiPaginationItem-previousNext": {
              backgroundColor: "white",
              color: "#A0A3BD",
              fontSize: "14px",
              fontWeight: "600",
            },
          }}
          count={5}
          variant="outlined"
          shape="rounded"
          size={"large"}
        />
      </Box>
    </Box>
  );
};

export default AvailableConsultants;
