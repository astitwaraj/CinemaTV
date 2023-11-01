import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Moviecard = lazy(() => import("../Moviecard"));

const GPTmovies = () => {
  const { gptMovieList, tenmovies } = useSelector((store) => store.gpt);
  if (!gptMovieList || !tenmovies)
    return (
      <h1 className="text-white bg-black rounded-md mt-8 h-screen bg-opacity-60 md:mx-[44px] text-3xl md:text-5xl pt-56 px-[30%] md:px-[38%]">
        Loading⏳
      </h1>
    );
  return (
    <div className="bg-black rounded-md bg-opacity-60 md:mx-[44px] ">
      <div className=" mt-4 md:mt-8 py-4 items-center md:px-[42px] flex flex-col">
        <p className="text-2xl md:text-4xl px-1 font-semibold text-white">
          Results
        </p>
        <div className="flex flex-row justify-evenly flex-wrap">
          {tenmovies?.map((movie) => (
            <Link key={movie[0].id} to={"/browse/" + movie[0].id}>
              {console.log(movie[0].id)}

              <Moviecard key={movie[0].id} posterId={movie[0].poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GPTmovies;
