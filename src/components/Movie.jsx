import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Log in to save a movie",
        icon: "error",
      });
      // await Toast.fire({
      //   icon: 'success',
      //   title: item?.title || item?.original_name
      // })
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'green',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })


  return (
    <div className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {item?.backdrop_path ? (
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
      ) : (
        <img
          className="w-full h-[150px] block"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        {item?.first_air_date ? (
          <Link to={`/series/${item?.id} `}>
            <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {item?.original_name}
            </p>
          </Link>
        ) : (
          <Link to={`/details/${item?.id} `}>
            <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {item?.title}
            </p>
          </Link>
        )}

        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
