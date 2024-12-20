import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

const ResScorePreparednessCrisis = ({ onInputChange }) => {
  // Local state to keep track of inputs
  const [answers, setAnswers] = useState({
    C1: "",
    C2: "",
    C3: "",
    C4: "",
    C5: "",
    C6: "",
    C7: "",
    C8: "",
    C9: "",
    C10: "",
    C11: "",
    C12: "",
    C13: "",
    C14: "",
  });
  const [selectedRange, setSelectedRange] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
    onInputChange({ ...answers, [name]: value }); // Send updates to the parent
  };

  return (
    <div className="w-[947px] h-[426px] mt-4 flex flex-col">
      {/* C1 */}
      <div>
        <span className="text-[14px] ml-1 text-[#555459]">
          <div className="flex">
            <span className="mr-2">C1.</span>
            <span>
              Is your organization/department compliant with the Environment
              Impact Assessment (EIA)?*
            </span>
            <span className="ml-1">
              <CiCircleInfo
                size="20px"
                data-tooltip-id="tooltip-id" // Unique tooltip ID
                data-tooltip-content="Hello This is me rk!" // Tooltip content
                className="cursor-pointer"
              />
              <Tooltip
                id="tooltip-id" // Match the tooltip ID
                place="top"
                type="dark"
                effect="solid"
                style={{ backgroundColor: "indigo", color: "#fff" }}
              />
            </span>
          </div>
          <input
            type="text"
            name="C1"
            value={answers.C1}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C2 */}
      {/* <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C2.</span>
          <span>
            Is your organization/department compliant with the green and
            sustainability building design guidelines?*
          </span>
          <input
            type="text"
            name="C2"
            value={answers.C2}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div> */}

      {/* C2 */}
      <div>
      <div className="mt-5">
          <span className="text-[14px] ml-1 text-[#555459]">
            <span className="mr-2">C2.</span>
            <span className="">
              Is your organization/department compliant with the green and
              sustainability building design guidelines?
            </span>
          </span>
        </div>
        <select
          className="p-2 ml-8 mt-1 border-b-1 w-[90%] border border-gray-300 text-gray-700"
          value={answers.C2 || ""} // Use C2 from answers
          onChange={(e) => {
            setAnswers((prevAnswers) => ({
              ...prevAnswers,
              C2: e.target.value, // Update C2 field in answers
            }));
            onInputChange({ ...answers, C2: e.target.value }); // Send to parent
          }}
        >
          <option value="" disabled hidden style={{ color: "#A9A9A9" }}>
            Select Range
          </option>
          <option value="option1">~Select Option</option>
          <option value="option2">
            Guidelines comprise of 'Standardized Development and Building
            Regulations, 2023', 'Eco Niwas Samhita
          </option>
          <option value="option3">
            ENS with Energy Conservation and Sustainable Building Code for
            Commercial and Office Buildings 2024
          </option>
        </select>
      </div>

      

      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C3.</span>
          <span>
            Is your organization/ department compliant with the legal risks?*
          </span>
          <input
            type="text"
            name="C3"
            value={answers.C3}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C4 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C4.</span>
          <span>
            Is your organization/ department compliant with emerging country
            regulations ?*
          </span>
          <input
            type="text"
            name="C4"
            value={answers.C4}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C5 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C5.</span>
          <span>
            Is your organization/ department compliant with the climate
            adaptation standards? *
          </span>
          <input
            type="text"
            name="C5"
            value={answers.C5}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C6 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C6.</span>
          <span>Have your end users adopted climate risk management?*</span>
          <input
            type="text"
            name="C6"
            value={answers.C6}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C7 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C7.</span>
          <span>
            Is there a climate disaster response system in your organization/
            department?*
          </span>
          <input
            type="text"
            name="C7"
            value={answers.C7}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C8 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C8.</span>
          <span>
            Have you consolidated data & insights from past events inculsive of
            preventive actions taken?*
          </span>
          <input
            type="text"
            placeholder="Enter text here"
            name="C8"
            value={answers.C8}
            onChange={handleInputChange}
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C9 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C9.</span>
          <span>Do you use disaster response systems?*</span>
          <input
            type="text"
            name="C9"
            value={answers.C9}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C10 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C10.</span>
          <span>
            Do you have a dedicated and trained emergency team during a
            climate-related event?*
          </span>
          <input
            type="text"
            name="C10"
            value={answers.C10}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C11 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C11.</span>
          <span>Have your end users adopted climate risk management?*</span>
          <input
            type="text"
            name="C11"
            value={answers.C11}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C12 */}
      <div className="mt-2">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C12.</span>
          <span>Do you have a Disaster Risk Management (DRM) plan?*</span>
          <input
            type="text"
            name="C12"
            value={answers.C12}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>

      {/* C13 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C13.</span>
          <span>
            Are your transport plans (mobility plan) based on climate-related
            risk assessment?*
          </span>
          <input
            type="text"
            name="C13"
            value={answers.C13}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%]"
          />
        </span>
      </div>
      {/* C14 */}
      <div className="mt-2 ">
        <span className="text-[14px] ml-1 text-[#555459]">
          <span className="mr-2">C14.</span>
          <span>
            Are your housing plans developed based on climate-related risk
            assessment?*
          </span>
          <input
            type="text"
            name="C14"
            value={answers.C14}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="p-2 ml-3 border-b-2 w-[90%] mb-8"
          />
        </span>
      </div>
    </div>
  );
};

export default ResScorePreparednessCrisis;
