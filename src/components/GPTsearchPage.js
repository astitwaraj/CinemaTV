import React from "react";
import GPTmovies from "./GPTmovies";
import GPTsearchBar from "./GPTsearchBar";
import Header from "./Header";

const gptSearchPage = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <div className="pt-[8%] px-[25%]">
          <GPTsearchBar />
        </div>
        <GPTmovies />
      </div>
    </>
  );
};

export default gptSearchPage;
