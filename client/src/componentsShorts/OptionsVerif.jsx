import React from "react";

const OptionsVerif = ({ temperament, selectTemperaments }) => {
  let name = selectTemperaments.includes(temperament?.name);
  let stylesOption = name
    ? {
        backgroundColor: "var(--principal-darkcolor)",
        color: "var(--light-color)",
      }
    : {
        backgroundColor: "var(--light-color)",
        color: "var(--principal-darkcolor)",
      };
  return (
    <option style={stylesOption} value={temperament.name} disabled={name}>
      {temperament.name}
    </option>
  );
};

export default OptionsVerif;
