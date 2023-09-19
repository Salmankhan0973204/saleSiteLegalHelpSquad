import { Box, Container } from "@mui/material";
import React from "react";
import BGImg from "@/assets/production/mangmentBG.png";
import CustomHeading from "@/components/custom-heading";
import CustomTitle from "@/components/cutom-title";

const PracticeManagment = () => {
  return (
    <Box sx={styles.homeBackground}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            marginLeft: { lg: "1rem", md: "8rem", sm: "6rem", xs: "0.3rem" },
            paddingTop: "10rem ",
            paddingBottom: "10rem",
          }}
        >
          <Box>
            <CustomTitle
              primaryText="PRACTICE"
              tertiaryText="MANAGEMENT"
              textFontSize="40px"
              textFontWeight="700"
              content="start"
            />

            <Box sx={{ padding: "10px" }}>
              <CustomHeading
                label="“Focus on Law Not Logistics.”"
                textFontSize="20px"
                textFontWeight="500"
              />
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "White",
              lineHeight: "24px",
              paddingLeft: "10px",
            }}
          >
            Stay n top of your firm’s operations, streamline case management{" "}
            <br /> and communicate seamlessly with client all in one place. Take
            the <br /> hassle out of legal practice nd let Clio help you work
            smarter and <br />
            harder.
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PracticeManagment;

const styles = {
  homeBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${BGImg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto",
  },
};
