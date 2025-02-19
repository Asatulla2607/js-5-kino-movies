import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import APIKEY from '../ApiKey'
import Slider from "react-slick";
import person from '../../img/person.png'
import { Link } from 'react-router-dom';
import { LanguageContext } from "../../context/index.js";

const Actor = ({id}) => {
    const [Actors,setActors] = useState([])
    const {language} = useContext(LanguageContext)
    const getActors = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=${language}`)
        const {data} = await url
        setActors(data.cast)
    } 
    useEffect(()=>{
        getActors()
    },[language])
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:6,
    slidesToScroll: 3
  };
    return (
        <div id='actor'>
            <div className='conteiner'>
                <Slider {...settings}>
                    {Actors.map((el)=> (
                        <Link to={`/actors/detail-page/${el.id}`}>
                        <div>
                            {
                                el.profile_path ? <img width={150}
                                src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`} 
                                alt="img"
                                /> : <img width={149} src={person} alt='img'/>
                            }
                        
                         <h3>{el.name}</h3>
                         </div> 
                        </Link>
                    ))}
                </Slider>
                    
            </div>
        </div>
  )
}

export default Actor;
