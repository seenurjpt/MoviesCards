import React from "react";
import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=485c72dd";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("Golmaal");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}&s=${searchTerm}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };
  return (
    <div className="app">
      <h1>Movies Lelo</h1>
      <div className="search">
        <input
          placeholder="Search Movie here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="\O/"
          onClick={() => searchMovies(searchTerm)}
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
