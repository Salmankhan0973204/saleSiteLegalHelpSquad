"use client";

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import BG from "@/assets/production/productionHomebg.png";
import CustomTitle from "@/components/cutom-title";
import service1 from "../../assets/production/work.png";
import service2 from "@/assets/production/consultant.png";
import service3 from "@/assets/production/managment.png";
import mangmentbg from "@/assets/production/postProject.png";
import Image from "next/image";
import CustomHeading from "@/components/custom-heading";

const serviceCardDate = [
  {
    image: service1,
    title: "Find Work",
  },
  {
    image: service2,
    title: "Find Consultant",
  },
  {
    image: service3,
    title: "Practice Management",
  },
];

const ProductionHead = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Box sx={styles.homeBackground}>
        <Box sx={{ padding: { xs: "150px 50px 50px", md: "300px 50px 50px" } }}>
          <CustomTitle
            primaryText="OUR"
            secondaryText="MAIN"
            tertiaryText="SERVICES"
            textLetterSpacing="-1.6px"
            textFontSize="80px"
            textFontWeight="700"
          />
        </Box>
      </Box>

      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 4, sm: 4, md: 4 }}
        padding="16px"
        sx={{
          position: isMobile ? "" : "absolute",
          bottom: "-212px",
          width: "90%",
        }}
      >
        {serviceCardDate.map((item, index) => (
          <Box
            key={index}
            sx={{
              background: "#ffff",
              borderRadius: "20px",
              boxShadow: "0px 44px 54px -20px rgba(39, 44, 42, 0.12)",
              padding: "16px",
              width: { xs: "70%", sm: "50%", md: "40%", lg: "20%" },
              height:{xs:"auto",},
            }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={341}
                height={302}
                layout="responsive"
              />
            </Box>
            <Box
              sx={{
                fontSize: "30px",
                textAlign: "center",
                color: "#18323A",
                fontWeight: "600",
                paddingY: {xs:"10px" , md:"60px"},
              }}
            >
              {item.title}
            </Box>
          </Box>
        ))}
      </Stack>

      <Container sx={{ marginBottom: "2rem" }} maxWidth="xl">
        <Stack sx={{ paddingTop: isMobile ? "" : "14rem" }}>
          <Typography
            className="content"
            sx={{
              padding: { xs: "20px 5px", md: "50px 50px;" },
              fontSize: { xs: "16px", md: "20px" },
              textAlign: "center",
            }}
          >
            Looking for expert Legal assistance? Post your legal job on Legal
            Help Squad’s Platform and Contact with skilled professionals ready
            to tackle your unique challenges
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "start",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginTop:{xs:"1rem" , md:"0"},
                      display: "flex",
                      justifyContent: { xs: "center", md: "start" },
                    }}
                  >
                    <CustomHeading  label="What kind of work can i get done" />
                  </Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "14", md: "16px" },
                      fontWeight: 500,
                      padding: { xs: "10px 10px 0 0", md: "30px 100px 0 0" },
                      marginBottom: { xs: "2rem", md: "4rem" },
                      marginTop: { xs: "0", md: "4rem" },
                    }}
                  >
                    Searching for specialized legal support, On Legal Help
                    Squad, Post <br /> your legal project to find skilled
                    professional adapt at addressing your distinct legal needs.
                  </Typography>
                </Box>

                <Button sx={styles.postAProjectBtn} className="postButton">
                  Post a Project
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={mangmentbg}
                  width={580}
                  height={586}
                  layout="responsive"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default ProductionHead;
const styles = {
  homeBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${BG.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: {xs:"50vh" , md:"100vh"},
  },
  postAProjectBtn: {
    borderRadius: "45px",
    background: "#FEDE4B",
    boxShadow: "0px 30px 30px -18px rgba(24, 50, 58, 0.50)",
    color: "#26292E",
    fonSize: "18px",
    fontWeight: "600",
    padding: "16px 51px",
    mt: "20px",
    "&:hover": {
      background: "#FEDE4B",
      color: "#26292E",
    },
  },
};
