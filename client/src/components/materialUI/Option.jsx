import { MenuItem } from "@mui/material";
import React from "react";

const OptionMaterial = ({ name }) => {
  return <MenuItem value={name}>{name}</MenuItem>;
};

export default OptionMaterial;
