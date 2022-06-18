import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdDeleteForever } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WatchedMovies = () => {

    const { user } = UserAuth();
    const [movies, setMovies] = useState([]);
  
    const slideLeft = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  
    useEffect(() => {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        setMovies(doc.data()?.watchedShows);
      });
    }, [user?.email]);
  
    const movieRef = doc(db, "users", `${user?.email}`);
    const deleteMovie = async (passedID) => {
      try {
          const final = movies.filter((item)=> item.id !== passedID)
          await updateDoc(movieRef, {
              watchedShows: final,
          });
          await Toast.fire({
            icon: "error",
            // title: details?.original_name,
            text: "Deleted"
          });
      } catch (err) {
        console.log(err);
      }
    };
  
    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      iconColor: "red",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  
    return (
        <>
          <h2 className="text-white font-bold md:text-xl p-4 ">Watched Movies and TV Shows {user?.displayName}</h2>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={slideLeft}
              size={30}
              className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            />
            <div
              id={"slider"}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {movies?.map((item, id) => (
                <div
                  key={id}
                  className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                >
                  <img
                    className="w-full h-auto block"
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt={item?.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <Link to={`/details/${item?.id} `}>
                    <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                      {item?.title}
                    </p>
                    </Link>
                    <p
                      onClick={() => {
                        deleteMovie(item.id);
                      }}
                      className="absolute text-gray-300 top-4 right-4"
                    >
                      <MdDeleteForever />
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              size={30}
              className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            />
          </div>
        </>
      );
    };

export default WatchedMovies