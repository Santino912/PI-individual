import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonsTemperaments from "../componentsShorts/ButtonsTemperaments";
import style from "../css/createDog.module.css";
import { allBreeds } from "../redux/actions";
import axios from "axios";
import OptionsVerif from "../componentsShorts/OptionsVerif";

const CreateDogs = () => {
  const [temperaments, setTemperaments] = useState([]);
  const [object, setObject] = useState({
    name: "",
    weightMin: "",
    height: "",
    weightMax: "",
    life_span: "",
    img: "",
    temperament: "",
  });

  const allTemperaments = useSelector((state) => state.allTemperaments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allBreeds());
  }, [dispatch]);

  const handleChange = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setTemperaments([...temperaments, e]);
    setObject({
      ...object,
      temperament: !object.temperament ? `${e}` : `${object.temperament}, ${e}`,
    });
  };
  const deleteTemperament = (e) => {
    setTemperaments(temperaments.filter((t) => t !== e));
    setObject({
      ...object,
      temperament: object.temperament
        .split(", ")
        .filter((act) => act !== e)
        .join(", "),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://dogfinder.onrender.com/dogs", { ...object })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTemperaments([]);
    setObject({
      name: "",
      weightMin: "",
      height: "",
      weightMax: "",
      life_span: "",
      img: "",
      temperament: "",
    });
  };
  return (
    <div className={style.divCreateDog}>
      <div className={style.divContainerAll}>
        <form onSubmit={(e) => handleSubmit(e)} className={style.divContainer}>
          <div className={style.inputContainer}>
            <h3 className={style.nameInput}>Image:</h3>
            <input
              className={style.inputStyle}
              onChange={(e) => handleChange(e)}
              type="text"
              name="img"
              value={object.img}
              placeholder="Url here"
              required
            />
          </div>

          <div className={style.inputContainer}>
            <h3 className={style.nameInput}>Name:</h3>
            <input
              className={style.inputStyle}
              onChange={(e) => handleChange(e)}
              type="text"
              name="name"
              value={object.name}
              placeholder="Name here"
              required
            />
          </div>

          <div className={style.inputContainer}>
            <h3 className={style.nameInput}>Weight:</h3>
            <input
              className={style.inputStyle}
              onChange={(e) => handleChange(e)}
              type="number"
              name="weightMax"
              value={object.weightMax}
              placeholder="Max weight here"
              required
            />
            <h3 className={style.nameInput}>-</h3>
            <input
              className={style.inputStyle}
              onChange={(e) => handleChange(e)}
              type="number"
              name="weightMin"
              value={object.weightMin}
              placeholder="Min weight here"
              required
            />
          </div>

          <div className={style.inputContainer}>
            <h3 className={style.nameInput}>Height:</h3>
            <input
              className={style.inputStyle}
              onChange={(e) => handleChange(e)}
              type="number"
              name="height"
              value={object.height}
              placeholder="Height here"
              required
            />
          </div>

          <div className={style.inputContainer}>
            <h3 className={style.nameInput}>Life span:</h3>
            <input
              className={style.inputStyle}
              onChange={(e) => handleChange(e)}
              type="text"
              name="life_span"
              value={object.life_span}
              placeholder="Life span here"
              required
            />
          </div>

          <div className={style.inputContainer}>
            <h3 className={style.nameInput}>Temperaments:</h3>
            <select
              className={style.selectFilter}
              defaultValue="default"
              onChange={(e) => handleSelect(e.target.value)}
              name="temperament"
            >
              <option
                style={{
                  color: "white",
                  width: "10px",
                  height: "40px",
                  backgroundColor: "var(--dark-color)",
                }}
                value="default"
                disabled
              >
                Default
              </option>
              {allTemperaments?.map((t, i) => (
                <OptionsVerif
                  key={i}
                  temperament={t}
                  selectTemperaments={temperaments}
                />
              ))}
            </select>
          </div>

          <div className={style.temperamentsDiv}>
            {temperaments.map((temperament, i) => (
              <ButtonsTemperaments
                key={i}
                deleteTemperament={deleteTemperament}
                temperament={temperament}
              />
            ))}
          </div>

          <button className={style.button} type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDogs;
