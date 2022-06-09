import React from "react";

import "./MangaCard.css";

const MangaCard = ({ children }) => {
  //console.log(children);
  return <div className="manga-item-container">{children}</div>;
};

export default MangaCard;
