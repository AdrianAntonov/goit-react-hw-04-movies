import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as DataFetch from "../../../services/tmdb-api";
import styles from "./MovieReviews.module.css";

function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    DataFetch.fetchingReviews(moviesId).then((response) => {
      setReviews(response.results);
    });
  }, [moviesId]);

  return (
    <div className={styles.reviews}>
      {reviews.length > 0 ? (
        reviews.map((item) => (
          <div key={item.id} className={styles.reviewCard}>
            <ul>
              <li className={styles.author}>Author: {item.author}</li>
              <p className={styles.content}>{item.content}</p>
            </ul>
          </div>
        ))
      ) : (
        <h4>No reviews</h4>
      )}
    </div>
  );
}
export default MovieReviews;
