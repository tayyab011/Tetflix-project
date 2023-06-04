import axios from "axios";




export const movie =(param)=>{
    return axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=28c5a5bb5ae830823097ffb31f8a685e`
    );
}