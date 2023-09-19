"use client";
import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Profile from "@/assets/consultant/profilIMG.png";
import Avail from "@/assets/consultant/avail.png";
import HeartIcon from "@/assets/consultant/heart.png";
import Location from "@/assets/consultant/location1.png";
import Image from "next/image";
import AllDetails from "./allDetails";
import ContactConsultant from "@/components/modal/contactConsultant";
import CustomButton from "@/components/custom-button";
import SeePackages from "@/components/modal/seePackages";

const ConsultantProfile = () => {
  const [open, setOpen] = useState(false);
  const [openpackges, setOpenpackges] = useState(false);
  return (
    <>
      {open && <ContactConsultant open={open} setOpen={setOpen} />}
      {openpackges && (
        <SeePackages open={openpackges} setOpen={setOpenpackges} />
      )}
      <Box
        sx={{
          padding: {
            xl: "120px",
            lg: "120px",
            md: "100px",
            sm: "40px",
            xs: "10px",
          },
          background: "#1A2028",
        }}
      >
        <Box>
          <Grid container spacing={5} justifyContent={"center"}>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              lg={4}
              md={6}
              sm={12}
            >
              <Box sx={{ position: "relative" }}>
                <Image src={Profile} alt="profile" />
                <Box sx={{ position: "absolute", top: "22px", left: "249px" }}>
                  <Image src={Avail} alt="avail" />
                </Box>
              </Box>
            </Grid>

            <Grid item lg={8} md={6} sm={12} xs={12}>
              <Grid container spacing={"4px"} justifyContent={"center"}>
                <Grid item lg={5} md={12} sm={5} xs={12} sx={{textAlign: { xs: "center" , sm: "start" } }}>
                  <Box>
                    <Box
                      sx={{
                        fontSize: "31px",
                        fontWeight: 500,
                        color: "#FFF",
                      }}
                    >
                      Rafael Ferreira
                      <span>
                        <Image
                          src={HeartIcon}
                          alt="icop"
                          style={{ marginLeft: "8px" }}
                        />
                      </span>
                    </Box>

                    <Box
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        marginY: "6px",
                        color: "#FFF",
                      }}
                    >
                      Legal Consultant
                    </Box>

                    <Box
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#FFF",
                      }}
                    >
                      <span>
                        <Image
                          src={Location}
                          alt="icop"
                          style={{ marginRight: "4px" }}
                        />
                      </span>
                      Located in London
                    </Box>
                  </Box>

                  <Button
                    sx={{
                      marginTop: "1.5rem",
                      marginBottom: "1.5rem",
                      borderRadius: "40px",
                      background: "rgba(18, 207, 201, 0.10)",
                      padding: "5px 15px",
                      color: "#12CFC9",
                      "&:hover": {
                        background: "rgba(18, 207, 201, 0.10)",
                      },
                    }}
                  >
                    Available
                  </Button>
                </Grid>

                <Grid
                  sx={{ marginY: "1rem", textAlign: { xs: "center" , sm: "start" } }}
                  item
                  lg={3.5}
                  md={12}
                  sm={3.5}
                  xs={12}
                >
                  <Box>
                    <CustomButton
                      label=" Contact Consultant"
                      btnBorderRadius="6.391px"
                      btnFontSize="16px"
                      btnColor="#FEDE4B"
                      btnPadding="19.172px 25px"
                      BtnBg="#1A2028"
                      border="1px solid #FFF"
                      onClick={() => setOpen(true)}
                    />
                  </Box>
                </Grid>

                <Grid
                  sx={{ marginY: "1rem", textAlign: { xs: "center",sm: "start"  } }}
                  item
                  lg={3.5}
                  sm={3.5}
                  md={12}
                  xs={12}
                >
                  <CustomButton
                    label="See Packages"
                    btnBorderRadius="6.391px"
                    btnFontSize="16px"
                    btnColor="#18323A"
                    btnPadding="19.172px 25px"
                    BtnBg="#FEDE4B"
                    onClick={() => setOpenpackges(true)}
                  />
                </Grid>

                <Grid sx={{ overflow: "auto" }} item xs={12}>
                  <Box>
                    <Box
                      sx={{
                        border: "1px solid #E0DED9",
                        borderRadius: "4px",
                        display: "flex",
                        width: "950px",
                      }}
                    >
                      <Box
                        sx={{
                          padding: "10px 71.484px 10px 15px",
                          background: "#FEDE4B",
                          width: "170px",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "#18323A",
                            marginBottom: "2rem",
                          }}
                        >
                          Starting Price
                        </Box>
                        <Box
                          sx={{
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#18323A",
                          }}
                        >
                          £28/hr
                        </Box>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ background: "white" }}
                      />

                      <Box
                        sx={{
                          padding: "10px 71.484px 10px 15px",
                          background: "transparent",
                          width: "170px",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginBottom: "2rem",
                          }}
                        >
                          Starting Price
                        </Box>
                        <Box
                          sx={{
                            fontSize: "17px",
                            fontWeight: 700,
                          }}
                        >
                          £28/hr
                        </Box>
                      </Box>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ background: "white" }}
                      />
                      <Box
                        sx={{
                          padding: "10px 71.484px 10px 15px",
                          background: "transparent",
                          width: "170px",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginBottom: "2rem",
                          }}
                        >
                          Starting Price
                        </Box>
                        <Box
                          sx={{
                            fontSize: "17px",
                            fontWeight: 700,
                          }}
                        >
                          £28/hr
                        </Box>
                      </Box>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ background: "white" }}
                      />
                      <Box
                        sx={{
                          padding: "10px 71.484px 10px 15px",
                          background: "transparent",
                          width: "170px",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginBottom: "2rem",
                          }}
                        >
                          Starting Price
                        </Box>
                        <Box
                          sx={{
                            fontSize: "17px",
                            fontWeight: 700,
                          }}
                        >
                          £28/hr
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Divider
        sx={{ background: "rgba(255, 255, 255, 0.40)", height: "2px" }}
      />
      <AllDetails />
    </>
  );
};

export default ConsultantProfile;
