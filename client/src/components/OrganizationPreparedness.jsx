import { useState } from "react";
import ArrowI from "../assets/ResProfile.svg";
import ResScoreProfileCrisis from "./ResScoreProfileCrisis";
import ResScoreProfileEconomic from "./ResScoreProfileEconomic";
import ResScorePreparednessCrisis from "./ResScorePreparednessCrisis";

const OrganizationPreparedness = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 6)); // Assuming there are 6 steps
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <ResScorePreparednessCrisis />;
      case 2:
        return <ResScoreProfileEconomic />;
      // Add more cases for additional steps here
      default:
        return null;
    }
  };

  const stepClasses = (step) => {
    return `w-[20px] h-[20px] flex items-center justify-center rounded-full text-[12px] cursor-pointer ${currentStep === step
      ? "bg-[#544D7C] text-white"
      : "bg-[#fff] border border-[#DEDFE0] text-[#555459] "
      }`;
  };

  const stepLabelClasses = (step) => {
    return `text-[14px] ml-2 font-[14px] cursor-pointer ${currentStep === step ? "text-[#544D7C]" : "text-[#828282]"
      }`;
  };

  return (
    <>
      <div className="m-4">
        {/* Upper steps div */}
        <div>
          <div className="w-[1200px] flex h-[45px] items-center pb-2 border-b-2 rounded-md">
            {/* Steps */}
            <div className="flex space-x-4">
              {/* Step 1 */}
              <div
                className="flex items-center justify-center"
                onClick={() => handleStepClick(1)}
              >
                <span className={stepClasses(1)}>1</span>
                <span className={stepLabelClasses(1)}>Crisis Management</span>
                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 2 */}
              <div
                className="flex items-center justify-center"
                onClick={() => handleStepClick(2)}
              >
                <span className={stepClasses(2)}>2</span>
                <span className={stepLabelClasses(2)}>Economic</span>
                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 3 */}
              <div
                className="flex items-center justify-center"
                onClick={() => handleStepClick(3)}
              >
                <span className={stepClasses(3)}>3</span>
                <span className={stepLabelClasses(3)}>Physical</span>
                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 4 */}
              <div
                className="flex items-center justify-center"
                onClick={() => handleStepClick(4)}
              >
                <span className={stepClasses(4)}>4</span>
                <span className={stepLabelClasses(4)}>Strategy</span>
                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 5 */}
              <div
                className="flex items-center justify-center"
                onClick={() => handleStepClick(5)}
              >
                <span className={stepClasses(5)}>5</span>
                <span className={stepLabelClasses(5)}>Environment</span>
                <img src={ArrowI} alt="" className="ml-4" />
              </div>
              {/* Step 6 */}
              <div
                className="flex items-center justify-center"
                onClick={() => handleStepClick(6)}
              >
                <span className={stepClasses(6)}>6</span>
                <span className={stepLabelClasses(6)}>Social</span>
              </div>
            </div>
            {/* Next Button */}
            <button
              onClick={nextStep}
              className="absolute right-20 bg-purple-600 text-white w-[103px] h-[33px] rounded-md hover:bg-purple-700"
            >
              Next
            </button>
          </div>
        </div>

        {/* Render the component for the current step */}
        {renderStepComponent()}
      </div>
    </>
  );
};

export default OrganizationPreparedness;
