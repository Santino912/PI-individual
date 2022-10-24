import React from "react";
import style from "../css/cardsDogs.module.css";
import { Link } from "react-router-dom";
import { fetchOneDetail } from "../redux/actions";
import { useDispatch } from "react-redux";

const CardsDogs = ({ dog }) => {
  const dispatch = useDispatch();
  return (
    <Link
      onClick={() => dispatch(fetchOneDetail(dog.id))}
      to={`/home/detail/${dog.id}`}
    >
      <div className={style.card}>
        <div className={style.blob}></div>
        <span className={style.imgSpan}>
          <img className={style.img} src={dog.img} />
        </span>
        <h2>{dog?.name}</h2>
        <h4>Life span: {dog.life_span}</h4>
        <h4>Weight: {dog.weight}</h4>
        <h4>Temperaments: {dog.temperament}</h4>
      </div>
    </Link>
  );
};

export default CardsDogs;
