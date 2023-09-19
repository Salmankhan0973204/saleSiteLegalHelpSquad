import React from "react";
import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Stack } from "@mui/material";
import CustomCard from "@/components/custom-card";
import embrace from "../../assets/careers/embrace.svg";
import stronger from "../../assets/careers/stronger.svg";
import helpful from "../../assets/careers/helpful.svg";
import pursue from "../../assets/careers/pursue.svg";

const cardList = [
  {
    icon: embrace,
    title: "We Embrace the Journey",
    desc: `Change is a constant for our customers and our business. We always adapt and grow, both personally and as an organization as we strive to harmonize work and life.`,
  },
  {
    icon: stronger,
    title: "We are Stronger Together",
    desc: `Varied points of view, trust, and teamwork lead to better decisions. We celebrate the power of diversity, equity, and inclusion at every level in our organization.`,
  },
  {
    icon: helpful,
    title: "We are Helpful",
    desc: `It's free to join! You pay up front for your project which is held in "escrow"
until the project completes.`,
  },
  {
    icon: pursue,
    title: "We Pursue Excellence",
    desc: `Commitment, resolve, and accountability. We care about how we do things as much as what we do. We tenaciously contribute each day and act decisively.`,
  },
];

const CoreValaues = () => {
  return (
    <Box sx={{ background: "#1a2028" }}>
      <Container maxWidth="xl">
        <Stack sx={{ padding: "20px" }}>
          <Box sx={{ padding: { xs: "0", md: "20px" } }}>
            <CustomTitle
              primaryText="OUR"
              secondaryText="CORE"
              tertiaryText="VALUES"
            />
          </Box>
          <Grid container spacing={10}>
            {cardList.map((item, i) => (
              <Grid xs={12} md={6} xl={3} item key={i}>
                <Box sx={{ padding: { xs: "0px", md: "40px 0px" } }}>
                  <CustomCard
                    icon={item.icon}
                    title={item.title}
                    description={item.desc}
                    titleFontSize="20px"
                    height="320px"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default CoreValaues;
