import React from "react";
import { Box, Button } from "@mui/material";

const JoinUs = (props: any) => {
  const { text, onClick } = props;
  return (
    <Box sx={styles.joinUs}>
      <Box sx={styles.joinUsText}>{text}</Box>
      <Button sx={styles.JoinUsbtn} onClick={onClick}>
        Join Now
      </Button>
    </Box>
  );
};

export default JoinUs;

const styles = {
  joinUs: {
    background: "#fbe997",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "22px",
    
  },
  joinUsText: {
    color: "#292929",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "36px",
  },
  JoinUsbtn: {
    zIndex: 0,
    borderRadius: "30px",
    background: "#292929",
    color: "white",
    fontSize: "20px",
    fontWeight: 500,
    padding: "9px 54px 9px 54px",
    "&:hover": {
      background: "#292929",
    },
  },
};
