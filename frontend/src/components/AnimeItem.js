import React from "react";

import AnimeCard from "./ui/AnimeCard";
const AnimeItem = ({ title, chaptersCount, comment }) => {
  return (
    <AnimeCard>
      <h2>{title}</h2>
      <h3>Cantidad de capitulos: {chaptersCount}</h3>
      <p>Comentario: {comment}</p>
    </AnimeCard>
  );
};

export default AnimeItem;
