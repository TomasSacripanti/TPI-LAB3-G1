// import {useState} from "react";

import CategorySection from "../components/CategorySection";

const DUMMY_ANIMES = [
  {
    id: 1,
    title: "Sword Art Online",
    chaptersCount: 24,
    comment: "Empieza bien, pero después del capítulo 10, decae mucho",
  },
  {
    id: 2,
    title: "Black Clover",
    chaptersCount: 170,
    comment: "Shonen de peleas que está piola pero tarda en arrancar",
  },
  {
    id: 3,
    title: "SpyXFamily",
    chaptersCount: 12,
    comment: "Slice of life muy bueno y divertido",
  },
];

const DUMMY_SERIES = [
  {
    id: 1,
    title: "Peaky Blinders",
    chaptersCount: 36,
    comment: "Muy picante de principio a fin",
  },
  {
    id: 2,
    title: "Vikings",
    chaptersCount: 89,
    comment: "Aguante Ragnar lcdsm, a pedazos a partir de la temporada 4",
  },
  {
    id: 3,
    title: "Breaking Bad",
    chaptersCount: 62,
    comment: "VAMOS A HACER META",
  },
];

const DUMMY_MOVIES = [
  {
    id: 1,
    title: "El Show de Truman",
    director: "Peter Weir",
    duration: 103,
    comment: "Tremendo plot twist",
  },
  {
    id: 2,
    title: "Gangster Americano",
    director: "Ridley Scott",
    duration: 176,
    comment: "Peliculón de chill",
  },
  {
    id: 3,
    title: "El Señor de los Anillos: El Retorno del Rey",
    director: "Peter Jackson",
    duration: 201,
    comment: "La única tercera pelicula mejor que las anteriores",
  },
];

const DUMMY_MANGAS = [
  {
    id: 1,
    title: "Berserk",
    chaptersCount: 364,
    comment: "Obra maestra, de los mejores mangas que existen.",
  },
  {
    id: 2,
    title: "Magi",
    chaptersCount: 369,
    comment:
      "Shonen de aventura, muy creativo pero con un final controversial.",
  },
  {
    id: 3,
    title: "Dragon Ball",
    chaptersCount: 520,
    comment: "Clasico de clasicos, goku le gana.",
  },
];

const Contents = () => {
  // const [reviews, setReviews] = useState([]);
  return (
    <div>
      <h3>Lista de animes </h3>
      <CategorySection list={DUMMY_ANIMES} category="animes" />
      <h3>Lista de mangas </h3>
      <CategorySection list={DUMMY_MANGAS} category="mangas" />
      <h3>Lista de series </h3>
      <CategorySection list={DUMMY_SERIES} category="series" />
      <h3>Lista de películas</h3>
      <CategorySection list={DUMMY_MOVIES} category="peliculas" />
    </div>
  );
};

export default Contents;
