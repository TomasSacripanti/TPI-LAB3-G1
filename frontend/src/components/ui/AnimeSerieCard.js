import React from "react";

import "./AnimeSerieCard.css";

const AnimeSerieCard = ({ children }) => {
  //console.log(children);
  return <div className="animeserie-item-container">{children}</div>;
};

export default AnimeSerieCard;
