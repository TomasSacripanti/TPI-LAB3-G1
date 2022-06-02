import React from "react";

import AnimeItem from "./AnimeItem";

const Animes = ({ animeList }) => {
  const animeMapped = animeList.map((anime) => (
    <AnimeItem
      key={anime.id}
      title={anime.title}
      chaptersCount={anime.chaptersCount}
      comment={anime.comment}
    />
  ));

  return <div>{animeMapped}</div>;
};

export default Animes;
