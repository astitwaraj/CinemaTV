export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const TRAILER = "https://api.themoviedb.org/3/movie/";
export const SIMILAR_MOVIES = "https://api.themoviedb.org/3/movie/";
export const DISPLAY_VID = "https://www.youtube.com/embed/";
export const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";
export const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/";
export const LANG_ARR = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "hindi",
    name: "Hindi",
  },
  {
    id: "japanese",
    name: "Japanese",
  },
];

export const SEARCH = "https://api.themoviedb.org/3/search/movie?query=";
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

