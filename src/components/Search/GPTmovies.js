import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moviecard from "../Moviecard";

const GPTmovies = () => {
  const { gptMovieList, tenmovies } = useSelector((store) => store.gpt);
  if (!gptMovieList || !tenmovies) return null;
  return (
    <div className=" mt-4 md:mt-8 py-4 px-1 md:px-[42px] flex flex-col">
      <p className="text-4xl px-1 font-semibold text-white">Results</p>
      <div className="flex flex-row flex-wrap">
        {tenmovies?.map((movie) => (
          <Link key={movie[0].id} to={"/browse/" + movie[0].id}>
            {console.log(movie[0].id)}

            <Moviecard key={movie[0].id} posterId={movie[0].poster_path} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GPTmovies;
