import React from "react";

const OrganizationHomeCard = ({ title, year, color }) => {
    return (
        <div className="w-[186.75px] h-[65px] flex bg-white rounded-lg shadow-sm p-2">
            <div className="w-3/4 flex flex-col justify-center pl-2">
                <span className="text-gray-500 text-[12px] font-[500] mb-2">{title}</span>
                <span className="items-center text-[16px] font-[400] text-[#544D7C]">
                    {year}
                </span>
            </div>
            <div className="w-1/4 flex items-center justify-center pr-2">
                <div className={`w-[37.6px] h-[39.44px] ${color} rounded-md`}></div>
            </div>
        </div>
    );
};

export default OrganizationHomeCard;
