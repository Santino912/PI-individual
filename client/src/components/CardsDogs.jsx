import React from "react";
import style from "../css/cardsDogs.module.css";
import { Link } from "react-router-dom";
import { fetchOneDetail } from "../redux/actions";
import { useDispatch } from "react-redux";

const CardsDogs = ({ dog }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.card}>
      <div className={style.cardImg} />
      <div className={style.dogData}>
        <img className={style.img} src={dog.img} />
      </div>
      <div className={style.cardInfo}>
        <p className={style.textTitle}>Name: {dog?.name}</p>
        <p className={style.textBody}>Weight: {dog?.weight}</p>
        <p className={style.textBody}>Temperaments: {dog?.temperament}</p>
        <button className={style.cardButton}>Read More</button>
      </div>
    </div>
  );
};

export default CardsDogs;
/*  <div className={style.containCards}>
      <Link
        onClick={() => dispatch(fetchOneDetail(dog.id))}
        to={`/dogs/${dog.id}`}
      >
        <h2 style={{ padding: "20px", color: "black" }}>{dog.name}</h2>
        <img className={style.imgCard} src={dog.img} alt={dog.id} />
      </Link>

      <div className="">
        <h4>Life span: {dog.life_span}</h4>
        <h4>Weight: {dog.weight}</h4>
        {dog.breed_group && <h4>Breed group: {dog.breed_group}</h4>}
        {dog.breed_for && <h4>Breed for: {dog.breed_for}</h4>}
        {dog.temperament && <h4>Temperaments: {dog.temperament}</h4>}
      </div>
    </div> */
