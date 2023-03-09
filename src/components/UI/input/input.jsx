import React from "react";
import calsses from "./input.module.css";

export const Input = (props) => {
  return <input className={calsses.input} type="text" {...props} />;
};
