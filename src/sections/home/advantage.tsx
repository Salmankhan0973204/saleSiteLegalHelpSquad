import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import advantageBg from "../../assets/home/advantageBg.png";
import CustomTitle from "@/components/cutom-title";
import CustomCard from "@/components/custom-card";

const cardArray = [
  {
    title: "Achieve Your Goals",
    desc: `Start getting help on a project basis, and free up time so you can focus on reaching your career or practice goals without legal
recruiters`,
  },
  {
    title: "Control and Flexibility",
    desc: `Posting legal projects gives your practice the control and flexibility of temporary law firm hiring, without the additional hassle, risk, and expense of legal recruiters`,
  },
  {
    title: "Local or Remote Help",
    desc: `Available in all over UK, you can find help locally or in any jurisdiction across the UK. Work with Lawyers in your office or online`,
  },
];

const Advantage = () => {
  return (
    <Box sx={style.advantageBackground}>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "30px 0", md: "200px 0" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: { xs: "30px", md: "0px" },
            }}
          >
            <CustomTitle
              primaryText="THE LEGAL"
              secondaryText="HEIP SQUARD"
              tertiaryText="ADVANTAGE"
              textFontSize="40px"
            />
          </Box>
          <Box sx={{ margin: { xs: "10px 0", md: "100px 0" } }}>
            <Grid container spacing={2}>
              {cardArray.map((item, i) => (
                <Grid xs={12} md={6} xl={4} item key={i}>
                  <Box sx={{ padding: { xs: "10px", md: "10px 0px 5px" } }}>
                    <CustomCard
                      title={item.title}
                      description={item.desc}
                      cardBg="transparent"
                      height="180px"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Advantage;
const style = {
  advantageBackground: {
    backgroundImage: `url(${advantageBg.src})`,
    backgroundSize: "cover",
  },
};
