import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../css/navBar.module.css";
import { filterName, resetPage } from "../redux/actions";

export default function NavBar() {
  const state = useSelector(state => state)
  let dispatch = useDispatch()
  return (
    <div className={style.navBarDiv}>
      <div className={style.navBarTitle}>
        <h1 style={{margin: "10px"}}>DogsApi</h1></div>
        <div className={style.navBarSearch}>
        <input type="text" onChange={(e) => {dispatch(filterName(e.target.value)); dispatch(resetPage())}} placeholder="SearchDog.." style={{margin: "10px"}} value={state.strFilter.str}></input>
        <button type="submit" value="Search">Search</button>
        </div>
    </div>
    
  );
}
