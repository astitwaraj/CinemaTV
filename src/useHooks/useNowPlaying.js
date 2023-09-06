import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlaying } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/srcLinks";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addnowPlaying(movies.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};
export default useNowPlaying;
