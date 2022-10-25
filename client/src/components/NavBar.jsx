import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../css/navBar.module.css";
import { filterName, resetPage } from "../redux/actions";

export default function NavBar() {
  const state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div className={style.navBarDiv}>
      <div className={style.navBarTitle}>
        <Link style={{ color: "var(--light-color)" }} to="/home">
          <h1 style={{ margin: "10px" }}>dogFinder</h1>
        </Link>
      </div>
      <div className={style.navBarContainer}>
        <div className={style.navBarCreateDog}>
          <Link style={{ color: "var(--light-color)" }} to={"/home/create"}>
            <h3>Create dog</h3>
          </Link>
        </div>

        <div className={style.navBarSearch}>
          <input
            className={style.searchInput}
            type="text"
            onChange={(e) => {
              dispatch(filterName(e.target.value));
              dispatch(resetPage());
            }}
            placeholder="SearchDog.."
            style={{ margin: "10px" }}
            value={state.strFilter.str}
          />
          <button type="submit" value="Search">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
