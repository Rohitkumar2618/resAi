import { useEffect } from 'react';
import Card from "./Card";
import SideBar from "./SideBar";
import LineI from "../assets/Group 3345.png";
import { Link } from "react-router-dom";
const Workspace = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return (
    <div className="w-full flex">
      <SideBar />
      {/* Main component */}
      <div className="w-full   bg-[#F2F4F8]">
        {/* Main Content */}
        <main className="flex-1 p-10 bg-gray-100 min-h-screen ">
          <h2 className="text-[24px] font-extralight text-[#544D7C] mb-2  ">
            Welcome to Resilience360 Plan, Sush
          </h2>
          <p className="text-gray-600  font-extralight ml-1 mb-14  ">
            Building Resilience at every step
          </p>

          <p className="text-[21px] font-[300]    text-[#544D7C] mb-14  ">
            <Link to="/resilience360">
              {" "}
              <img src={LineI} alt="" />
            </Link>
            You're currently on Resilience 360 Lite Plan
          </p>

          <div className=" absolute  top-[105px] right-40  flex justify-end space-x-4 ">
            <button className="px-6 py-1  bg-[#5C4D9B] text-white font-[300] rounded-full hover:bg-purple-600">
              <Link to="/resilience360">
                {" "}
                Change Your Plan
              </Link>
            </button>
            <button className="px-6 py-1 bg-[#5C4D9B] text-white font-[300]  rounded-full hover:bg-purple-600">
              Compare Plan
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6">
            {/* Determine Section */}
            <div>
              <h3 className="text-[22px] font-[400]  text-[#544D7C]">
                Determine
              </h3>
              <p className="text-gray-500 mb-4">
                Know your Climate Risk exposure (socio-economic baseline)
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/res-solv">
                  {" "}
                  <Card title="Resolve" number="01" isLocked={false} />
                </Link>
                <Link to="/res-score">
                  {" "}
                  <Card title="ResScore" number="02" isLocked={false} />
                </Link>
              </div>
            </div>

            {/* Plan Section */}
            <div>
              <h3 className="text-[22px] font-[400]  text-[#544D7C]">Plan</h3>
              <p className="text-gray-500 mb-4">
                Design controls to reduce risk (people, asset, business)
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/res-suite">
                  {" "}
                  <Card title="ResSuite" number="03" isLocked={false} />
                </Link>
                <Card title="ResHub" number="04" isLocked={true} />
              </div>
            </div>

            {/* Action Section */}
            <div>
              <h3 className="text-[22px] font-[400]  text-[#544D7C]">Action</h3>
              <p className="text-gray-500 mb-4">
                Define, authorize, and report action to stakeholders.
              </p>
              <Card title="Act4Impact" number="05" isLocked={true} />
            </div>

            {/* Scale Section */}
            <div>
              <h3 className="text-[22px] font-[400]  text-[#544D7C]">Scale</h3>
              <p className="text-gray-500 mb-4">
                Climate adaptation as a culture (monitor, multiply)
              </p>
              <Card title="ClimateGuru.ai" number="06" isLocked={true} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workspace;
