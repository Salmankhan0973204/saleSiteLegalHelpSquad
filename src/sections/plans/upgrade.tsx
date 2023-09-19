import CustomTitle from "@/components/cutom-title";
import { Box, Button, Container, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";

const cardList = [
  {
    spaceLicenses: "Content Types",
    intro: "25",
    medium: "50",
    large: "Custom",
  },
  {
    spaceLicenses: "Environments",
    intro: "2",
    medium: "3",
    large: "Custom",
  },
  {
    spaceLicenses: "Records",
    intro: "10,000",
    medium: "50,000",
    large: "Custom",
  },
  {
    spaceLicenses: "Additional API calls usage",
    intro: "2,000,000",
    medium: "2,000,000",
    large: "Custom",
  },
  {
    spaceLicenses: "Additional assest bandwith usage",
    intro: "0.75 TB",
    medium: "0.75 TB",
    large: "Custom",
  },
  {
    spaceLicenses: "Space Availability",
    intro: "all plans",
    medium: "basic",
    large: "Premium",
  },
  {
    spaceLicenses: "Additional Information",
    intro: "Included in pricing plans, cannot be purchased separately.",
    medium: "Add additional, bigger spaces to Basic plans and above.",
    large:
      "Multiple options available to power the largest digital initiatives",
  },
];

const Upgrade = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{paddingBottom:"50px"}}>
        <CustomTitle primaryText="Upgrade or Add spaces" textFontSize="40px" />
        <Box sx={{ padding: "20px" }}>
          <Typography
            sx={{ color: "#FEDE4B", fontWeight: 600, fontSize: "20px" }}
          >
            Spaces are where work gets done - create and edit content, manage
            users and locales, and install or build apps. Each plan comes with
            one or two Intro spaces, you can upgrade or buy more as you scale.
          </Typography>
        </Box>
        <Box sx={style.main}>
          {/* header */}
          <Box sx={style.scroll}>
            <Box sx={style.Cardheader}>
              <Typography
                sx={{ color: "#FEDE4B", fontWeight: 500, fontSize: "24px" }}
              >
                Space Licenses
              </Typography>
              <Box>
                <Typography sx={style.cardTitle}>Intro</Typography>
                <Typography sx={style.cardSubTitle}>Free</Typography>
              </Box>
              <Box>
                <Typography sx={style.cardTitle}>Medium</Typography>
                <Typography sx={style.cardSubTitle}>+$350/month</Typography>
              </Box>
              <Box>
                <Typography sx={{ paddingRight: { xs: "50px", md: "100px" } }}>
                  Large & above
                </Typography>
                <Typography sx={style.cardSubTitle}>Contact Us</Typography>
              </Box>
            </Box>
            {cardList.map((item, index) => (
              <Box
                key={index}
                sx={{
                  justifyContent: "space-between",
                  minWidth: "1000px",
                  display: "flex",
                  margin: "15px 0",
                  background: "#1a2028",
                  padding: "10px 20px 10px",
                }}
              >
                <Box sx={{ textAlign: "start", width: "100%" }}>
                  <Typography sx={style.cardSubTitle}>
                    {item.spaceLicenses}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "start", width: "100%" }}>
                  {item.spaceLicenses == "Space Availability" ? (
                    <Box sx={{ textAlign: "center", paddingRight: "80px" }}>
                      <Button sx={style.button}>
                        <FiberManualRecordIcon
                          sx={{
                            color: "#fede4b",
                            fontSize: "12px",
                            margin: "0 10px",
                          }}
                        />
                        All Plans
                      </Button>
                    </Box>
                  ) : (
                    <Typography sx={style.cardInnerText}>
                      {item.intro}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ textAlign: "start", width: "100%" }}>
                  {item.spaceLicenses == "Space Availability" ? (
                    <>
                      <Button sx={style.button}>
                        <FiberManualRecordIcon
                          sx={{
                            color: "#fede4b",
                            fontSize: "12px",
                            margin: "0 10px",
                          }}
                        />
                        Basic
                      </Button>
                      <Button sx={style.button}>
                        <FiberManualRecordIcon
                          sx={{
                            color: "#fede4b",
                            fontSize: "12px",
                            margin: "0 10px",
                          }}
                        />
                        Premium
                      </Button>
                    </>
                  ) : (
                    <Typography sx={style.cardInnerText}>
                      {item.medium}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ textAlign: "center", width: "100%" }}>
                  {item.spaceLicenses == "Space Availability" ? (
                    <Button sx={style.button}>
                      <FiberManualRecordIcon
                        sx={{
                          color: "#fede4b",
                          fontSize: "12px",
                          margin: "0 10px",
                        }}
                      />
                      Premium
                    </Button>
                  ) : (
                    <Typography sx={{ textAlign: "center" }}>
                      {item.large}
                    </Typography>
                  )}{" "}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Upgrade;

const style = {
  Cardheader: {
    display: "flex",
    justifyContent: "space-between",
    background: "#1A2028",
    padding: "20px",
    minWidth: "1000px",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#fff",
  },
  cardSubTitle: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#fff",
  },
  button: {
    background: "#828586 !important",
    width: "128px",
    borderRadius: "8px",
    color: "#fff",
    padding: "10px 0",
    margin: "5px 5px",
  },
  cardInnerText: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#fff",
    textAlign: "center",
    paddingRight: {xs:"0" , md:"80px"},
  },
  main: {
     overflowX: {xs:"auto" ,lg: "auto"},

  },
  scroll: {
    width: { xs: "1200px", md: "auto" },
  },
};
