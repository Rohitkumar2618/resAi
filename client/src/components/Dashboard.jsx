import { useEffect } from 'react';
import SideBar from "./SideBar";
import CEOV from "../assets/ceoVideo.mp4";
import { LucidePlaySquare } from "lucide-react";
import LineI from "../assets/Group 3345.png";
import DotI from "../assets/Ellipse 553.png";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="w-full bg-[#F0F2FF] ">
        <main className="w-4/5 ml-8   ">
          <section className=" p-8  rounded-">
            <h2 className="text-2xl font-extralight text-[#544D7C] mb-4">
              Welcome to Resilience 360
            </h2>
            <p className="text-base font-extralight text-gray-600 mb-6">
              Building Resilience at every step
            </p>

            <div className="flex mt-16 ">
              {/* Left Side Content */}
              <div className="w-[464px]  mt-2   ">
                <Link to="/resilience360">
                  {" "}
                  <img src={LineI} alt="" />
                  <h3 className="text-lg  pb-4 text-gray-800">
                    Checkout Product in action
                  </h3>
                </Link>
                <ul className="text-gray-600 space-y-2   ">
                  <li className="flex ">
                    Determine: Know your Climate Risk exposure (socio-economic
                    baseline)
                  </li>
                  <div className="mt-2">
                    <li className="flex  justify-center ml-1 gap-1">
                      <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                      Plan: Design controls to reduce risk (people, asset,
                      business)
                    </li>
                    <li className="flex  justify-center ml-1 gap-1 ">
                      <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                      Action: Define, authorize, and report action to
                      stakeholders.
                    </li>
                    <li className="flex  justify-center ml-1 gap-1">
                      <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                      Scale: Climate adaptation as a culture (monitor, multiply)
                    </li>
                  </div>
                </ul>
              </div>

              {/* Right Side Content - Video Placeholder */}
              <div className="w-[481px] h-[307px]  ml-8 rounded-lg">
                <div className="relative">
                  <video
                    src={CEOV}
                    alt="CEO Video"
                    className="rounded-sm shadow-md"
                    controls
                  />

                  <p className="absolute bottom-2 left-2 flex gap-1  text-white text-sm p-2 rounded">
                    <LucidePlaySquare /> Meet our CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Resilience Basket Section */}
            <div className="mt-10  w-[850px] h-[190px] p-4 bg-[#bea7f0] border  rounded-lg text-center">
              <img src={LineI} alt="" className="ml-10" />
              <h4 className="text-xl  ml-10 flex text-gray-800 mb-6">
                Create your Resilience Basket
              </h4>
              <div className="flex  ml-10 space-x-8 text-gray-700 font-normal mb-6 ">
                <span>1. Choose Climate Type</span>
                <span>2. Select Resilience Modules</span>
                <span>3. Generate your Resilience Plan</span>
              </div>
              <button className="mt-6 px-24 py-1 bg-purple-500 text-white  rounded-full hover:bg-purple-600">
                <Link to="/resilience360">
                  {" "}
                  Get Started
                </Link>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
