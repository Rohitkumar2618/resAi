import { RiArrowDownSLine, RiDonutChartLine } from "@remixicon/react";
import IconS from "../assets/rectangle.svg";

const DetermineCard = ({ title, options = [], isExpanded, onToggle }) => {
  return (
    <div className="w-full max-w-md bg-white  rounded-lg shadow-[rgba(255,255,255,0.5)_10px_5px_4px_0px] p-4 mb-3 mx-auto ">
      {/* Card Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex gap-1">
          {/* Make sure to import the RiDonutChartLine as required */}
          <div className="flex items-center justify-center">
            <span className=" absolute  text-[10px]">icon</span>
            <img src={IconS} alt="" className="w-[26px]" />
          </div>
          <span className="text-[18px] font-[400] text-gray-500">{title}</span>
        </div>

        <RiArrowDownSLine
          className={`text-gray-600 transform transition-transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Options - Only show if expanded */}
      {isExpanded && (
        <div className="flex ml-4 text-xl items-start gap-4 mt-4">
          {options.length > 0 ? (
            options.map((option, index) => (
              <label key={index} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  defaultChecked={option.checked}
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="text-gray-700 text-[15px]">
                  {option.label}
                </span>
              </label>
            ))
          ) : (
            <span className="text-gray-500">No options available</span>
          )}
        </div>
      )}
    </div>
  );
};

export default DetermineCard;
