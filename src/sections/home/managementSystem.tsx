import React, { FC } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import homeLeftSide from "../../assets/home/homeLeftSide.png";
import Image from "next/image";
import CustomHeading from "@/components/custom-heading";
import JoinUs from "@/components/join-us/joinUs";

const ManagementSystem: FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: { xs: "0px", lg: "50px" },
                }}
              >
                <Image
                  src={homeLeftSide}
                  width={580}
                  height={586}
                  layout="responsive"
                  alt="image"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: { xs: "none", md: "80vh" },
                }}
              >
                <CustomHeading label="Practice Management System" />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "14", md: "16px" },
                    fontWeight: 500,
                    padding: { xs: "30px 10px 0 0", md: "30px 100px 0 0" },
                  }}
                >
                  Unlock seamless legal management with Legal Help Squad
                  advanced practice management system. From effortless project
                  tracking to secure document management and automated
                  communication, our platform simplifies your legal journey.
                  Elevate your efficiency and organization, ensuring your legal
                  matters are handled with ease. Experience legal support
                  redefined, only at Legal Help Squad.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <JoinUs text="A community of over 1,000 lawyers built around project work" />
    </>
  );
};

export default ManagementSystem;
