import React from "react";
import { Box, Grid } from "@mui/material";
import CustomTitle from "@/components/cutom-title";
import CustomCard from "@/components/custom-card";

const cardData = [
  {
    title: "Legal Matter Management Software",
    disc: "Stay organized, and access the information you need from anywhere at any time",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
  {
    title: "Documents",
    disc: "Edit, store and organize your legal documents securely from anywhere",
  },
];

const AllFeatures = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "3rem" }}>
        <CustomTitle
          primaryText="ALL"
          tertiaryText="FEATURES"
          textFontSize="40px"
          textFontWeight="700"
        />
      </Box>

      <Box>
        <Grid
          sx={{ padding: "3rem" }}
          container
          spacing={4}
          justifyContent="center"
        >
          {cardData.map((item: any, i: any) => {
            return (
              <Grid key={i} item sm={12} md={4}>
                <CustomCard
                  title={item.title}
                  description={item.disc}
                  btn={true}
                  height="235px"
                  btnText="Lean More"
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllFeatures;
