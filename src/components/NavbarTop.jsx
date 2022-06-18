import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

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
    // <Navbar fluid={true} rounded={false} className=" z-[100] w-full fixed">
    //   <Navbar.Brand href="https://flowbite.com/">
    //     <span className="self-center whitespace-nowrap text-red-600 text-4xl font-bold cursor-pointer">
    //       ScreenGuide
    //     </span>
    //   </Navbar.Brand>

    //   <div className="flex md:order-2  ">
    //     {user?.email ? (
    //       <Dropdown
    //         arrowIcon={false}
    //         inline={true}
    //         label={
    //           <Avatar
    //             alt="User settings"
    //             img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    //             rounded={true}
    //           />
    //         }
    //       >
    //         <Dropdown.Header>
    //           <span className="block text-sm">Bonnie Green</span>
    //           <span className="block truncate text-sm font-medium">
    //             name@flowbite.com
    //           </span>
    //         </Dropdown.Header>
    //         <Dropdown.Item>Dashboard</Dropdown.Item>
    //         <Dropdown.Item>Settings</Dropdown.Item>
    //         <Dropdown.Item>Earnings</Dropdown.Item>
    //         <Dropdown.Divider />
    //         <Dropdown.Item>Sign out</Dropdown.Item>
    //       </Dropdown>
    //     ) : (
    //       <>
    //         <Navbar.Link href="/login" >
    //           <p className="bg-red-500 border-spacing-4 hover:bg-red-700 px-6 py-2 rounded cursor-pointer text-white mx-3">Sign In</p>
    //         </Navbar.Link>
    //         <Navbar.Link href="/register" >
    //           <p className="bg-red-500 px-6 py-2 rounded hover:bg-cyan-700 cursor-pointer text-white">Sign Up</p>
    //         </Navbar.Link>
    //       </>
    //     )}

    //     <Navbar.Toggle />
    //   </div>
    //   <div className="mx-auto">
    //     <Navbar.Collapse>
    //       <Navbar.Link href="/navbars" active={true}>
    //         <p className="font-bold text-xl ">Movies</p>
    //       </Navbar.Link>
    //       <Navbar.Link href="/series">
    //         <p className="font-bold text-xl ">Tv Shows</p>
    //       </Navbar.Link>
    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>

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
              <Avatar alt="User settings" img={user?.photoURL} rounded={true} />
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
              <a className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded cursor-pointer text-white ">
                Sign Up
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarTop;
