import { useState } from "react";

const ResScorePreparednessEconomics = ({ onInputChange }) => {
  // Local state to keep track of inputs
  const [responses, setResponses] = useState({ e1: "", e2: "", e3: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedResponses = { ...responses, [name]: value };
    setResponses(updatedResponses);

    // Call the parent callback if provided
    if (onInputChange) {
      onInputChange(updatedResponses);
    }
  };

  return (
    <div className="w-[947px] h-[426px] mt-8 ml-2 flex flex-col">
      {/* E1 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">E1.</span>
          Do you have standards to mitigate climate-related events?*
          <input
            type="text"
            name="e1"
            value={responses.e1}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-4"
          />
        </label>
      </div>

      {/* E2 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">E2.</span>
          Do you have business continuity and people policies/schemes during
          climate-related events?*
          <input
            type="text"
            name="e2"
            value={responses.e2}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-4"
          />
        </label>
      </div>

      {/* E3 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">E3.</span>
          Do you have annual dedicated funds for climate-related risk
          preparedness?*
          <input
            type="text"
            name="e3"
            value={responses.e3}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-4"
          />
        </label>
      </div>
    </div>
  );
};

export default ResScorePreparednessEconomics;
