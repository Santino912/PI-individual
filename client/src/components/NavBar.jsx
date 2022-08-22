import React, { useState } from "react";
import style from "../css/navBar.module.css";

export default function NavBar() {
  const [first, setfirst] = useState({})
  const handleSubmit = (e) =>{
    e.preventDefault()
  } 
  return (
    <div className={style.navBarDiv}>
      <div className={style.navBarTitle}>
        
        <h1 style={{margin: "10px"}}>DogsApi</h1></div>
        <form onSubmit={() => handleSubmit()}>
        <div className={style.navBarSearch}>
        <input type="text" placeholder="SearchDog.." style={{margin: "10px"}}></input>
        <button type="submit"  />
        </div>
        </form>
    </div>
    
  );
}
