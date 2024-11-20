// ClimateTypeSelection.js
import { useState } from "react";
import ClimateTypeCard from "./ClimateTypeCard";

const ClimateTypeSelection = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const climateTypes = ["Heat", "Flood", "Earthquake", "Cyclone"];

  const toggleSelection = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2  gap-4">
        {climateTypes.map((type) => (
          <ClimateTypeCard
            key={type}
            label={type}
            isSelected={selectedTypes.includes(type)}
            onSelect={toggleSelection}
          />
        ))}
      </div>

      <div className="flex  justify-start gap-2 overflow-hidden px-4 pt-14 pb-6 border   border-white  rounded-lg shadow-md mt-4 w-full max-w-lg">
        {selectedTypes.map((type) => (
          <div
            key={type}
            className="flex items-center justify-center gap-2 w-[102px] p-2  bg-white rounded-full  overflow-hidden text-[16px]"
          >
            {type}
            <button
              className="  hover:text-gray-800 "
              onClick={() => toggleSelection(type)}
            >
              &times;
            </button>
          </div>
        ))}
        {selectedTypes.length === 0 && (
          <span className="text-white">No climate types selected</span>
        )}
      </div>
    </div>
  );
};

export default ClimateTypeSelection;
