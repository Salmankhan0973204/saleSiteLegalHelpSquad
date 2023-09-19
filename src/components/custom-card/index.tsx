import React, { FC } from "react";
import { cardProps } from "./custom-card-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import Image from "next/image";

const CustomCard: FC<cardProps> = ({
  title,
  description,
  icon,
  cardBg,
  height,
  cardBackDropFilter,
  btn = false,
  btnText = "Button",
  titleFontSize,
}) => {
  return (
    <Card sx={style.card({ cardBackDropFilter, cardBg, height })}>
      <CardActionArea>
        {icon && (
          <Box sx={style.imageBox}>
            <Image src={icon} width={110} height={110} alt="icon" />
          </Box>
        )}
        <CardContent>
          <Typography sx={style.title(titleFontSize)}>{title}</Typography>
          <Typography sx={style.description}>{description}</Typography>
        </CardContent>
        {btn && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Button sx={style.btn}>{btnText}</Button>
            <Box
              sx={{
                width: "35px",
                height: "2.33px",
                background: "#fff",
                borderRadius: "13.33px",
              }}
            ></Box>
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;

const style = {
  card: ({ cardBackDropFilter, cardBg, height }: any) => ({
    background: cardBg ? cardBg : "#1f2732",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.20)",
    boxShadow: " 0px 0px 15.81025px 0px rgba(0, 0, 0, 0.15)",
    height: height ? height : "350px",
    backdropFilter: cardBackDropFilter
      ? "blur(10.658599853515625px)"
      : "blur(7.905127048492432px)",
     " &:hover":{  background: cardBg ? cardBg : "#1f2732",}
        
  }),

  imageBox: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0 10px 0",
  },
  title:(titleFontSize:any) => ({
    fontSize: {xs:"18px",sm:titleFontSize ? titleFontSize : "24px"},
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    
  }),
  description: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.80)",
    fontSize: "12px",
    fontWeight: "400",
    padding: "20px",
    lineHeight: "27px",
  },
  btn: {
    background: "linear-gradient(90deg, #FEDE4B 2.23%, #FFA115 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "16px",
    fontWeight: "600",
  },
};
