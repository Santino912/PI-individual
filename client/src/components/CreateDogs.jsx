import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonsTemperaments from '../componentsShorts/ButtonsTemperaments'
import Temps from '../componentsShorts/Temps'
import style from "../css/createDog.module.css"
import { allBreeds } from '../redux/actions'

const CreateDogs = () => {
  const [object, setObject] = useState({name:"",weight:"",heigth:"",life_span:"", temperament: [] })
 const allTemperaments = useSelector(state => state.allTemperaments)


const dispatch = useDispatch()
useEffect(() => {
  dispatch(allBreeds())
}, [dispatch])

const handleChange = (e) =>{
  setObject({...object, [e.target.name]:e.target.value })
}

const handleSelect = (e) =>{
  setObject({...object, temperament:[...object.temperament, e] })
}
const deleteTemperament = (e) => {
  setObject({...object, temperament: object.temperament.filter(tem => tem !== e)})
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(object)

}
  return (
    <div className={style.divCreateDog}>
        <form action="http://localhost:3001/dogs" onSubmit={(e) => handleSubmit(e)} className={style.divContainer}>
          <h3>Nombre:</h3>
          <input style={{width: "300px", height: "25px"}} 
          onChange={(e) => handleChange(e)} type="text" name="name" value={object.name} placeholder='Escribe aqui' required/>
          
          <h3>Weight:</h3>
          <input style={{width: "300px", height: "25px"}} 
          onChange={(e) =>handleChange(e)} type="text" name="weight" value={object.weight} placeholder='Escribe aqui' required />
          
          <h3>Heigth:</h3>  
          <input style={{width: "300px", height: "25px"}} 
          onChange={(e) =>handleChange(e)} type="text" name="heigth" value={object.heigth} placeholder='Escribe aqui'required/>
          
          <h3>Life span:</h3>
          <input style={{width: "300px", height: "25px"}} 
          onChange={(e) =>handleChange(e)} type="text" name="life_span" value={object.life_span} placeholder='Escribe aqui'required/>
          <br />
          <div >

          <select style={{width: "100px", height: "20px"}} defaultValue="default" onChange={(e) => handleSelect(e.target.value)} name='temperament'>
        <option style={{color: "gray", width: "10px", height: "40px"}} value="default" disabled >Default</option>
        {allTemperaments.map((t, i) => <Temps key={i} temperament={t} />)}
        </select>
        </div>

        <div style={{display:"flex", flexDirection: "row"}}>
        {object?.temperament?.map((temperament,i ) => <ButtonsTemperaments key={i} deleteTemperament={deleteTemperament} temperament={temperament} /> )}
        </div>
          
          <button type='submit' value="Submit" >Submit</button>
        </form>
    </div>
  )
}

export default CreateDogs