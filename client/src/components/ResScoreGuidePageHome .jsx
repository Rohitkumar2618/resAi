import OrganizationHomeCard from "./OrganizationHomeCard";
import MenuI from "../assets/function-add-line.svg";

import CEOV from "../assets/ceoVideo.mp4";

import LineI from "../assets/Group 3345.png";
import DotI from "../assets/Ellipse 553.png";
import { Link } from "react-router-dom";
import OrganizationstatusCard from "./OrganizationstatusCard";

const ResScoreGuidePageHome = () => {
  // Sample data for cards

  const cardsData = [
    { title: "Crisis Management", year: 2023, color: "bg-[#FFAC4E]" },
    { title: "Economic", year: 2023, color: "bg-[#CE2D4F]" },
    { title: "Social", year: 2023, color: "bg-[#6E669D]" },
    { title: "Environment", year: 2023, color: "bg-[#FFAC4E]" },
    { title: "Strategy", year: 2023, color: "bg-[#FFAC4E]" },
    { title: "Physical", year: 2023, color: "bg-[#FFAC4E]" },
    // Add more cards as needed
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full px-4">
        {/* Upper card */}
        <div className="h-[195px] w-[965px] mt-6 p-6 flex rounded-md bg-[#FFECCB]">
          <div className="left w-2/3 h-full p-1 flex flex-wrap gap-4">
            {cardsData.map((card, index) => (
              <OrganizationHomeCard
                key={index}
                title={card.title}
                year={card.year}
                color={card.color}
              />
            ))}
          </div>
          <div className="right w-1/3 h-full  ">
            <div className=" flex  items-center  justify-center  flex-col">
              <div className="   flex w-[190px] h-[17px] items-center justify-center gap-1  ">
                <img src={MenuI} alt="" />
                <span className="text-[14px] font-[400]"> Score for year </span>
                : <span className="text-[14px] font-[400]">2023</span>
              </div>
              <div className=" smallcard w-[208px] h-[85px] ml-4 flex flex-col  mt-6 ">
                <OrganizationstatusCard />
              </div>
            </div>
          </div>
        </div>
        {/* bottom card */}
        <div className="flex mt-4  ">
          {/* Left Side Content */}
          <div className="w-[464px]  bg-[#F0F2FF] p-4    ">
            <Link to="/gmap">
              {" "}
              <img src={LineI} alt="" />
              <h3 className="text-[18px]  pb-4 text-gray-800">
                Understanding ResScore
              </h3>
            </Link>
            <ul className="text-gray-600  space-y-2   ">
              <li className="flex ">
                <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                <p className="text-[14px]">
                  {" "}
                  ResScoreTM utilises a structured assessment framework. It
                  determines climate adaptation (preparedness) baseline for the
                  user based on six pillars and 55 parameters1, using
                  question-based design.
                </p>
              </li>
              <div className="mt-2">
                <li className="flex  justify-center ml-1 gap-1">
                  <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                  <p className="text-[14px]">
                    {" "}
                    An overall ResScoreTM score is provided to the organisation
                    based on the response.
                  </p>
                </li>
                <li className="flex  justify-center ml-1 gap-1 ">
                  <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                  <p className="text-[14px]">
                    {" "}
                    Parameters are the building blocks within each of the core
                    resilience pillars which provides a granular level of detail
                    for evaluating an organisational climate resilience.
                  </p>
                </li>
              </div>
            </ul>
          </div>

          {/* Right Side Content - Video Placeholder */}
          <div className="w-[422px] h-[307px] ml-8 p-4 bg-[#ad9cd2] text-[#262728] rounded-lg">
            <Link to="/gmap">
              <h3 className="text-[18px] pb-4 text-gray-800">
                <img src={LineI} alt="" />
                How to calculate your ResScore
              </h3>
            </Link>
            <ul className="flex flex-col text-gray-600 space-y-6 mt-2 ">
              <li className="flex items-start ">
                <span className="text-[15px] mr-2">1</span>
                <p className="text-[15px] font-[400] ">
                  Enter Your Profile Details:
                </p>
              </li>
              <li className="flex items-start space-y-1 ">
                <span className="text-[15px] mt-1 mr-2">2</span>
                <p className="text-[15px]">Tell us about your Preparedness:</p>
              </li>
              <li className="flex items-start space-y-1">
                <span className="text-[15px] mt-1 mr-2 ">3</span>
                <p className="text-[15px]">
                  Get your score & assess your Preparedness:
                </p>
              </li>
            </ul>
            <span className="  flex ml-36  mt-16 text-[14px] text-white">
              {" "}
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResScoreGuidePageHome;
