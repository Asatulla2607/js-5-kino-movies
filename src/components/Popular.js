import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import APIKEY from './ApiKey/index.js'
import MoviesCard from '../components/kinoPage/MoviesCard.js'
import { LanguageContext } from "../context/index.js";

const Popular = () => {
    const [popular, setpopular] = useState([])
    const {language} = useContext(LanguageContext)
    const [page, setPage] = useState(1)
    const [loader,setLoader] = useState(false)

    const getPopular = async () => {
        setLoader(true)
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
        const { data } = await res
        setpopular(data.results)
        setTimeout(()=>{
            setLoader(false)
        },2000)
    }
    useEffect(() => {
        getPopular()
    }, [language,page])

    let arrayPage = [1,2,3,4,5,6,7,8,9,10]

    

    return (
        <div id="movies">
            {
                loader ? <p className="loading">Loading...</p>
                :  <div className="container">
                <div className="movies">
                    {
                        popular.map(el => <MoviesCard el={el}/>)
                    }
                </div>
                <div className="arrayPage">
                    {
                        arrayPage.map((el)=>(
                            <button onClick={()=>setPage(el)}>{el}</button>
                        ))
                    }
                </div>
            </div>
            }
           
        </div>
    )
}
export default Popular