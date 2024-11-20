import Logo2 from "../assets/logo2.png";
import { RiArrowLeftLine } from "@remixicon/react";
import HomeI from "../assets/Vector.png";
import FolderI from "../assets/folders.png";
import UsersI from "../assets/users.png";
import VectorI from "../assets/Vector(1).png";

import UserI from "../assets/user.png";
import SettingI from "../assets/setting.png";
import BellI from "../assets/bell.png";
import CartI from "../assets/cart.png";

import { Link, NavLink } from "react-router-dom";

const OrganizationMapSidebar = () => {
  return (
    <div className="w-[260px] min-w-[256px] border-r-2">
      <aside className="bg-white p-5 h-full flex flex-col justify-between">
        {/* Logo and title  */}
        <div className="flex items-center space-x-3 mb-8">
          <img
            src={Logo2}
            alt="Resilience AI Logo"
            className="h-16 fill-purple"
          />
          <h1 className="text-xl font-bold text-gray-700">Resilience AI</h1>
        </div>

        <div className=" absolute flex gap-2 mt-20 ml-2   ">
          {" "}
          <RiArrowLeftLine /> <Link to="/dashboard">Back to Dashboard</Link>
        </div>
        <nav>
          <ul className="space-y-4 cursor-pointer">
            <li>
              <NavLink
                to="/organization/mapview/datasource"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 text-purple-600" : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={HomeI} alt="" />
                <span>Data Sources</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/organization/mapview/guidepage"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 text-purple-600" : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={FolderI} alt="" />
                <span>Guide Page</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/survey"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 text-purple-600" : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={VectorI} alt="" />
                <span>Publications/Notes</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 text-purple-600" : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={UsersI} alt="" />
                <span>FAQs</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex justify-around  items-center pt-6 border-t border-gray-200 mt-8 cursor-pointer">
          <img
            src={UserI}
            alt=""
            className="w-8 bg-gray-100 rounded-full p-1"
          />
          <img src={SettingI} alt="" className="w-6" />
          <img src={BellI} alt="" className="w-5" />

          <img src={CartI} alt="" className="w-6" />
        </div>
      </aside>
    </div>
  );
};

export default OrganizationMapSidebar;
