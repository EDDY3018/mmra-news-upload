import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="h-[12vh] w-full flex justify-between bg-primary py-2 px-4">
      <div className="flex gap-4">
        <div>
          <img src="./images/logo.png" alt="mmra logo" className="w-[4rem]" />
        </div>
        <Link to={'/'} className="text-2xl font-bold flex justify-center items-center text-white">
          MMRA
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex gap-2">
          <div className="text-lg text-secondary flex items-center">
            User@gmail.com
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white drop-shadow-md ">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
