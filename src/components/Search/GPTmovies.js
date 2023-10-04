import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Moviecard = lazy(() => import("../Moviecard"));

const GPTmovies = () => {
  const { gptMovieList, tenmovies } = useSelector((store) => store.gpt);
  while (!gptMovieList || !tenmovies)
    return (
      <h1 className="text-white bg-black rounded-md mt-8 h-screen bg-opacity-60 md:mx-[44px]  text-5xl pt-56 px-[38%]">
        Loading⏳
      </h1>
    );
  return (
    <div className="bg-black rounded-md bg-opacity-60 md:mx-[44px] ">
      <div className=" mt-4 md:mt-8 py-4 px-1 md:px-[42px] flex flex-col">
        <p className="text-4xl px-1 font-semibold text-white">Results</p>
        <div className="flex flex-row flex-wrap">
          {tenmovies?.map((movie) => (
            <Link key={movie[0].id} to={"/browse/" + movie[0].id}>
              {console.log(movie[0].id)}
              <Suspense
                fallback={
                  <h1 className="text-black font-semibold text-5xl pt-80 px-[38%]">
                    Loading⏳
                  </h1>
                }
              >
                <Moviecard key={movie[0].id} posterId={movie[0].poster_path} />
              </Suspense>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GPTmovies;
