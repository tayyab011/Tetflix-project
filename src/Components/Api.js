import axios from "axios";
const URL = "https://api.themoviedb.org/3";
const API_KEY = "28c5a5bb5ae830823097ffb31f8a685e";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  popular: "movie/popular",
};
export const fetchData = (param) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=28c5a5bb5ae830823097ffb31f8a685e`,
    {
      params: {
        append_to_response: "videos",
      },
    }
  );
};
