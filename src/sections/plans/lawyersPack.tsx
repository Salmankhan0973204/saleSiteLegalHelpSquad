import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import lawyerBg from "../../assets/plans/lawyersPack.png";
import CustomTitle from "@/components/cutom-title";
import CustomButton from "@/components/custom-button";

const LawyersPack = () => {
  return (
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
                src={lawyerBg}
                width={580}
                height={586}
                layout="responsive"
                alt="image"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: { xs: "none", md: "50vh" },
                margin: "20px 0",
              }}
            >
              <Box sx={{ display: "flex" , flexWrap:"wrap" }} gap={2}>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px", color: "#fff" }}
                >
                  Try
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "40px",
                    color: "transparent",
                    marginTop:"8px",
                    lineHeight:"42px",
                    WebkitTextStrokeWidth: {
                      xs: "1px",
                      lg: "2px",
                    },
                    WebkitTextStrokeColor: "#ffffff",
                  }}
                >
                  Lawyer&apos;s
                </Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px", color: "#fff" }}
                >
                  Pact For
                </Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px", color: "#FEDE4B" }}
                >
                  Free
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#FEDE4B",
                  fontSize: { xs: "16", md: "20px" },
                  fontWeight: 500,
                  padding: { xs: "30px 10px 0 0", md: "30px 100px 0 0" },
                }}
              >
                Try Clio’s legal software free for 7 days with no obligation.
                Easy setup. No credit card required. Cancel anytime.
              </Typography>
              <Box sx={{padding:"30px 0"}}>
             
                <CustomButton label="post a Project" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default LawyersPack;
