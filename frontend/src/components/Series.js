import React from "react";

import "./Series.css";

import AnimeSerieItem from "./AnimeSerieItem";

const Series = ({ seriesList }) => {
  const seriesMapped = seriesList.map((anime) => (
    <AnimeSerieItem
      key={anime.id}
      title={anime.title}
      chaptersCount={anime.chaptersCount}
      comment={anime.comment}
    />
  ));

  return (
    <div className="series-container">
      {seriesMapped.length === 0 ? (
        <p>No hay series para mostrar</p>
      ) : (
        seriesMapped
      )}
    </div>
  );
};

export default Series;