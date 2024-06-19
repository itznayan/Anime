import { useState } from "react";
import Header from "./Header";
import detail from "./data/details";

const DetailSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="flex p-14 ">
        <div className="">
          <img
            className="rounded-xl shadow-lg"
            src={detail[currentIndex].url}
            alt=""
          />
        </div>
        <div className="py-10 px-14 w-2/3 h-10  ">
          <h2 className="text-5xl font-semibold text-white">
            {detail[currentIndex].title}
          </h2>
          <div className="p-2 flex space-x-1">
            <button className="text-black bg-[#FFFFFF] px-2 font-semibold rounded-l-sm">
              R
            </button>
            <button className="text-black bg-[#FFBADE] px-2 font-semibold rounded-l-sm">
              HD
            </button>
            <button className="text-black bg-[#B0E3AF] px-2 font-semibold rounded-l-sm">
              CC
            </button>
          </div>

          <div className="space-x-4">
            <button className="mt-10 text-white bg-purple-800 p-2 rounded-lg font-medium hover:text-black hover:bg-white duration-500">
              Watch Now
            </button>
            <button className="mt-10 hover:text-white bg-white text-black p-2 rounded-lg font-medium hover:bg-black  duration-500">
              Details
            </button>
          </div>

          <p className="mt-10 overflow-hidden">
            {detail[currentIndex].description}
          </p>
        </div>
        <div className="mt-24">
          <div>
            <p className="p-2 text-white">
              Japanese: {detail[currentIndex].Japanese}
            </p>
            <p className="p-2 text-white">
              Aired: {detail[currentIndex].Aired}
            </p>
            <p className="p-2 text-white">
              Duration: {detail[currentIndex].Duration}
            </p>
            <p className="p-2 text-white">
              Status: {detail[currentIndex].Status}
            </p>
            <p className="p-2 text-white">
              Score: {detail[currentIndex].Score}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
