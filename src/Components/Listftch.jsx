import React, { useEffect, useState } from "react";
import { movie } from "./Api3";
import { Link } from "react-router-dom";

const Listftch = ({param}) => {
  const [movei, setMovie] = useState([]);

  useEffect(() => {
    movie(param).then((res) => setMovie(res.data.results));
  }, []);
  return (
    <div>
      <section class=" bg-black body-font">
        <h2 className="text-white p-5 font-bold text-2xl pt-16">MOVIES</h2>
        <div class="container px-5 py-10  rounded-xl mx-auto">
          <div class="flex flex-wrap -m-4">
            {movei.slice(0, 4).map((item) => (
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
                  <h2 class="text-rose-600 title-font text-lg font-bold">
                    {item.title}
                  </h2>
                  <p class="mt-1 text-rose-200">Ratings:{item.vote_average}</p>
              <Link to={'/movies'}>      <button                  className="bg-rose-600 mt-2 hover:bg-black text-white text-sm p-2 shadow-lg shadow-rose-800 rounded-lg"
                >
                  Watch trailer
                </button></Link>
              </div></div>
            ))}</div>
        
          <div className="h-96 w-full mx-auto  hidden py-10 px-5 " id="open">
            <h2 className="font-extrabold text-3xl p-10 text-rose-700">
              There are currently no shows
            </h2>
            <p className="text-lg font-light text-white">Watch on Youtube</p>
            <a
              className="text-rose-300 underline text-sm text-bold"
              href="https://www.youtube.com/watch?v=kceO0BuiygI"
              target="_blank"
            >
              Watch now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listftch;
