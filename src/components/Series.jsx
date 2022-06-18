import React, { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import { Link } from "react-router-dom";
import SeriesModal from "./SeriesModal";


const Series = () => {
  const [show, setSeries] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(requests.requestTrendingShows).then((response) => {
      setSeries(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    });
  }, []);
  // console.log(show);

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
          {show?.id && (
            <SeriesModal
              name={show?.original_name}
              id={show?.id}
              closeModal={setOpen}
            />
          )}
        </div>
      )}
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`}
          alt={show?.original_name}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {show?.original_name}
          </h1>
          <div className="my-4">
            <button
              onClick={() => {
                setOpen(true);
              }}
              type="button"
              className="border bg-gray-200 text-black border-gray-300 py-2 px-5"
            >
              Play Trailer
            </button>

            <Link to={`/series/${show?.id} `}>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                See More
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {show?.release_date}
          </p>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(show?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Series;
