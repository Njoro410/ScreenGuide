import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Avatar, Dropdown } from "flowbite-react";

const NavbarTop = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-start p-4 z-[100] w-full fixed bg-transparent/30">
      <Link to={"/"}>
        <h1 className="text-green-400 text-4xl font-bold cursor-pointer">
          ScreenGuide
        </h1>
      </Link>
      <NavLink
        to="/"
        className={(navData) =>
          navData.isActive ? "text-green-400 " : "text-white"
        }
      >
        <button className="font-bold mx-1 px-5 hover:text-green-400">
          Movies
        </button>
      </NavLink>
      <NavLink
        to="/series"
        className={(navData) =>
          navData.isActive ? "text-green-400 " : "text-white"
        }
      >
        <button className=" font-bold mx-1 px-5 hover:text-green-400 ">
          TV Shows
        </button>
      </NavLink>
      <div className="ml-auto">
        {user?.email ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar alt="User settings"  img={user?.photoURL || `https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png`} rounded={true} />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Link to={"/account"}>
              <Dropdown.Item>My Collection</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <div>
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive ? "text-green-400 " : "text-white"
              }
            >
              <button className=" px-4 hover:text-green-400">Sign In</button>
            </NavLink>
            <Link to={"/register"}>
              <button className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded cursor-pointer text-white ">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarTop;
