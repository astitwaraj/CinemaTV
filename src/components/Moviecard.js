import React from "react";
import { POSTER_PATH } from "../utils/srcLinks";

const Moviecard = ({ posterId }) => {
  return (
    <div className="w-48 ">
      <div className="m-2">
        <img className="rounded-md" src={POSTER_PATH + posterId} alt="" />
      </div>
    </div>
  );
};

export default Moviecard;
