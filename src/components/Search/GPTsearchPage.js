import React from "react";
import { LOGIN_BG } from "../../utils/srcLinks";

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

        <div>
          <GPTsearchBar />
        </div>
      </div>
    </>
  );
};

export default gptSearchPage;
