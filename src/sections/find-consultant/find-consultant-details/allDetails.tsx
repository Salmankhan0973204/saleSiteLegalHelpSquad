import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Location from "@/assets/consultant/location1.png";
import Frame from "@/assets/consultant/Frame.png";
import Education from "@/assets/consultant/edu.png";
import EduDate from "@/assets/consultant/date2.png";
import Date from "@/assets/consultant/date.png";
import HomeIcon from "@/assets/consultant/home.png";
import Mark from "@/assets/consultant/yes.png";
import CustomButton from "@/components/custom-button";

const skillsData = [
  {
    id: "1",
    skill: "Corporate Law",
  },
  {
    id: "2",
    skill: "Legal Consultancy",
  },
  {
    id: "3",
    skill: "Objectivity",
  },
  {
    id: "4",
    skill: "Corporate Law",
  },
  {
    id: "5",
    skill: "Legal Consultancy",
  },
  {
    id: "6",
    skill: "Corporate Law",
  },
  {
    id: "6",
    skill: "Legal Consultancy",
  },
];

const AllDetails = () => {
  return (
    <Box sx={{ padding: { lg: "120px", md: "50px", sm: "30px", xs: "30px" } }}>
      <Grid container spacing={5} justifyContent={"center"}>
        <Grid item sm={12} md={4}>
          <Box
            sx={{
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography
              sx={{ fontSize: "23px", fontWeight: "700", marginTop: "1rem" }}
            >
              Location and workplace preferences
            </Typography>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <Image src={Location} alt="location" />
              <Box sx={{ marginLeft: "8px" }}>
                <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                  Location
                </Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                  London, England, United Kingdom
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <Image src={HomeIcon} alt="homeIcon" />
              <Box sx={{ marginLeft: "8px" }}>
                <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                  Remote only
                </Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                  Primarily works remotely
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "3rem",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography
              sx={{ fontSize: "23px", fontWeight: "700", marginBottom: "10px" }}
            >
              Verifications
            </Typography>

            <Box
              sx={{
                display: "flex",
                marginTop: "1rem",
                background: "#FEDE4B",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Image src={Mark} alt="mark" />
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "#1A2028",
                  }}
                >
                  Lawyers Pact code of <br /> conduct signed
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    color: "#1A2028",
                  }}
                >
                  Read the Lawyers Pact code <br />
                  of conduct
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "1rem",
                background: "#FEDE4B",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Image src={Mark} alt="mark" />
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontSize: "15px", fontWeight: "700", color: "#333330" }}
                >
                  Remote only
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "3rem",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography
              sx={{ fontSize: "23px", fontWeight: "700", marginTop: "1rem" }}
            >
              Languages
            </Typography>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                  English
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                  Native or bilingual
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                  Portuguese
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                  Native or bilingual
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                  Spanish
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                  Basic
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={12} md={8}>
          <Box
            sx={{
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
              Skills (7)
            </Typography>
            <Grid container spacing={4}>
              {skillsData.map((item, i) => {
                return (
                  <Grid key={i} item md={6} sm={12}>
                    <Box>
                      <Typography
                        sx={{ marginTop: "1rem", marginBottom: "1.5rem" }}
                      >
                        {item.skill}
                      </Typography>
                      <Divider
                        sx={{ background: "rgba(227, 237, 239, 0.40)" }}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box
            sx={{
              marginTop: "3rem",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
              Rafael in a few words
            </Typography>
            <Box>
              <Typography
                sx={{
                  marginY: "1rem",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                Qualified Lawyer with 16 years of experience as a respected and
                experienced multilingual professional with experience litigating
                cases for prestigious law firms, servicing several companies and
                Government departments.
              </Typography>

              <Typography
                sx={{
                  marginY: "1rem",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                Demonstrating ability in client management, legal research,
                litigation strategies, legal consultancy, and legal document
                review while ensuring compliance with corporate governance to
                drive consistent legal success.
              </Typography>
              <Box
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "25px",
                  color: "#FEDE4B",
                }}
              >
                View more
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "3rem",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography
              sx={{ fontSize: "23px", fontWeight: "700", marginBottom: "10px" }}
            >
              Experience
            </Typography>
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <Box key={i}>
                  <Box sx={{ display: "flex", marginY: "3rem" }}>
                    <Image src={Frame} alt="location" />
                    <Box sx={{ marginLeft: "8px" }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                        Altlaw eDiscovery
                      </Typography>

                      <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                        Qualified Lawyer
                      </Typography>

                      <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                        <Image
                          src={Location}
                          alt="location"
                          style={{ marginRight: "10px" }}
                        />
                        <Image
                          src={Date}
                          alt="date"
                          style={{ marginRight: "10px" }}
                        />{" "}
                        January 2020 - January 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    sx={{
                      background: "rgba(227, 237, 239, 0.40)",
                      border: "1px solid rgba(227, 237, 239, 0.40)",
                    }}
                  />
                </Box>
              );
            })}
            <Box sx={{ paddingTop: "2rem", textAlign: "end" }}>
              <CustomButton label="Show all experience" />
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "3rem",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#FEDE4B",
            }}
          >
            <Typography
              sx={{
                textAlign: "end",
                fontSize: "15px",
                fontWeight: "500",
                color: "#1A2028",
              }}
            >
              I recommend Rafael
            </Typography>
            <Typography
              sx={{ fontSize: "22px", fontWeight: "700", color: "#1A2028" }}
            >
              Recommendations
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: "3rem",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #E0DED9",
              background: "#1A2028",
            }}
          >
            <Typography
              sx={{ fontSize: "23px", fontWeight: "700", marginBottom: "10px" }}
            >
              Education
            </Typography>
            {[1, 2, 3, 4, 5].map((item, i) => {
              return (
                <Box key={i}>
                  <Box sx={{ display: "flex", marginY: "3rem" }}>
                    <Image src={Education} alt="location" />
                    <Box sx={{ marginLeft: "8px" }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
                        eDiscovery
                      </Typography>
                      <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                        Oxford School Of Accountancy & Management
                      </Typography>

                      <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                        <Image
                          src={EduDate}
                          alt="date"
                          style={{ marginRight: "1rem" }}
                        />
                        2018
                      </Typography>

                      <Box sx={{ fontSize: "15px", fontWeight: "500" }}>
                      Bachelor&apos;s degree, Law
                      </Box>
                    </Box>
                  </Box>
                  <Divider
                    sx={{
                      background: "rgba(227, 237, 239, 0.40)",
                      border: "1px solid rgba(227, 237, 239, 0.40)",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllDetails;
