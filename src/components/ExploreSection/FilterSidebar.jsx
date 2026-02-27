"use client";

import React, { useState } from "react";

const tourTypes = [
  "Nature Tours",
  "Adventure Tours",
  "Cultural Tours",
  "Food Tours",
  "City Tours",
  "Cruises Tours",
];

const FilterSidebar = ({ selectedType, setSelectedType }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTourTypes = showAll ? tourTypes : tourTypes.slice(0, 3);

  return (
    <div className="lg:w-[280px] bg-secondary border border-secondary rounded-2xl relative z-10">
      
      {/* HEADER SECTION (Replaced Date Picker with Text) */}
      <div className="bg-primary p-5 text-white rounded-t-2xl">
        <p className="text-sm md:text-md font-semibold ">Discover Your Perfect Tour</p>

       
      </div>

      {/* BODY */}
      <div className="p-5">
        <h3 className="text-sm font-semibold text-grayish mb-4">
          Tour Type
        </h3>

        <div className="space-y-3">
          {visibleTourTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="tourType"
                value={type}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
                className="w-4 h-4 accent-primary"
              />
              {type}
            </label>
          ))}

          <div className="flex items-center gap-4 mt-4">
            {/* See More */}
            {tourTypes.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs text-primary hover:underline"
              >
                {showAll ? "Show Less" : "See More"}
              </button>
            )}

            {/* Clear Filter */}
            {selectedType && (
              <button
                onClick={() => setSelectedType("")}
                className="text-xs text-primary"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        <div className="border-t border-primary my-6"></div>
      </div>
    </div>
  );
};

export default FilterSidebar;