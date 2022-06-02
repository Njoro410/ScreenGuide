import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/7d1bedd2-5c26-416f-a7b6-ce18b2cf6b48/KE-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Favourites</h1>
        </div>
      </div>
      <SavedMovies/>
    </>
  );
};

export default Account;
