import { useState, useEffect } from "react";
import MapSideBar from "./MapSidebar";
import DataDownload from "./DataDownload";
import ResSuiteTopBar from "./ResSuiteTopBar";
import progressI from "../assets/ProgressCircle.png";
import RedTv from "../assets/redTv.png";
import MarketBI from "../assets/Marketing budget.png";
import ClimateRiskCards from "./ClimateRiskCard";

const ResSuiteDashboard = (props) => {
    const [activeTab, setActiveTab] = useState("dataDownload");

    // Define card sets for different tabs
    const selectedCards = [
        {
            title: "Climate Risk Analysis",
            description: "Detailed  analysis of potential climate related risks.",
            isSubscribed: true,
            icon: <img src={progressI} alt="" />,
            enableDownload: true
        },
        {
            title: "Value at Risk ",
            description:
                "Assessment of potential financial losses due to climate change.",
            isSubscribed: true,
            icon: <img src={RedTv} alt="" />,
            enableDownload: false
        },
        {
            title: "Composite Vulnerability ",
            description:
                "Assessment of potential financial losses due to climate change.",
            isSubscribed: true,
            icon: <img src={MarketBI} alt="" />,
            enableDownload: false
        },
        {
            title: "Biodiversity ",
            description:
                "Analysis  of  biodiversity impact and potential mitigation strategies .",
            isSubscribed: true,
            icon: <img src={progressI} alt="" />,
            enableDownload: false
        },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "dataDownload":
                return <ClimateRiskCards cardData={selectedCards} />;
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
                <ResSuiteTopBar setActiveTab={setActiveTab} activeTab={activeTab} />
                {/* Main Content */}
                <div className="w-full h-full overflow-scroll">{renderContent()}</div>
            </div>
        </div>
    );
};

export default ResSuiteDashboard;