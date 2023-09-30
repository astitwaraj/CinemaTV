import React from "react";
import { LOGIN_BG } from "../../utils/srcLinks";
import GPTmovies from "./GPTmovies";
import GPTsearchBar from "./GPTsearchBar";

const gptSearchPage = () => {
  return (
    <>
      <div>
        <img
          className="w-screen h-screen object-cover -z-20 fixed"
          src={LOGIN_BG}
          alt=""
        />

        <div className="pt-[34%] md:pt-[8%] px-10 md:px-[25%]">
          <GPTsearchBar />
        </div>
        <div className="bg-black rounded-md bg-opacity-60 md:mx-[44px] ">
          <GPTmovies />
        </div>
      </div>
    </>
  );
};

export default gptSearchPage;
