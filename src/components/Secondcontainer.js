import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondcontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black pl-10">
        <div className="relative -top-52 z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList title={"Popular Movies"} movies={movies.popular} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRated} />
          <MovieList title={"Coming Soon"} movies={movies.upComing} />
        </div>
      </div>
    )
  );
};

export default Secondcontainer;
