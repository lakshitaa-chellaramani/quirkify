import { useSpring, animated } from "react-spring";
import "./CardGenerator.css";
import React, { useState, useEffect } from 'react';


const CardGenerator = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }
  const [hovered, setHovered] = React.useState(false);
  const [itemData, setItemData] = useState([])

  // console.log(items)

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

  const buttonhandler = async (category) => {
    try {
      const response = await fetch(`http://localhost:4000/api/items/menu/${category}`, {
        method: "GET"
      })
      const data = await response.json()
      console.log("Data: ", data)
      setItemData(data.menu)
    } catch (error) {
      console.log(error)
    }
  }

  const sortHandler = async (category) => {
    try {
      const response = await fetch(`http://localhost:4000/api/items/menu/sortByPrice`, {
        method: "GET"
      })
      const data = await response.json()
      console.log("Data: ", data)
      setItemData(data.menu)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn filter_btn m-1">Filter</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button onClick={() => buttonhandler("veg")}>Filter by Veg</button></li>
          <li><button onClick={() => buttonhandler("nonveg")}>Filter by Non-Veg</button></li>
          <li><button onClick={() => buttonhandler("starters")}>Filter by Starter</button></li>
          <li><button onClick={() => buttonhandler("maincourse")}>Filter by Main Course</button></li>
          <li><button onClick={() => buttonhandler("dessert")}>Filter by Desserts</button></li>
          <li><button onClick={() => buttonhandler("quickbite")}>Filter by Quick Bites</button></li>
        </ul>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn filter_btn m-1">Sort</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button onClick={sortHandler}>Sort by Price</button></li>
        </ul>
      </div>
      {
        itemData.map(data => (
          <div className="card-container">
            <animated.div
              className="card m-8"
              style={cardSpring}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >

            <figure className="product-image-container">
            <img
              src={data.itemImage}
              alt="Product Image"
              className="product-image"
            />
          </figure>
          <div className="card-body1">
            <h2 className="card-title">{data.itemName}</h2>
            <p className="price">Rs {data.itemPrice}</p>
            <p className="description">{data.itemDesc}</p>
            <div className="card-actions">
              <button onClick={() => addToCart({ id: data._id, name: data.itemName, price: data.itemPrice })} className="btn btn-primary">Add to Cart</button>
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
