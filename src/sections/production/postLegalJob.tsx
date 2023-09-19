"use client";
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";
import BG from "@/assets/production/PostlegalJobBG.png";
import CustomTitle from "@/components/cutom-title";
import CustomCard from "@/components/custom-card";
import Card1 from "@/assets/production/card1.png";
import Card2 from "@/assets/production/card2.png";
import Card3 from "@/assets/production/card3.png";
import CustomButton from "@/components/custom-button";

const cardData = [
  {
    icon: Card1,
    title: "Profile Creation",
    disc: (
      <Box>
        Build a compelling profile that showcase your skills, experience
        and legal sectors you specialize in
      </Box>
    ),
  },
  {
    icon: Card2,
    title: "Submit Proposal",
    disc: (
      <Box>
        Submit tailored Proposals that align 
        with your skills and availability
      </Box>
    ),
  },
  {
    icon: Card3,
    title: "Project Completion",
    disc: (
      <Box>
        Deliver exceptional legal solutions  within agreed timelines and
        maintain  open communication with clients
      </Box>
    ),
  },
];

const PostLegalJob = () => {
  return (
    <Box sx={styles.homeBackground}>
      <Box sx={{ paddingTop: "58px" }}>
        <CustomTitle
          primaryText="POST A"
          secondaryText="LEGAL"
          tertiaryText="JOB"
          textLetterSpacing="-1.4px"
          textFontWeight="700"
        />
      </Box>

      <Grid
        sx={{ padding: "3rem" }}
        container
        spacing={4}
        justifyContent="center"
      >
        {cardData.map((item, i) => {
          return (
            <Grid item sm={12} md={4} key={i}>
              <CustomCard
                icon={item.icon}
                title={item.title}
                description={item.disc}
                cardBg="linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)"
                cardBackDropFilter={true}
              />
            </Grid>
          );
        })}

        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <CustomButton onClick={() => {}} label="Post a Project" />
        </Box>
      </Grid>
    </Box>
  );
};

export default PostLegalJob;

const styles = {
  homeBackground: {
    backgroundImage: `url(${BG.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
};
