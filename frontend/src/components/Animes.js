import React from "react";

import "./Animes.css";

import AnimeSerieItem from "./AnimeSerieItem";

const Animes = ({ animeList }) => {
  const animeMapped = animeList.map((anime) => (
    <AnimeSerieItem
      key={anime.id}
      title={anime.title}
      chaptersCount={anime.chaptersCount}
      comment={anime.comment}
    />
  ));

  return (
    <div className="animes-container">
      {animeMapped.length === 0 ? (
        <p>No hay animes para mostrar</p>
      ) : (
        animeMapped
      )}
    </div>
  );
};

export default Animes;