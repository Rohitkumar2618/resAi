import Logo2 from "../assets/logo2.png";

import HomeI from "../assets/workspace.svg";
import FolderI from "../assets/folder.svg";
import UsersI from "../assets/users.svg";
import VectorI from "../assets/tags.svg";
import MapviewI from "../assets/pictures.svg";
import UserI from "../assets/user.svg";
import SettingI from "../assets/cog.svg";
import BellI from "../assets/bell.svg";
import CartI from "../assets/Path 26.svg";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[260px] min-w-[256px]">
      <aside className="bg-white p-5 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src={Logo2}
            alt="Resilience AI Logo"
            className="h-16 fill-purple"
          />
          <h1 className="text-xl font-bold text-gray-700">Resilience AI</h1>
        </div>
        <nav>
          <ul className="space-y-4 cursor-pointer">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 " : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={HomeI} alt="" className="fill-fuchsia-400" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workspace"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 " : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img
                  src={FolderI}
                  alt=""
                  className="purple-filter fill-current "
                />
                <span>Workspace</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/survey"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 " : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={VectorI} alt="" />
                <span>Survey</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 " : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={UsersI} alt="" />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/map/datasource"
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded border-b-2 ${isActive ? "bg-gray-200 " : "text-gray-700"
                  } hover:bg-gray-200`
                }
              >
                <img src={MapviewI} alt="" />
                <span>Map View</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex justify-around  items-center pt-6 border-t border-gray-200 mt-8 cursor-pointer">
          <img
            src={UserI}
            alt=""
            className="w-9 p-1  rounded-full bg-[#F2F4F8]"
          />
          <img src={SettingI} alt="" className="w-6" />
          <img src={BellI} alt="" className="w-5" />

          <img src={CartI} alt="" className="w-6" />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
