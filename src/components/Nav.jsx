import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="h-[12vh] w-full flex justify-between bg-primary py-2 px-4">
      <div className="flex gap-4">
        <div>
          <img src="./images/logo.png" alt="mmra logo" className="w-[4rem]" />
        </div>
        <Link
          to={"/"}
          className="text-2xl font-bold flex justify-center items-center text-white">
          MMRA
        </Link>
      </div>
     
    </div>
  );
}

export default Nav;
