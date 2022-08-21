import React, { useEffect} from 'react'
import style from "../css/home.module.css"
import CardsDogs from './CardsDogs'
import { useDispatch, useSelector } from 'react-redux'
import { allBreeds } from "../redux/actions"

const Home = () => {
  let dispatch = useDispatch()
  const state = useSelector(state => state.breedArr)
useEffect(() => {
dispatch(allBreeds())
}, [])
  let arr = state.slice(0, 9)

  return (
    <div className={style.divHome}>
      <div style={{width: "100%", height: "200px"}}><h1> sadasd</h1></div>
      <div className={style.divCards}>
      {arr.map((dog, i) => <CardsDogs key={i} dog={dog}/>)}
      </div>
      <div style={{width: "100%", heigth: "100px"}} />
    </div>
  )
}

export default Home