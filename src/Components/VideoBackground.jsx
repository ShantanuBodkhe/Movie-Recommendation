import React from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  //fetch trailer video
  useMovieTrailer(movieId);

  return (
    <div className="w-screen aspect-video">
      <iframe
      className="w-screen aspect-video object-cover"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzY0MTczMGZiMDYwMTMzYTk4MjEwYmI1ZDU4ZGJlYyIsIm5iZiI6MTc3NTg5MDIwNS43NTEwMDAyLCJzdWIiOiI2OWQ5ZWYxZDNlZTI4NWYwM2RiNjQ2NTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4deoYXjlBkN8TlM-lRIEamyiIxpZqFpDBiugntXTsbo' \
//      --header 'accept: application/json'
