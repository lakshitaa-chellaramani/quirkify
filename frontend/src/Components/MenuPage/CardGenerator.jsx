import React from "react";
import { useSpring, animated } from "react-spring";
import "./CardGenerator.css"; // Import your CSS file for styling
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardGenerator = () => {
  const [hovered, setHovered] = React.useState(false);
  const [itemData, setItemData] = useState([])
  const [items, setItems] = useState([])

  console.log(items)

  const cardSpring = useSpring({
    opacity: hovered ? 1 : 0.9,
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  const getItems = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/items/getItems', {
        method: "GET"
      })
      const data = await response.json()
      // console.log(data)
      setItemData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  const vegHandler = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/items/menu/veg', {
        method: "GET"
      })
      const data = await response.json()
      // console.log(data)
      setItems(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn filter_btn m-1">Filter</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link onClick={vegHandler}>Filter by Veg</Link></li>
          <li><button onClick={vegHandler}>Filter by Non-Veg</button></li>
          <li><button onClick={vegHandler}>Filter by Starter</button></li>
          <li><button onClick={vegHandler}>Filter by Main Course</button></li>
          <li><button onClick={vegHandler}>Filter by Desserts</button></li>
          <li><button onClick={vegHandler}>Filter by Quick Bites</button></li>
        </ul>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn filter_btn m-1">Sort</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Sort by Price</a></li>
        </ul>
      </div>
      {
        itemData.map(data => (
          <div className="card-container">
            <animated.div
              className="card m-4"
              style={cardSpring}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >

              <figure>
                <img
                  src={data.itemImage}
                  alt="car!"
                  className="img_product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-black">{data.itemName}</h2>
                <p className="text-black price">Rs {data.itemPrice}</p>
                <p className="text-black price">{data.itemDesc}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </animated.div>
          </div>
        ))
        }
    </>
  );
};

export default CardGenerator;
