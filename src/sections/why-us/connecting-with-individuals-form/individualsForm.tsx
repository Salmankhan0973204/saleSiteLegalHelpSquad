"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CustomHeading from "@/components/custom-heading";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@/assets/auth/sms.png";
import * as yup from "yup";
import Image from "next/image";
import UploadIcon from "@/assets/upload.png";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  promoCode: string;
  rememberMe: boolean;
};

const ValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  promoCode: yup.string().required("promo Code is required"),
  rememberMe: yup.boolean(),
});

const IndividualsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<any>(ValidationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handleFileUpload = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const styles = {
    fileInput: {
      display: "none",
    },
  };

  return (
    <Box sx={{ padding: "1.7rem", background: "#1A2028" }}>
      <Box sx={{ paddingBottom: "1rem", textAlign: "center" }}>
        <CustomHeading
          label="We like connecting with individuals that seek to effect change."
          textFontSize="30px"
          textFontWeight="700"
        />
      </Box>

      <Box
        sx={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "400",
          marginBottom: "2rem",
        }}
      >
        <p>
          If you have the necessary abilities but don&apos;t see an opening that
          suits them here, please still get in contact. Include your resume and
          a brief &apos; explanation of why you want to work for us in the space
          provided.
        </p>
      </Box>

      <Grid container justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>First Name</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              variant="outlined"
              placeholder="Enter First Name here"
              fullWidth
              {...register("firstName")}
              error={Boolean(errors.firstName)}
            />
            <Box sx={styless.validationText}>
              {errors.firstName && errors.firstName.message}
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>Email</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Image src={EmailIcon} alt="email" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              fullWidth
              placeholder="Enter Email here"
              {...register("email")}
              error={Boolean(errors.email)}
            />
            <Box sx={styless.validationText}>
              {errors.email && errors.email.message}
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            <label>Description</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              id="outlined-multiline-static"
              multiline
              rows={4}
              fullWidth
              placeholder="Enter Email here"
              {...register("email")}
              error={Boolean(errors.email)}
            />
            <Box sx={styless.validationText}>
              {errors.email && errors.email.message}
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
            {/* <label>First Name</label>
            <TextField
              sx={styless.textField}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
              variant="outlined"
              placeholder="Enter First Name here"
              fullWidth
              {...register("firstName")}
              error={Boolean(errors.firstName)}
            /> */}
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
            <Box sx={styless.validationText}>
              {errors.firstName && errors.firstName.message}
            </Box>
            <Box>Max 10 mbs Limit Allowed Formats .pdf, .doc, .docx, .text</Box>
          </Grid>

          <Button sx={styless.signbtn} type="submit">
            Submit
          </Button>

          <FormControlLabel
            control={
              <Checkbox sx={styless.checkbox} {...register("rememberMe")} />
            }
            label="By Submitting I will agree to all the terms and conditions and privacy policies"
          />
        </form>
      </Grid>
    </Box>
  );
};

export default IndividualsForm;

const styless = {
  textField: {
    borderRadius: "8px",
    border: "1px solid #fff",
    background: "#1B2129",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    color: "#fff",
    marginTop: "4px",
  },
  validationText: {
    color: "red",
    marginTop: "4px",
  },
  checkbox: {
    color: "white",
    "& .MuiSvgIcon-root": {
      fontSize: 20,
      background: "white",
      borderRadius: "4px",
    },
    "&.Mui-checked": {
      color: "#FEDE4B",
    },
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
    marginBottom: "2rem",
    "&:hover": {
      background: "#FEDE4B",
    },
  },
};
