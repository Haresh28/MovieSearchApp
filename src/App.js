import React, { useEffect, useState } from "react";
//398e7de7

import './App.css';
import searchIcon from './search.svg'
import MovieCard from './MovieCard'

const apiUrl='http://www.omdbapi.com?apikey=398e7de7'
const movie1={
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
};

const App=()=> {
    const [movies,setMovies]=useState([]);
    const[searchMovie,setSearchMovie]=useState('');
    const searchMovies=async (title)=>{
        const response=await fetch(`${apiUrl}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    }
    
    useEffect(()=>{
        searchMovies('Batman');
    },[]);
    
    return (
        <div className="app">
            <h1>CineHub</h1>
            <div className="search">
                <input placeholder="Search movie name" value={searchMovie}
                onChange={(e)=>{setSearchMovie(e.target.value)}}
                />
            </div>
            <img src={searchIcon} alt="search" onClick={()=>{searchMovies(searchMovie)}}/>
            {
                movies?.length>0 ?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) :(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>

        
        
    );
};

export default App;