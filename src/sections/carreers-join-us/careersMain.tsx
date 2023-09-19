import React from "react";
import careersBg from "../../assets/careers/Group.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomTitle from "@/components/cutom-title";
import CustomButton from "@/components/custom-button";

const CareersMain = () => {
  return (
    <>
      <Box sx={style.careersBackground}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box sx={style.mainContent}>
            <Box>
              <CustomTitle
                primaryText="Join"
                secondaryText="Our"
                tertiaryText="Team"
                textFontSize="80px"
              />
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                padding: { xs: "10px", md: "30px 50px" },
                marginBottom: "3rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "16px", md: "19px" },
                  fontWeight: "400px",
                  color: "#fff",
                }}
              >
                Legal Help Squad is here to empower you with expert legal
                assistance across a range of sectors, including complex
                immigration matters. Our platform connects you with dedicated
                freelancers, ensuring tailored solutions for your specific
                needs.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: {
            xl: "80px",
            lg: "60px",
            md: "40px",
            sm: "30px",
            xs: "16px",
          },
          position: "absolute",
          width: "90%",
          bottom: "-170px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <iframe
                src="https://jobs.orcaloholding.co.uk/jobs/companies/p5XK0jVBWqPAZY7woe9Dlr1byE"
                width="100%"
                height="100%"
                no-border
                title="Jobs Widget"
                style={{
                  border: "none",
                  minHeight: "40vh",
                  borderRadius: "10px",
                }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CareersMain;

const style = {
  careersBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${careersBg.src}) `,
    backgroundSize: "cover",
    height: "90vh",
  },
  mainContent: {
    borderRadius: "25px",
    display: "flex",
  },
  headerContent: {
    "::after": {
      content: `" | "`,
    },
    fontWeight: "700",
    fontSize: "25px",
  },
};
