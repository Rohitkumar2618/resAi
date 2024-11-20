import { RiLock2Line, RiLockUnlockFill } from "@remixicon/react";

import progressI from "../assets/ProgressCircle.png";
import RedTv from "../assets/redTv.png";
import MarketBI from "../assets/Marketing budget.png";
import download from "../assets/download.svg";
import downloadableReport from "../assets/downloads/Climate Risk Information report - Mahindra 1.pdf";
import { Link } from "react-router-dom";

const ClimateRiskCards = (props) => {
  console.log(props)
  // Card data array with added icon and iconBackground properties
  const cardData = props && props.cardData ? props.cardData : [
    {
      title: "Climate Risk Overview",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={progressI} alt="" />,
    },
    {
      title: "Flood Meta",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={RedTv} alt="" />,
    },
    {
      title: "Heatwave Meta",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={MarketBI} alt="" />,
    },
    {
      title: "Slope Meta",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={RedTv} alt="" />,
    },
    {
      title: "Vegitation Meta",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={progressI} alt="" />,
    },
    {
      title: "Subscribe for detailed meta datasets ",
      description:
        "For more, paid meta data",
      isSubscribed: false,
      icon: <img src={RedTv} alt="" />,
    },
  ];

  // ClimateRiskCard component
  const ClimateRiskCard = ({
    title,
    description,
    isSubscribed,
    icon,
    iconBackground,
    enableDownload
  }) => {
    return (
      <div className="w-[243px] h-[216px] p-4 border-2 mt-10 rounded-md flex flex-col justify-start items-start space-y-3 m-4 ">
        {/* Flex container for icons and badge */}
        <div className="flex justify-between items-start w-full">
          {/* Icon with dynamic background */}
          <div
            className={`w-[42px] h-[42px] ${iconBackground} rounded flex items-center justify-center`}
          >
            {icon}
          </div>

          {/* Badge */}
          <div
            className={`flex items-center space-x-1 ${isSubscribed
              ? "bg-green-100 text-green-600"
              : "bg-[#E6DFDF] text-black-600"
              } text-xs  px-2 py-1 rounded-full`}
          >
            {isSubscribed ? (
              <RiLockUnlockFill className="w-3 h-3" />
            ) : (
              <RiLock2Line className="w-3 h-3" />
            )}
            <span>{isSubscribed ? "Subscribed" : "Not subscribed"}</span>
          </div>
        </div>
        {/* Title */}
        <div className="w-full flex justify-between">
          <h3 className="text-[14px] font-[400] text-gray-800">{title}
          </h3>
          {enableDownload && (
            <Link to={downloadableReport} target="_blank" download>
              {" "}
              <img src={download} alt="" />
            </Link>
          )}
        </div>

        {/* Description */}
        <p className="text-[12px] font-[400] text-gray-600">{description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap   justify-start gap-1">
      {cardData.map((card, index) => (
        <ClimateRiskCard
          key={index}
          title={card.title}
          description={card.description}
          isSubscribed={card.isSubscribed}
          icon={card.icon}
          iconBackground={card.iconBackground}
          enableDownload={card.enableDownload ? card.enableDownload : false}
        />
      ))}
    </div>
  );
};

export default ClimateRiskCards;
