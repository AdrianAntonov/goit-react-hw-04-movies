import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as DataFetch from "../../services/tmdb-api";
import styles from "./MovieCast.module.css";

function MovieCast() {
  const { moviesId } = useParams();

  const [cast, setCast] = useState();
  // const location = useLocation();

  useEffect(() => {
    DataFetch.fetchingCast(moviesId).then((response) => {
      setCast(response.cast);
    });
  }, [moviesId]);
  // console.log(location.state.from);

  return (
    <div className={styles.casting}>
      {/* <h3>Casting</h3> */}
      {cast &&
        cast.map((item) => (
          <div key={item.id} className={styles.castingCard}>
            <div className={styles.image}>
              <img src={item.profile_path} alt={item.name} />
            </div>
            <ul>
              <li>{item.name}</li>
            </ul>
            <p>Character: {item.character}</p>
          </div>
        ))}
    </div>
  );
}
export default MovieCast;
