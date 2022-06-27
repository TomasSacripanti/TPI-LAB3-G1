import { useState, useEffect } from "react";
import CategoryItemOne from "./ui/CategoryItemOne.js";
import CategoryItemTwo from "./ui/CategoryItemTwo.js";
import CategoryItemThree from "./ui/CategoryItemThree.js";
import "./CategorySection.css";

const CategorySection = ({ list, category, popular }) => {
  const [contentsMapped, setContentsMapped] = useState([]);
  useEffect(() => {
    let contentsMapped;
    if (popular) {
      if (category === "peliculas" || category === "series") {
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
