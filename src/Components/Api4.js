import axios from "axios";

export const upcoming = (param) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=28c5a5bb5ae830823097ffb31f8a685e`
  );
};
