import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import APIKEY from '../ApiKey'
import ActorMovies from './ActorMovies'
import { LanguageContext } from "../../context/index.js";

const ActorDetail = () => {
    const [ActorDetail, setActorDetail] = useState({})
    const [view,setView] = useState(300)
    const {language} = useContext(LanguageContext)
    const getActorDetail = async (id,key) =>{
        const res = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`)
        setActorDetail(res.data)};

    const {actorId} = useParams()
    

    useEffect(()=>{
        getActorDetail(actorId,APIKEY)
    },[language])


    const printext = (text) =>{
      if(view === 300){
        setView(text.length)
      }else{
        setView(300)
      }
    }

  return (
    <div id='actorDetail'>
        <div className='container'>
                {
                  <div className='actorDetail'>
                    <img width={400} height={500} src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${ActorDetail.profile_path}`} alt='img'/>

                    <div className='actorDetailInfo'>
                        <h1>{ActorDetail.name}</h1>
                        <p>{ActorDetail.biography && ActorDetail.biography.slice(0,view)}</p>
                        <h3>{ActorDetail.birthday}</h3>
                        {
                          ActorDetail.biography && ActorDetail.biography.length > 300 && <span
                           onClick={()=>printext(ActorDetail.biography)} 
                           className='view'
                           >
                            {view === 300 ? 'view' : 'close'}
                          </span>
                        }
                    </div>

                  </div>
                }
        </div> 
        <ActorMovies actorId={actorId} />     
    </div>
  )
}

export default ActorDetail
