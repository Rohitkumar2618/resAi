// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import ArrowI from "../assets/arrow.svg";
// import ResScorePreparednessCrisis from "./ResScorePreparednessCrisis";
// import ResScorePreparednessEconomics from "./ResScorePreparednessEconomics";
// import ResScorePreparednessPhysical from "./ResScorePreparednessPhysical";
// import ResScorePreparednesssStrategies from "./ResScorePreparednesssStrategies";
// import ResScorePreparednesssSocial from "./ResScorePreparednesssSocial";
// import ResScorePreparednesssEnvironment from "./ResScorePreparednesssEnvironment";
// import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// import {
//   selectPreparedness,
//   updateCrisis,
//   updateEconomics,
//   updatePhysical,
//   updateStrategies,
//   updateEnvironment,
//   updateSocial,
// } from "../components/Redux/slices/preparedness";

// const ResScoreGuidepagePreparedness = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [crisisData, setCrisisData] = useState({});
//   const [economicsData, setEconomicsData] = useState({});
//   const [physicalData, setPhysicalData] = useState({});
//   const [strategiesData, setStrategiesData] = useState({});
//   const [environmentData, setEnvironmentData] = useState({});
//   const [socialData, setSocialData] = useState({});

//   const dispatch = useDispatch();
//   // const preparednessData = useSelector(selectPreparedness);

//   const nextStep = () => {
//     // Gather all data when submitting
//     const dispatchActions = [
//       () => dispatch(updateCrisis(crisisData)),
//       () => dispatch(updateEconomics(economicsData)),
//       () => dispatch(updatePhysical(physicalData)),
//       () => dispatch(updateStrategies(strategiesData)),
//       () => dispatch(updateEnvironment(environmentData)),
//       () => dispatch(updateSocial(socialData)), // Update social data when the last step is reached
//     ];

//     // Check if the current step is less than 6, if so, dispatch the respective action
//     if (currentStep < 6) {
//       dispatchActions[currentStep - 1]?.();
//       setCurrentStep((prevStep) => Math.min(prevStep + 1, 6));
//     } else {
//       // If it is the last step, we dispatch all updates
//       dispatchActions.forEach((action) => action());
//       // alert("Form Submitted!"); // Trigger the form submission alert
//       // Show success toast after form submission
//       toast.success("Form Submitted Successfully!");
//     }
//   };

//   const handleStepClick = (step) => setCurrentStep(step);

//   const renderStepComponent = () => {
//     const components = [
//       <ResScorePreparednessCrisis onInputChange={setCrisisData} />,
//       <ResScorePreparednessEconomics onInputChange={setEconomicsData} />,
//       <ResScorePreparednessPhysical onInputChange={setPhysicalData} />,
//       <ResScorePreparednesssStrategies onInputChange={setStrategiesData} />,
//       <ResScorePreparednesssEnvironment onInputChange={setEnvironmentData} />,
//       <ResScorePreparednesssSocial onInputChange={setSocialData} />,
//     ];

//     return components[currentStep - 1] || null;
//   };

//   const stepClasses = (step) =>
//     `w-[20px] h-[20px] flex items-center justify-center rounded-full text-[12px] cursor-pointer ${
//       currentStep === step
//         ? "bg-[#544D7C] text-white"
//         : "bg-gray-300 text-gray-600"
//     }`;

//   const stepLabelClasses = (step) =>
//     `text-[14px] ml-2 font-[14px] cursor-pointer ${
//       currentStep === step ? "text-[#544D7C]" : "text-gray-600"
//     }`;

//   return (
//     <div className="m-4">
//       {/* Upper steps div */}
//       <div className="w-[1200px] flex h-[45px] items-center pb-2 border-b-2 rounded-md">
//         {/* Steps */}
//         <div className="flex space-x-4">
//           {[
//             "Crisis Management",
//             "Economic",
//             "Physical",
//             "Strategy",
//             "Environment",
//             "Social",
//           ].map((label, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center"
//               onClick={() => handleStepClick(index + 1)}
//             >
//               <span className={stepClasses(index + 1)}>{index + 1}</span>
//               <span className={stepLabelClasses(index + 1)}>{label}</span>
//               {index < 5 && <img src={ArrowI} alt="Arrow" className="ml-4" />}
//             </div>
//           ))}
//         </div>
//         {/* Conditionally render Next or Submit Button */}
//         <button
//           onClick={nextStep}
//           className={`absolute right-20 w-[103px] h-[33px] rounded-md text-white ${
//             currentStep < 6
//               ? "bg-purple-600 hover:bg-purple-700"
//               : "bg-green-600 hover:bg-green-700"
//           }`}
//         >
//           {currentStep < 6 ? "Next" : "Submit"}
//         </button>
//       </div>

//       {/* Render the component for the current step */}
//       {renderStepComponent()}

//       <ToastContainer />
//     </div>
//   );
// };

// export default ResScoreGuidepagePreparedness;


import { useState } from "react";
import { useDispatch } from "react-redux";
import ArrowI from "../assets/arrow.svg";
import ResScorePreparednessCrisis from "./ResScorePreparednessCrisis";
import ResScorePreparednessEconomics from "./ResScorePreparednessEconomics";
import ResScorePreparednessPhysical from "./ResScorePreparednessPhysical";
// import ResScorePreparednesssStrategies from "./ResScorePreparednesssStrategies";
import ResScorePreparednesssSocial from "./ResScorePreparednessSocial";
// import ResScorePreparednesssEnvironment from "./ResScorePreparednesssEnvironment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  updateAllPreparedness,
  updateCrisis,
  updateEconomics,
  updatePhysical,
  updateStrategies,
  updateEnvironment,
  updateSocial,
} from "../components/Redux/slices/preparedness";
import ResScorePreparednessStrategies from "./ResScorePreparednessStrategies";
import ResScorePreparednessEnvironment from "./ResScorePreparednessEnvironment";
import axios from "axios";

const ResScoreGuidepagePreparedness = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    crisis: {},
    economics: {},
    physical: {},
    strategies: {},
    environment: {},
    social: {},
  });

  const dispatch = useDispatch();

  // const nextStep = () => {
  //   const stepKeys = [
  //     "crisis",
  //     "economics",
  //     "physical",
  //     "strategies",
  //     "environment",
  //     "social",
  //   ];

  //   // Update only the current step data in the Redux slice
  //   const currentKey = stepKeys[currentStep - 1];
  //   const currentData = formData[currentKey];
  //   const updateActions = {
  //     crisis: updateCrisis,
  //     economics: updateEconomics,
  //     physical: updatePhysical,
  //     strategies: updateStrategies,
  //     environment: updateEnvironment,
  //     social: updateSocial,
  //   };

  //   if (currentStep < 6) {
  //     dispatch(updateActions[currentKey](currentData));
  //     setCurrentStep((prevStep) => prevStep + 1);
  //   } else {
  //     // Final step: dispatch all form data to `updateAllPreparedness`
  //     dispatch(updateAllPreparedness(formData));
  //     toast.success("Form Submitted Successfully!");
  //   }
  // };

  const nextStep = async () => {
    const stepKeys = [
      "crisis",
      "economics",
      "physical",
      "strategies",
      "environment",
      "social",
    ];
  
    const currentKey = stepKeys[currentStep - 1];
    const currentData = formData[currentKey];
    const updateActions = {
      crisis: updateCrisis,
      economics: updateEconomics,
      physical: updatePhysical,
      strategies: updateStrategies,
      environment: updateEnvironment,
      social: updateSocial,
    };
  
    if (currentStep < 6) {
      // Dispatch the current step's data to Redux and move to the next step
      dispatch(updateActions[currentKey](currentData));
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Final step: Submit the form data to the backend
      dispatch(updateAllPreparedness(formData));
  
      try {
        const response = await axios.post("http://localhost:4000/api/resscore/save", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        toast.success("Form Submitted Successfully!");
        console.log("Saved Data:", response.data);
      } catch (error) {
        toast.error("Failed to submit form. Please try again.");
        console.error("Error saving data:", error);
      }
    }
  };
  


  const handleInputChange = (key, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: data,
    }));
  };

  const handleStepClick = (step) => setCurrentStep(step);

  const renderStepComponent = () => {
    const stepComponents = [
      <ResScorePreparednessCrisis key={0}
        onInputChange={(data) => handleInputChange("crisis", data)}
      />,
      <ResScorePreparednessEconomics key={1}
        onInputChange={(data) => handleInputChange("economics", data)}
      />,
      <ResScorePreparednessPhysical  key={2}
        onInputChange={(data) => handleInputChange("physical", data)}
      />,
      <ResScorePreparednessStrategies key={3}
        onInputChange={(data) => handleInputChange("strategies", data)}
      />,
      <ResScorePreparednessEnvironment key={4}
        onInputChange={(data) => handleInputChange("environment", data)}
      />,
      <ResScorePreparednesssSocial key={5}
        onInputChange={(data) => handleInputChange("social", data)}
      />,
    ];

    return stepComponents[currentStep - 1] || null;
  };

  const stepClasses = (step) =>
    `w-[20px] h-[20px] flex items-center justify-center rounded-full text-[12px] cursor-pointer ${
      currentStep === step
        ? "bg-[#544D7C] text-white"
        : "bg-gray-300 text-gray-600"
    }`;

  const stepLabelClasses = (step) =>
    `text-[14px] ml-2 font-[14px] cursor-pointer ${
      currentStep === step ? "text-[#544D7C]" : "text-gray-600"
    }`;

  return (
    <div className="m-4">
      {/* Upper steps div */}
      <div className="w-[1200px] flex h-[45px] items-center pb-2 border-b-2 rounded-md">
        {/* Steps */}
        <div className="flex space-x-4">
          {[
            "Crisis Management",
            "Economic",
            "Physical",
            "Strategy",
            "Environment",
            "Social",
          ].map((label, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              onClick={() => handleStepClick(index + 1)}
            >
              <span className={stepClasses(index + 1)}>{index + 1}</span>
              <span className={stepLabelClasses(index + 1)}>{label}</span>
              {index < 5 && <img src={ArrowI} alt="Arrow" className="ml-4" />}
            </div>
          ))}
        </div>
        {/* Conditionally render Next or Submit Button */}
        <button
          onClick={nextStep}
          className={`absolute right-20 w-[103px] h-[33px] rounded-md text-white ${
            currentStep < 6
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {currentStep < 6 ? "Next" : "Submit"}
        </button>
      </div>

      {/* Render the component for the current step */}
      {renderStepComponent()}

      <ToastContainer />
    </div>
  );
};

export default ResScoreGuidepagePreparedness;
