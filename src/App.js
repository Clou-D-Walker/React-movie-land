import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
// c66e2809

const API_URL = ("http://www.omdbapi.com?apikey=c66e2809");

const movie1 = {
  "Title": "Shaolin",
  "Year": "2011",
  "imdbID": "tt1533749",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDc3MWUwNjgtMjg1My00NzljLWFmMDMtNGRhNzJmNzk4MDllXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg"
}


const App = () => {

  const [movies, SetMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    SetMovies(data.Search);
  }

  useEffect( () => {
    searchMovies('superman')
  } , [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(event)=>{
          setSearchTerm(event.target.value)
        }}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick = {()=>{
            searchMovies(searchMovies(searchTerm))
          }}
        />
      </div>

      {
        movies?.length > 0 ?
        (
        <div className="container">
        {movies.map((movie) => {
          return <MovieCard movie = {movie} />
        })}
        </div>
        ) :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  )
}

export default App;