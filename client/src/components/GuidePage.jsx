import { useState, createContext, useContext, useEffect } from "react";
import MapSideBar from "./MapSidebar";
import MapTopBar from "./MapTopBar";
import MapTwo from "../assets/maptwo.png";
import Insights from "./Insights";
import ModelTrend from "./ModelTrend";
import DataDownload from "./DataDownload";
import MapView from "./MapView";

const GuidePage = (props) => {
  const [activeTab, setActiveTab] = useState("map");

  const renderContent = () => {
    switch (activeTab) {
      case "map":
        return <MapView />;
      case "insights":
        return <Insights />;
      case "modelTrend":
        return <ModelTrend />;
      case "dataDownload":
        return <DataDownload />;
      default:
        return <img src={MapTwo} alt="Map View" className="w-full h-full" />;
    }
  };

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="w-full h-screen flex">
      <MapSideBar />
      <div className="w-3/4 flex flex-col overflow-hidden bg-white">
        {/* Pass activeTab as a prop */}
        <MapTopBar setActiveTab={setActiveTab} activeTab={activeTab} />
        {/* Main Content */}
        <div className="w-full h-full overflow-scroll">{renderContent()}</div>

      </div>
    </div>
  );
};

export default GuidePage;
