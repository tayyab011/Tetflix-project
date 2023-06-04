import { useEffect, useState } from "react";
import { fetchData } from "./Api";
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer";

const Listfrech = ({ title, param }) => {
  const [list, setList] = useState([]);
  const [trailer, setTrailer] = useState('');
  useEffect(() => {
    fetchData(param).then((res) => setList(res.data.results));
  }, []);


    const opts = {
      height: "400",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

  const handleClick =(movie)=>{
    if(trailer){
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    
    }else{
      movieTrailer(movie?.name || movie?.title || movie?.original_title || '').then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailer(urlParams.get('v'))
      }).catch((error)=>console.log(error))
    }

  }
  
  const closeBox =()=>{
    if(trailer){
      setTrailer('')

    }}

  console.log(list);


  return (
    <>
      <section class=" bg-black body-font">
        <h2 className="text-white p-5 font-bold text-2xl pt-16">Discover</h2>
        <div class="container px-5 py-10  rounded-xl mx-auto">
          <div class="flex flex-wrap -m-4">
            {list.map((item) => (
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
                  <h2 class="text-rose-700 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p class="mt-1 text-rose-200">Ratings:{item.vote_average}</p>
                  {/* The button to open modal */}
                  <label
                    htmlFor="my-modal-5"
                    className="btn bg-rose-600 mt-4 shadow-lg text-white shadow-rose-900 hover:bg-black"
                    onClick={() => handleClick(item)}
                  >
                    Open Trailer
                  </label>
                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box w-11/12 bg-gray-950 shadow-xl shadow-rose-900 max-w-5xl">
                      {trailer && <Youtube videoId={trailer} opts={opts} />}
                      <div className="modal-action">
                        <label
                          htmlFor="my-modal-5"
                          className="btn bg-rose-600 shadow-lg text-white shadow-rose-900
                           hover:bg-transparent"
                          onClick={() => closeBox()}
                        >
                          Close Trailer
                        </label>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Listfrech;
