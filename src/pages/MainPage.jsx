import React from "react";
import News from "../components/News";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <div className="bg-gray-100 h-[10vh] w-full mt-4 rounded-2xl flex justify-between py-2 px-2">
        <Link to="/createNews">
          <button className="primary flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Create News
          </button>
        </Link>

        <div className="w-1/2">
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="search..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="primary flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search{" "}
            </button>
          </form>
        </div>
      </div>
      <News />
    </div>
  );
}

export default MainPage;
