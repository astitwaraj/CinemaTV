import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMovieLits, updatetenmovie } from "../../utils/gptSlice";
import lang from "../../utils/language";
import openai from "../../utils/openai";
import { API_OPTIONS, SEARCH } from "../../utils/srcLinks";

const GPTsearchBar = () => {
  const dispatch = useDispatch();
  let search = useRef(null);
  const langKey = useSelector((store) => store.config.language);
  const loading = useSelector((store) => store.gpt.tenmovies);

  const movieDeets = async (text) => {
    const data = await fetch(SEARCH + text, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const hanldeGPTsearch = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      search.current.value +
      ". only give me names of 40 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const searchArray = chatCompletion.choices[0].message.content.split(", ");
    dispatch(updateMovieLits(searchArray));
    const moviePromise = searchArray.map((movie) => movieDeets(movie));
    const final = await Promise.all(moviePromise);
    dispatch(updatetenmovie(final));
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-md bg-gray-950 flex justify-evenly  "
      >
        <input
          ref={search}
          className="focus:outline-none text-sm  md:text-lg font-semibold p-1 md:p-3 m-1 md:m-2 rounded-md w-9/12"
          placeholder={lang[langKey].placeHolder}
        ></input>
        <button
          onClick={hanldeGPTsearch}
          className="text-sm  md:text-lg font-semibold p-1 md:p-3 m-1 md:m-2 ml-0 rounded-md w-3/12 bg-red-500"
        >
          {lang[langKey].search}
        </button>
      </form>
    </>
  );
};

export default GPTsearchBar;
