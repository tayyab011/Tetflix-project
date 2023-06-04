import { useEffect, useState } from "react";
import { fetchData } from "./Api";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { Link } from "react-router-dom";

const Listfrech = ({ title, param }) => {
  const [list, setList] = useState([]);
  const [trailer, setTrailer] = useState('');
  useEffect(() => {
    fetchData(param).then((res) => setList(res.data.results));
  }, []);
  
  return (
    <section class=" bg-black body-font">
      <h2 className="text-white p-5 font-bold text-2xl pt-16">Discover</h2>
      <div class="container px-5 py-10  rounded-xl mx-auto">
        <div class="flex flex-wrap -m-4">
          {list.slice(0, 4).map((item) => (
            <div class="lg:w-1/4 md:w-1/2 shadow-lg mb-16 rounded-xl  shadow-rose-700 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  class="object-cover object-center w-full h-full block"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                />
              </a>
              <div class="mt-4">
                <h3 class="text-white text-xs tracking-widest title-font mb-1">
                  Air: {item.release_date}
                </h3>
                <h2 class="text-rose-500 title-font text-lg font-bold">
                  {item.title}
                </h2>
                <p class="mt-1 text-rose-200">Ratings:{item.vote_average}</p>
                <Link to={'/discover'}>
                  <button className="bg-rose-600 mt-2 hover:bg-black text-white text-sm p-2 shadow-lg shadow-rose-800 rounded-lg">
                    Watch trailer
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listfrech;
