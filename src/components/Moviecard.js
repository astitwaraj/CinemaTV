import React from "react";
import { POSTER_PATH } from "../utils/srcLinks";

const Moviecard = ({ posterId }) => {
  if (!posterId) return null;
  return (
    <div className="w-32 md:w-48 snap-start">
      <div className="m-1 md:m-2">
        <img className="rounded-lg" src={POSTER_PATH + posterId} alt="" />
      </div>
    </div>
  );
};

export default Moviecard;
