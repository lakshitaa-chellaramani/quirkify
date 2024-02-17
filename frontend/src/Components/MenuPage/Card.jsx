import React, { useState, useEffect } from "react";
import CardGenerator from "./CardGenerator";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/items/getItems`);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3">
        {data.map((data, index) => (
          <CardGenerator key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
