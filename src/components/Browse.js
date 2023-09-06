import React from "react";
import useNowPlaying from "../useHooks/useNowPlaying";
import usePopular from "../useHooks/usePopular";
import useTopRated from "../useHooks/useTopRated";
import useUpComing from "../useHooks/useUpComing";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondcontainer from "./Secondcontainer";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondcontainer />
    </div>
  );
};

export default Browse;
