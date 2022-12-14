import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneDetail, resetDetailBreed } from "../redux/actions";
import { Loading } from "../componentsShorts/Loading";
import style from "../css/detailCard.module.css";

const DetailDog = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchOneDetail(id));
    setLoading(false);
    return () => {
      dispatch(resetDetailBreed());
    };
  }, [dispatch, id]);

  const breedDetail = useSelector((state) => state.breedDetail);

  return (
    <div className={style.detailCard}>
      {loading && <Loading />}
      <div style={{ width: "100%", height: "100%" }}>
        <h1 style={{ padding: "5px" }}>Breed name: {breedDetail?.name}</h1>

        <div className={style.contentCard}>
          <div className={style.imgContainer}>
            <img
              className={style.img}
              src={breedDetail?.img}
              alt={breedDetail?.name}
            />
          </div>
          <div className={style.infDog}>
            {breedDetail?.breed_group && (
              <h4>Breed group: {breedDetail?.breed_group}</h4>
            )}
            {breedDetail?.bred_for && (
              <h4>Breed for: {breedDetail?.bred_for}</h4>
            )}
            <h4>Life span: {breedDetail?.life_span}</h4>
            <h4>Weight: {breedDetail?.weight}</h4>
            <h4>Height: {breedDetail?.height}</h4>

            <h4>Temperaments: {breedDetail?.temperament}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDog;
