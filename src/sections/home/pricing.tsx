import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import priceBg from "../../assets/home/pricingBg.png";
import CustomTitle from "@/components/cutom-title";
import checkIcon from "../../assets/home/checkIcon.png";
import Image from "next/image";
import CustomButton from "@/components/custom-button";

const checkArray = [
  "No Hidden fee",
  "No Commitments",
  "No Menbership Fees",
  "No Long-Term Contracts",
];

const Pricing = () => {
  return (
    <Box sx={style.pricingBg}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={8} xl={8}>
            <Box sx={{ margin: { xs: "20, 0", md: "50px 0" } }}>
              <Box sx={{ padding: "20px 0" }}>
                <CustomTitle
                  primaryText="SIMPLE"
                  secondaryText="TRANSPARENT"
                  tertiaryText="PRICING"
                  textFontSize="40px"
                  content="start"
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "18.84px",
                  padding: "10px 20px 10px 5px",
                }}
              >
                Legal Help Squad has the most upfront, transparent pricing
                available today. We do not set prices for legal projects: you
                will negotiate the hourly or flatrate directly with the lawyer
                you hire. For our beta users, we simply charge a 3% transaction
                fee to post your project. And unlike other legal recruiters, you
                won’t pay a percentage of of the fees paid to your project
                lawyer.
              </Typography>
              {checkArray.map((item, i) => (
                <Box key={i} gap={2} sx={{ display: "flex", margin: "40px 0" }}>
                  <Image src={checkIcon} width={20} height={20} alt="icon" />
                  <span style={style.checkText}>{item}</span>
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "50px",
                }}
              >
                <CustomButton label="Post Your Project" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} xl={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                padding:{xs:"20px 0"  , md:"0"}
              }}
            >
              <Box sx={style.pricingCard}>
                <Box sx={{ padding: "50px" }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "30px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    Joining Fee
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "37px",
                      fontWeight: "800",
                      lineHeight: "48px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    0$
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "25px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    Transection Fee 3%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "700",
                      lineHeight: "24px",
                      color: "#18323A",
                    }}
                  >
                    3% to post a project and no additional fees
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "24px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    This fee covers:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      color: "#4B4B4B",
                    }}
                  >
                    - Receiving unlimited proposals from Project Lawyers
                    interested in your project for as long as the project
                    remains posted without using legal recruiters - Dedicated
                    customer support (phone, chat, and email) - Project Lawyer
                    identity, license, and good standing verifications performed
                    regularly - Ensures the Project Lawyer receives 100% of what
                    they’re owed - Option to pay by any preferred method
                    including through our system with PayPal and Venmo
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
const style = {
  pricingBg: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${priceBg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "",
  },
  checkText: {
    fontWeight: 700,
    fontSize: "18px",
  },
  pricingCard: {
    marginTop: "50px",
    backgroundColor: "#FEDE4B",
    borderRadius: "25px",
  },
};
