import React, { useState } from "react";

const Dropdown = ({ sortType, handleSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    handleSortChange(value);
    setIsOpen(false);
  };

  return (
    <>
    <div className=" overflow-x-hidden">
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute">
        <li>
          <select
            value={sortType}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="mood">Mood</option>
            <option value="price">Price</option>
            <option value="trending">Trending</option>
            {/* Add more sorting options as needed */}
          </select>
        </li>
      </ul>
      </div>
      </>
      )
};

export default Dropdown;
