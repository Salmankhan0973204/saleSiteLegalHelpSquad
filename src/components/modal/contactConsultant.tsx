"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  Button,
  Divider,
  Fab,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Profile from "@/assets/consultant/profilIMG.png";
import Avail from "@/assets/consultant/avail.png";
import Image from "next/image";
import CustomButton from "../custom-button";
import UploadIcon from "@/assets/upload.png";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "790px",
  padding: "20px",
  borderRadius: "20px",
  border: "3px solid #FFF",
  background: "#1F2732",
  boxShadow: "0px 0px 21.3172px 0px rgba(0, 0, 0, 0.15)",
  // backdropFilter: 'blur(10.658599853515625px)',
};

const ContactConsultant = ({ open, setOpen }: any) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileUpload = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const styles = {
    fileInput: {
      display: "none", // Hide the file input
    },
  };
  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <div>
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
            <Box sx={{ paddingY: "1.5rem" }}>
              <Grid container spacing={6}>
                <Grid item sm={12} md={6}>
                  <Box sx={{ display: "flex", gap: "2rem" }}>
                    <Box sx={{ position: "relative" }}>
                      <Image
                        src={Profile}
                        alt="profile"
                        width={64}
                        height={64}
                      />
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

            <Box>
              <Grid container justifyContent={"center"}>
                <Grid
                  item
                  xs={12}
                  sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                >
                  <label>Your Message</label>
                  <TextField
                    sx={styless.textField}
                    InputProps={{
                      style: {
                        color: "#fff",
                      },
                    }}
                    id="outlined-multiline-static"
                    multiline
                    rows={8}
                    fullWidth
                    placeholder="Enter your message here"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                >
                  <label>Add Attachment</label>
                  <TextField
                    sx={styless.textField}
                    variant="outlined"
                    fullWidth
                    placeholder="attachment"
                    InputProps={{
                      style: {
                        color: "#fff",
                      },
                      endAdornment: (
                        <Box component="label">
                          <Image
                            src={UploadIcon}
                            alt="upload"
                            style={{ cursor: "pointer" }}
                          />
                          <input
                            type="file"
                            accept=".pdf, .doc, .docx, .txt"
                            style={styles.fileInput}
                            onChange={handleFileUpload}
                          />
                        </Box>
                      ),
                    }}
                  />

                  <Button
                    onClick={handleSubmit}
                    sx={styless.signbtn}
                    type="submit"
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContactConsultant;

const styless = {
  textField: {
    borderRadius: "8px",
    border: "1px solid #fff",
    background: "#1B2129",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    color: "#fff",
    marginTop: "4px",
  },
  uploadFile: {
    borderRadius: "8px",
    border: "1px solid #fff",
    background: "#1B2129",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    color: "#fff",
    marginTop: "4px",
    display: "none",
    height: "4rem",
  },
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
