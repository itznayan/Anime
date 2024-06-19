import carosoul from "./data/Carosoul";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import { useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carosoul.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === carosoul.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div>
              <h1 className="max-w-2xl mb-4  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                {carosoul[[currentIndex]].title}
              </h1>
              <p className="max-w-2xl mb-6 overflow-hidden h-36 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {carosoul[[currentIndex]].description}
              </p>
            </div>
          </div>
          <div className="max-lg:block hidden ">
            <img
              className="w-full h-full duration-300 bg-center bg-cover rounded-2xl"
              src={carosoul[currentIndex].url}
              alt=""
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${carosoul[[currentIndex]].url})`,
            }}
            className="w-full h-full duration-300 bg-center bg-cover rounded-2xl col-span-1 md:mt-0 md:col-span-2 md:flex lg:mt-0 lg:col-span-5 lg:flex "
          ></div>
          <div className="flex lg:w-96  space-x-2">
            <button className="bg-blue-500 mt-2 group font-semibold hover:font-normal  hover:bg-blue-800 text-black hover:text-white p-2 hover:tracking-[2px] duration-300">
              Watch Now
              <span className="material-symbols-outlined relative group-hover:rotate-[180deg] duration-300 top-1.5 ">
                play_arrow
              </span>
            </button>
            <button className=" bg-black  mt-2 hover:bg-white group hover:text-black text-white p-2 hover:tracking-[2px] duration-300">
              Details
              <span className="material-symbols-outlined relative group-hover:rotate-[180deg] duration-300 top-1.5 ">
                chevron_right
              </span>
            </button>
          </div>
        </div>
        <div className="justify-start mb-2 pb-10  px-40 flex space-x-8">
          <p
            onClick={handlePrevClick}
            className="bg-black cursor-pointer rounded-lg scale-125"
          >
            <img src={left} alt="left" />
          </p>
          <p
            onClick={handleNextClick}
            className=" cursor-pointer bg-black rounded-lg scale-125"
          >
            <img src={right} alt="right" />
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
