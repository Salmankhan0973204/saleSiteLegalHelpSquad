import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import planDetailBg from "../../assets/plans/plandetailsBg.png";
import CustomTitle from "@/components/cutom-title";
import CustomButton from "@/components/custom-button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const cardItem = [
  "Document Templates",
  "Task & Event Workflows",
  "Batch Time Entries, Expenses & Billing",
  "Multiple Bank Accounts",
  "Check Printing",
  "Governance and Compliance",
  "Live Trainings",
  "Terms and Services",
  "Calendar Rules",
];

const cardList = [
  {
    title: "Free",
    desc: "For developers building individual projects",
    btnText: "Build for free",
  },
  {
    title: "Basic",
    desc: "For teams building sites and apps.",
    btnText: "Try for free",
  },
  {
    title: "Premium",
    desc: "For organizations building scaled experiences.",
    btnText: "Build for free",
  },
];

const PlanDetails = () => {
  return (
    <>
      <Box sx={style.planDetailsBg}>
        <Container maxWidth="xl">
          <Box sx={{ padding: "20px 0" }}>
            <CustomTitle
              textFontSize="40px"
              primaryText="PLAN"
              secondaryText="DETAILS"
            />
          </Box>
          <Box sx={{ padding: "20px 0" }}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "32px",
                color: "#FEDE4B",
                textAlign: "center",
              }}
            >
              Find your perfect fit. Dig into the details to see how our
              generous plans stack up
            </Typography>
          </Box>
          <Box sx={{ padding: "20px 0" }}>
            <CustomTitle
              textFontSize="32px"
              textFontWeight="500"
              tertiaryText="Plan Comparison"
            />
          </Box>
          <Grid container columnSpacing={10} rowSpacing={2}>
            {cardList.map((item, i) => (
              <Grid xs={12} md={6} xl={4} item key={i}>
                <Box sx={style.card}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#fff",
                      padding: "16px 0",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#fff",
                      padding: "16px 0",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Box sx={{ width: "300px", margin: "20px auto" }}>
                    <CustomButton label={item.btnText} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ margin: { xs: "50px 0", md: "100px 0" } }}>
          {cardItem.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#1A2028",
                margin: "15px 0",
                padding: "10px 20px 10px",
                display: "flex",
              }}
            >
              <AddCircleRoundedIcon
                sx={{ fontSize: "44px", color: "#fede4b" }}
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, padding: "10px 10px" }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default PlanDetails;
const style = {
  planDetailsBg: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${planDetailBg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "30px 0",
  },
  card: {
    borderRadius: "20px",
    border: "3px solid #fff",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
    boxShadow: " 0px 0px 21.3172px 0px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10.658599853515625px)",
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    textAlign: "center",
    marginBottom :{xs:"", md: "50px"},
  },
};
