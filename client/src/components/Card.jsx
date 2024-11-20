import { Unlock, Lock, Trash } from "lucide-react";
import DeleteI from "../assets/Delete.svg";

const Card = ({ title, number, isLocked }) => (
  <div className="flex flex-col w-[186px] h-[65px] pt-1 pl-4 bg-white rounded-lg shadow-sm border border-gray-200   ">
    {/* Top row: number and lock/unlock icon */}
    <div className="flex items-center gap-4  ">
      <span className="text-gray-600 text-sm font-medium">{number}</span>
      <div
        className={`flex items-center justify-center w-5 h-5 rounded-full ${
          isLocked ? "bg-gray-200" : "bg-green-100"
        }`}
      >
        {isLocked ? (
          <Lock className="w-3 h-3 text-black" />
        ) : (
          <Unlock className="w-3 h-3 text-green-500" />
        )}
      </div>
    </div>

    {/* Bottom row: title and trash icon */}
    <div className="flex items-center justify-between  ">
      <span className="text-gray-600 text-[18px]  font-[400]">{title}</span>
      <div className=" pb-1 mr-2 mb-1 ">
        <img src={DeleteI} alt="" />
      </div>
    </div>
  </div>
);

export default Card;
