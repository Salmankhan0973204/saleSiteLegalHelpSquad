import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import lawyerImage from "../../assets/home/lawyersJoin.png";
import CustomTitle from "@/components/cutom-title";

const buttonArray = [
  { label: "Varied Opportunities" },
  { label: "Access to Clients" },
  { label: "Flexibility" },
  { label: "Efficient Workflow" },
  { label: "Freelance Lawyers" },
  { label: "Reviews & Reputation" },
];

const LawyersJoin = () => {
  return (
    <Stack sx={style.lawyerJoinBackground}>
      <Box sx={{ padding: { xs: "10px", md: "120px" } }}>
        <CustomTitle
          primaryText="WHY"
          secondaryText="DO LAWYERS"
          tertiaryText="JOIN"
          strokeColor="#18323A"
          strokeWidth="4px"
        />
        <Box sx={style.ButtonLayout}>
          {buttonArray.map((item, i) => (
            <Button sx={style.button(item)} key={i}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize:{xs:"20px", sm:"24px" },
                  lineHeight: "36px",
                  padding: "32px  57px !important",
                }}
              >
                {item.label}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default LawyersJoin;

const style = {
  lawyerJoinBackground: {
    backgroundImage: `url(${lawyerImage.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  ButtonLayout: {
    display: " flex",
    alignContent: "flex-end;",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: { xs: "0px", lg: "100px" },
  },
  button: (item: any) => ({
    background: "#18323A",
    color: "#FEDE4B",
    border: item.border,
    height: "100px",
    margin: {
      xs: "10px",
      lg: "27px 27px 27px 0",
    },
    fontSize: "16px",
    fontWeight: "700 !important",
    borderRadius: "10px",
    gap: "10px",
    textTransform: "capitalize",

    "&:hover": {
      background: "#18323A",
      color: "#FEDE4B",
      border: item.border,
    },
  }),
};
