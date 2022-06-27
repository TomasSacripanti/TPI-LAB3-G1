import { useState, useEffect, useContext, useMemo } from "react";
import CategorySection from "../components/CategorySection";
import ThemeContext from "../context/ThemeContext";

const PopularContent = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [popularMangas, setPopularMangas] = useState([]);
  const { theme } = useContext(ThemeContext);
  const APIURLMOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=d6da0d93f17f70ee583753bf3e117c23&language=en-US&page=1`;
  const APIURLSERIES = `https://api.themoviedb.org/3/tv/popular?api_key=d6da0d93f17f70ee583753bf3e117c23&language=en-US&page=1`;
  const APIURLANIMES = `https://api.jikan.moe/v4/top/anime`;
  const APIURLMANGAS = `https://api.jikan.moe/v4/top/manga`;

  const styles = useMemo(() => {
    if (theme === "dark") {
      return {
        classes: "category-title category-title-dark",
      };
    } else {
      return {
        classes: "category-title category-title-light",
      };
    }
  }, [theme]);

  useEffect(() => {
    const retrieveData = async () => {
      let moviesResponse = await fetch(APIURLMOVIES);
      let moviesData = await moviesResponse.json();
      setPopularMovies(moviesData.results);
      let seriesResponse = await fetch(APIURLSERIES);
      let seriesData = await seriesResponse.json();
      setPopularSeries(seriesData.results);
      const tempAnime = await fetch(APIURLANIMES).then((res) => res.json());
      setPopularAnimes(tempAnime.data.slice(0,20));
      const tempManga = await fetch(APIURLMANGAS).then((res) => res.json());
      setPopularMangas(tempManga.data.slice(0,20));
    };
    retrieveData();
  }, [APIURLMOVIES, APIURLSERIES, APIURLANIMES, APIURLMANGAS]);

  return (
    <>
      {/* <h3 className={styles}>Animes populares</h3>
      <CategorySection list={} category="animes" />
      <h3 className={styles}>Mangas populares</h3>
      <CategorySection list={} category="mangas" /> */}
      <h3 className={styles.classes}>Series populares</h3>
      <CategorySection list={popularSeries} category="series" popular={true} />
      <h3 className={styles.classes}>Peliculas populares</h3>
      <CategorySection
        list={popularMovies}
        category="peliculas"
        popular={true}
      />
      <h3 className={styles.classes}>Animes populares</h3>
      <CategorySection list={popularAnimes} category="animes" popular={true} />

      <h3 className={styles.classes}>Mangas populares</h3>
      <CategorySection list={popularMangas} category="mangas" popular={true} />
    </>
  );
};

export default PopularContent;
