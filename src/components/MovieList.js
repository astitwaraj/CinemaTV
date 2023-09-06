import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-10">
      <h1 className=" text-white font-semibold text-3xl pl-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
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
