
import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import liveDemoBg from "../../assets/plans/liveDemoBg.png"
import CustomTitle from '@/components/cutom-title';
import CustomButton from '@/components/custom-button';

const LiveDemo = () => {
  return (
    <Box sx={style.liveDemoBg}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: { xs: "30vh", sm: "50vh" , md:"40vh" },
              }}
            >
              <Box sx={style.mainContent}>
                <CustomTitle
                  textFontSize="40px"
                  primaryText="Book a "
                  secondaryText="live"
                  tertiaryText="Demo"
                />
                <Typography
                  sx={{
                    color: "#FEDE4B",
                    fontSize: "20px",
                    fontWeight: 600,
                    padding: "20px 0",
                  }}
                >
                  Book a live demo to see how Clio can help your law firm
                  maximize efficiency and increase revenue
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
               height: { xs: "20vh", sm: "50vh", md:"40vh" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CustomButton label="Schedule a Demo" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LiveDemo
const style = {
  liveDemoBg: {
    backgroundImage: `url(${liveDemoBg.src}) `,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  mainContent: {
    paddingTop:{xs:"20px" , md:"0"},
    borderRadius: "25px",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
  },
};