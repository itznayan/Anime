import carosoul from "./data/Carosoul";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import { useState } from "react";
import title from "./data/Carosoul";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slidesIndex) => {
    setCurrentIndex(slidesIndex);
  };
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
              <p className="max-w-2xl mb-6 overflow-hidden font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {carosoul[[currentIndex]].description}
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${carosoul[[currentIndex]].url})`,
            }}
            className="w-full h-full duration-300 bg-center bg-cover rounded-2xl col-span-1 md:mt-0 md:col-span-2 md:flex lg:mt-0 lg:col-span-5 lg:flex "
          ></div>

          <div className="flex w-96  space-x-2">
            <button className="bg-blue-500 font-semibold hover:font-normal  hover:bg-blue-800 text-black hover:text-white p-2 hover:tracking-[2px] duration-300">
              Watch Now
            </button>
            <button className="bg-black  hover:bg-white hover:text-black text-white p-2 hover:tracking-[2px] duration-300">
              Details
            </button>
          </div>
        </div>
        <div className="justify-start px-40 p-2 flex space-x-8">
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
