import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

// const MainContainer = () => {
//     const  movies = useSelector(store=>store.movies?.nowPlayingMovies);
//     if(!movies)return;
//     const mainMovies = movies[0];
//     console.log(mainMovies);
    
//      const {original_title,overview} = mainMovies;
//   return (
//     <div>
//         <VideoTitle  title={original_title} overview={overview}/>
//         <VideoBackground/>
//     </div>
//   )
// }

// export default MainContainer



const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    

    // if (!movies?.length) return (

    //     <div className="w-screen aspect-video">
    //         <img className="w-screen aspect-video object-cover" 
    //              src="/src/Utils/Logo.png"
    //              alt="Loading..." />
    //     </div>
    // );

    if (!movies)return;
    const mainMovies = movies[0];
    const {original_title,overview,id} = mainMovies;
    
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
