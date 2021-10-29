import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as DataFetch from "../../services/tmdb-api";
import styles from "./MovieCast.module.css";
import photo from "../../utils/no-image-available.jpg";

function MovieCast() {
  const { moviesId } = useParams();

  const [cast, setCast] = useState();

  useEffect(() => {
    DataFetch.fetchingCast(moviesId).then((response) => {
      setCast(response.cast);
    });
  }, [moviesId]);

  const imageURL = `https://image.tmdb.org/t/p/w300/`;

  return (
    <div className={styles.cast}>
      {cast &&
        (cast.length > 0 ? (
          cast.map((item) => (
            <div key={item.id} className={styles.castCard}>
              <img
                src={`${imageURL}${item.profile_path}` ?? photo}
                alt={item.name}
                className={styles.castImage}
              />
              <ul>
                <li style={{ fontWeight: "bold" }}>{item.name}</li>
              </ul>
              <p className={styles.castCharacter}>
                Character: {item.character}
              </p>
            </div>
          ))
        ) : (
          <h4>No information</h4>
        ))}
    </div>
  );
}
export default MovieCast;
