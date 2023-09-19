import React from "react";
import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Stack } from "@mui/material";
import CustomCard from "@/components/custom-card";
import joinIcon from "../../assets/home/join.svg";
import reiewIcon from "../../assets/home/review.svg";
import selectIcon from "../../assets/home/select.svg";
import payIcon from "../../assets/home/pay.svg";

const cardList = [
  {
    icon: joinIcon,
    title: "Join",
    desc: `It's free to join! You pay up front for your project which is held in "escrow" until the project completes.`,
  },
  {
    icon: reiewIcon,
    title: "Review",
    desc: `Browse proposals from project lawyers interested in your project`,
  },
  {
    icon: selectIcon,
    title: "Select",
    desc: `Negotiate the pay rate and terms for a project lawyer`,
  },
  {
    icon: payIcon,
    title: "Pay",
    desc: `Pay the Project Lawyer once your project is complete. We can help make that easy too!`,
  },
];

const WorkOpportunities = () => {
  return (
    <Container maxWidth="xl">
      <Stack sx={{ padding: "20px" }}>
        <Box sx={{ padding: { xs: "0", md: "20px" } }}>
          <CustomTitle
            primaryText="CREATING"
            secondaryText="WORK"
            tertiaryText="OPPORTUNITIES"
          />
        </Box>
        <Grid container columnSpacing={10} rowSpacing={2}>
          {cardList.map((item, i) => (
            <Grid xs={12} md={6} xl={3} item key={i}>
              <Box sx={{ padding: { xs: "0px", md: "40px 0px" } }}>
                <CustomCard
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default WorkOpportunities;
