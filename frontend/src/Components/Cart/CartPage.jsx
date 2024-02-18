// import React, { useEffect, useState } from 'react';
// import Cart from './Cart'; // Adjust the path based on your project structure

// const CartPage = ({ cartItems }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const addToCart = (item) => {
//     const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity += 1;
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [...cart, { ...item, quantity: 1 }];
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//   };

//   const removeFromCart = (index) => {
//     const updatedCart = [...cart];
//     if (updatedCart[index].quantity == 1) {
//       updatedCart.splice(index, 1);
//       setCart(updatedCart);
//     }
//     else {
//       updatedCart[index].quantity -= 1
//       setCart(updatedCart);
//     }
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };


//   return (
//     <div>
//       <style
//         dangerouslySetInnerHTML={{
//           __html:
//             '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n',
//         }}
//       />
//       <div className="h-screen bg-gray-100 pt-20">
//         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//         <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

//           {
//             cart.map((index, element) => (
//               <div className="rounded-lg md:w-2/3">
//                 <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//                   <img
//                     src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                     alt="product-image"
//                     className="w-full rounded-lg sm:w-40"
//                   />
//                   <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                     <div className="mt-5 sm:mt-0">
//                       <h2 className="text-lg font-bold text-gray-900">
//                         {element.name}
//                       </h2>
//                     </div>
//                     <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                       <div className="flex items-center border-gray-100">
//                         <span onClick={() => removeFromCart(index)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-lavender hover:text-blue-50">
//                           {" "}
//                           -{" "}
//                         </span>
//                         <input
//                           className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                           type="number"
//                           defaultValue={2}
//                           min={1}
//                         />
//                         <span onClick={() => addToCart(element)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                           {" "}
//                           +{" "}
//                         </span>
//                       </div>
//                       <div className="flex items-center space-x-4">
//                         <p className="text-sm">element.price</p>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M6 18L18 6M6 6l12 12"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }


//           {/* Sub total */}
//           <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//             <div className="mb-2 flex justify-between">
//               <p className="text-gray-700">Subtotal</p>
//               <p className="text-gray-700">$129.99</p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-gray-700">Shipping</p>
//               <p className="text-gray-700">$4.99</p>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between">
//               <p className="text-lg font-bold">Total</p>
//               <div className>
//                 <p className="mb-1 text-lg font-bold">134.98 INR</p>
//               </div>
//             </div>
//             <button className="mt-6 w-full rounded-md bg-lavender py-1.5 font-medium text-blue-50 hover:bg-[hsl(249,100%,70%)]">
//               Check out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default CartPage;






// // import React, { useState, useEffect } from 'react';

// // const Cart = () => {
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     const storedCart = localStorage.getItem('cart');
// //     if (storedCart) {
// //       setCart(JSON.parse(storedCart));
// //     }
// //   }, []);

// //   const addToCart = (item) => {
// //     const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
// //     if (existingItemIndex !== -1) {
// //       const updatedCart = [...cart];
// //       updatedCart[existingItemIndex].quantity += 1;
// //       setCart(updatedCart);
// //       localStorage.setItem('cart', JSON.stringify(updatedCart));
// //     } else {
// //       const updatedCart = [...cart, { ...item, quantity: 1 }];
// //       setCart(updatedCart);
// //       localStorage.setItem('cart', JSON.stringify(updatedCart));
// //     }
// //   };

// //   const removeFromCart = (index) => {
// //     const updatedCart = [...cart];
// //     if (updatedCart[index].quantity == 1) {
// //       updatedCart.splice(index, 1);
// //       setCart(updatedCart);
// //     }
// //     else {
// //       updatedCart[index].quantity -= 1
// //       setCart(updatedCart);
// //     }
// //     localStorage.setItem('cart', JSON.stringify(updatedCart));
// //   };

// //   return (
// //     <div>
// //       <h2>Shopping Cart</h2>
// //       <ul>
// //         {cart.map((item, index) => (
// //           <li style={{ fontSize: "2rem" }} key={index}>
// //             <button style={{ marginRight: "20px", fontSize: "2rem", padding: "0 13px" }} onClick={() => removeFromCart(index)}>-</button>
// //             {item.name} - {item.price} - Quantity: {item.quantity}
// //             <button style={{ marginLeft: "20px", fontSize: "2rem", padding: "0 13px" }} onClick={() => addToCart({ id: 5, name: 'Ice-Cream', price: 40 })}>+</button>
// //           </li>
// //         ))}
// //         {
// //           cart.length === 0 && <button style={{padding : "10px 30px", fontSize : "20px"}} onClick={() => addToCart({ id: 5, name: 'Ice-Cream', price: 40 })}>Add Now</button>
// //         }

// //       </ul>

// //     </div>
// //   );
// // };

// // export default Cart;



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
      <h2 style={{margin : "2rem", fontSize : "3rem" , color : "black"}}>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li style={{ fontSize: "2rem" }} key={index}>
            <button style={{ marginRight: "20px", fontSize: "2rem", padding: "0 13px" }} onClick={() => removeFromCart(index)}>-</button>
            {item.name} - {item.price} - Quantity: {item.quantity}
            <button style={{ marginLeft: "20px", fontSize: "2rem", padding: "0 13px" }} onClick={() => addToCart({ id: 5, name: 'Ice-Cream', price: 40 })}>+</button>
          </li>
        ))}
        {
          cart.length === 0 && <button style={{ padding: "10px 30px", fontSize: "20px" }} onClick={() => addToCart({ id: 5, name: 'Ice-Cream', price: 40 })}>Add Now</button>
        }

      </ul>

    </div>
  );
};

export default Cart;



