import React, { startTransition, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import Lottie, { LottiePlayer } from "lottie-react";
import hamburger from "../assets/hamburger.json";
import together from "../assets/together.svg";
import random from "../assets/random.svg";
import com from "../assets/com.svg";
import Search from "../assets/Serach.svg";
import SearchBar from "./SearchBar";
const Header = () => {
  const AiAnimeRef = useRef(null);
  const [bool, setBool] = useState(false);

  const handleBurger = () => {
    setBool(!bool);
  };

  return (
    <>
      <nav className="h-20 font-[500] text-black bg-white  w-full justify-between flex">
        <ul className="flex space-x-8 ">
          <li className="scale-[3] text-black ">
            <div className=" size-20">
              <Lottie
                onClick={handleBurger}
                loop={bool}
                autoPlay={false}
                animationData={hamburger}
                lottieRef={AiAnimeRef}
                onLoopComplete={() => AiAnimeRef.current.pause()}
              />
            </div>
            {bool && (
              <aside className=" backdrop-blur-sm z-10  shadow-sm relative left-8 bottom-6  w-full h-full">
                <ul className="text-[6px] bg-white p-1 ">
                  <li className="mb-2 cursor-pointer">Home</li>
                  <li className="mb-2 cursor-pointer">Subbed Anime</li>
                  <li className="mb-2 cursor-pointer">Dubbed Anime</li>
                  <li className="mb-2 cursor-pointer">Most Popular</li>
                  <li className="mb-2 cursor-pointer">TV Series</li>
                  <li className="mb-2 cursor-pointer">Top Rated</li>
                </ul>
              </aside>
            )}
          </li>

          <li className="h-30 mt-3  ml-4 w-60">
            <img
              className="scale-75 relative right-6 xl:scale-100 md:scale-90"
              src={logo}
              alt=""
            />
          </li>
          <div className="sm:hidden">
            <SearchBar />
          </div>
          <li className=" hidden sm:block">
            <input
              className="text-white sm:w-24 p-2 mt-4 h-10 xl:w-60 rounded-md shadow-2xl max-sm:block"
              type="text"
              placeholder="Enter Anime Name"
            />

            <button className="max-md:hidden text-white  bg-black p-2 rounded-e hover:tracking-[2px] active:text-red-500 duration-500">
              Filter
            </button>

            <button className="cursor-pointer  invert p-2 rounded-e hover:tracking-[2px] active:text-red-500 duration-500 ">
              <img className="relative top-2 scale-125" src={Search} alt="" />
            </button>
          </li>

          <li className="hidden 2xl:block py-6">Social Media Gap</li>

          <div className="flex space-x-8 -mt-2">
            <li className="group hidden cursor-pointer lg:block ">
              <img
                className=" ml-8 size-10 mt-4 invert group-hover:invert group-hover:bg-black duration-500 rounded-full"
                src={together}
                alt="watch together"
              />
              <p className=" group-hover:text-purple-900 duration-300 ">
                WatchTogether
              </p>
            </li>

            <li className="cursor-pointer  hidden xl:block group ">
              <img
                className="invert ml-2 size-10 mt-4 group-hover:bg-black duration-500 rounded-full"
                src={random}
                alt="random"
              />
              <p className="  group-hover:text-purple-900  duration-300">
                Random
              </p>
            </li>

            <li className=" cursor-pointer  hidden lg:block group">
              <img
                className="invert ml-4 size-10 mt-4 group-hover:bg-black duration-500 rounded-xl"
                src={com}
                alt="community"
              />
              <p className=" group-hover:text-purple-900  duration-300">
                Community
              </p>
            </li>
          </div>
        </ul>
        <ul className="relative right-10">
          <li className="cursor-pointer  bg-gradient-to-tr mr-8 from-purple-700 via-purple-900 to-purple-950 w-20 p-2 h-10 mt-4 rounded-lg text-center text-white font-[400] ">
            Login
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
