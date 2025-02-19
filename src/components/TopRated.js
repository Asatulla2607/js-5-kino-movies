import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import APIKEY from "./ApiKey/index.js";
import MoviesCard from "../components/kinoPage/MoviesCard.js";
import DetailPage from "./kinoPage/DetailPage.js";
import { LanguageContext } from "../context/index.js";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { language } = useContext(LanguageContext);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const getTopRated = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=${page}`
    );
    const { results } = await res.data;
    setTopRated(results);
  };

  const getPopular = async () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    getTopRated();
    getPopular();
  }, [language, page]);

  let arrayPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div id="movies">
      <div className="container">
        <div className="movies">
          {topRated.map((el) => (
            <MoviesCard el={el} />
          ))}
        </div>
        <div className="arrayPage">
          {arrayPage.map((el) => (
            <button onClick={() => setPage(el)}>{el}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopRated;
