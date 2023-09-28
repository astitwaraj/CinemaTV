import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTmovies = () => {
  const { gptMovieList, tenmovies } = useSelector((store) => store.gpt);
  if (!gptMovieList || !tenmovies) return null;
  return (
    <div className=" mt-4 md:mt-8 py-4 px-1 md:px-[44px]">
      {gptMovieList.map((name, index) => (
        <MovieList key={name} title={name} movies={tenmovies[index]} />
      ))}
    </div>
  );
};

export default GPTmovies;
