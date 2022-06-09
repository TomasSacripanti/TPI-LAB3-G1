import React from "react";

import "./Manga.css";

import MangaItem from "./MangaItem";

const Manga = ({ mangaList }) => {
  const mangaMapped = mangaList.map((manga) => (
    <MangaItem
      key={manga.id}
      title={manga.title}
      chaptersCount={manga.chaptersCount}
      comment={manga.comment}
    />
  ));

  return (
    <div className="manga-container">
      {mangaMapped.length === 0 ? (
        <p>No hay mangas para mostrar</p>
      ) : (
        mangaMapped
      )}
    </div>
  );
};

export default Manga;