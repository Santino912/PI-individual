import React from 'react'

const Temps = ({temperament}) => {
  return (
    <option value={temperament.name}>{temperament.name}</option>
  )
}

export default Temps