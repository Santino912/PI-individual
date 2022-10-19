import { MenuItem } from "@mui/material";
import React from "react";

const OptionMaterial = ({ breed }) => {
  return <MenuItem value={breed}>{breed}</MenuItem>;
};

export default OptionMaterial;
