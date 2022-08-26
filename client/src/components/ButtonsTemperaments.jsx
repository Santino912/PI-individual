import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTemperament } from '../redux/actions'

const ButtonsTemperaments = ({temperament}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <h5 style={{color: "white", margin: "10px"}}>{temperament}</h5>
        <button style={{padding: "5px"}} onClick={(e) => dispatch(deleteTemperament(e.target.value))} value={temperament}>delete</button>
    </div>
  )
}
export default ButtonsTemperaments
