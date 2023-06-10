import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
import "./App.css";
import SearchIcon from "./search.svg";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

const searchItem = ()=>{
axios.get(`http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`).then((result)=>{
  setMovies(result.data.Search)
  console.log("help",result.data);
})
}
useEffect(() => {
  searchItem()
}, []);
  return (
    <div className="app">
      <h1>Movies Cards</h1>
      <div className="search">
        <input
          placeholder="Search Movie here"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img
          src={SearchIcon}
          alt="\O/"
          onClick={() => searchItem(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Opps!! No Movies Found.. </h2>
        </div>
      )}
    </div>
  );
};

export default App;
