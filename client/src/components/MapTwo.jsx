import { useState } from "react";
import MapI from "../assets/map.png";
import Logo from "../assets/logo.png";
import DetermineCard from "./DetermineCard";
import ClimateTypeSelection from "./ClimateTypeSelection";

const MapTwo = () => {
  const [activeTab, setActiveTab] = useState("module");
  const [expandedCard, setExpandedCard] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const tabs = [
    { id: "climate", label: "Climate type" },
    { id: "module", label: "Resilience 360 module" },
    { id: "plans", label: "Plans" },
  ];

  const handleCardToggle = (title) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const cardDetails = [
    {
      title: "Determine",
      label: "Determine Resilience",
      options: [
        { label: "Resolve", checked: false },
        { label: "ResScore", checked: true },
      ],
    },
    {
      title: "Plan",
      label: "Planning Strategies",
      options: [
        { label: "Strategy A", checked: false },
        { label: "Strategy B", checked: false },
      ],
    },
    {
      title: "Action",
      label: "Action Steps",
      options: [
        { label: "Step 1", checked: true },
        { label: "Step 2", checked: false },
      ],
    },
    {
      title: "Scale",
      label: "Scaling Up",
      options: [
        { label: "Scale 1", checked: false },
        { label: "Scale 2", checked: true },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Main content area - Now full width */}
      <div className="w-full h-full">
        <img src={MapI} alt="Map" className="h-full w-full object-cover" />
      </div>

      {/* Toggle Button */}
      <button
        className={`fixed z-50 top-[15%] transition-all duration-300 border-2 border-r-black text-black text-sm bg-white p-5 rounded-full font-bold hover:bg-gray-100
          ${isSidebarOpen ? "left-[calc(33.33%-1.25rem)]" : "left-6"}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "" : ""}
      </button>

      {/* Sidebar - Now overlaid */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-[#5A5A5A] rounded-r-[55px] transition-transform duration-300 ease-in-out w-4/12
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between space-x-3 mb-8 rounded-r-full px-12 py-2 bg-[#8A8A8A]">
          <img
            src={Logo}
            alt="Resilience AI Logo"
            className="h-20 fill-purple"
          />
          <h1 className="text-xl text-white">Resilience 360</h1>
        </div>

        <div>
          <h1 className="text-xl font-[400] ml-8 text-white">
            Create your Resilience360 basket
          </h1>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-white"></div>
          <ul className="inline-flex ml-8 items-start justify-center text-[19px] text-white mt-5 gap-5">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer pb-2 relative transition-all duration-200 ${
                  activeTab === tab.id
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[7px] after:bg-white"
                    : ""
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <span className="flex mt-5 ml-8 text-white text-lg">
          Select one or more climate type
        </span>

        <div className="flex flex-col items-center justify-center p-8 overflow-y-auto max-h-[calc(100vh-280px)]">
          {activeTab === "climate" && <ClimateTypeSelection />}
          {activeTab === "module" && (
            <>
              {cardDetails.map(({ title, label, options }) => (
                <DetermineCard
                  key={title}
                  title={title}
                  label={label}
                  options={options}
                  isExpanded={expandedCard === title}
                  onToggle={() => handleCardToggle(title)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default MapTwo;
