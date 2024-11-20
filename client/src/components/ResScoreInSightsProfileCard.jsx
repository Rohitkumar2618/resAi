import React from "react";

const ResScoreInSightsProfileCard = ({
    title,
    imageSrc,
    bgColor,
    categories,
    progress,
}) => {
    return (
        <div
            className={`w-[243px] h-[182px] ${bgColor} rounded-sm p-3 flex flex-col relative`}
        >
            <div className="text-[14px]">{title}</div>
            <div className="absolute top-16 right-4 flex items-center justify-center">
                <img
                    src={imageSrc}
                    alt=""
                    className="w-9 p-1 rounded-full bg-[#F2F4F8]"
                />
            </div>
            <div className="flex flex-col mt-[80px] text-[14px]">
                <span>{categories}</span>
                <span className="ml-1">{progress}</span>
            </div>
        </div>
    );
};

export default ResScoreInSightsProfileCard;
