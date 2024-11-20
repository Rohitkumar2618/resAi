import IconS from "../assets/rectangle.svg";

const ClimateTypeCard = ({ label, isSelected, onSelect }) => {
  return (
    <div
      className={`relative p-4 w-48 h-20 shadow-[rgba(255,255,255,0.5)_10px_5px_4px_0px] rounded-lg cursor-pointer transition-all ${
        isSelected ? "bg-gray-200" : "bg-white"
      }`}
      onClick={() => onSelect(label)}
    >
      {/* Selection Circle in the Top-Right Corner */}
      <div className="absolute top-2 right-2">
        <span
          className={`w-4 h-4 rounded-full ${
            isSelected ? "bg-black" : "border-2 border-gray-300"
          } flex items-center justify-center`}
        >
          {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
        </span>
      </div>

      {/* Icon and Label in the Top-Left Corner */}
      <div className="absolute top-2 left-2 flex gap-2 items-center">
        <div className="flex items-center justify-center">
          <span className="absolute text-[10px]">icon</span>
          <img src={IconS} alt="Icon" className="w-[26px]" />
        </div>
        <span className="text-[18px] font-[300] text-gray-700">{label}</span>
      </div>
    </div>
  );
};

export default ClimateTypeCard;
