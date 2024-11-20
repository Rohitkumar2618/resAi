import React from "react";

const OrganizationstatusCard = () => {
    const statuses = [
        { label: "Very Good", color: "bg-[#68C3C6]" },
        { label: "Good", color: "bg-[#6E669D]" },
        { label: "Moderate", color: "bg-[#FFAC4E]" },
        { label: "Poor", color: "bg-[#F3A0A6]" },
        { label: "Very Poor", color: "bg-[#CE2D4F]" },
    ];

    return (
        <div className="p-3  rounded-md shadow-sm">
            <div className="flex flex-wrap gap-2 justify-between">
                {statuses.map((status, index) => (
                    <div key={index} className="flex items-center gap-x-1">
                        <div
                            className={`w-[20px] h-[20px] ${status.color} rounded-sm`}
                        ></div>
                        <span className="text-[14px] font-[400] text-[#777777] mr-[10px]">
                            {status.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganizationstatusCard;
