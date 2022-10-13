import React from 'react'

const ButtonsTemperaments = ({temperament, deleteTemperament}) => {
  return (
    <div>
        <h5 style={{color: "white", margin: "10px"}}>{temperament}</h5>
        <button style={{padding: "5px"}} onClick={(e) => deleteTemperament(e.target.value)} value={temperament}>delete</button>
    </div>
  )
}
export default ButtonsTemperaments
