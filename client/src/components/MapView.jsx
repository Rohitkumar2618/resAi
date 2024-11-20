import {
  RiBuildingLine,
  RiMenu2Line,
  RiSearch2Line,
  RiStarFill,
  RiStarLine,
} from "@remixicon/react";
import Gmap from "./Gmap";
import DataI from "../assets/comments.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const MapView = () => {
  const { city, area, climateType } = useSelector((state) => state.mapTopBar);
  const data = [
    { name: "Hydrebad", tag: "Sample" },
    { name: "Kerala" },
    { name: "Gosaba" },
    { name: "Rajasthan" },
    { name: "Pune", tag: "Sample" },
    { name: "Tehri" }
  ];

  const [favorites, setFavorites] = useState(Array(data.length).fill(false));

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };


  const renderContent = () => {
    return <Gmap />
  };

  return (
    <div className="h-screen flex">
      {/* Left Panel - Locations List */}
      <div className="w-[350px] border-r p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[17px] font-[400] ml-3">
            Your Locations in {city}
          </h2>
          <div className="flex gap-2">
            <button className="p-2">
              <span className="sr-only">Filter</span>
              <RiMenu2Line className="text-gray-500 w-[18px]" />
            </button>
            <button className="p-2">
              <RiSearch2Line className="text-gray-500 w-[20px]" />
            </button>
          </div>
        </div>

        {/* Location List */}
        <div className="space-y-1 overflow-y-auto max-h-[400px]">
          {data.map((location, index) => (
            <div
              key={index}
              className="p-1 rounded-lg hover:bg-gray-50 flex items-start justify-between cursor-pointer"
            >
              <div className="flex items-start">
                <div className="rounded-full flex items-center justify-center mr-3">
                  <img src={DataI} alt="" className="w-[72px] h-[42px]" />
                </div>
                <div className="overflow-x-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-[350] whitespace-nowrap">
                      {location.name}
                    </span>
                    {location.tag && (
                      <span className="px-2 py-1 text-xs ml-10 bg-[#F0F2FF] text-purple-600 rounded-full">
                        {location.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-gray-500 mt-1">
                    Objective: Spends analysis on zonal & area office area
                    office area office area office
                  </p>
                </div>
              </div>
              <button>
                {favorites[index] ? (
                  <RiStarFill className="text-yellow-500" onClick={() => toggleFavorite(index)} />
                ) : (
                  <RiStarLine className="text-gray-500" onClick={() => toggleFavorite(index)} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Map */}
      <div className="flex-1 h-full">

        {renderContent()}
      </div>
    </div>
  );
};

export default MapView;