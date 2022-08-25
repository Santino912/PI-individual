import React, { useEffect, useState } from 'react'
import style from "../css/home.module.css"
import CardsDogs from './CardsDogs'
import { useDispatch, useSelector } from 'react-redux'
import { allBreeds, changePage, fetchTemperaments, addFilterTemperaments } from "../redux/actions"
import { cutArr, filterAll } from '../utils'
import Temps from './Temps'
import { Loading } from './Loading'
import { ButtonsTemperaments } from './ButtonsTemperaments'


const Home = () => {
  const [loading, setLoading] = useState(false)
  
  let dispatch = useDispatch()
  const stateBreeds = useSelector(state => state.breedArr)
  const stateFilter = useSelector(state => state.strFilter)
  const index = useSelector(state => state.indexPage)
  const filterTemperaments = useSelector(state => state.filterTemperaments)
  const allTemperaments = useSelector(state => state.allTemperaments)

  useEffect(() => {
    setLoading(true)
    dispatch(allBreeds())
    dispatch(fetchTemperaments())
    setLoading(false)
  }, [dispatch])
  
  /* 
  USEEFFECT CADA VEZ QUE SE CAMBIEN LOS FILTROS
  SETSTATE()
  */
  let check  = stateBreeds.filter((dog) => filterAll(stateFilter.reg, dog.name, filterTemperaments, dog.temperament))
   let arr = cutArr(check, index)
  return (
    <div className={style.divHome}>
      {loading && <Loading />}
      <div className={style.optionsFilter}>
        <div className={style.filterBreed} >
        <h4 style={{color: "white"}}>Filter by breed:</h4>
        <input type="radio" />
        </div>

        <div className={style.filterTemperaments}>
        <h4 style={{color: "white"}}>Filter temperament by:</h4>
        <select style={{width: "100px", height: "20px"}} defaultValue="default" onChange={(e) => dispatch(addFilterTemperaments(e.target.value)) } name='temperaments'>
        <option style={{color: "gray", width: "10px", height: "40px"}} value="default" disabled >Default</option>
        {allTemperaments.map((t, i) => <Temps key={i} temperament={t}  />)}
        </select>
        </div>

        <div className={style.temperamentsDiv}>
        {filterTemperaments.map((temperament,i ) => <ButtonsTemperaments key={i} temperament={temperament} /> )}
        </div>
      </div>

      <div className={style.divCards}>
        {arr.length > 0 ? arr.map((dog, i) => <CardsDogs key={i} dog={dog} />): 
        <h1 style={{color: "white"}}>Can´t found dogs with the features</h1>}
      </div>
      <div style={{width: "100%", heigth: "300px", padding:"30px"}} >
      {cutArr(check, index-1).length > 0 && 
      <button className={style.button} onClick={() => dispatch(changePage(index-1))}>Previous page</button>}
      {cutArr(check, index+1).length > 0 && 
      <button className={style.button} onClick={() => dispatch(changePage(index+1))}>Next page</button>}
      </div>
    </div>
  )
}

export default Home