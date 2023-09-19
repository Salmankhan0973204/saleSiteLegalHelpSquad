import React from "react";
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CustomButton from "../custom-button";
import Profile from "@/assets/consultant/profilIMG.png";
import Avail from "@/assets/consultant/avail.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "790px",
  borderRadius: "20px",
  border: "3px solid #FFF",
  background: "#1F2732",
  boxShadow: "0px 0px 21.3172px 0px rgba(0, 0, 0, 0.15)",
  // backdropFilter: 'blur(10.658599853515625px)',
};

const packageData = [
  {
    title: "Create Court Documents",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
  {
    title: "Remote Meetings",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
  {
    title: "Personal Meetings",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
  {
    title: "Update After each hearing",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
  {
    title: "Additional asset bandwith usage",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
  {
    title: "Space Availability",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
  {
    title: "Additional Information",
    basic: "25",
    standard: "50",
    LargeAbove: "Custom",
  },
];

const SeePackages = ({ open, setOpen }: any) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ padding: "2rem" }}>
            <Grid container spacing={6}>
              <Grid item sm={12} md={6}>
                <Box sx={{ display: "flex", gap: "2rem" }}>
                  <Box sx={{ position: "relative" }}>
                    <Image src={Profile} alt="profile" width={64} height={64} />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0px",
                        left: "46px",
                      }}
                    >
                      <Image src={Avail} alt="avail" width={18} height={18} />
                    </Box>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                      Rafael Ferreira
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                      Legal Consultant
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item sm={12} md={6}>
                <Box sx={{ display: "flex", gap: "2rem" }}>
                  <CustomButton
                    label="Available"
                    BtnBg="rgba(18, 207, 201, 0.10)"
                    btnColor="#12CFC9"
                    btnPadding="5px 20px 5px 20px"
                    btnFontSize="11px"
                    border="1px solid #FFF"
                  />

                  <CustomButton
                    label="Avg Response Time: 40 mins"
                    BtnBg="rgba(18, 207, 201, 0.10)"
                    btnColor="#12CFC9"
                    btnPadding="5px 20px 5px 20px"
                    btnFontSize="11px"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ background: "rgba(255, 255, 255, 0.30)" }} />

          <Box sx={{ padding: "40px" }}>
            <Box sx={{ overflow: "auto" }}>
              <Box sx={{ width: "700px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px",
                    background: "#1A2028",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#FEDE4B",
                      }}
                    >
                      What Rafael is
                    </Box>
                    <Box
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#FEDE4B",
                      }}
                    >
                      Offering
                    </Box>
                  </Box>

                  <Box>
                    <Box sx={{ fontSize: "13px", fontWeight: "500" }}>
                      Basic
                    </Box>
                    <Box sx={{ fontSize: "8px", fontWeight: "500" }}>
                      $28/hr
                    </Box>
                  </Box>

                  <Box>
                    <Box sx={{ fontSize: "13px", fontWeight: "500" }}>
                      Standard{" "}
                    </Box>
                    <Box sx={{ fontSize: "8px", fontWeight: "500" }}>
                      +$350/month
                    </Box>
                  </Box>

                  <Box>
                    <Box sx={{ fontSize: "13px", fontWeight: "500" }}>
                      Large & above
                    </Box>
                    <Box sx={{ fontSize: "8px", fontWeight: "500" }}>
                      Contact Us
                    </Box>
                  </Box>
                </Box>

                {packageData.map((item, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px",
                        background: "#1A2028",
                        marginTop: "1rem",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            fontSize: "8px",
                            fontWeight: "400",
                            width: "190px",
                          }}
                        >
                          {item.title}
                        </Box>
                      </Box>

                      <Box>
                        <Box
                          sx={{
                            fontSize: "8px",
                            fontWeight: "400",
                            width: "128px",
                          }}
                        >
                          {item.basic}
                        </Box>
                      </Box>

                      <Box>
                        <Box
                          sx={{
                            fontSize: "8px",
                            fontWeight: "400",
                            width: "128px",
                          }}
                        >
                          {item.standard}
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            fontSize: "8px",
                            fontWeight: "400",
                            width: "90px",
                          }}
                        >
                          {item.LargeAbove}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>

          <Box sx={{ paddingX: "2rem" }}>
            <Button onClick={handleSubmit} sx={styless.signbtn}>
              Send
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default SeePackages;

const styless = {
  signbtn: {
    background: "#FEDE4B",
    borderRadius: "30px",
    boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    width: "100%",
    padding: "0.7rem",
    fontSize: "14px",
    fontWeight: 600,
    color: "#000000",
    marginTop: "2rem",
    marginBottom: "1rem",
    "&:hover": {
      background: "#FEDE4B",
    },
  },
};
