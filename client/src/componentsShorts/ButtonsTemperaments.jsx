import React from "react";
import style from "../css/navBar.module.css";

const ButtonsTemperaments = ({ temperament, deleteTemperament }) => {
  return (
    <div style={{ height: "150px", width: "150px" }}>
      <h5 style={{ color: "var(--primary-darkcolor)", margin: "10px" }}>
        {temperament}
      </h5>
      <button
        className={style.button}
        onClick={(e) => deleteTemperament(e.target.value)}
        value={temperament}
      >
        Delete
      </button>
    </div>
  );
};
export default ButtonsTemperaments;
