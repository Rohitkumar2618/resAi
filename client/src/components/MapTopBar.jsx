import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAll } from "../components/Redux/slices/mapTopBarSlice";
import {
  RiApps2AiLine,
  RiImportLine,
  RiMegaphoneLine,
  RiProgress6Line,
} from "@remixicon/react";
import MapViewI from "../assets/mist-line.png";
import { Plus } from "lucide-react";
import GraphI from "../assets/graph.png";
import SearchStar from "../assets/searchStar.png";

const MapTopBar = ({ setActiveTab, activeTab }) => {
  const dispatch = useDispatch();
  const { city, area, climateType } = useSelector((state) => state.mapTopBar);

  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [climates, setClimates] = useState([]);

  useEffect(() => {
    const cityData = [
      {
        name: "Hydrabad",
        areas: ["Place 1", "Place 2", "Place 3"],
        climateTypes: ["Flood", "Heat"],
      },
      {
        name: "Kerala",
        areas: ["Place 1", "Place 2", "Place 3"],
        climateTypes: ["Flood", "Heat"],
      },
      {
        name: "Rajasthan",
        areas: ["Place 1", "Place 2", "Place 3"],
        climateTypes: ["Flood", "Heat"],
      },
      // {
      //   name: "Shivajinagar",
      //   areas: ["Place 1", "Place 2", "Place 3"],
      //   climateTypes: ["Flood", "Heat"],
      // },
      {
        name: "Tehri",
        areas: ["Place 1", "Place 2", "Place 3"],
        climateTypes: ["Landslide"],
      },

    ];
    setCities(cityData);
    setAreas(cityData[0].areas);
    setClimates(cityData[0].climateTypes);
  }, []);

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    const foundCity = cities.find((c) => c.name === newCity);
    const areaList = foundCity ? foundCity.areas : areas;
    const foundClimate = climates.find((c) => c.name === newCity);
    const climateList = foundClimate ? foundClimate.climateTypes : climates;
    setAreas(areaList);
    setClimates(climateList);
    dispatch(updateAll({ city: newCity, area, climateType: "" }));
  };

  const handleAreaChange = (event) => {
    dispatch(updateAll({ city, area: event.target.value, climateType }));
  };
  const handleClimateTypeChange = (event) => {
    dispatch(updateAll({ city, area, climateType: event.target.value }));
  };

  return (
    <div>
      <div className="w-full border-b-2  ">
        <div className="flex items-start   rounded-lg p-4 ml-2  ">
          <div className="flex ">
            <div>
              <div className="w-[55px] h-[55px] bg-[#6A8ED4] rounded-md flex items-center justify-center  mr-4">
                <RiProgress6Line className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-[20px] font-[400]">ResSolv</h4>
              <p className="text-[14px] font-[300] text-[#828282] mt-2">
                ResSolv uses three decades of roof-top architecture, built
                environment, ground-truthing, and AI/ML-based
                classification to create a unique climate risk profile for each
                building.
              </p>
            </div>
          </div>
          <button className="flex items-center mt-6 gap-1 w-full max-w-fit rounded-full bg-indigo-500 text-white px-4 py-2  ">
            <Plus size={16} />
            Add Location
          </button>
        </div>

        <div className="flex items-center justify-between ml-2">
          <div className="flex items-center">
            {/* Model City Dropdown */}
            <div className="flex items-center gap-2 border-r-2 border-gray ml-4 pr-8">
              <span className="flex items-center text-[17px] font-[300] text-gray-600 gap-1">
                <RiApps2AiLine size={20} /> Model City:
              </span>
              <select
                className=" rounded-md  "
                value={city}
                onChange={handleCityChange}
              >
                {cities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Area Dropdown */}
            <div className="flex items-center gap-2 border-r-2  pl-1 pr-8">
              <span className="flex text-[17px] font-[300] text-gray-600 gap-1">
                <RiApps2AiLine size={20} /> Area:
              </span>
              <select
                className=" rounded-md  "
                value={area}
                onChange={handleAreaChange}
              >
                {areas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* Climate Event Type Dropdown */}
            <div className="flex items-center gap-2 border-r-2 border-gray pl-1 pr-8 ">
              <span className="flex text-[17px] font-[300] text-gray-600 gap-1">
                <RiApps2AiLine size={20} /> Climate Event Type:
              </span>
              <select
                className=" rounded-md px-3 py-1"
                value={climateType}
                onChange={handleClimateTypeChange}
              >
                <option key={`climate_${0}`} value={""}>
                  Select Climate
                </option>
                {climates.map((climate, index) => (
                  <option key={`climate_${index}`} value={climate}>
                    {climate}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Locations */}
            <div className="flex items-center gap-2  pl-1 pr-8">
              <span className="flex text-[17px] font-[300] text-purple-500 gap-1">
                <RiApps2AiLine size={20} /> Total Location:
              </span>
              <span className="text-purple-500 px-3 py-1">40</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-6 items-center  bottom-0 ml-2">
          <button
            onClick={() => setActiveTab("map")}
            className={`flex gap-2 px-4 py-2 ${activeTab === "map" ? "border-b-2 border-black" : "text-gray-600"
              }`}
          >
            <img src={MapViewI} alt="" className="w-5" />
            Map View
          </button>
          <button
            onClick={() => setActiveTab("insights")}
            className={`flex gap-2 px-4 py-2 ${activeTab === "insights"
              ? "border-b-2  border-black "
              : "text-gray-600"
              }`}
          >
            <RiMegaphoneLine /> Insights
          </button>
          <button
            onClick={() => setActiveTab("modelTrend")}
            className={`flex gap-2 px-4 items-center  py-2 ${activeTab === "modelTrend"
              ? "border-b-2 border-black"
              : "text-gray-600"
              }`}
          >
            <img src={GraphI} alt="" className="w-5" />
            Model Trend
          </button>
          <button
            onClick={() => setActiveTab("dataDownload")}
            className={`flex gap-2 px-4 py-2 ${activeTab === "dataDownload"
              ? "border-b-2 border-black"
              : "text-gray-600"
              }`}
          >
            <img src={SearchStar} alt="" className="w-5 fill-black" />
            Data Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapTopBar;
