import React, { useEffect, useState } from 'react'
import style from "../css/home.module.css"
import CardsDogs from './CardsDogs'
import { useDispatch, useSelector } from 'react-redux'
import { allBreeds, addFilterTemperaments } from "../redux/actions"
import { cutArr, filterAll } from '../utils'
import Temps from '../componentsShorts/Temps'
import { Loading } from '../componentsShorts/Loading'
import ButtonsTemperaments  from '../componentsShorts/ButtonsTemperaments'
import Breeds from '../componentsShorts/Breeds'



const Home = () => {
  const [loading, setLoading] = useState(false)
  const [index, setIndex] = useState(0)
  const [group, setGroup] = useState("")

  let dispatch = useDispatch()
  const stateFilter = useSelector(state => state.strFilter)
  const filterTemperaments = useSelector(state => state.filterTemperaments)
  const allTemperaments = useSelector(state => state.allTemperaments)
  const stateBreeds = useSelector(state => state.breedArr.filter((dog) => filterAll(stateFilter.reg, dog.name, filterTemperaments, dog.temperament, group, dog.breed_group)))
  const allBreedsGroups =  useSelector(state => state.breedsGroups)

  useEffect(() => {
    setLoading(true)
    dispatch(allBreeds())
    setLoading(false)
  },[dispatch])

  const handleIndex = (i) =>{
    setIndex(i)
  }

  return (
    <div className={style.divHome}>
      {loading && <Loading />}
      <div className={style.optionsFilter}>
        <div className={style.filterBreed} >
        <h4 style={{color: "white"}}>Filter by breed:</h4>
        <select onClick={() => setIndex(0)} onChange={(e) => setGroup(e.target.value)} style={{width: "100px", height: "20px"}} defaultValue="default" name='group'>
        <option style={{width: "10px", height: "40px"}} value="">None</option>
        {allBreedsGroups.map((breed, i) => <Breeds key={i} breed={breed} />)}
        </select>
        </div>

        <div className={style.filterTemperaments}>
        <h4 style={{color: "white"}}>Filter temperament by:</h4>
        <select onClick={() => setIndex(0)} style={{width: "100px", height: "20px"}} defaultValue="default" name='temperaments'>
        <option style={{color: "gray", width: "10px", height: "40px"}} value="default" disabled >Default</option>
        {allTemperaments.map((t, i) => <Temps key={i} temperament={t} />)}
        </select>
        </div>
      </div>

      <div className={style.divCards}>
        {cutArr(stateBreeds, index).length > 0 ? 
        cutArr(stateBreeds, index).map((dog, i) => <CardsDogs key={i} dog={dog} />): 
        <h1 style={{color: "white"}}>Can´t found dogs with the features</h1>}
      </div>
      <div style={{width: "100%", heigth: "300px", padding:"30px"}} >
      {cutArr(stateBreeds, index-1).length > 0 && 
      <button className={style.button} onClick={() => handleIndex(index-1)}>Previous page</button>}
      {cutArr(stateBreeds, index+1).length > 0 && 
      <button className={style.button} onClick={() => handleIndex(index+1)}>Next page</button>}
      </div>
    </div>
  )
}

export default Home