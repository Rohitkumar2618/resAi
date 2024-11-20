import MapSideBar from "./MapSidebar";

import MapView from "./MapView";
import MapTopBar from "./MapTopBar";

const MapMain = ({ setActiveTab, activeTab }) => {
  return (
    <div className="w-full h-screen flex">
      <MapSideBar />
      <div className="w-5/6 flex flex-col overflow-hidden bg-white">
        {/* Top Header Section */}
        <MapTopBar setActiveTab={setActiveTab} activeTab={activeTab} />
        {/* MapMain Bottom */}
        <MapView />
      </div>
    </div>
  );
};

export default MapMain;
