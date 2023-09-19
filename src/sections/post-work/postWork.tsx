"use client";
import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import CustomCard from "@/components/custom-card";
import Card1 from "@/assets/production/card1.png";
import Card2 from "@/assets/production/card2.png";
import Card3 from "@/assets/production/card3.png";
import Setting from "@/assets/post work/setting.png";
import Alert from "@/assets/post work/alert.png";
import AvatarImg from "@/assets/post work/avatarIMG.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logout from "@/assets/post work/logout.png";

import Image from "next/image";

const cardData = [
  {
    icon: Card1,
    title: "Profile Creation",
  },
  {
    icon: Card2,
    title: "Submit Proposal",
  },
  {
    icon: Card3,
    title: "Project Completion",
  },
  {
    icon: Card1,
    title: "Profile Creation",
  },
  {
    icon: Card2,
    title: "Submit Proposal",
  },
  {
    icon: Card3,
    title: "Project Completion",
  },
];

const recentActivity = [
  {
    disc: "Contact & Matter Management",
  },
  {
    disc: "Billable Time & Expense Tracking",
  },
  {
    disc: "World Class Support",
  },
  {
    disc: "Secure Client Portal",
  },
  {
    disc: "Unlimited Data Storage",
  },
];

const notifcationData = [
  {
    id: "1",
    name: "Marry messaged you",
    time: "8:10 AM",
  },
  {
    id: "2",
    name: "Job update",
    time: "8:10 AM",
  },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.mode === "light" ? "rgba(254, 222, 75, 0.45)" : 800,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FEDE4B" : "#308fe8",
  },
}));

const PostWork = () => {
  return (
    <Box sx={{ padding: {lg:'4rem',md:'4rem', sm: "1rem", xs: "1rem" } }}>
      <Grid
        sx={{ paddingY: "6rem" }}
        container
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Grid container spacing={4} justifyContent="center">
            {cardData.map((item: any, i: any) => {
              return (
                <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
                  <CustomCard
                    icon={item.icon}
                    title={item.title}
                    height="220px"
                  />
                </Grid>
              );
            })}
          </Grid>
          <Box>
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#FEDE4B",
                marginY: "1rem",
              }}
            >
              Recent Activity
            </Box>

            <Box>
              {recentActivity.map((item, i) => {
                return (
                  <Grid key={i}
                    sx={{ marginBottom: "1rem" }}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <Box sx={{ padding: "18px", background: "#1A2028" }}>
                      {item.disc}
                    </Box>
                  </Grid>
                );
              })}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Box
            sx={{
              borderRadius: "15.81px",
              border: "1px solid #FFF",
              background: "#1A2028",
              padding: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Image src={Setting} alt="setting" />
              <Image src={Alert} alt="alert" />
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%" }}>
                <img src={AvatarImg.src} alt="avatar" width={"100%"} />
              </Box>
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Michael Clark
              </Box>
            </Box>

            <Box
              sx={{ fontSize: "16px", fontWeight: "400", marginBottom: "1rem" }}
            >
              Notifcations
            </Box>

            {notifcationData.map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    background: "rgba(18, 207, 201, 0.10)",
                    borderRadius: "15px",
                    display: "flex",
                    padding: "8px",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    <Image src={Alert} alt="alert" />
                    <Box sx={{ marginTop: "8px" }}>
                      <Box sx={{ fontSize: "12px", fontWeight: "400" }}>
                        {item.name}
                      </Box>
                      <Box
                        sx={{
                          fontSize: "8px",
                          fontWeight: "400",
                          marginTop: "8px",
                        }}
                      >
                        {item.time}
                      </Box>
                    </Box>
                  </Box>
                  <MoreVertIcon />
                </Box>
              );
            })}

            <Box sx={{ marginTop: "4rem" }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #FFF",
                  background: "#1A2028",
                  boxShadow: "8px 8px 15.81025px 0px rgba(0, 0, 0, 0.25)",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "2rem",
                  }}
                >
                  Last job Progress
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      In Progress
                    </Box>
                    <Box
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      68%
                    </Box>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={50} />
                </Box>
              </Box>
            </Box>

            <Box sx={{ marginY: "2rem" }}>
              <Divider sx={{ background: "white" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "12px",
                paddingLeft: "2rem",
                cursor: "pointer",
              }}
            >
              <Image src={Logout} alt="logout" />
              <Box
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Logout
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostWork;
