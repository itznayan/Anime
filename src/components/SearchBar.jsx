import React, { useState } from "react";
import Search from "../assets/Serach.svg";
const SearchBar = () => {
  const [miniSearch, setMiniSearch] = useState(false);

  const handleMiniSearch = () => {
    setMiniSearch(!miniSearch);
  };
  return (
    <>
      <button
        onClick={handleMiniSearch}
        className="cursor-pointer mt-4 sm:hidden relative bottom-2  invert p-2 rounded-e hover:tracking-[2px] active:text-red-500 duration-500 "
      >
        <img className="relative right-6 scale-125" src={Search} alt="" />
      </button>

      {miniSearch && (
        <div className="relative bottom-6 right-24  mt-4 bg-black/30">
          <input type="text" />
        </div>
      )}
    </>
  );
};

export default SearchBar;
