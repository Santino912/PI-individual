import React, { useEffect, useState } from "react";
import style from "../css/home.module.css";
import CardsDogs from "./CardsDogs";
import { useDispatch, useSelector } from "react-redux";
import {
  allBreeds,
  setFilterTemperaments,
  sortArrAction,
} from "../redux/actions";
import { cutArr, filterAll } from "../utils";
import Temps from "../componentsShorts/Temps";
import { Loading } from "../componentsShorts/Loading";
import { SelectMaterial } from "./materialUI/Select";
import { FormControl } from "@mui/material";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [group, setGroup] = useState("");
  const [madeIn, setMadeIn] = useState("");

  let dispatch = useDispatch();
  const stateFilter = useSelector((state) => state.strFilter);
  const filterTemperament = useSelector((state) => state.filterTemperament);
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const stateBreeds = useSelector((state) =>
    state.breedArr.filter((dog) =>
      filterAll(
        stateFilter.reg,
        dog.name,
        filterTemperament,
        dog.temperament,
        group,
        dog.breed_group,
        dog.madeIn,
        madeIn
      )
    )
  );
  const allBreedsGroups = useSelector((state) => state.breedsGroups);

  useEffect(() => {
    setLoading(true);
    dispatch(allBreeds());
    setLoading(false);
  }, [dispatch, group]);

  const handleIndex = (i) => {
    setIndex(i);
  };

  return (
    <div className={style.divHome}>
      {loading && <Loading />}
      <div className={style.optionsFilter}>
        <div className={style.filterBreed}>
          {/*                <h4 style={{ color: "white" }}>Filter by breed:</h4>
          <select
            onChange={(e) => setGroup(e.target.value)}
            style={{ width: "100px", height: "20px" }}
            defaultValue=""
            name="group"
          >
            <option style={{ width: "10px", height: "40px" }} value="">
              None
            </option>
            {allBreedsGroups.map((breed, i) => (
              <Breeds key={i} breed={breed} />
            ))}
          </select> */}
          <FormControl>
            <SelectMaterial
              filterBy={"Filter by breed"}
              arrayToSelect={allBreedsGroups}
              defaultValue="All"
              value={group}
              setter={setGroup}
              setIndex={setIndex}
            />
          </FormControl>
        </div>

        <div className={style.filterTemperaments}>
          <h4 style={{ color: "white" }}>Filter temperament by:</h4>
          <select
            onClick={() => setIndex(0)}
            onChange={(e) => dispatch(setFilterTemperaments(e.target.value))}
            style={{ width: "100px", height: "20px" }}
            defaultValue=""
            name="temperaments"
          >
            <option
              style={{ color: "gray", width: "10px", height: "40px" }}
              value=""
            >
              None
            </option>
            {allTemperaments.map((t, i) => (
              <Temps key={i} temperament={t} />
            ))}
          </select>
        </div>

        <div className={style.filterTemperaments}>
          <h4 style={{ color: "white" }}>Filter by place of creation:</h4>
          <select
            onClick={() => setIndex(0)}
            onChange={(e) => setMadeIn(e.target.value)}
            style={{ width: "100px", height: "20px" }}
            defaultValue=""
            name="temperaments"
          >
            <option value="All">All</option>
            <option value="apiDog">ApiDog</option>
            <option value="local">Local</option>
          </select>
        </div>

        <div className={style.filterTemperaments}>
          <h4 style={{ color: "white" }}>Sort by:</h4>
          <select
            onClick={() => setIndex(0)}
            onChange={(e) => dispatch(sortArrAction(e.target.value))}
            style={{ width: "100px", height: "20px" }}
            defaultValue=""
            name="temperaments"
          >
            <option value="">None</option>

            <optgroup label="Alphabet">
              <option value="A">A to Z</option>
              <option value="Z">Z to A</option>
            </optgroup>

            <optgroup label="Weight">
              <option value="+">Heavier</option>
              <option value="-">Lighter</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className={style.divCards}>
        {cutArr(stateBreeds, index).length > 0 ? (
          cutArr(stateBreeds, index).map((dog, i) => (
            <CardsDogs key={i} dog={dog} />
          ))
        ) : (
          <h1 style={{ color: "white" }}>Can´t found dogs with the features</h1>
        )}
      </div>

      <div style={{ width: "100%", heigth: "300px", padding: "30px" }}>
        {cutArr(stateBreeds, index - 1).length > 0 && (
          <button
            className={style.button}
            onClick={() => handleIndex(index - 1)}
          >
            Previous page
          </button>
        )}
        {cutArr(stateBreeds, index + 1).length > 0 && (
          <button
            className={style.button}
            onClick={() => handleIndex(index + 1)}
          >
            Next page
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
