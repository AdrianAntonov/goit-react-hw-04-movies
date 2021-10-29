import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import * as DataFetch from "../../services/tmdb-api";
import styles from "./HomePage.module.css";

function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    DataFetch.fetchingTrendingMovies().then((res) => setMovies(res.results));
  }, []);

  return (
    <div className={styles.homepage}>
      <h2 className={styles.heading}>Trending today</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink
              className={styles.link}
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
