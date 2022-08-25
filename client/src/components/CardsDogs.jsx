import React from 'react'
import style from "../css/cardsDogs.module.css"
import {Link} from "react-router-dom"


const CardsDogs = ({dog}) => {

  return (
    <div className={style.containCards}>
      <Link to={`/dogs/${dog.id}`}>
      <h2 style={{padding: "20px", color: "black"}}>{dog.name}</h2>
      <img className={style.imgCard} src={dog.img} alt={dog.id} />
      </Link>
      <div className=''>
      <h4>Life span: {dog.life_span}</h4>
      {dog.temperament && <h4>Temperaments: {dog.temperament}</h4>}
      <h4>Weight: {dog.weight}</h4>
      <h4>Height: {dog.height}</h4>
      {dog.breed_group && <h4>Breed group: {dog.breed_group}</h4>} 
      {dog.breed_for && <h4>Breed for: {dog.breed_for}</h4>}
    </div>
    </div>
  )
}

export default CardsDogs