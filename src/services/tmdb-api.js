const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "3d00b5cda13781525ff8e7abac21666c";

// `${BASE_URL}/${url}?api_key=${API_KEY}`

async function fetching(url = "", config = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchingTrendingMovies() {
  // return fetching("trending/movie/week");
  return fetching(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
}

export function fetchingMovieDetails(movieId) {
  // return fetching(`movie/${movieId}`);
  return fetching(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchingSearchText(text) {
  return fetching(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`);
}

export function fetchingCast(movieId) {
  return fetching(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchingReviews(movieId) {
  return fetching(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}

// Movie-Finder

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// https://api.themoviedb.org/3/movie/550?api_key=3d00b5cda13781525ff8e7abac21666c

// поиск кинофильма по ключевому слову на странице фильмов.
// FOR SEASRCH           query=""

// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//  GET   /trending/{media_type}/{time_window}
//                     movie          week

// запрос полной информации о фильме для страницы кинофильма.
// GET/movie/{movie_id}

// запрос информации о актёрском составе для страницы кинофильма.
// GET/movie/{movie_id}/credits

// запрос обзоров для страницы кинофильма.
// GET/movie/{movie_id}/reviews

//  BASE_URL = "https://api.themoviedb.org/3"
// API_KEY = "3d00b5cda13781525ff8e7abac21666c"
