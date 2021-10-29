import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";
import styles from "./App.module.css";

const HomePage = lazy(() =>
  import("./components/HomePage" /*webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage" /*webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("./components/MoviesPage" /*webpackChunkName: "movies-page" */)
);

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
