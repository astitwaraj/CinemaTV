import React from "react";
import { LOGIN_BG } from "../utils/srcLinks";
import GPTmovies from "./GPTmovies";
import GPTsearchBar from "./GPTsearchBar";
import Header from "./Header";

const gptSearchPage = () => {
  return (
    <>
      <div className="bg-black bg-opacity-60 h-auto">
        <img
          className="w-screen h-screen object-cover -z-20 fixed"
          src={LOGIN_BG}
          alt=""
        />
        <Header />
        <div className="pt-[34%] md:pt-[8%] px-10 md:px-[25%]">
          <GPTsearchBar />
        </div>

        <GPTmovies />
      </div>
    </>
  );
};

export default gptSearchPage;
