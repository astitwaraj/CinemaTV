import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSimilarMovies } from "../utils/movieSlice";
import { API_OPTIONS, SIMILAR_MOVIES } from "../utils/srcLinks";

const useSimilarMovies = (movieID) => {
  const dispatch = useDispatch();
  const similarMovies = async () => {
    const data = await fetch(
      SIMILAR_MOVIES + movieID + "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(updateSimilarMovies(json.results));
  };
  useEffect(() => {
    similarMovies();
  }, []);
  return <div>movie_id</div>;
};

export default useSimilarMovies;
