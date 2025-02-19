import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.js";
import TopRated from "./components/TopRated.js";
import Popular from "./components/Popular.js";
import DetailPage from "./components/kinoPage/DetailPage.js";
import ActorDetail from "./components/Actors/ActorDetail.js";
import { useContext, useState } from "react";
import { LanguageContext } from "./context/index.js";
import SearchResult from "./SearchResult/SearchResult.js";

function App() {
  const { mode } = useContext(LanguageContext);
  return (
    <div
      style={{
        background: mode ? "black" : "",
        color: mode ? "white" : "",
      }}
      className="App"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/movies/detail-page/:id" element={<DetailPage />} />
        <Route path="/actors/detail-page/:actorId" element={<ActorDetail />} />
        <Route
          path="/movies/search-result/:movieName"
          element={<SearchResult />}
        />
      </Routes>
    </div>
  );
}

export default App;
