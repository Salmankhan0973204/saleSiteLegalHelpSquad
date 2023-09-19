import CustomHeading from "@/components/custom-heading";
import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Typography } from "@mui/material";
import hiringBg from "../../assets/careers/hiringProcess.png";
import step1 from "../../assets/careers/step1.png";
import step2 from "../../assets/careers/step2.png";
import step3 from "../../assets/careers/step3.png";
import step4 from "../../assets/careers/step4.png";
import React from "react";
import Image from "next/image";

const HiringProcess = () => {
  return (
    <Box sx={style.hiringBackground}>
      <Container maxWidth="xl">
        <CustomTitle
          primaryText="OUR"
          secondaryText="HIRING"
          tertiaryText="PROCESS"
          textFontSize="70px"
        />

        <Box sx={{ padding: "30px 0" }}>
          <CustomHeading
            label="How  We Hire Our Team"
            textAlign="center"
            textFontSize="30px"
          />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              textAlign: "center",
              padding: "20px 0 0 0",
            }}
          >
            We try to keep things as simple as possible so we can get to the
            important part, which is learning more about you
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: "14px", textAlign: "center" }}
          >
            To help you prepare for and succeed in each step of the recruiting
            process, we &apos;ve split it down into four distinct phases. Keep
            in mind that the order of events may change depending on the
            position you &apos;re applying for; for some jobs, for instance, the
            work may come before the interview..
          </Typography>
        </Box>
        <Box sx={{overflow:"auto"}}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}  md={6} sx={style.step1}>
              <Image src={step1} objectFit="fit" alt="image" />
            </Grid>
            <Grid item xs={12} sm={12} lg={6} sx={style.step2}>
              <Image src={step2} objectFit="fit" alt="image" />
            </Grid>
          </Grid>

          <br />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} lg={6} sx={style.step3}>
              <Image src={step3} objectFit="fit" alt="image" />
            </Grid>
            <Grid item xs={12} sm={12} lg={6} sx={style.step4}>
              <Image src={step4} objectFit="fit" alt="image" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HiringProcess;
const style = {
  hiringBackground: {
    backgroundImage: `linear-gradient(90deg, #000 -24.43%, #000 2.79%, rgba(0, 0, 0, 0.00) 80.49%) , url(${hiringBg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "30px 0",
  },
  step1: {
    textAlign: "center",
  },
  step2: {
    textAlign: "center",
  },
  step3: { textAlign: "center" },
  step4: { textAlign: "center" },
};
