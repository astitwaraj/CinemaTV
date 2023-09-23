import React from "react";
import { LOGIN_BG } from "../utils/srcLinks";
import GPTsearchBar from "./GPTsearchBar";
import Header from "./Header";

const gptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="bg-cover bg-center bg-no-repeat bg-fixed"
          src={LOGIN_BG}
          alt=""
        />
      </div>
      <Header />
      <div className="pt-[17%] px-[25%]">
        <GPTsearchBar />
      </div>
    </>
  );
};

export default gptSearchPage;
