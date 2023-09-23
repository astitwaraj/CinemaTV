import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/language";

const GPTsearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  return (
    <>
      <form className=" rounded-md bg-black flex ">
        <input
          className="text-lg font-semibold p-3 m-2 rounded-md w-9/12"
          placeholder={lang[langKey].placeHolder}
        ></input>
        <button className="text-lg font-semibold p-3 m-2 ml-0 rounded-md w-3/12 bg-red-500">
          {lang[langKey].search}
        </button>
      </form>
    </>
  );
};

export default GPTsearchBar;
