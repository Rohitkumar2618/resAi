import { useState } from "react";

const ResScoreProfileEconomic = () => {
  const [selectedEvents, setSelectedEvents] = useState({
    plot: false,
    building: false,
    infrastructure: false,
    machinery: false,
    hvca: false,
    power: false,
    inventory: false,
    equipment: false,
  });

  const [selectedRange, setSelectedRange] = useState("");
  const [selectedRangeTwo, setSelectedRangeTwo] = useState("");
  const [selectedRangeThree, setSelectedRangeThree] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedEvents({ ...selectedEvents, [name]: checked });
  };

  return (
    <div className="w-[947px] h-[426px] mt-8 flex flex-col">
      <div className="">
        {/* que-1  */}
        <div>
          <span className="text-[14px] ml-1 text-[#555459]">
            <span className="mr-2">1.</span>
            <span>
              What type of physical assets and operating infrastructure are
              insured in your organization / department
            </span>
          </span>

          {/* Choose Event Card */}
          <div className="w-[665px] h-[120px] bg-[#F6F6F68C]  border-gray-400 m-4 p-2">
            <span className="text-[15px] ">Choose asset type*</span>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {/* First Row */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="cyclone"
                  checked={selectedEvents.plot}
                  onChange={handleCheckboxChange}
                  className="form-checkbox text-green-600"
                />
                <span className="text-[14px]">Plot/Land</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="tsunami"
                  checked={selectedEvents.building}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="text-[14px]">Building</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="heatWave"
                  checked={selectedEvents.infrastructure}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="text-[14px]">Infrastructure</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="fluvialFloods"
                  checked={selectedEvents.machinery}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="text-[14px]">Machinery</span>
              </label>

              {/* Second Row */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="earthquake"
                  checked={selectedEvents.hvca}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="text-[14px]">HVAC Systems</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="flashFloods"
                  checked={selectedEvents.power}
                  onChange={handleCheckboxChange}
                  className="form-checkbox text-green-600"
                />
                <span className="text-[14px]">Power & Utility</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="coastalFlood"
                  checked={selectedEvents.inventory}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="text-[14px]">Inventory</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="landslide"
                  checked={selectedEvents.equipment}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="text-[14px]">Equipment</span>
              </label>
            </div>
          </div>
        </div>

        {/* que 2 */}
        <div className="mt-2">
          <span className="text-[14px] ml-1 text-[#555459]">
            <span className="mr-2">2.</span>
            <span>
              What is the Current Value of the physical asset expected to be
              damaged / written off, due to climate events in your organisation
              / <span className="ml-6">department?</span>
            </span>
            <input
              type="text"
              placeholder="Enter text here"
              className="p-2 ml-3 border-b-2 w-[90%]"
            />
          </span>
        </div>

        {/* Select option for question 3 */}
        <div>
          <div className="mt-5">
            <span className="text-[14px] ml-1 text-[#555459]">
              <span className="mr-2">3.</span>
              <span className="">
                What is the average income per month from household (include all
                individuals in the organization / department)?
              </span>
            </span>
          </div>
          <select
            className="p-2 ml-3 mt-1 border-b-1 w-[30%] border rounded-md border-gray-300 text-gray-700"
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <option value="" disabled hidden>
              -Select Range-
            </option>
            <option value="short">Short Range</option>
            <option value="medium">Medium Range</option>
            <option value="long">Long Range</option>
          </select>
        </div>

        {/* Select option que 4 */}
        <div>
          <div>
            <div className="mt-5">
              <span className="text-[14px] ml-1 text-[#555459]">
                <span className="mr-2">4.</span>
                <span className="">
                  What is the average revenue per month of your business
                  (include all business units / lines of business)?
                </span>
              </span>
            </div>
            <select
              className="p-2 ml-3 mt-1 border-b-1 w-[30%] border rounded-md border-gray-300 text-gray-700"
              value={selectedRangeTwo}
              onChange={(e) => setSelectedRangeTwo(e.target.value)}
            >
              <option value="" disabled hidden>
                -Select Range-
              </option>
              <option value="short">Short Range</option>
              <option value="medium">Medium Range</option>
              <option value="long">Long Range</option>
            </select>
          </div>
        </div>
        {/* Select option que 5  */}
        <div>
          <div>
            <div className="mt-5">
              <span className="text-[14px] ml-1 text-[#555459]">
                <span className="mr-2">5.</span>
                <span className="">
                  What is the average asset value of an individual in your
                  organization/department?
                </span>
              </span>
            </div>
            <select
              className="p-2 ml-3 mt-1 border-b-1 w-[30%] border rounded-md border-gray-300 text-gray-700"
              value={selectedRangeThree}
              onChange={(e) => setSelectedRangeThree(e.target.value)}
            >
              <option value="" disabled hidden>
                -Select Range-
              </option>
              <option value="short">Short Range</option>
              <option value="medium">Medium Range</option>
              <option value="long">Long Range</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResScoreProfileEconomic;
