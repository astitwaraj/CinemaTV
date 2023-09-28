import React from "react";
import { useSelector } from "react-redux";
import Videobg from "./Videobg";

const Maincontainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlaying);
  if (!moviesList) return null;
  const random = Math.floor(Math.random() * moviesList.length);
  const displayMovie = moviesList[random];
  return (
    <div>
      <div className="pt-28 md:pt-0">
        <Videobg id={displayMovie.id} />
      </div>
      <div className=" text-white aspect-video w-screen mt-24 md:pt-52">
        <h1 className="font-semibold md:text-6xl md:w-2/6 mx-2 md:mx-12 md:mb-7 ">
          {displayMovie.original_title}
        </h1>
        <p className=" hidden md:flow-root mx-12 w-2/6">
          {displayMovie.overview}
        </p>
        <button className="ml-2 md:ml-12 bg-white px-4 md:px-12 py-2 hover:bg-opacity-40 text-black rounded-md m-2 md:m-5 text-sm md:text-xl font-bold ">
          Play
        </button>
        <button className=" bg-gray-900 bg-opacity-50 hover:bg-opacity-90 px-2 md:px-6 py-2 text-white rounded-md text-sm md:text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Maincontainer;
