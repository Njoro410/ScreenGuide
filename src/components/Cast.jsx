import React, { useState, useEffect } from "react";
import axios from "axios";

const Cast = (props) => {
  const [cast, setCast] = useState([]);
  const sid = props.id;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${sid}/credits?api_key=56fbaac7fd77013cc072d285a17ec005&language=en-US`
      )
      .then((response) => {
        setCast(response.data.cast);
        // console.log(response.data.cast);
      });
  }, []);

  // console.log(sid);
  return (
    <div className="absolute md:flex flex-wrap gap-3 justify-center mt-12 ">
      {cast &&
        cast.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-500 sm:w-[240px] lg:w-[280px]">
            <img
              className="rounded-t-lg "
              src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {item?.original_name}
              </h5>

              <p className="mb-3 font-normal text-gray-400">
                {item?.character}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cast;
