import ResScoreInSightsProfileCard from "./ResScoreInSightsProfileCard";
import UserI from "../assets/user.svg";
import progressI from "../assets/ProgressCircle.png";
import RedTv from "../assets/redTv.png";
import MarketBI from "../assets/Marketing budget.png";
import ClimateRiskCards from "../components/ClimateRiskCard";
import OrganizationstatusCard from "./organizationstatusCard";
import MenuI from "../assets/function-add-line.svg";
import OrganizationHomeCard from "./OrganizationHomeCard";

const ResScoreGuidepageInSights = () => {
  const profileCardData = [
    {
      title: "Your Profile",
      imageSrc: UserI,
      bgColor: "bg-[#8E78CD]",
      categories: "Categories",
      progress: "12/18",
    },
    {
      title: "Your Preparedness",
      imageSrc: UserI,
      bgColor: "bg-[#8E78CD]",
      categories: "Your Score",
      progress: "54/100",
    },
  ];

  const selectedCards = [
    {
      title: "Baseline and Profile",
      description:
        "Analyze your Climare Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={progressI} alt="" />,
    },
    {
      title: "Your Preparedness Profile",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={RedTv} alt="" />,
    },
    {
      title: "Industry vs you",
      description:
        "Analyze your Climate Reports across various brands, mediums & vendors",
      isSubscribed: true,
      icon: <img src={MarketBI} alt="" />,
    },
  ];

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
    <div>
      {/* profile card */}
      <div className=" p-4 flex gap-10 text-white">
        {profileCardData.map((card, index) => (
          <ResScoreInSightsProfileCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            bgColor={card.bgColor}
            categories={card.categories}
            progress={card.progress}
          />
        ))}
      </div>
      <div className=" w-full h-[300px]  ">
        <span className="text-[16px] ml-4 ">Your Reports</span>
        <ClimateRiskCards cardData={selectedCards} />
      </div>
      <div>
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
          <div className="right w-1/3 h-full   ">
            <div className=" flex  items-center  justify-center  flex-col">
              <div className="   flex w-[190px] h-[17px] items-center justify-center gap-1  ">
                <img src={MenuI} alt="" />
                <span className="text-[14px] font-[400]"> Score for year </span>
                : <span className="text-[14px] font-[400]">2023</span>
              </div>
              <div className=" smallcard w-[208px] h-[85px] ml-4 flex flex-col  mt-6  ">
                <OrganizationstatusCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResScoreGuidepageInSights;
