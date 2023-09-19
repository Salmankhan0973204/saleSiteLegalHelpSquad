import React from "react";
import CustomTitle from "@/components/cutom-title";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CustomButton from "@/components/custom-button";
const cardArr = [
  {
    title: "Basic",
    price: "$10",
    bgColor: "#1f2732",
    color: "#fff",
    checkColor: "#FEDE4B",
    buttonLabel: "Get solo",
    margin: "200px 0 0 0",
    subItem: [
      {
        linkColor: "#fff",
        link: "Internal Chat",
      },
      {
        linkColor: "#fff",
        link: "Real-Time Notifications",
      },
      {
        linkColor: "#fff",
        link: "Native e-Payments with Panther Payments",
      },
      {
        linkColor: "#fff",
        link: "Daily Agenda Email",
      },
      {
        linkColor: "#fff",
        link: "Documents Templates",
      },
      {
        linkColor: "#fff",
        link: "Task & Event Workflows",
      },
      {
        linkColor: "#fff",
        link: "See all features",
      },
    ],
  },
  {
    title: "Premium",
    price: "$18",
    bgColor: "#FEDE4B",
    color: "#18323A",
    checkColor: "#18323A",
    buttonLabel: "Get Essential",
    margin: "100px 0 0 0",
    subItem: [
      {
        linkColor: "#18323A",
        link: "Everything in SOLO",
      },
      {
        linkColor: "#18323A",
        link: "Custom Fields",
      },
      {
        linkColor: "#18323A",
        link: "Custom Security Roles",
      },
      {
        linkColor: "#18323A",
        link: "Invoice Read Alerts",
      },
      {
        linkColor: "#18323A",
        link: "Multiple Bank Accounts",
      },
      {
        linkColor: "#18323A",
        link: "Task & Event Workflowss",
      },
      {
        linkColor: "#18323A",
        link: "See all features",
      },
    ],
  },
  {
    title: "Business",
    price: "$25",
    bgColor: "#1f2732",
    color: "#fff",
    checkColor: "#FEDE4B",
    margin: "200px 0 0 0",
    buttonLabel: "Get Business",
    subItem: [
      {
        linkColor: "#fff",
        link: "Everything in Essential",
      },
      {
        linkColor: "#fff",
        link: `Native 2-Way Texting`,
      },
      {
        linkColor: "#fff",
        link: "Intake Forms",
      },
      {
        linkColor: "#fff",
        link: `Native e-Signature
(Unlimited Sends)`,
      },
      {
        linkColor: "#fff",
        link: "Free Data Migration",
      },
      {
        linkColor: "#fff",
        link: "LEDES Billing",
      },
      {
        linkColor: "#fff",
        link: "See all features",
      },
    ],
  },
];
const PerfectPlan = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: { xs: "20px", md: "100px 0px" , textAlign:"center"} }}>
        <CustomTitle
          primaryText="CHOOSE THE PERFECT PLAN"
          textFontSize="40px"
        />
        <br />
        <Box sx={{ color: "#FEDE4B"  , fontSize:"20px", fontWeight:'600'}}>
          Flexible plans to fit your firm, with no surprises
        </Box>
        <Grid container rowSpacing={0} columnSpacing={5}>
          {cardArr.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
              <Box sx={style.card({ item })}>
                <Typography sx={style.title({ item })}>{item.title}</Typography>
                <Typography sx={style.price({ item })}>
                  {item.price}
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    /month
                  </span>
                </Typography>
                {item.subItem.map((subitem, index) => (
                  <>
                    <Box key={index} sx={{ display: "flex", margin: "40px 0" }}>
                      <CheckIcon sx={style.checkIcon({ item })} />
                      <Typography sx={style.link({ subitem })} key={index}>
                        {subitem.link}
                      </Typography>
                    </Box>
                  </>
                ))}
                <Button sx={style.button({ item })}>{item.buttonLabel}</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PerfectPlan;
const style = {
  card: ({ item }: any) => ({
    background: item.bgColor,
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.20)",
    boxShadow: " 0px 0px 15.81025px 0px rgba(0, 0, 0, 0.15)",
    padding: {xs:"10px", md:"50"},
     margin: {xs:"50px 0 0 0",  lg:item.margin},
    gap: "10",
  }),
  title: ({ item }: any) => ({
    padding: "5px 0",
    fontSize: "24px",
    fontWeight: "600",
    color: item.color,
  }),
  price: ({ item }: any) => ({
    padding: "5px 0",
    fontSize: "50px",
    fontWeight: "600",
    color: item.color,
  }),
  checkIcon: ({ item }: any) => ({
    color: item.checkColor,
  }),
  link: ({ subitem }: any) => ({
    color: subitem.linkColor,
    padding: "0 10px",
  }),
  button: ({ item }: any) => ({
    height: "62",
    padding: "20px",
    color: item.bgColor,
    background: item.color,
    width: "100%",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "24px",
    textTransform: "capitalize",
    "&:hover": {
      color: item.bgColor,
      background: item.color,
    },
  }),
};
