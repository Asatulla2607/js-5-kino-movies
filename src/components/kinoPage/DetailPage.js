
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../ApiKey/index";
import Actor from '../Actors/Actor.js'
import Video from '../Video/Video'
import { LanguageContext } from "../../context/index.js";
import Modal from "./Modal/Modal.js";


const DetailPage = () =>{
    const [detail,setDetail] = useState({});
    const {id} = useParams();
    const {language} = useContext(LanguageContext)
    const getDetailPage = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${language}`)
        const {data} = await url
        setDetail(data)
    } 
    useEffect(()=>{
        getDetailPage();
    },[language])
    const {title, overview, poster_path, runtime} = detail;
    return(
        <>
        <div style={{
            background:`url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}')no-repeat center/cover`
        }} id="detail">
            <div className="container">
                    {
                        <div className="detail">
                           <Modal detail={detail}/>


                            <div className="detail-desc">
                                <h2>{title}</h2>
                                <p>{overview}</p>
                                <h2>
                                    {Math.floor(runtime / 2)} h {runtime % 60} m
                                </h2>
                                <div 
                                 style={{
                                    background: `conic-gradient(yellow ${
                                        Math.round(detail.vote_average * 10) * 3.59
                                    } deg, gray 0deg)`,
                                }}
                                    className="detail-vote"
                                >
                                     <div className="bgOne">
                                    <h2>{Math.round(detail.vote_average * 10)} % </h2>
                                </div>
                                </div>
                                </div>
                        </div>
                    }
            </div>
        </div>  
        <Actor id={id}/>
        <Video id={id}/>
        </>
    ); 

};

export default DetailPage;

