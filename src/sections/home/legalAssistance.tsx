import React from "react";
import legalAssistanceImage from "../../assets/home/legalAssistance.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CustomHeading from "@/components/custom-heading";

const buttonArray = [
  {
    label: (
      <span>
        Debt Collection
        <br />
        Solutions
      </span>
    ),
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "transparent",
  },
  {
    label: (
      <span>
        Immigration <br /> Matters
      </span>
    ),
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: (
      <span>
        Freedom of Information
        <br />
        Requests
      </span>
    ),
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "transparent",
  },
  {
    label: (
      <span>
        Bankruptcy
        <br /> Assistance
      </span>
    ),
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: (
      <span>
        Corporate <br /> Law
      </span>
    ),
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "transparent",
  },
  {
    label: (
      <span>
        Personal Injury <br />
        Law
      </span>
    ),
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: (
      <span>
        Real Estate <br /> Law
      </span>
    ),
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "transparent",
  },
  {
    label: <span>Family <br/>Law</span>,
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
];

const LegalAssistance = () => {
  return (
    <Box sx={style.legalAssistanceBackground}>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "20px", md: "100px 0px" } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <CustomHeading label="What types of legal assistance have you been seeking?" />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  padding: "50px 0",
                }}
              >
                Unlike traditional legal recruiters, Legal Help Squad empowers
                you to post any legal project you need assistance with,
                regardless of its nature.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={10} xl={8}>
              <Box sx={style.ButtonLayout}>
                {buttonArray.map((item, i) => (
                  <Button sx={style.button(item)} key={i}>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalAssistance;
const style = {
  legalAssistanceBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${legalAssistanceImage.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // width: "100vw",
  },
  ButtonLayout: {
    display: {xs:"flex" , sm:"block"},
    alignContent:{ xs:"flex-end", sm:"none"},
    justifyContent: {xs:"center" , sm:"none"},
    flexWrap: "wrap",
    margin: { xs: "0px", lg: "" },
  },
  button: (item: any) => ({
    background: item.bgColor,
    color: item.color,
    border: item.border,
    height: "64px",
    margin: {
      xs: "5px",
      sm: "10px 10px 10px 0",
      md: "27px 27px 27px 0",
    },
    fontSize: "16px",
    fontWeight: "700 !important",
    borderRadius: "10px",
    gap: "10px",
    padding: "12px 40px",
    textTransform: "capitalize",
    "&:hover": {
      background: item.bgColor,
      color: item.color,
      border: item.border,
    },
  }),
};
