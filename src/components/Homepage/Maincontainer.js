import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useSearchMovie from "../../useHooks/useSearchMovie";
import Videobg from "../Videobg";

const Maincontainer = () => {
  useSearchMovie(976573);
  const currentMovie = useSelector((store) => store.movies.currentMovie);
  if (!currentMovie) return null;
  return (
    <div>
      <div className="pt-28 md:pt-0">
        <Videobg id={976573} />
      </div>
      <div className=" text-white aspect-video w-screen mt-24 md:mt-0 ">
        <h1 className="font-semibold md:text-6xl md:w-2/6 mx-2 md:pt-[18%] md:mx-12 md:mb-7 ">
          {currentMovie.original_title}
        </h1>
        <p className=" hidden md:flow-root mx-12 w-2/6">
          {currentMovie.overview}
        </p>
        <Link to={"/playing"}>
          <button className="ml-2 md:ml-12 bg-white px-4 md:px-12 py-2 hover:bg-opacity-40 text-black rounded-md m-2 md:m-5 text-sm md:text-xl font-bold ">
            Play
          </button>
        </Link>
        <Link to={"/browse/" + 976573}>
          <button className=" bg-gray-900 bg-opacity-50 hover:bg-opacity-90 px-2 md:px-6 py-2 text-white rounded-md text-sm md:text-xl">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Maincontainer;
