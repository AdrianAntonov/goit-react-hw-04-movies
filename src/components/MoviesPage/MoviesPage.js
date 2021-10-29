// import { Link, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import * as DataFetch from "../../services/tmdb-api";
import Searchbar from "../Searchbar";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  let { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  console.log(location.search);

  const handleSearch = (text) => {
    if (text.trim() === "") {
      history.push({
        ...location,
        pathname: "/",
      });
      return;
    }
    history.push({
      ...location,
      search: `query=${text}`,
    });
  };

  const name = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    DataFetch.fetchingSearchText(name).then((response) => {
      // console.log(response);
      setSearchResult(response.results);
    });
  }, [location.search, name]);

  return (
    <div className={styles.movies}>
      {/* <h3>MoviesPage</h3> */}
      <Searchbar handleSearch={handleSearch} />
      <ul>
        {searchResult &&
          searchResult.map((result) => (
            <li key={result.id}>
              <Link
                to={{
                  pathname: `${url}/${result.id}`,
                  state: {
                    from: {
                      location,
                      label: "Back to search results",
                    },
                  },
                }}
                className={styles.link}
              >
                {result.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
