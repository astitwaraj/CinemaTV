import React from "react";
import MovieList from "../MovieList";

const SimilarMovie = ({ similarMovies }) => {
  return (
    <div>
      {!similarMovies.loading && (
        <div className="mx-5 md:mx-16 my-8">
          <MovieList title={"Similar Movies"} movies={similarMovies.url} />
        </div>
      )}
    </div>
  );
};

export default SimilarMovie;
