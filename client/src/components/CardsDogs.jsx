import React from 'react'
import style from "../css/cardsDogs.module.css"
import { useSelector} from "react-redux"


const CardsDogs = ({dog}) => {

const state = useSelector(state => state.breedArr)
  return (
    <div className={style.containCards}>
      <h2 style={{padding: "20px"}}>{dog.name}</h2>
      <img className={style.imgCard} src={dog.img} alt={dog.id} />
      <div className=''>
      <h4>life_span: {dog.life_span}</h4>
      <h4>temperament: {dog.temperament}</h4>
      <h4>weight: {dog.weight}</h4>
      <h4>height: {dog.height}</h4>
      {dog.breed_group && <h4>breed_group: {dog.breed_group}</h4>} 
      {dog.breed_for && <h4>breed_for: {dog.breed_for}</h4>}
    </div>
    </div>
  )
}

export default CardsDogs