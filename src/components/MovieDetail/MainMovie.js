import React from "react";
import { Link } from "react-router-dom";
import { POSTER_PATH } from "../../utils/srcLinks";

const MainMovie = ({ currentMovie }) => {
  return (
    <div>
      <div className="flex mx-16 flex-col md:flex-row">
        <div className=" m-auto md:mr-4 md:w-3/12">
          <img
            className="w-auto h-96  rounded-md"
            src={POSTER_PATH + currentMovie.poster_path}
            alt=""
          />
        </div>
        <div className=" text-white md:w-9/12 mb-4 md:mx-5">
          <h1 className="text-2xl mt-4 md:mt-0 md:text-4xl font-semibold ">
            {currentMovie.original_title}
          </h1>
          {currentMovie.genres.map((genre) => (
            <button
              key={genre.id}
              className="bg-white text-black font-semibold text-sm rounded-md my-5 m-1 px-1"
            >
              {genre.name}
            </button>
          ))}
          <h1 className=" font-light md:w-1/2 text-sm">
            {currentMovie.overview}
          </h1>
          <div className="my-3 font-semibold">
            <h1>Release Date: {currentMovie.release_date}</h1>
            <h1>IMDB Rating: {currentMovie.vote_average}</h1>
            <h1>{currentMovie.runtime} mins</h1>
          </div>

          <Link to={"/playing"}>
            <button className=" bg-white my-6 px-10 py-2 hover:bg-opacity-40 text-black rounded-md  text-lg md:text-xl font-bold ">
              Play
            </button>
          </Link>
          <Link to={"/browse/trailer/" + currentMovie.id}>
            <button className=" bg-white mx-3 px-6 py-2 hover:bg-opacity-40 text-black rounded-md  text-lg md:text-xl font-bold ">
              Watch Trailer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMovie;
