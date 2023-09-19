import {
  Box,
  Button,
  Container,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };
import checkIcon from "../../assets/plans/check.svg";
import Image from "next/image";

const alwaysIncudedArray = [
  "Contact & Matter Management",
  "Billable Time & Expense Tracking",
  "World Class Support",
  "Secure Client Portal",
  "Unlimited Data Storage",
  "I Phone, I Pad & Android App",
];

const advancedFeature = [
  { title: "Internal Chat", basic: true, premium: true, business: true },
  {
    title: "Real-Time Notifications",
    basic: true,
    premium: true,
    business: true,
  },
  { title: "Daily Agenda Email", basic: true, premium: true, business: true },
  { title: "Custom Security Roles", premium: true, business: true },
  { title: "Custom Fields", premium: true, business: true },
  { title: "Invoice Read Alerts", premium: true, business: true },
  { title: "Native e-Signatures", premium: false, business: true },
  { title: "Native 2-Way Business Texting", business: true },
  { title: "Text Message Event & Reminder Alerts", business: true },
];

const PackPlans = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={style.packPlans}>
        <Box sx={style.scroll}>
          {/* table header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              background: "#1a2028",
              padding: "20px 20px 0",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ color: "#FEDE4B", fontSize: "24px", fontWeight: 500 }}
              >
                Compare Lawyer’s Pact Plans
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ padding: "20px , 0" }}>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "18px", color: "#fff" }}
                  >
                    Monthly
                    <Switch
                      {...label}
                      defaultChecked
                      sx={{
                        "& .MuiSwitch-track": {
                          background: "#FEDE4B",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
                          {
                            background: "#FEDE4B",
                          },
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#18323A",
                        },
                      }}
                    />
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 500, color: "#fff" }}
                  >
                    Annually
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#fff",
                      padding: "3px ",
                      marginRight: { xs: "0", lg: "50px" },
                    }}
                  >
                    (Save $120/user/year)
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                  Basic
                </Typography>
                <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
                  $10
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                  per user/month
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                  Premium
                </Typography>
                <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
                  $18
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                  per user/month
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                  Business
                </Typography>
                <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
                  $25
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                  per user/month
                </Typography>
                <Box sx={style.box}> Popular</Box>
              </Box>
            </Box>
          </Box>
          {/* table body */}
          <Box sx={{ margin: "20px 0" }}>
            <Typography
              sx={{ color: "#fede4b", fontSize: "16px", fontWeight: 500 }}
            >
              Always Included
            </Typography>
            {alwaysIncudedArray.map((item, index) => (
              <Box
                key={index}
                sx={{
                  justifyContent: "space-between",
                  height: "55px",
                  display: "flex",
                  margin: "10px 0",
                  background: "#1a2028",
                  padding: "10px 20px 0",
                }}
              >
                <Typography sx={{ width: "100%", marginTop: "10px" }}>
                  {item}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    marginTop: "15px",
                  }}
                >
                  <Image
                    src={checkIcon}
                    width={12.78}
                    height={8.79}
                    alt="alt"
                  />
                  <Image
                    src={checkIcon}
                    width={12.78}
                    height={8.79}
                    alt="alt"
                  />
                  <Button
                    sx={{
                      width: "100px",
                      height: "43px",
                      borderRadius: "8px",
                      background: "#828586",
                      marginTop: "-15px",

                      "&:hover": {
                        background: "#828586",
                      },
                    }}
                  >
                    <Image
                      src={checkIcon}
                      width={12.78}
                      height={8.79}
                      alt="alt"
                    />
                  </Button>
                </Box>
              </Box>
            ))}
            <Typography
              sx={{
                color: "#fede4b",
                fontSize: "16px",
                fontWeight: 500,
                padding: "10px 0",
              }}
            >
              Advanced Features
            </Typography>
            {advancedFeature.map((item, index) => (
              <Box
                key={index}
                sx={{
                  justifyContent: "center",
                  height: "55px",
                  display: "flex",
                  margin: "10px 0",
                  background: "#1a2028",
                  padding: "10px 20px 0",
                }}
              >
                <Typography sx={{ width: "100%", marginTop: "10px" }}>
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    marginTop: "15px",
                  }}
                >
                  {item.basic == true ? (
                    <Image
                      src={checkIcon}
                      width={12.78}
                      height={8.79}
                      alt="alt"
                    />
                  ) : (
                    <Typography sx={{ textAlign: "center" }}> </Typography>
                  )}
                  {item.premium === true ? (
                    <Image
                      src={checkIcon}
                      width={12.78}
                      height={8.79}
                      alt="alt"
                      style={{ textAlign: item.business ? "left" : "right" }}
                    />
                  ) : (
                    <Typography sx={{ textAlign: "center" }}> </Typography>
                  )}
                  {item.business === true ? (
                    <Button
                      sx={{
                        width: "100px",
                        height: "43px",
                        borderRadius: "8px",
                        background: "#828586",
                        marginTop: "-15px",
                        "&:hover": {
                          background: "#828586",
                        },
                      }}
                    >
                      <Image
                        src={checkIcon}
                        width={12.78}
                        height={8.79}
                        alt="alt"
                        style={{ textAlign: item.business ? "left" : "right" }}
                      />
                    </Button>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PackPlans;

const style = {
  packPlans: {
    background: "#1f2732",
    padding: "20px",
    overflowY: "auto",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  scroll: {
    width: { xs: "800px", md: "auto" },
  },
  box: {
    background: "#FEDE4B",
    borderRadius: "20px 20px 0px 0px !important",
    textAlign: "center",
    color: "#18323A",
  },
};
