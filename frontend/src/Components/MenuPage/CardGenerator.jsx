import React from "react";
import { useSpring, animated } from "react-spring";
import "./CardGenerator.css"; // Import your CSS file for styling

const CardGenerator = () => {
  const [hovered, setHovered] = React.useState(false);

  const cardSpring = useSpring({
    opacity: hovered ? 1 : 0.9,
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <div className="card-container">
      <animated.div
        className="card  m-4"
        style={cardSpring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Food Item</h2>
          <p>Description of the food item</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default CardGenerator;
