import React from "react";

import "./Movies.css";

import MovieItem from "./MovieItem";

const Movies = ({ moviesList }) => {
  const moviesMapped = moviesList.map((movie) => (
    <MovieItem
      key={movie.id}
      title={movie.title}
      director={movie.director}
      duration={movie.duration}
      comment={movie.comment}
    />
  ));

  return (
    <div className="movies-container">
      {moviesMapped.length === 0 ? (
        <p>No hay series para mostrar</p>
      ) : (
        moviesMapped
      )}
    </div>
  );
};

export default Movies;
