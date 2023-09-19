import React, { FC } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import servicesLeftSide from "../../assets/careers/services.png";
import Image from "next/image";
import CustomHeading from "@/components/custom-heading";

const Services: FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: { xs: "none", md: "80vh" },
                  margin:"20px 0"
                }}
              >
                <CustomHeading label="Great software and services start with great people." />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "14", md: "16px" },
                    fontWeight: 500,
                    padding: { xs: "30px 10px 0 0", md: "30px 100px 0 0" },
                  }}
                >
                  We’re all about people. We listen to our customers and to each
                  other to solve problems and create value. And we always take
                  time to reflect on our successes and celebrate individual and
                  team accomplishments.
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "14", md: "16px" },
                    fontWeight: 500,
                    padding: { xs: "30px 10px 0 0", md: "30px 100px 0 0" },
                  }}
                >
                  Legal Help Squad is a trusted voice in the industry,
                  delivering integrated, scalable solutions that bring balance
                  and control to organizations around the world. We’ve grown by
                  leaps and bounds over the years, but our commitment to our
                  people remains the same
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "14", md: "16px" },
                    fontWeight: 500,
                    padding: { xs: "30px 10px 0 0", md: "30px 100px 0 0" },
                  }}
                >
                  At the heart of any successful law firm or legal service are
                  the people who make it all happen. From the attorneys who
                  provide legal advice and representation to the support staff
                  who keep everything running smoothly, every member of a legal
                  team plays a vital role in delivering high-quality service to
                  clients.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: { xs: "0px", lg: "50px" },
                }}
              >
                <Image
                  src={servicesLeftSide}
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

export default Services;
