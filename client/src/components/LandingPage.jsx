import React from "react";
import style from "../css/landingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%" }}>
      <div className={style.titleButton}>
        <div className={style.containerLandingPage}>
          <h1 className={style.title}>DogFinder</h1>
        </div>
        <div className={style.containerLandingPage}>
          <Link to="/home">
            <h1 className={style.button}>Home</h1>
          </Link>
        </div>
      </div>
      <div className={style.divBase} />
      <div className={style.border} />
      <button />
    </div>
  );
};

export default LandingPage;
