// import React from 'react';

// const Cart = async ({ cartItems }) => {
  
//   return (
//     <div>
//       <h2>My Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - Quantity: {item.quantity}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';

const Cart = () => {
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
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li style={{ fontSize: "2rem" }} key={index}>
            <button style={{ marginRight: "20px", fontSize: "2rem", padding: "0 13px" }} onClick={() => removeFromCart(index)}>-</button>
            {item.name} - {item.price} - Quantity: {item.quantity}
            <button style={{ marginLeft: "20px", fontSize: "2rem", padding: "0 13px" }} onClick={() => addToCart({ id: 5, name: 'Ice-Cream', price: 40 })}>+</button>
          </li>
        ))}
        {
          cart.length === 0 && <button style={{padding : "10px 30px", fontSize : "20px"}} onClick={() => addToCart({ id: 5, name: 'Ice-Cream', price: 40 })}>Add Now</button>
        }

      </ul>

    </div>
  );
};

export default Cart;