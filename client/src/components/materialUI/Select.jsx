import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OptionMaterial from "./Option";
import { MenuItem } from "@mui/material";

export function SelectMaterial({
  filterBy,
  value,
  defaultValue,
  arrayToSelect,
  setter,
  setIndex,
}) {
  const handleChange = (e) => {
    setIndex(0);
    setter(e.target.value);
  };
  console.log(value);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={filterBy}>{filterBy}</InputLabel>
      <Select
        labelId={filterBy}
        id={filterBy}
        label={filterBy}
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">{defaultValue}</MenuItem>
        {arrayToSelect?.map((name, i) => (
          <OptionMaterial key={i} name={name} />
        ))}
      </Select>
    </FormControl>
  );
}
