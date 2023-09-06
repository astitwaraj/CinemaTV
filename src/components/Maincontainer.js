import React from "react";
import { useSelector } from "react-redux";
import Videobg from "./Videobg";

const Maincontainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlaying);
  if (moviesList === null) return;
  const random = Math.floor(Math.random() * moviesList.length);
  const displayMovie = moviesList[random];
  return (
    <div>
      <div>
        <Videobg id={976573} />
      </div>
      <div className=" text-white aspect-video w-screen pt-52">
        <h1 className="font-semibold text-6xl w-2/6 mx-12 mb-7 ">
          {displayMovie.original_title}
        </h1>
        <p className=" mx-12 w-2/6">{displayMovie.overview}</p>
        <button className="ml-12 bg-white px-12 py-2 hover:bg-opacity-40 text-black rounded-md m-5 text-xl font-bold ">
          Play
        </button>
        <button className=" bg-gray-900 bg-opacity-50 hover:bg-opacity-90 px-6 py-2 text-white rounded-md text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Maincontainer;
