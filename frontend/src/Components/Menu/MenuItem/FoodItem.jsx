// FoodItem.js
import React, { useState } from 'react';

function FoodItem(food) {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  console.log(food)
  const handleAdd = () => {
    setShowCounter(true);
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white border">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src={food.itemImage} className="object-cover p-16" alt={food.alt} />
      </div>

      <div className="p-4">
        <div className="flex flex-col items-start justify-between  sm:items-center">
          <div>
            <p className="text-gray-400">{food.itemCategory}</p>
            <h2 className="mt-2 heading text-lg font-semibold text-gray-800">
              {food.itemName}
            </h2>
          </div>
          {showCounter ? (
            <div className="flex group items-center mt-4">
              <button
                className="bg-[#edf2f4] hover:bg-[#e94f37] hover:text-white text-zinc-500 font-bold py-1 px-3 rounded-l-xl"
                onClick={handleRemove}
              >
                -
              </button>
              <div className="mx-2">{count}</div>
              <button
                className="bg-[#edf2f4] hover:bg-[#2a9d8f] hover:text-white text-zinc-500 font-bold py-1 px-3 rounded-r-xl"
                onClick={handleAdd}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="bg-[#9381ff] hover:bg-[#b8b8ff] border-none text-white btn font-bold py-2 px-8 rounded-xl"
              onClick={handleAdd}
            >
              Add
            </button>
          )}
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-2 text-gray-600">{food.time}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-400">{food.distance}</span>
          </p>
          <p className="inline-flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="ml-2">{food.rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
