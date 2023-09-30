import React from "react";
import { useSelector } from "react-redux";
import useNowPlaying from "../../useHooks/useNowPlaying";
import usePopular from "../../useHooks/usePopular";
import useTopRated from "../../useHooks/useTopRated";
import useUpComing from "../../useHooks/useUpComing";
import GptSearchPage from "../Search/GPTsearchPage";
import Maincontainer from "./Maincontainer";
import Secondcontainer from "./Secondcontainer";
const Browse = () => {
  const pageViewStatus = useSelector((store) => store.gpt.gptPageView);
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div>
      {pageViewStatus ? (
        <GptSearchPage />
      ) : (
        <>
          <Maincontainer />
          <Secondcontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
