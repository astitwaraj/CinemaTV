import React from "react";
import { Link } from "react-router-dom";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-2 md:mb-10">
      <h1 className=" text-white font-semibold text-base md:text-3xl pl-2">
        {title}
      </h1>
      <div className="flex overflow-x-scroll snap-x no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/browse/" + movie.id}>
              <Moviecard key={movie.id} posterId={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
