import React, { useState, useEffect } from 'react';
import Navbar from '../Nabvar'
import { Link } from 'react-router-dom';

const OurTable = () => {
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
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity == 1) {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
    else {
      updatedCart[index].quantity -= 1
      setCart(updatedCart);
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <>
      {/* <Navbar/> */}

      <div className="tableWrapper">
        <div className="tableCloth">
          <div className="pizza group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Farmhouse Pizza</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="wings group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Chicken Wings</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="burger group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Veg Burger</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="ic group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Strawberry Ice-Cream</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="pasta group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Red Sauce Pasta</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="brownie group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Chocolate Brownie</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
        </div>
        
        <button className="viewMenuBtn sticky bottom-8 bg-lavender px-[1.5em] py-[0.75em] rounded-lg text-white text-lg"><Link to="/dashboard">View Entire Menu</Link></button>
      </div>
    </>
  )
}

export default OurTable