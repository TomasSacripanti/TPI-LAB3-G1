import { useState, useEffect } from "react";
import CategoryItemOne from "./CategoryItemOne";
import CategoryItemTwo from "./CategoryItemTwo";
import "./CategorySection.css";

const CategorySection = ({ list, category }) => {
  const [reviewsMapped, setReviewsMapped] = useState([]);
  useEffect(() => {
    let reviewsMapped;
    if (
      category === "animes" ||
      category === "series" ||
      category === "mangas"
    ) {
      reviewsMapped = list.map(review => {
        return <CategoryItemOne title={review.title} chaptersCount={review.chaptersCount} comment={review.comment} />;
      })
    } else {
      reviewsMapped = list.map(review => {
        return <CategoryItemTwo title={review.title} director={review.director} duration={review.duration} comment={review.comment} />;
      })
    }
    setReviewsMapped(reviewsMapped);
  }, [list, category]);

  return <div className="category-container">{reviewsMapped}</div>;
};

export default CategorySection;
