import { memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSearchMovie from "../../useHooks/useSearchMovie";
import useSimilarMovies from "../../useHooks/useSimilarMovies";
import MainMovie from "./MainMovie";
import SimilarMovie from "./SimilarMovie";

const MovieDetail = () => {
  const { movieID } = useParams();

  useSearchMovie(movieID);
  useSimilarMovies(movieID);
  const { currentMovie, similarMovies } = useSelector((store) => store.movies);
  if (!similarMovies || !currentMovie) return null;
  return (
    <>
      <div className="flex flex-col bg-gray-950 pt-28 h-screen w-screen">
        <MainMovie currentMovie={currentMovie} />
        <SimilarMovie similarMovies={similarMovies} />
      </div>
    </>
  );
};

export default memo(MovieDetail);
