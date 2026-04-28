import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  return (
    <div className=' bg-black'>
      <div className='-mt-40 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
      <MovieList title={"Upcoming Movies"} movies={movies} />
    </div>
    </div>
  )
 }

export default SecondaryContainer ;
