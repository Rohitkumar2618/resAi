//
import { useState } from "react";
import MapI from "../assets/map.png";
import Logo from "../assets/logo.png";
import DetermineCard from "./DetermineCard";
import ClimateTypeSelection from "./ClimateTypeSelection";

const Map = () => {
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
    <div className="w-full h-full flex">
      {/* Sidebar */}
      <div
        className={`leftdiv transition-all duration-300 ${
          isSidebarOpen ? "w-4/12" : "w-0"
        } h-screen bg-[#5A5A5A] rounded-r-[55px] overflow-hidden`}
      >
        <div className="flex items-center justify-between space-x-3 mb-8 rounded-r-full px-12 py-2 bg-[#8A8A8A]">
          <img
            src={Logo}
            alt="Resilience AI Logo"
            className="h-20 fill-purple"
          />
          <h1 className="text-xl text-white">Resilience 360</h1>
          <button
            className="text-white text-2xl font-bold"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "×" : "☰"} {/* Menu icon or close icon */}
          </button>
        </div>

        {isSidebarOpen && (
          <>
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

            <div className="flex flex-col items-center justify-center p-8">
              {activeTab === "climate" && <ClimateTypeSelection />}

              {activeTab === "module" && (
                <>
                  {cardDetails.map(({ title, label, options }) => (
                    <DetermineCard
                      key={title}
                      title={title}
                      label={label} // Add the label prop
                      options={options} // Pass options dynamically
                      isExpanded={expandedCard === title}
                      onToggle={() => handleCardToggle(title)}
                    />
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>

      {/* Main content area */}
      <div
        className={`rightdiv h-full transition-all duration-300 ${
          isSidebarOpen ? "w-8/12" : "w-full"
        }`}
      >
        <img src={MapI} alt="Map" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Map;
