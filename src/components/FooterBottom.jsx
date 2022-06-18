import { Footer } from "flowbite-react";
import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <Footer className="flex flex-col bg-transparent/20 absolute">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="ScreenGuide" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-green-400"
            icon={FaFacebook}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-green-400"
            icon={FaInstagram}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-green-400"
            icon={FaTwitter}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-green-400"
            icon={FaGithub}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-green-400"
            icon={FaDribbble}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterBottom;
