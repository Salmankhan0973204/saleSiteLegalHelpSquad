import { Button } from "@mui/material";
import React, { FC } from "react";
import { buttonProps } from "./custom-button-types";
const CustomButton: FC<buttonProps> = ({
  btnColor,
  label,
  BtnBg,
  btnHeight,
  btnBorderRadius,
  btnFontSize,
  btnPadding,
  border,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={style.button({
        btnColor,
        BtnBg,
        btnBorderRadius,
        btnHeight,
        btnFontSize,
        border,
        btnPadding,
      })}
    >
      {label}
    </Button>
  );
};
export default CustomButton;

const style = {
  button: ({
    btnColor,
    BtnBg,
    btnBorderRadius,
    btnHeight,
    btnFontSize,
    border,
    btnPadding,
  }: any) => ({
    borderRadius: btnBorderRadius ? btnBorderRadius : "45px",
    background: BtnBg ? BtnBg : "#FEDE4B",
    color: btnColor ? btnColor : "#26292E",
    height: {xs:"auto", sm:btnHeight ? btnHeight : "50px"},
    fontSize: btnFontSize ? btnFontSize : "18px",
    fontWeight: "600",
    textTransform: "capitalize",
    border: border ? border : "",
    padding:{xs:"10px", sm: btnPadding ? btnPadding : "16px 50px"},
    cursor:"pointer",
    "&:hover": {
      background: BtnBg ? BtnBg : "#FEDE4B",
      color: btnColor ? btnColor : "#26292E",
    },
  }),
};
