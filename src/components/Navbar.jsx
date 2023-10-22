import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="relative px-2 pt-2 md:px-4 md:pt-4 z-10">
      <div className="relative flex justify-between py-4 h-16 px-4 lg:px-8 text-white bg-slate-900 dark:bg-slate-800 dark:border dark:border-slate-700 dark:shadow-xl gap-6 lg:gap-8 rounded-md shadow-md">
        <div>
          {/* <h3 className="text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3> */}
          <h1 className="text-xl font-bold ">EATZY FOODS</h1>
        </div>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="SEARCH..."
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="md:w-64 w-32 px-3 py-1 border-2 border-indigo-400 rounded-md text-indigo-400 hover:text-indigo-300 hover:border-indigo-300 uppercase font-bold modal-trigger"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
