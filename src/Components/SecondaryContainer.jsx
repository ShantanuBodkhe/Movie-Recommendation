import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=' bg-black'>
      <div className='-mt-40 relative z-20 pl-12'>
      {movies?.nowPlayingMovies && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />}
      {movies?.nowPlayingMovies && <MovieList title={"Top  Rated Movies"} movies={movies.nowTopRatedMovies} />}
      {movies?.nowUpcomingMovies && <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies} />}
      {movies?.nowPopularMovies && <MovieList title={"Popular"} movies={movies.nowPopularMovies} />}
      
    </div>
    </div>
  )
 }

export default SecondaryContainer ;
