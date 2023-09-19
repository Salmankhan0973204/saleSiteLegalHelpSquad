import React, { FC } from "react";
import { titleProps } from "./custom-title-types";
import { Box, Typography } from "@mui/material";

const CustomTitle: FC<titleProps> = ({
  primaryText,
  secondaryText,
  tertiaryText,
  quaternaryText,
  strokeWidth,
  strokeColor,
  textFontSize,
  textFontWeight,
  textLetterSpacing,
  content= "center",
  textAlign = "center",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: content,
        flexWrap: "wrap",
        textAlign: textAlign,
      }}
    >
      {primaryText && (
        <Typography
          px={1}
          sx={style.primaryButton({
            textFontSize,
            textFontWeight,
          })}
        >
          {primaryText}
        </Typography>
      )}

      {secondaryText && (
        <Typography
          px={1}
          sx={style.secondaryButton({
            textFontSize,
            textFontWeight,
            strokeWidth,
            strokeColor,
          })}
        >
          {secondaryText}
        </Typography>
      )}

      {tertiaryText && (
        <Typography
          px={1}
          sx={style.tertiaryButton({
            textFontSize,
            textFontWeight,
            textLetterSpacing,
          })}
        >
          {tertiaryText}
        </Typography>
      )}
      {quaternaryText && (
        <Typography
          sx={style.secondaryButton({
            textFontSize,
            textFontWeight,
            strokeWidth,
            strokeColor,
          })}
        >
          {quaternaryText}
        </Typography>
      )}
    </Box>
  );
};

export default CustomTitle;

const style = {
  primaryButton: ({ textFontSize, textFontWeigth }: any) => ({
    fontSize: {
      xs: "28px",
      sm: textFontSize ? textFontSize : "40px",
      md: textFontSize ? textFontSize : "60px",
      lg: textFontSize ? textFontSize : "70px",
    },
    fontWeight: textFontWeigth ? textFontWeigth : "800",
    color: " #FFF",
    display: "inline",
    margin: "0 5px",
  }),
  secondaryButton: ({
    textFontSize,
    textFontWeight,
    strokeWidth,
    strokeColor,
  }: any) => ({
    fontSize: {
      xs: "28px",
      sm: textFontSize ? textFontSize : "40px",
      md: textFontSize ? textFontSize : "60px",
      lg: textFontSize ? textFontSize : "70px",
    },
    fontWeight: textFontWeight ? textFontWeight : "800",
    color: "transparent",
    letterSpace: "-1.6px",
    WebkitTextStrokeWidth: { xs: "1px", lg: strokeWidth ? strokeWidth : "2px" },
    WebkitTextStrokeColor: strokeColor ? strokeColor : "#ffffff",
    display: "inline",
  }),
  tertiaryButton: ({
    textFontSize,
    textFontWeight,
    textLetterSpacing,
  }: any) => ({
    fontSize: {
      xs: "28px",
      sm: textFontSize ? textFontSize : "40px",
      md: textFontSize ? textFontSize : "60px",
      lg: textFontSize ? textFontSize : "70px",
    },

    fontWeight: textFontWeight ? textFontWeight : "800",
    color: "#FEDE4B",
    display: "inline",
    letterSpacing:{xs:"2px", sx:textLetterSpacing ? textLetterSpacing : "none" },
  }),
};
