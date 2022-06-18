import axios from "axios";
import React, { useEffect, useState } from "react";

const Modal = ({ closeModal, id, name }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=56fbaac7fd77013cc072d285a17ec005&language=en-US`
      )
      .then((response) => {
        setVideo(response.data.results);
        // console.log(response.data);
      });
  }, []);
  return (
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen   ">
      <div className="flex h-screen justify-center items-center">
        <div className="p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-transparent rounded-lg shadow ">
            <div className="flex justify-between items-start p-4 rounded-t border-b">
              <h3 className="text-xl font-semibold text-gray-200 ">{name}</h3>
              <button
                onClick={() => closeModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 flex gap-5 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
              {video &&
                video?.map((item,i) => {
                  if (
                    item?.type == "Trailer" 
                    // item?.name == "Official Trailer"
                  ) {
                    return <iframe key={i}
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${item?.key}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>;
                    console.log(item?.key);
                  } 
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
