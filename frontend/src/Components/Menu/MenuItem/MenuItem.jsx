import React from 'react';
import FoodItem from './FoodItem';
import AddButton from './AddButton';
import { Fooddata } from './Fooddata';
import axios from 'axios';


const MenuItem = () => {
  const getFoodTrucks = async () => {
    const response = await axios.get('https://example-api.com/foodtrucks');
    return response.data;
  };
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {Fooddata.map((food) => (
          <div key={food.id}>
            <FoodItem food={food} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuItem
