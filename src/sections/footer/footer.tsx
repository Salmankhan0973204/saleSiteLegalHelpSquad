"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "@/assets/home/Logo.png";
import Facebook from "@/assets/home/facebook.png";
import Twitter from "@/assets/home/twitter.png";
import Linked from "@/assets/home/in.png";
import Youtube from "@/assets/home/youtube.png";
import Image from "next/image";
import JoinUs from "@/components/join-us/joinUs";
import Link from "next/link";

const footerData = [
  {
    links: [
      { label: "Services", url: "#" },
      { label: "Strategy", url: "#" },
      { label: "Career", url: "#" },
      { label: "Investor", url: "#" },
    ],
  },
  {
    links: [
      { label: "About", url: "#" },
      { label: "Product", url: "#" },
      { label: "Service", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
  {
    links: [
      { label: "Dealer Location", url: "#" },
      { label: "News", url: "#" },
      { label: "Forms", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Company", url: "#" },
    ],
  },
];

const footerItems = [
  { label: "Code of Conduct", url: "#" },
  { label: "Terms of Service", url: "#" },
  { label: "Privacy Policy", url: "#" },
  { label: "Contact Us", url: "#" },
];

const socialIcons = [
  {
    name: "facebook",
    icon: Facebook,
    link: "https//www.facebook.com/@studenthelpsquad",
  },
  {
    name: "twitter",
    icon: Twitter,
    link: "https//www.twitter.com/@studenthelpsquad",
  },
  {
    name: "Linked",
    icon: Linked,
    link: "https//www.linkedin.com/@studenthelpsquad",
  },
  {
    name: "Youtube",
    icon: Youtube,
    link: "https//www.youtube.com/@studenthelpsquad",
  },
];

const Footer = () => {
  return (
    <footer>
      <JoinUs
        text="Legal Help Squad creates new pathways for lawyers and their practices"
        onClick={() => {}}
      />

      <Grid sx={{ marginTop: "63px" }} container>
        <Grid item xs={0} sm={1.3} md={1.7}></Grid>
        <Grid
          sx={{
            paddingLeft: {
              md: 0,
              sm: 0,
              xs: "3.5rem",
            },
          }}
          item
          xs={12}
          sm={6}
          md={6}
        >
          <Box>
            <Image src={Logo} alt="logo" />
          </Box>

          <Box sx={styles.footerDisc}>
            A digital solution to meet lawyers requirements <br />
            through one single platform
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={2}></Grid>
        <Grid item xs={0} sm={0} md={2}></Grid>
      </Grid>

      <Box sx={styles.customFooter}>
        <Grid container spacing={2}>
          {footerData.map((column: any, index: any) => (
            <Grid item xs={12} sm={4} key={index}>
              <Typography variant="h6">{column.label}</Typography>
              <Box sx={styles.customLinks}>
                {column.links.map((link: any, linkIndex: any) => (
                  <Typography sx={styles.customLink} key={linkIndex}>
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={styles.socialFooter}>
        <Box>
          <Box sx={styles.footerTitle}>©2023 Legal Help Squad</Box>
          <Box sx={styles.socialIcon}>
            {socialIcons.map((item, i) => {
              return (
                <Link key={i} href={item.link}>
                  <Image src={item.icon} alt={item.name} />
                </Link>
              );
            })}
          </Box>
        </Box>

        <Box sx={styles.footerLink}>
          {footerItems.map((item, i) => {
            return <Box key={i}>{item.label}</Box>;
          })}
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;

const styles = {
  footerDisc: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 400,
    lineWeight: "26px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  customFooter: {
    color: "#fff",
    padding: "1rem 0",
    textAlign: "center",
  },
  customLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    dispaly: "flex",
    flexDirection: "column",
  },
  customLink: {
    cursor: "pointer",
    color: "#fff",
    display: "block",
    marginBottom: "1.6rem",
  },
  socialFooter: {
    background:
      "linear-gradient(180deg, rgba(31, 39, 50, 0.64) -79.69%,rgba(31, 39, 50, 0.24) 100%)",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(25px)",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "baseline !important",
    flexWrap: "wrap",
    padding: "30px",
  },
  footerTitle: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    marginBottom: "1rem",
  },
  socialIcon: {
    display: "flex",
    gap: "18px",
    alignItems: "baseline !important",
    textAlign: "center",
  },
  footerLink: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "15px",
    fontWeight: 300,
    lineHeight: "20px",
    display: "flex",
    gap: "2rem",
    cursor: "pointer",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
};
