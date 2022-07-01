import { useState, useEffect } from "react";
import CategoryItemOne from "./ui/CategoryItemOne.js";
import CategoryItemTwo from "./ui/CategoryItemTwo.js";
import CategoryItemThree from "./ui/CategoryItemThree.js";
import CategoryItemFour from "./ui/CategoryItemFour.js";
import "./CategorySection.css";
const CategorySection = ({ list, category, popular }) => {
  const [contentsMapped, setContentsMapped] = useState([]);
  useEffect(() => {
    let contentsMapped;
    if (popular) {
      if (category === "peliculas") {
        contentsMapped = list.map((content) => {
          return (
            <CategoryItemThree
              title={content.title}
              posterPath={content.poster_path}
              vote={content.vote_average}
              date={content.release_date}
            />
          );
        });
      }
      if (category === "series") {
        contentsMapped = list.map((content) => {
          return (
            <CategoryItemThree
              title={content.name}
              posterPath={content.poster_path}
              vote={content.vote_average}
              date={content.release_date}
            />
          );
        });
      }
      if (category === "animes") {
        contentsMapped = list.map((content) => {
          return (
            <CategoryItemFour
              key={content.mal_id}
              title={content.title}
              imageURL={content.images.jpg.image_url}
              score={content.score}
              episodesCount={content.episodes}
              status={content.status}
            />
          );
        });
      }
      if (category === "mangas") {
        contentsMapped = list.map((content) => {
          return (
            <CategoryItemFour
              key={content.mal_id}
              title={content.title}
              imageURL={content.images.jpg.image_url}
              score={content.score}
              episodesCount={content.chapters}
              status={content.status}
            />
          );
        });
      }
    } else {
      if (
        category === "animes" ||
        category === "series" ||
        category === "mangas"
      ) {
        contentsMapped = list.map((content) => {
          return (
            <CategoryItemOne
              title={content.title}
              chaptersCount={content.chaptersCount}
              comment={content.comment}
            />
          );
        });
      } else {
        contentsMapped = list.map((content) => {
          return (
            <CategoryItemTwo
              title={content.title}
              director={content.director}
              duration={content.duration}
              comment={content.comment}
            />
          );
        });
      }
    }
    setContentsMapped(contentsMapped);
  }, [list, category, popular]);

  return <div className="category-container">{contentsMapped}</div>;
};

export default CategorySection;
