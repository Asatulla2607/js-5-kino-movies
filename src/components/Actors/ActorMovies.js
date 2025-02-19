import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import APIKEY from '../ApiKey'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { LanguageContext } from "../../context/index.js";

const ActorMovies = ({actorId}) => {
    const [actorMovies, setActorMovies] = useState([])
    const {language} = useContext(LanguageContext)
    const getActorMovies = async (id, key) => {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
        setActorMovies(res.data.cast)
    }
    useEffect(()=>{
        getActorMovies(actorId,APIKEY)
    },[language])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:6,
        slidesToScroll: 3
      };
  return (
    <div id='actorMovies'>
        <div className='container'>
            <div className='actorMovies'>
                <Slider {...settings}>
                   {
                    actorMovies.filter(el => el.poster_path).map((el) =>(
                        <div>
                            <Link to={`/movies/detail-page/${el.id}`}>
                            <img src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt='img' />
                            </Link>
                            <h4>{el.title}</h4>
                        </div>
                    ))
                } 
                </Slider>
                
            </div>
        </div>      
    </div>
  )
}

export default ActorMovies
