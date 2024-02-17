import React, { InputHTMLAttributes } from "react";
import "./Input.css";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  return (
    <input className={`custom-input-${isDark ? "dark" : "light"}`} {...props} />
  );
};

export default CustomInput;
