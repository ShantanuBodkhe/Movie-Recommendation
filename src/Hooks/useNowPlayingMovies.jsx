// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../Utils/Constants";
// import { useEffect } from "react";
// import {addNowPlayingMovies} from "../Utils/movieSlice"

//  const useNowPlayingMovies= () =>{
//     const dispatch=useDispatch();
//   const getNowPlayingMovies = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing",
//       API_OPTIONS,
//     );
//     const json=await data.json();
//     console.log(json.results);
//     dispatch(addNowPlayingMovies(json.results));
    
//   };

//   useEffect(()=>{
//     getNowPlayingMovies();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])
//  };

//  export default useNowPlayingMovies;



import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
   
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
      console.log(json.results);
      
    
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
