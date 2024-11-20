import { useEffect, useState } from "react";
import {
    RiApps2AiLine,
    RiMegaphoneLine,
    RiProgress6Line,
} from "@remixicon/react";
import MapViewI from "../assets/mist-line.png";
import { Plus } from "lucide-react";
import GraphI from "../assets/graph.png";
import SearchStar from "../assets/searchStar.png";

const ResSuiteTopBar = ({ setActiveTab, activeTab }) => {
    return (
        <div>
            <div className="w-full border-b-2  ">
                <div className="flex items-start justify-between  rounded-lg p-4 ml-2  ">
                    <div className="flex ">
                        <div>
                            <div className="w-[55px] h-[55px] bg-[#6A8ED4] rounded-md flex items-center justify-center  mr-4">
                                <RiProgress6Line className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[20px] font-[400] ">ResSuite</h4>
                            <p className="text-[14px] font-[300] text-[#828282] mt-2">
                                ResSuite is an advanced reporting platform within Resilience360 that delivers detailed, data-driven insights across domains like climate risk, value at risk, vulnerability, biodiversity etc. Designed for business and government users, it enables informed decision-making by providing in-depth analysis, visualizations, and actionable insights for managing climate-related challenges.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-6 items-center  bottom-0 ml-2">
                    <button
                        onClick={() => setActiveTab("dataDownload")}
                        className={`flex gap-2 px-4 py-2 ${activeTab === "dataDownload"
                            ? "border-b-2 border-black"
                            : "text-gray-600"
                            }`}
                    >
                        <img src={MapViewI} alt="" className="w-5" />
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResSuiteTopBar;