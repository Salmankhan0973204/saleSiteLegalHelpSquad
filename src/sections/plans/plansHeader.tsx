import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Typography } from "@mui/material";
import plansBg from "../../assets/plans/plansBg.png";
import React from "react";

const PlansHeader = () => {
  return (
    <Box sx={style.plansBackground}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height:"100vh",
              }}
            >
              <Box sx={style.mainContent}>
                
                <CustomTitle
                  primaryText="PLANS"
                  textFontSize="80px"
                  content="start"
                />

                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: 400,
                    textAlign: "start",
                    padding: { xs: "10px", md: "30px 10px" },
                  }}
                >
                  Do your monthly verification volumes exceed one thousand, or
                  do you require a bespoke solution? We would enjoy hearing from
                  you. Immediately get in contact with us!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlansHeader;

const style = {
  plansBackground: {
    marginTop: "15px",
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${plansBg.src}) `,
    backgroundSize: "cover",
    width: "100%",
  },
  mainContent: {
    borderRadius: "25px",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
  },
};
