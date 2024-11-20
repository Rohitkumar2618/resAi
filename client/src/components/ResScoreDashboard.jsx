import React, { useEffect } from "react";

import OrganizationMapSidebar from "./OrganizationMapSidebar";
import OrganizationMapTopBar from "./OrganizationMapTopBar";
import { useState } from "react";
import OrganizationHome from "./OrganizationHome";
import OrganizationProfile from "./OrganizationProfile";
import OrganizationPreparedness from "./OrganizationPreparedness";
import OrganizationInsights from "./OrganizationInsights";
import ResScoreGuidePageHome from "./ResScoreGuidePageHome ";
import ResScoreGuidepageProfile from "./ResScoreGuidepageProfile";
import ResScoreGuidepagePreparedness from "./ResScoreGuidepagePreparedness";
const ResScoreDashboard = (props) => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <ResScoreGuidePageHome />;
      case "profile":
        return <ResScoreGuidepageProfile />;
      case "preparedness":
        return <ResScoreGuidepagePreparedness />;
      case "insigths":
        return <OrganizationInsights />;
      default:
        return <img src={Map} alt="Map View" className="w-full h-full" />;
    }
  };

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="w-full h-screen flex">
      <OrganizationMapSidebar />
      <div className="w-3/4 flex flex-col overflow-hidden bg-white">
        <OrganizationMapTopBar
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {/*  */}
        <div className="w-full h-full overflow-scroll mb-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ResScoreDashboard;
