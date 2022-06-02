import React from "react";

import "./MovieCard.css";

const MovieCard = ({ children }) => {
  //console.log(children);
  return <div className="movie-item-container">{children}</div>;
};

export default MovieCard;