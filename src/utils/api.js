// import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_CINESCOUT_TMDB_TOKEN;
const authToken = `Bearer ${TMDB_TOKEN}`;

export const fetchDataFromApi = async (url, params) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: authToken,
    },
    params: params,
  };
  return fetch(BASE_URL + url, options)
    .then((response) =>response.json())
    .catch((err) => console.error(err));
};
