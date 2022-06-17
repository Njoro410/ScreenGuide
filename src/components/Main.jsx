import React, { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Main = () => {
  const [movie, setMovies] = useState({});
  const [open, setOpen] = useState(false);


  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results[Math.floor(Math.random() * (response.data.results).length)]);
    });
  }, []);
  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };


  return (
    <div className="w-full h-[550px] text-white">
      {open && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
          {movie?.id && <Modal name={movie?.title} id={movie?.id} closeModal={setOpen} />}
        </div>
      )}

      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>

        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <a
              onClick={() => {
                setOpen(true);
              }}
              type="button"
              className="border bg-gray-200 text-black border-gray-300 py-2 px-5"
            >
              Play Trailer
            </a>

            <Link to={`/details/${movie?.id} `}>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                See More
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
