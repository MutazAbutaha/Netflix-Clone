
import{ useState, useEffect } from 'react';
import MovieList from './MovieList';
import "./Home.css";

export default function Home(){
    const [movies,setMovies]=useState([])

    async function trendingMovies(){
        const url=process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        const moviesData = await response.json();
        setMovies(moviesData);
    }
    useEffect(()=>{
        trendingMovies();
    },[])  

    return(
        <>
        <h2>Welcome to Netflix</h2>
        <div id="card">
        <MovieList  movies={movies}/>
        </div>
        </>
    )
}