import React from 'react'
import style from "../css/cardsDogs.module.css"
import { useSelector} from "react-redux"


const CardsDogs = ({dog}) => {

const state = useSelector(state => state.breedArr)

console.log(dog)
  return (
    <div className={style.containCards}>
      <h2>{dog.name}</h2>

    </div>
  )
}

export default CardsDogs