import React, { useState } from "react";

import { Expired, InProgress, Done ,Dashboard} from "../components";
import { LuRefreshCcw } from "react-icons/lu";

// Define the categories
const categories = ["Dashboard", "Done", "In Progress", "Expired"];

const CategorySlider: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const handleSliderChange = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  // Conditional rendering based on selected category
  const renderCategoryComponent = () => {
    switch (selectedCategoryIndex) {
      case 0:
        return <Dashboard />;
      case 1:
        return <Done />;
      case 2:
        return <InProgress/>;
      case 3:
        return <Expired />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="category-slider-container sm:p-4 p-2">
      {/* Slider Buttons */}
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-2 justify-between items-center">

      <div className="slider-buttons   sm:mt-2  bg-[#ECEDEE] rounded-full">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`slider-button sm:px-4 px-2 py-2  rounded-full transition-colors  duration-200 sm:text-md text-sm ${
              selectedCategoryIndex === index
                ? "bg-blue-400 text-white  font-bold"
                : ""
            }`}
            onClick={() => handleSliderChange(index)}
          >
            {category}
          </button>
        ))}

      </div>
      <div>
        <button onClick={()=> window.location.reload()} className="bg-blue-400 text-white font-semibold text-lg px-2 rounded-xl flex items-center gap-1">
          Refresh
          <LuRefreshCcw />
        </button>
      </div>
      </div>

      {/* Render the component based on the selected category */}
      <div className="category-content mt-4 ">{renderCategoryComponent()}</div>
    </div>
  );
};

export default CategorySlider;
