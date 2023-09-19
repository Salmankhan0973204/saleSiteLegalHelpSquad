import React from "react";
import legalAssistanceImage from "../../assets/home/legalAssistance.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CustomTitle from "@/components/cutom-title";

const buttonArray = [
  {
    label: "Flexibility",
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "#1f2732",
  },
  {
    label: "Paid Time Off",
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: "Health & Wellness",
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "#1f2732",
  },
  {
    label: "Financial",
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: "Learning & Career Growth",
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "#1f2732",
  },
  {
    label: "Transparency",
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: "Open Communication",
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "#1f2732",
  },
  {
    label: "Extra Perks",
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
];

const Benefits = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: { xs: "20px", md: "100px 0px" } }}>
        <CustomTitle
          primaryText="OUR"
          secondaryText="BENEFITS &"
          tertiaryText="PERKS"
          textFontSize="40px"
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            padding: "50px 0",
          }}
        >
          Our people make us great. That’s why Fortra offers a top-notch rewards
          package that includes competitive benefits and salaries,
          career-nurturing opportunities, and a host of other perks. We strive
          to provide all employees with everything they need to grow and perform
          their best every day. This includes an emphasis on finding harmony in
          the balance between work and life.
        </Typography>
        <Box sx={{display:"flex" , justifyContent:"center", flexWrap:"wrap"}}>
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
      </Box>
    </Container>
  );
};

export default Benefits;
const style = {
 
  button: (item: any) => ({
    background: item.bgColor,
    color: item.color,
    border: item.border,
    height: "64px",
    margin: {
      xs: "10px",
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
