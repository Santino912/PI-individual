import React from "react";
import style from "../css/navBar.module.css";

export default function NavBar() {
  return (
    <div className={style.navBarDiv}>
      <div className={style.selectsDivs}>
        <h1 style={{padding: "1px", marginTop:"10px"}}>DogsApi</h1></div>
    </div>
  );
}
