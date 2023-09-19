import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import BGImg from "@/assets/whyUs/BGimg.png";
import CustomTitle from "@/components/cutom-title";

const WhyUsHeader = () => {
  return (
    <Box sx={styles.homeBackground}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10} lg={8}>
            <Box
              sx={{
                paddingY: { sm: "200px", md: "380px", xs: "150px" },
             
              }}
            >
              <CustomTitle
                primaryText="LEGAL"
                secondaryText="Help"
                tertiaryText="SQUAD"
                content="start"
              />
              <Box
                sx={{
                  margin: {xs:"0 0 0 1rem" , md:"3rem 10rem 3rem 1rem"},
                  lineHeight: "24px",
                }}
              >
                Legal Help Squad is the first company that bring clients and
                lawyers at the same platform. In addition, our automated
                practice management system provides the lawyers all the possible
                tools to target key productivity enhancements that create value
                for your organization, your people and your clients.
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    md: "flex-start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <Button sx={styles.signbtn} type="submit">
                  SHOW PRICING PLANS
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUsHeader;

const styles = {
  homeBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${BGImg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  signbtn: {
    background: "#FEDE4B",
    borderRadius: "30px",
    boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    padding: "16px 51px",
    fontSize: "14px",
    fontWeight: 600,
    marginTop: "2rem",
    color: "#000000",
    "&:hover": {
      background: "#FEDE4B",
    },
  },
};
