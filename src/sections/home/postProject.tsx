import CustomCard from "@/components/custom-card";
import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const cardArray = [
  {
    title: "HIGH GROWTH TIME",
    desc: `Expand incrementally as your practice grows
without the risk of having to fill a new
associate's plate`,
  },
  {
    title: <span>ONE-TIME/SPECIAL <br/> ROJECTS</span>,
    desc: `Find the perfect candidate with the right
experience in a specific area of law or
jurisdiction`,
  },
  {
    title: "LAW FIRM RECRUITMENT",
    desc: `Working with project lawyers can be a great
way to find future full-time associates for your
law practice`,
  },
  {
    title: "PEAK/SEASONAL NEEDS",
    desc: `Easily grow or shrink your team with elasticity
that has never existed in the profession`,
  },
  {
    title: <span>OUT OF TOWN OR ON <br/>VACATION</span>,
    desc: `Have someone take over as much or as little of your practice as you need`,
  },
  {
    title: "OF COUNSEL",
    desc: `Online, on-demand support when you need
help picking up slack in your office or practice`,
  },
];

const PostProject = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: "20px 0" }}>
        <Box>
          <CustomTitle
            primaryText="REASON TO"
            secondaryText="POST A"
            tertiaryText="PROJECT"
            textFontSize="40px"
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "25.71px",
              textAlign: "center",
              padding: { xs: "20px 0", md: "30px 20px" },
            }}
          >
            Legal Help Squad redefines the traditional legal service approach.
            As a freelancing platform, we understand that legal assistance spans
            a wide spectrum. We empower you to quickly find qualified experts
            who precisely match your practice&#39;s needs. Our online platform
            provides a seamless channel for collaboration and engagement with
            legal professionals, offering unmatched staffing flexibility that
            stands out in the industry.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {cardArray.map((item, i) => (
            <Grid xs={12} md={6} xl={4} item key={i}>
              <Box sx={{ padding: { xs: "10px", md: "20px 0px 10px" } }}>
                <CustomCard
                  title={item.title}
                  description={item.desc}
                  height="180px"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PostProject;
