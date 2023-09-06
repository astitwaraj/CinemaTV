import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopRated } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/srcLinks";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addtopRated(movies.results));
  };
  useEffect(() => {
    getTopRated();
  }, []);
};
export default useTopRated;
