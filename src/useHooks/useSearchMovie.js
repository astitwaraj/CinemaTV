import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCurrentMovie } from "../utils/movieSlice";
import { API_OPTIONS, MOVIE_DETAILS } from "../utils/srcLinks";

const useSearchMovie = (movieID) => {
  const dispatch = useDispatch();
  const movieDeets = async () => {
    const data = await fetch(
      MOVIE_DETAILS + movieID + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addCurrentMovie(json));
  };
  useEffect(() => {
    movieDeets();
  }, []);
};

export default useSearchMovie;
