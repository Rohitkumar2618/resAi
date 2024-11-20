import React, { useState } from "react";
import ArrowI from "../assets/ResProfile.svg";
import ResScoreProfileCrisis from "./ResScoreProfileCrisis";

const OrganizationProfile = () => {
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
    <>
      <div className="m-4 ">
        {/* Upper steps div */}
        <div>
          <div className="w-[1200p] flex h-[45px] items-center pb-2     border-b-2   rounded-md">
            {/* Steps */}
            <div className="flex space-x-4 ">
              {/* Step 1 */}
              <div className="flex items-center  justify-center ">
                <span className=" w-[20px] h-[20px] flex items-center  justify-center  rounded-full bg-[#544D7C] text-white text-[12px]">
                  1
                </span>
                <span className="text-[14px] text-[#544D7C] ml-2 font-[14px]">
                  Crisis Management
                </span>

                <img src={ArrowI} alt="" className="ml-4" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center  justify-center ">
                <span className=" w-[20px] h-[20px] flex items-center  justify-center  rounded-full bg-[#fff] border border-[#DEDFE0] text-[#555459] text-[12px]">
                  2
                </span>
                <span className="text-[14px] text-[#828282] ml-2 font-[14px]">
                  Economic
                </span>

                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 3 */}
              <div className="flex items-center  justify-center ">
                <span className=" w-[20px] h-[20px] flex items-center  justify-center  rounded-full bg-[#fff] border border-[#DEDFE0] text-[#555459] text-[12px]">
                  3
                </span>
                <span className="text-[14px] text-[#828282] ml-2 font-[14px]">
                  Physical
                </span>

                <img src={ArrowI} alt="" className="ml-4" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center  justify-center ">
                <span className=" w-[20px] h-[20px] flex items-center  justify-center  rounded-full bg-[#fff] border border-[#DEDFE0] text-[#555459] text-[12px]">
                  4
                </span>
                <span className="text-[14px] text-[#828282] ml-2 font-[14px]">
                  Strategy
                </span>

                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 5 */}
              <div className="flex items-center  justify-center ">
                <span className=" w-[20px] h-[20px] flex items-center  justify-center  rounded-full bg-[#fff] border border-[#DEDFE0] text-[#555459] text-[12px]">
                  5
                </span>
                <span className="text-[14px] text-[#828282] ml-2 font-[14px]">
                  Environment
                </span>

                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 6 */}
              <div className="flex items-center  justify-center ">
                <span className=" w-[20px] h-[20px] flex items-center  justify-center  rounded-full bg-[#fff] border border-[#DEDFE0] text-[#555459] text-[12px]">
                  6
                </span>
                <span className="text-[14px] text-[#828282] ml-2  font-[14px]">
                  Social
                </span>
              </div>
            </div>
            {/* Next Button */}
            <button className=" absolute right-20 bg-purple-600 text-white w-[103px] h-[33px] rounded-md  hover:bg-purple-700">
              Next
            </button>
          </div>
        </div>

        {/* Lower input fields */}

        <ResScoreProfileCrisis />
      </div>
    </>
  );
};

export default OrganizationProfile;
