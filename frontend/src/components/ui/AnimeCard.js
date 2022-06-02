import React from "react";

import "./AnimeCard.css";

const AnimeCard = ({ children }) => {
  //console.log(children);
  return <div className="anime-item-container">{children}</div>;
};

export default AnimeCard;
