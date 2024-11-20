import IconS from "../assets/rectangle.svg";

const PlansCard = ({ label, isSelected, onSelect }) => {
  return (
    <div
      className={`relative flex justify-center items-center p-4 w-48 h-20 shadow-[rgba(255,255,255,0.5)_10px_5px_4px_0px] rounded-lg cursor-pointer transition-all ${
        isSelected ? "bg-gray-200" : "bg-white"
      }`}
      onClick={() => onSelect(label)}
    >
      {/* Selection Point in the Top-Right Corner */}
      <span
        className={`absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center ${
          isSelected ? "bg-black" : "border border-gray-400"
        }`}
      >
        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
      </span>

      <div className="flex flex-col items-center">
        <span className="text-[18px] text-center font-[300] text-gray-700">
          {label}
        </span>
      </div>
    </div>
  );
};

export default PlansCard;
