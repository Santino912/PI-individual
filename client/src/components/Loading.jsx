import React from "react";
import style from "../css/loading.module.css";
const Loading = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loading;
