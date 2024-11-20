import { useState } from "react";

const ResScoreProfileCrisis = () => {
    const [selectedEvents, setSelectedEvents] = useState({
        cyclone: false,
        tsunami: false,
        earthquake: false,
        flashFloods: false,
        heatWave: false,
        coastalFlood: false,
        fluvialFloods: false,
        landslide: false,
    });

    const [selectedRange, setSelectedRange] = useState();

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedEvents({ ...selectedEvents, [name]: checked });
    };

    return (
        <div className="w-[947px] h-[426px] mt-8 flex flex-col ">
            <div>
                <span className="text-[14px] ml-1 text-[#555459]">
                    <span className="mr-2">1.</span>
                    <span>
                        What was the total spend of your organization / department on
                        climate events (natural disasters) events in the past 12 months*
                    </span>
                    <input
                        type="text"
                        placeholder="Enter text here"
                        className="p-2 ml-3 border-b-2 w-[90%]"
                    />
                </span>
            </div>
            <div className="mt-5">
                <span className="text-[14px] ml-1 text-[#555459]">
                    <span className="mr-2">2.</span>
                    <span>
                        What was the total insured value of the physical assets expected to
                        be damaged / written off, due to climate event in the past 12
                        months?*
                    </span>
                    <input
                        type="text"
                        placeholder="Enter text here"
                        className="p-2 ml-3 border-b-2 w-[90%]"
                    />
                </span>
            </div>

            <div className="mt-5">
                <span className="text-[14px] ml-1 text-[#555459]">
                    <span className="mr-2">3.</span>
                    <span>
                        What are the top 3 climate crisis events your organization /
                        department had to tackle in the past 12 months (select three
                        options)
                    </span>
                </span>

                {/* Choose Event Card */}
                <div className="w-[665px] h-[120px] bg-[#F6F6F68C]  border-gray-400 m-4 p-2">
                    <span className="text-[15px] ">Choose Events*</span>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                        {/* First Row */}
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="cyclone"
                                checked={selectedEvents.cyclone}
                                onChange={handleCheckboxChange}
                                className="form-checkbox text-green-600"
                            />
                            <span className="text-[14px]">Cyclone</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="tsunami"
                                checked={selectedEvents.tsunami}
                                onChange={handleCheckboxChange}
                                className="form-checkbox"
                            />
                            <span className="text-[14px]">Tsunami</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="heatWave"
                                checked={selectedEvents.heatWave}
                                onChange={handleCheckboxChange}
                                className="form-checkbox"
                            />
                            <span className="text-[14px]">Heat Wave</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="fluvialFloods"
                                checked={selectedEvents.fluvialFloods}
                                onChange={handleCheckboxChange}
                                className="form-checkbox"
                            />
                            <span className="text-[14px]">Fluvial Floods</span>
                        </label>

                        {/* Second Row */}
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="earthquake"
                                checked={selectedEvents.earthquake}
                                onChange={handleCheckboxChange}
                                className="form-checkbox"
                            />
                            <span className="text-[14px]">Earthquakes</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="flashFloods"
                                checked={selectedEvents.flashFloods}
                                onChange={handleCheckboxChange}
                                className="form-checkbox text-green-600"
                            />
                            <span className="text-[14px]">Flash Floods</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="coastalFlood"
                                checked={selectedEvents.coastalFlood}
                                onChange={handleCheckboxChange}
                                className="form-checkbox"
                            />
                            <span className="text-[14px]">Coastal Flood</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="landslide"
                                checked={selectedEvents.landslide}
                                onChange={handleCheckboxChange}
                                className="form-checkbox"
                            />
                            <span className="text-[14px]">Landslide</span>
                        </label>
                    </div>
                </div>
                {/* Select option que 1 */}
                <div className="mt-5">
                    <span className="text-[14px] ml-1 text-[#555459]">
                        <span className="mr-2">4.</span>
                        <span className="">
                            What percentage (%) of total spend of your organization/
                            department on climate events was channeled towards these top three
                            climate{" "}
                            <span className="ml-6">crisis events in the past 12 months*</span>
                        </span>
                    </span>
                </div>
                <select
                    className="p-2 ml-3 mt-1 border-b-1 w-[30%] border border-gray-300 text-gray-700"
                    value={selectedRange}
                    onChange={(e) => setSelectedRange(e.target.value)}
                >
                    <option value="" disabled hidden style={{ color: "#A9A9A9" }}>
                        Select Range
                    </option>
                    <option value="short">Short Range</option>
                    <option value="medium">Medium Range</option>
                    <option value="long">Long Range</option>
                </select>

                {/* Select option que 1 */}
                <div className="mt-5">
                    <span className="text-[14px] ml-1 text-[#555459]">
                        <span className="mr-2">5.</span>
                        <span className="">
                            What percentage (%) of total spend of your organisation /
                            department was towards healthcare of employees / citizens during
                            climate event{" "}
                            <span className="ml-6">
                                {" "}
                                in the past 12 months? (include medical insurance) crisis events
                                in the past 12 months*
                            </span>
                        </span>
                    </span>
                </div>
                <select
                    className="p-2 ml-3 mt-1 border-b-1 w-[30%] border border-gray-300 text-gray-700"
                    value={selectedRange}
                    onChange={(e) => setSelectedRange(e.target.value)}
                >
                    <option value="" disabled hidden style={{ color: "#A9A9A9" }}>
                        Select Range
                    </option>
                    <option value="short">Short Range</option>
                    <option value="medium">Medium Range</option>
                    <option value="long">Long Range</option>
                </select>
            </div>
        </div>
    );
};

export default ResScoreProfileCrisis;
