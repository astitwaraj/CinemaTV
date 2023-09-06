import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addpopular } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/srcLinks";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const movies = await data.json();

    dispatch(addpopular(movies.results));
  };
  useEffect(() => {
    getPopular();
  }, []);
};
export default usePopular;
