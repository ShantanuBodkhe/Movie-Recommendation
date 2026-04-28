import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  console.log(title);

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;


//  <div className="">
//       <div  className="flex items-center justify-start mb-4">
//         <h1 className="text-white-500">{title}</h1>
//       </div>
//       <div  className="flex overflow-x-scroll">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} posterPath={movie.poster_path} />
//         ))}
//       </div>
//     </div>