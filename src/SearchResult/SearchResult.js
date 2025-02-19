import axios from 'axios'
import React, { useEffect, useState } from 'react'
import APIKEY from '../components/ApiKey'
import { useParams } from 'react-router-dom'
import MoviesCard from '../components/kinoPage/MoviesCard'

const SearchResult = () => {
    
    const {movieName} = useParams()
    const [page,SetPage] = useState(1)
    const [result, setResult] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    
    const getSearchResult = async (key, name) =>{
        const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=en-US&page=${page}`)
        window.scroll(0,0)
        setTotalPage(res.data.total_pages)       
        setResult(res.data.results)        
    };
       

    useEffect(()=>{
        getSearchResult(APIKEY,movieName)
    },[movieName, page])

    useEffect(()=>{
        SetPage(1)
    },[movieName])


  return (
    <div id="movies">
            <div className="container">
                <div className="movies">
                    {
                        result.map(el => <MoviesCard el={el} el={el}/>)
                    }
                </div>
                <div className='search-btn'>
                    <button style={{visibility: page === 1 ? 'hidden' : 'visible'}} onClick={() =>SetPage(page - 1)}>prev</button>
                    <h3>{page} / {totalPage}</h3>
                    <button style={{visibility: page === totalPage ? 'hidden' : 'visible'}} onClick={() =>SetPage(page + 1)}>next</button>
                </div>
            </div>
        </div>
  )
}

export default SearchResult
