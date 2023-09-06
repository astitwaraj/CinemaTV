import React from "react";
import { POSTER_PATH } from "../utils/srcLinks";

const Moviecard = ({ posterId }) => {
  return (
    <div className="w-52">
      <div className="m-4">
        <img src={POSTER_PATH + posterId} alt="" />
      </div>
    </div>
  );
};

export default Moviecard;
