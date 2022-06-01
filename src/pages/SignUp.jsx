import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/7d1bedd2-5c26-416f-a7b6-ce18b2cf6b48/KE-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form>
                <input type="email" className="" placeholder="email" autoComplete="email" />
                <input
                  type="password"
                  className=""
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold ">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
