import React from "react";
import MovieList from "../MovieList";

const SimilarMovie = ({ similarMovies }) => {
  return (
    <div>
      <div className="mx-16 my-8">
        <MovieList title={"Similar Movies"} movies={similarMovies} />
      </div>
    </div>
  );
};

export default SimilarMovie;
