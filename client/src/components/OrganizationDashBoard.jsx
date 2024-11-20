import React from "react";
import SideBar from "./SideBar";
import CEOI from "../assets/seo.jpg";
import { LucidePlaySquare } from "lucide-react";
import LineI from "../assets/Group 3345.png";
import DotI from "../assets/Ellipse 553.png";
import OrganizationSidebar from "./OrganizationSidebar";

const OrganizationDashBoard = () => {
  return (
    <div className="w-full   h-screen flex">
      <OrganizationSidebar />
      <div className="w-5/6  bg-[#F0F2FF] ">
        <main className="w-4/5 ml-8   ">
          <section className=" p-8  rounded-">
            <h2 className="text-2xl font-extralight text-[#544D7C] mb-4">
              Welcome to Resilience 360
            </h2>
            <p className="text-xl font-extralight text-gray-600 mb-6">
              Building Resilience at every step
            </p>

            <div className="flex mt-16 ">
              {/* Left Side Content */}
              <div className="w-[464px]  space-y-1  ">
                <img src={LineI} alt="" />
                <h3 className="text-lg  pb-4 text-gray-800">
                  Checkout Product in action
                </h3>
                <ul className="text-gray-600 space-y-2   ">
                  <li className="flex ">
                    Lorem Ipsum has been the industry's standard dummy text
                    <br /> ever since the 1500s.
                  </li>
                  <div className="mt-2">
                    <li className="flex  justify-center ml-1 gap-1">
                      <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li className="flex  justify-center ml-1 gap-1 ">
                      <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li className="flex  justify-center ml-1 gap-1">
                      <img src={DotI} alt="" className="w-2 h-2 mt-2 mr-1" />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </div>
                </ul>
              </div>

              {/* Right Side Content - Video Placeholder */}
              <div className="w-[481px] pl-10">
                <div className="relative">
                  <img
                    src={CEOI}
                    alt="CEO Video"
                    className="rounded-sm shadow-md"
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
                Get Started
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OrganizationDashBoard;
