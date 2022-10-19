import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OptionMaterial from "./Option";
import { MenuItem } from "@mui/material";

export function SelectMaterial(props) {
  console.log(props);
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={props?.filterBy}>{props?.filterBy}</InputLabel>
      <Select
        labelId={props?.filterBy}
        id={props?.filterBy}
        label={props?.filterBy}
        onChange={(e) => console.log(e)}
        value={props?.value}
      >
        <MenuItem value="">{props?.defaultValue}</MenuItem>
        {props?.allBreedsGroups?.map((breed, i) => (
          <OptionMaterial key={i} breed={breed} />
        ))}
      </Select>
    </FormControl>
  );
}
