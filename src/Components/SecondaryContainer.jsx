import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies} />
    </div>
  )
 }

export default SecondaryContainer ;
