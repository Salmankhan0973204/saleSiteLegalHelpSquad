"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@/assets/auth/sms.png";
import Lock from "@/assets/auth/lock.png";
import VisibileIcon from "@/assets/auth/eye.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup.string().required("Password is required"),
  rememberMe: yup.boolean(),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
  return (
    <Box>
      <Box sx={styles.title}>SIGN IN</Box>

      <Box sx={{ padding: "4rem" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={4} container>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <label>Email</label>
                <TextField
                  sx={styles.textField}
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
                <Box sx={styles.validationText}>
                  {errors.email && errors.email.message}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <label>Password</label>
                <TextField
                  sx={styles.textField}
                  InputProps={{
                    style: {
                      color: "#fff",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image src={Lock} alt="lock" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <Image src={VisibileIcon} alt="visable" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password here"
                  {...register("password")}
                  error={Boolean(errors.password)}
                />
                <Box sx={styles.validationText}>
                  {errors.password && errors.password.message}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <FormControlLabel
                control={
                  <Checkbox sx={styles.checkbox} {...register("rememberMe")} />
                }
                label="Remember Me"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button sx={styles.signbtn} type="submit">
                Sign In
              </Button>
              <Box
                sx={{
                  textAlign: "center",
                  paddingTop: "1.3rem",
                  paddingBottom: "1.3rem",
                }}
              >
                Or
              </Box>
              <Button sx={styles.signWithGooglebtn}>Sign in with Google</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;

const styles = {
  title: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "100px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "5rem",
  },
  textField: {
    borderRadius: "8px",
    border: "1px solid #18323A",
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
    "&:hover": {
      background: "#FEDE4B",
    },
  },
  signWithGooglebtn: {
    background: "tranparent",
    border: "1px solid white",
    borderRadius: "30px",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    width: "100%",
    padding: "0.7rem",
    fontSize: "14px",
    fontWeight: 600,
    color: "white",
  },
};
