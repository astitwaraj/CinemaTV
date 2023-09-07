import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-10">
      <h1 className=" text-white font-semibold text-3xl pl-2">{title}</h1>
      <div className="flex overflow-x-scroll snap-x no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard key={movie.id} posterId={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
