import React from "react";

import MovieCard from "./ui/MovieCard";
const MovieItem = ({ title, director, duration, comment }) => {
  return (
    <MovieCard>
      <h2>{title}</h2>
      <h3>Dirigida por: {director}</h3>
      <br></br>
      <h6>La pelicula dura {duration} minutos</h6>
      <br></br>
      <br></br>
      <p>Comentario: {comment}</p>
    </MovieCard>
  );
};

export default MovieItem;