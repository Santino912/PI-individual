import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import style from "../css/detailCard.module.css"
import { fetchOneDetail } from '../redux/actions'
import { Loading } from '../componentsShorts/Loading'


const DetailDog = () => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const {id} = useParams()


  useEffect(() => {
setLoading(true)
    dispatch(fetchOneDetail(id))
setLoading(false)
  }, [dispatch, id])


  const breedDetail = useSelector(state => state.breedDetail)



  return (
      <div className={style.detailCard}>
      {loading && <Loading />}
      <div style={{width: "100%", height: "100%"}}>
        <h1 style={{padding: "10px"}}>Breed name: {breedDetail?.name}</h1>

        <div className={style.contentCard}>
          <div>
        <img  src={breedDetail?.image?.url} alt={breedDetail.name} />
       </div>

        <div className={style.infDog}>

    <h4>Temperaments: {breedDetail?.temperament}</h4>
    <h4>Breed group: {breedDetail?.breed_group}</h4>
    <h4>Breed for: {breedDetail?.breed_group}</h4>
    <h4>Life span: {breedDetail?.life_span}</h4>
    <h4>Weight: {breedDetail?.weight?.imperial}</h4>
    <h4>Metric: {breedDetail?.weight?.metric}</h4>    
</div>
</div>
</div>
    </div>

  )
}

export default DetailDog