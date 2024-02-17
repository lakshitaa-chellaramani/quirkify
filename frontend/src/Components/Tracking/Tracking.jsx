import React from "react";
import Activity from "./Activity";
import { activities } from "./activities";

const Tracking = () => {
  return (
    <div>
      <ol className="relative max-w-7xl mx-auto border-s border-gray-200 dark:border-gray-700">
        {activities.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
      </ol>
    </div>
  );
};

export default Tracking;