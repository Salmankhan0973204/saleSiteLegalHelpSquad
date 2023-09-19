import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import CustomTitle from "@/components/cutom-title";
import BGImg from "@/assets/production/mangmentBG.png";
import CustomButton from "@/components/custom-button";

const FindConsultantHead = () => {
  return (
    <>
      <Box sx={styles.homeBackground}>
        <Box
            sx={{
              display: "grid",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              marginLeft: { lg: "15rem", md: "8rem", sm: "6rem", xs: "0.3rem" },
              paddingTop: "10rem ",
              paddingBottom: "10rem",
          }}
        >
          <Box>
            <CustomTitle
              primaryText="Find a"
              tertiaryText="Consultant"
              textFontSize="80px"
              textFontWeight="700"
              content="start"
            />
          </Box>
        </Box>
      </Box>

      <Box
       sx={{
        position: { md: "absolute" },
        width: {
          sm: "90%",
        },
        bottom: { xl: "370px", lg: "370px", md: "370px" },
        zIndex: "999",
        padding: {
          sm: "1rem",
          xs: "1rem"
        },
      }}
      >
       <Grid container spacing={"12px"} justifyContent={"center"}>
          <Grid item md={2} sm={3} xs={12}>
            <TextField
              name="consultant"
              fullWidth
              placeholder="Consultant"
              sx={{
                "& .MuiInputBase-input": {
                  borderRadius: "8px",
                  background: "#FFF",
                  height: "55px",
                },
              }}
            />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <TextField
              name="consultant"
              fullWidth
              placeholder="Location"
              sx={{
                "& .MuiInputBase-input": {
                  borderRadius: "8px",
                  background: "#FFF",
                  height: "55px",
                },
              }}
            />
          </Grid>
          <Grid item md={2} sm={3} xs={12}>
            <Button sx={styles.signbtn} type="submit">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FindConsultantHead;

const styles = {
  homeBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${BGImg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto",
  },
  signbtn: {
    background: "#FEDE4B",
    borderRadius: "8px",
    boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    width: "100%",
    fontSize: "24px",
    fontWeight: 400,
    color: "#000000",
    height: "86px",
    "&:hover": {
      background: "#FEDE4B",
    },
  },
};
