import React, { Suspense, lazy } from "react";
import { LOGIN_BG } from "../../utils/srcLinks";

import GPTsearchBar from "./GPTsearchBar";
const GPTmovies = lazy(() => import("./GPTmovies"));
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
          <Suspense
            fallback={
              <h1 className="text-black font-semibold text-5xl pt-80 px-[38%]">
                Loading⏳
              </h1>
            }
          >
            <GPTmovies />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default gptSearchPage;
