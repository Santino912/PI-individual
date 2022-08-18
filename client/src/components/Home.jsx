import React from 'react'
import style from "../css/home.module.css"
import CardsDogs from './CardsDogs'

const Home = () => {
  return (
    <div className={style.divHome}>
        <CardsDogs />
    </div>
  )
}

export default Home