"use client";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoImage from "@/assets/home/Logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "PRODUCTS",
    link: "/production",
  },
  {
    name: "CAREERS",
    link: "/careers",
  },
  {
    name: "WHY US",
    link: "/why-us",
  },
  {
    name: "POST WORK",
    link: "/post-work",
  },
  {
    name: "PLANS",
    link: "/plans",
  },
  {
    name: "FIND CONSULTANT",
    link: "/find-consultant",
  },
];

const Navbar = () => {
  const route = useRouter();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isTab = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeLink, setActiveLink] = useState("HOME");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.navbarMain}>
      <Box sx={isTab ? styles.isTabNav : styles.navbar} position="static">
        <Box>
          <Image src={logoImage} alt="logo" />
        </Box>
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleToggle}>
            <MenuIcon sx={{fontSize:"40px"}}/>
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: "4rem" }}>
            {navItems?.map((item, i) => {
              let active = false;

              if (item.link === pathname) {
                active = true;
              }
              return (
                <Box
                  onClick={() => {
                    route.push(item.link);
                    handleLinkClick(item.name);
                  }}
                  sx={{
                    cursor: "pointer",
                    ...(active ? styles.activeLink : {}),
                  }}
                  key={i}
                >
                  {item.name}
                </Box>
              );
            })}
          </Box>
        )}
      </Box>

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            background:
              "linear-gradient(107deg, #FEDE4B 43.73%, #FFA115 100.71%)",
            width: "280px",
          },
        }}
        anchor="right"
        open={open}
        onClose={handleToggle}
      >
        <Button onClick={handleToggle} sx={{ alignSelf: "flex-end" }}>
          <CloseIcon sx={{ color: "#211d0a" }} />
        </Button>
        <List>
          {navItems.map((item: any) => {
            let active = false;

            if (item.link === pathname) {
              active = true;
            }

            return (
              <ListItem key={item} onClick={() => route.push(item.link)}>
                <Box
                  sx={{
                    ...(active ? styles.activeLink1 : styles.drawerNavItem),
                  }}
                >
                  {item.name}
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

const styles = {
  navbarMain: {
    position: "absolute",
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "12px ",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
    backdropFilter: " blur(25px)",
    paddingLeft: "4rem",
    paddingRight: "6rem",
    background:
      "linear-gradient(180deg,rgba(31, 39, 50, 0.64) -79.69%,rgba(31, 39, 50, 0.24) 100%)",
  },

  isTabNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "12px ",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
    backdropFilter: " blur(25px)",
    background:
      "linear-gradient(180deg,rgba(31, 39, 50, 0.64) -79.69%,rgba(31, 39, 50, 0.24) 100%)",
  },
  drawerNavItem: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    cursor: "pointer",
  },
  activeLink: {
    fontWeight: 500,
    color: "#FEDE4B",
  },
  activeLink1: {
    color: "#fff",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    cursor: "pointer",
  },
};
