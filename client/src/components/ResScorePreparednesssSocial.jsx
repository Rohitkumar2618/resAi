import React, { useState } from "react";

const ResScorePreparednessSocial = ({ onInputChange }) => {
  // Local state to manage the responses
  const [responses, setResponses] = useState({
    s1: "",
    s2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedResponses = { ...responses, [name]: value };
    setResponses(updatedResponses);

    // Send updates to the parent if callback is provided
    if (onInputChange) {
      onInputChange(updatedResponses);
    }
  };

  return (
    <div className="w-[947px] h-[426px] mt-8 ml-2 flex flex-col">
      {/* S1 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">S1.</span>
          <span>
            Does your health care facility plan and layout consider
            climate-related risk as a parameter?
          </span>
          <input
            type="text"
            name="s1"
            value={responses.s1}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>
      {/* S2 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">S2.</span>
          <span>Do you have climate-focused skilling programs?</span>
          <input
            type="text"
            name="s2"
            value={responses.s2}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>
    </div>
  );
};

export default ResScorePreparednessSocial;
