import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
    console.log(title);
    
  return (
    <div>
      <div>
      <h1 className='text-white-500'>{title}</h1>
      </div>
      <div>
        <MovieCard posterPath={movies[0].poster_path}/>
      </div>
    </div>
  )
}   
export default MovieList;
