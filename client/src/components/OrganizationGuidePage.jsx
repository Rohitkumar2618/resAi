import React from "react";

import OrganizationMapSidebar from "./OrganizationMapSidebar";
import OrganizationMapTopBar from "./OrganizationMapTopBar";
import { useState } from "react";
import OrganizationHome from "./OrganizationHome";
import OrganizationProfile from "./OrganizationProfile";
import OrganizationPreparedness from "./OrganizationPreparedness";
import OrganizationInsights from "./OrganizationInsights";
const OrganizationGuidePage = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <OrganizationHome />;
      case "profile":
        return <OrganizationProfile />;
      case "preparedness":
        return <OrganizationPreparedness />;
      case "insigths":
        return <OrganizationInsights />;
      default:
        return <img src={Map} alt="Map View" className="w-full h-full" />;
    }
  };

  return (
    <div className="w-full h-screen flex">
      <OrganizationMapSidebar />
      <div className="w-5/6 flex flex-col overflow-hidden bg-white">
        <OrganizationMapTopBar
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {/*  */}
        <div className="w-full h-full">{renderContent()}</div>
      </div>
    </div>
  );
};

export default OrganizationGuidePage;
