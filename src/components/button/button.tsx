import React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

const GlobalButton = (props: any) => {
  const { onClick, children } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1490));

  return (
    <Button
      sx={{
        borderRadius: "13.182px",
        border: "1.318px solid #FFF",
        background: "#FFF",
        padding: "15px 52px 15px 52px",
        height: "58px",
        color: "#18323A",
        fontSize: isMobile ? "12px" : "21px",
        fontWeight:  700 ,
        "&:hover": {
          background: "#FFF",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default GlobalButton;

const styles = {
  btn: {
    borderRadius: "13.182px",
    border: "1.318px solid #FFF",
    background: "#FFF",
    padding: "15px 52px 15px 52px",
    height: "58px",
    color: "#18323A",
    fontSize: "21px",
    fontWeight: 700,
    "&:hover": {
      background: "#FFF",
    },
  },
};
