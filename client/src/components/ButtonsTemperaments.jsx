import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTemperament } from '../redux/actions'

export const ButtonsTemperaments = ({temperament}) => {
  const dispatch = useDispatch()
  console.log(temperament)
  return (
    <div>
        <h5 style={{color: "white", margin: "10px"}}>{temperament}</h5>
        <button style={{padding: "5px"}} onClick={(e) => dispatch(deleteTemperament(e.target.value))} value={temperament}>delete</button>
    </div>
  )
}
