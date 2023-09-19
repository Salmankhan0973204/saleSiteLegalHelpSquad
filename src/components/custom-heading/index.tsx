import React, { FC } from "react";
import { buttonProps } from "./custom-heading-types";
import { Typography } from "@mui/material";

const CustomHeading: FC<buttonProps> = ({
  label,
  textFontSize,
  textFontWeight,
  textAlign = "start",
}) => {
  return (
    <Typography sx={style.text({ textFontSize, textFontWeight, textAlign })}>
      {label}
    </Typography>
  );
};

export default CustomHeading;
const style = {
  text: ({ textFontSize, textFontWeight, textAlign }: any) => ({
    textAlign: {xs:"center" , sm:textAlign},
    color: "#fff",
    fontSize: {
      xs: "22px",
      md: "28px",
      lg: textFontSize ? textFontSize : "36px",
    },
    fontWeight: { xs: "700", md: textFontWeight ? textFontWeight : "800" },
  }),
};
