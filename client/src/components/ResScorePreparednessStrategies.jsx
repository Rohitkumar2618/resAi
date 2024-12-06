import { useState } from "react";

const ResScorePreparednessStrategies = ({ onInputChange }) => {
  // Local state to manage the responses
  const [responses, setResponses] = useState({
    sr1: "",
    sr2: "",
    sr3: "",
    sr4: "",
    sr5: "",
    sr6: "",
    sr7: "",
    sr8: "",
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
      {/* Sr1 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 1.</span>
          Do you have a Climate Risk Committee or equivalent?
          <input
            type="text"
            name="sr1"
            value={responses.sr1}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr2 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 2.</span>
          Is your climate risk identification process manual or tech-enabled or
          hybrid?
          <input
            type="text"
            name="sr2"
            value={responses.sr2}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr3 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 3.</span>
          Is Management incentive linked to climate-related risk goals?
          <input
            type="text"
            name="sr3"
            value={responses.sr3}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr4 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 4.</span>
          Do you have climate adaptation goals?
          <input
            type="text"
            name="sr4"
            value={responses.sr4}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr5 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 5.</span>
          Do you have climate risk KRAs / KPIs?
          <input
            type="text"
            name="sr5"
            value={responses.sr5}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr6 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 6.</span>
          Is there a climate-related risk impact & opportunity report?
          <input
            type="text"
            name="sr6"
            value={responses.sr6}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr7 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 7.</span>
          Do you have a climate-related risk minimization activity list in
          place?
          <input
            type="text"
            name="sr7"
            value={responses.sr7}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>

      {/* Sr8 */}
      <div className="mt-2">
        <label className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">Sr 8.</span>
          Do you measure impact (e.g. before and after) of climate-related risk
          activities?
          <input
            type="text"
            name="sr8"
            value={responses.sr8}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </label>
      </div>
    </div>
  );
};

export default ResScorePreparednessStrategies;
