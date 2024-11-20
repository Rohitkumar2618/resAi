import React, { useState } from "react";
import PlansCard from "./PlansCard";
import { Link } from "react-router-dom";

const Plan = () => {
  const [selectedType, setSelectedType] = useState([]);

  const climateTypes = ["Fremium", "Lite", "Basic", "Pro-edition"];

  const handleSelection = (type) => {
    setSelectedType((prev) => (prev === type ? null : type)); // Deselect if clicked again, else select new type
  };



  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2  gap-4">
        {climateTypes.map((type) => (
          <PlansCard
            key={type}
            label={type}
            isSelected={selectedType === type} // Only one card can be selected at a time
            onSelect={handleSelection}
          />
        ))}
      </div>

      <Link
        to="/workspace"
        className="flex items-center justify-center px-6 py-2 mt-12 bg-white text-white font-[300] rounded-full   shadow-[rgba(255,255,255,0.5)_10px_5px_4px_0px]   "
      >
        <span className="text-gray-500">Confirm & launch</span>
      </Link>
    </div>
  );
};

export default Plan;
