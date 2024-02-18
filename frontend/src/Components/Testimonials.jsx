// Testimonials.js
import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedbacks from the backend when the component mounts
    const fetchFeedbacks = async () => {
      const response = await fetch('http://localhost:3001/get-feedbacks');
      const data = await response.json();
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback._id}>
            <strong>{feedback.name}</strong>: {feedback.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
