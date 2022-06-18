import axios from "axios";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import SeriesCast from "./SeriesCast";
import SeriesModal from "./SeriesModal";
import Swal from "sweetalert2";
import { db } from "../Firebase";
import { FaCheck, FaHeart } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const SeriesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: details.id,
          title: details.original_name,
          img: details.backdrop_path,
        }),
      });
       Toast.fire({
        icon: "success",
        title: details?.original_name,
        text: "Marked as favourite",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Log in to save a movie",
        icon: "error",
      });
    }
  };

  const watchedMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        watchedShows: arrayUnion({
          id: details.id,
          title: details.original_name,
          img: details.backdrop_path,
        }),
      });
       Toast.fire({
        icon: "success",
        title: details?.original_name,
        text: "set as watched",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Log in to save a movie",
        icon: "error",
      });
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "green",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=56fbaac7fd77013cc072d285a17ec005&language=en-US`
      )
      .then((response) => {
        setDetails(response.data);
      });
  }, []);

  const timeConvert = (n) => {
    var hours = n / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h" + rminutes + "m";
  };

  const percent = (vote) => {
    var p = (vote * 100) / 10;
    return Math.floor(p);
  };

  return (
    <div className="w-full h-[650px] text-white">
      <div className="w-full h-full">
        <div className="bg-black/90 fixed top-0 left-0 w-full h-screen"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`}
          alt={details?.original_name}
        />
        <div className="absolute w-full top-[10%] p-4 md:p-8">
          <div className="grid md:grid-cols-3  gap-0 ">
            <div className="flex justify-center md:col-span-1 ">
              <img
                className="h-[80%] rounded"
                src={`https://image.tmdb.org/t/p/w500/${details?.poster_path}`}
                alt={details?.poster_path}
              />
            </div>
            <div className="md:col-span-2">
              <a href={details?.homepage}>
                <p className="text-3xl text-green-400 md:text-5xl font-bold mt-12">
                  {details?.original_name}(
                  {details?.first_air_date?.substring(0, 4)}){" "}
                  {details.created_by ? (
                    <span className="text-sm text-gray-400 font-thin italic">
                      by {details?.created_by?.map((item) => item?.name)}
                    </span>
                  ) : (
                    "unknown"
                  )}
                </p>
              </a>
              <p className="text-gray-400 text-lg italic">{details?.tagline}</p>
              <div className="flex flex-row gap-2">
                {details.genres?.map((item, index) => (
                  <div key={index}>
                    <p className="bg-green-900 px-2 py-0.5 rounded">
                      {item.name}
                    </p>
                  </div>
                ))}{" "}
                <p className="bg-green-900 px-2 py-0.5 rounded">
                  {timeConvert(details?.episode_run_time)}
                </p>
              </div>
              <div className="mt-5">
                <p>
                  {/* {details.production_countries?.map((item, index) => ( */}
                  {/* <div >
                        <p className="text-gray-400 text-lg">
                          {details?.status}•{details?.release_date}
                        </p>
                      </div> */}
                  {/* ))} */}
                </p>
              </div>
              <p className="text-gray-400"><span className="text-green-400">First aired:</span> {new Date(details?.first_air_date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</p>
              <div>
                <p className="text-3xl  font-bold my-2 text-green-400">
                  Overview
                </p>
                <p className="">{details?.overview}</p>
              </div>
              <div>
                <p className="text-3xl  font-bold my-2 text-green-400">
                  Networks
                </p>
                {details.networks?.map((item, index) => (
                  <div key={index} className="inline-block">
                    <img
                      className="h-8 rounded"
                      src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                      alt={details?.poster_path}
                    />
                  </div>
                ))}{" "}
              </div>
              <div className="flex gap-5">
                <div className="mt-5 font-bold bg-green-900 p-3 rounded-full w-32 text-center">
                  <p>{percent(details?.vote_average)}%-Like this</p>
                </div>

                <div className="mt-5 ">
                  <button
                    className="font-bold bg-green-900 p-3 rounded-full w-32 text-center hover:bg-green-700"
                    onClick={() => {
                      setOpen(true);
                    }}
                    type="button"
                  >
                    Watch Trailer
                  </button>
                  {open && (
                    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                      {details?.id && (
                        <SeriesModal
                          name={details?.original_name}
                          id={details?.id}
                          closeModal={setOpen}
                        />
                      )}
                    </div>
                  )}
                </div>
                <div className="mt-5" data-tip="Favourite">
                  <button
                    className="font-bold bg-green-900 p-4 rounded-full w-32 flex justify-center  hover:bg-green-700"
                    onClick={saveMovie}
                    type="button"
                  >
                    <FaHeart />
                  </button>
                </div>
                <div className="mt-5" data-tip="Watched">
                  <ReactTooltip type="info" effect="float" />
                  <button
                    className="font-bold bg-green-900 p-4 rounded-full w-32 flex justify-center  hover:bg-green-700"
                    onClick={watchedMovie}
                    type="button"
                  >
                    <FaCheck />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {details?.id && <SeriesCast id={details?.id} />}
      </div>
    </div>
  );
};

export default SeriesDetails;
