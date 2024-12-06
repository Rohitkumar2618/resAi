import { useEffect, useState } from "react";
import {
  RiApps2AiLine,
  RiMegaphoneLine,
  RiProgress6Line,
} from "@remixicon/react";
import MapViewI from "../assets/mist-line.png";
import { Plus } from "lucide-react";
import GraphI from "../assets/graph.png";

const OrganizationMapTopBar = (
  { setActiveTab, activeTab }
) => {
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [selectedArea, setSelectedArea] = useState("Karol Bagh");

  const fetchOrganizationData = async () => {
    const organizationData = [
      {
        organizationName: "Mahindra",
        departmentName: ["Housing", "Tractor", "Cars"],
      },
      {
        organizationName: "Tata",
        departmentName: ["IT", "Services", "Cars"],
      },
      {
        organizationName: "Infosys",
        departmentName: ["IT", "Services", "Cortex"],
      },
    ];
    setCities(organizationData);
    setAreas(organizationData[0].departmentName);
  };

  useEffect(() => {
    fetchOrganizationData();
  }, []);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const foundCity = cities.find((c) => c.organizationName === city);
    setAreas(foundCity ? foundCity.departmentName : []);
    setSelectedArea(foundCity?.departmentName[0] || "");
  };

  return (
    <div>
      <div className="w-full border-b-2">
        <div className="flex items-start justify-between  rounded-lg p-4 ml-2  ">
          <div className="flex ">
            <div>
              <div className="w-[55px] h-[55px] bg-[#6A8ED4] rounded-md flex items-center justify-center  mr-4">
                <RiProgress6Line className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-[20px] font-[400] ">ResScore</h4>
              <p className="text-[14px] font-[300] text-[#828282] mt-2">
                A score that tells you how well your organisation can handle weather extremes & other climate challenges. ResScore™ provides a clear picture of your organisational strengths and vulnerabilities, with focus on climate resilience.
              </p>
            </div>
            <button className="flex items-center mt-6 gap-1 w-full max-w-fit max-h-fit rounded-full bg-indigo-500 text-white px-4 py-2 mr-2 ml-2">
              <Plus size={16} />
              Add Company
            </button>
            <button className="flex items-center mt-6 gap-1 w-full max-w-fit max-h-fit rounded-full bg-indigo-500 text-white px-4 py-2  ">
              <Plus size={16} />
              Add Contributor
            </button>
          </div>

        </div>

        <div className="flex items-center justify-between ml-2 mb-4">
          <div className="flex w-1/2 items-center">
            <div className="flex w-1/2 items-center gap-2 border-r-2 border-gray ml-4 pr-8">
              <span className="flex items-center text-gray-600 gap-1">
                <RiApps2AiLine size={20} />
              </span>
            </div>

            <div className="flex w-1/2 items-center gap-2 pl-1 pr-8 ml-2">
              <span className="flex text-gray-600 gap-1">
                <RiApps2AiLine size={20} />
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center bottom-0 ml-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex gap-2 px-4 py-2 ${activeTab === "home"
              ? "border-b-2 border-black"
              : "text-gray-600"
              }`}
          >
            <img src={MapViewI} alt="Map View Icon" className="w-5" />
            Home
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex gap-2 px-4 py-2 ${activeTab === "profile"
              ? "border-b-2 border-black"
              : "text-gray-600"
              }`}
          >
            <RiMegaphoneLine /> Profile
          </button>
          <button
            onClick={() => setActiveTab("preparedness")}
            className={`flex gap-2 px-4 items-center py-2 ${activeTab === "preparedness"
              ? "border-b-2 border-black"
              : "text-gray-600"
              }`}
          >
            <img src={GraphI} alt="Graph Icon" className="w-5" />
            Preparedness
          </button>
          <button
            onClick={() => setActiveTab("insigths")}
            className={`flex gap-2 px-4 items-center py-2 ${activeTab === "insigths"
              ? "border-b-2 border-black"
              : "text-gray-600"
              }`}
          >
            <img src={GraphI} alt="Graph Icon" className="w-5" />
            Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationMapTopBar;
