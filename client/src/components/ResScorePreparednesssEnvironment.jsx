import { useState } from "react";

const ResScorePreparednessEnvironment = ({ onInputChange }) => {
  // Local state to manage the responses
  const [responses, setResponses] = useState({
    ev1: "",
    ev2: "",
    ev3: "",
    ev4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedResponses = { ...responses, [name]: value };
    setResponses(updatedResponses);

    // Send updates to the parent if the callback is provided
    if (onInputChange) {
      onInputChange(updatedResponses);
    }
  };

  return (
    <div className="w-[947px] h-[426px] mt-8 ml-2 flex flex-col">
      {/* EV1 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">EV1.</span>
          <span>Do you have a solid waste management plan?*</span>
          <input
            type="text"
            name="ev1"
            value={responses.ev1}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>

      {/* EV2 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">EV2.</span>
          <span>
            Do you have a sewerage treatment plant in your area of interest?*
          </span>
          <input
            type="text"
            name="ev2"
            value={responses.ev2}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>

      {/* EV3 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">EV3.</span>
          <span>
            Do you have rainwater harvesting coverage in your organization/
            department?
          </span>
          <input
            type="text"
            name="ev3"
            value={responses.ev3}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>

      {/* EV4 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">EV4.</span>
          <span>
            Does your rainwater harvesting plan consider climate-related risk as
            a parameter?*
          </span>
          <input
            type="text"
            name="ev4"
            value={responses.ev4}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>
    </div>
  );
};

export default ResScorePreparednessEnvironment;
