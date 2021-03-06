import { useEffect, useState } from "react";
import {
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import * as DataFetch from "../../services/tmdb-api";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews.js/MovieReviews";
import styles from "./MovieDetailsPage.module.css";
import photo from "../../utils/no-image-available.jpg";

function MovieDetailsPage() {
  const { moviesId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    DataFetch.fetchingMovieDetails(moviesId).then((response) => {
      setMovieDetails(response);
    });
  }, [moviesId]);

  const { title, poster_path, vote_average, overview, genres, release_date } =
    movieDetails;

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : photo;

  return (
    <div className={styles.movieDetails}>
      {movieDetails && (
        <div>
          <button type="button" onClick={onGoBack} className={styles.back}>
            {/* &#8678; Go back */}
            {/* {location.state?.from?.label ?? "Back to Home"} */}
            {location.state?.from?.location?.pathname === "/movies"
              ? location.state?.from?.label
              : "Back to Home"}
          </button>
          <section className={styles.block}>
            <div className={styles.poster}>
              <img src={poster} alt={title} className={styles.posterImage} />
            </div>
            <div className={styles.info}>
              <h2>{title}</h2>
              <p>
                <span className={styles.text}>Release date:</span>
                {release_date}
              </p>
              <p>
                <span className={styles.text}>User score:</span>
                {`${vote_average * 10}%`}
              </p>
              <p>
                <span className={styles.text}>Overview</span>
              </p>
              <p style={{ marginTop: "5px" }}>{overview}</p>
              <div>
                <p className={styles.text}>Genres</p>
                <ul className={styles.list}>
                  {genres &&
                    genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
      <div className={styles.additional}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: {
                    location: location.state.from.location,
                    label: "Back to search results",
                  },
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: {
                    location: location.state.from.location,
                    label: "Back to search results",
                  },
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Route path={`${path}/cast`}>
        <MovieCast />
      </Route>
      <Route path={`${path}/reviews`}>
        <MovieReviews />
      </Route>
    </div>
  );
}

export default MovieDetailsPage;
