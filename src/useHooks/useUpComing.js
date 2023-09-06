import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addupComing } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/srcLinks";

const useUpComing = () => {
  const dispatch = useDispatch();
  const getUpComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addupComing(movies.results));
  };
  useEffect(() => {
    getUpComing();
  }, []);
};
export default useUpComing;
