import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      message,
      rating,
      image,
    };

    onSubmit(feedbackData);

    setName('');
    setMessage('');
    setRating(0);
    setImage(null);
  };
  const product = {
    name: "Nike Air MX Super 2500 - Red",
    price: 449,
    discountPrice: 699,
    imageSrc: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  };
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this product: ${product.name} - Price: $${product.price}`)}`;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Message:</label>
          <textarea
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Rating:</label>
          <div className="rating rating-lg">
            <input type="radio" name="rating" className="rating-hidden" />
            <input type="radio" name="rating" className="mask mask-star-2" />
            <input type="radio" name="rating" className="mask mask-star-2" checked />
            <input type="radio" name="rating" className="mask mask-star-2" />
            <input type="radio" name="rating" className="mask mask-star-2" />
            <input type="radio" name="rating" className="mask mask-star-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full"
        >
          Submit Feedback
        </button>
        <div className="flex items-center">
            <button className="bg-babypink text-black p-3 rounded-md hover:bg-pink w-full"
            ><a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="mr-2"> Share on Twitter
              <svg className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 4.75a9.53 9.53 0 01-2.77.75 4.8 4.8 0 002.1-2.66 9.67 9.67 0 01-3.04 1.16 4.78 4.78 0 00-8.12 4.35 13.57 13.57 0 01-9.86-5 4.76 4.76 0 001.48 6.35A4.74 4.74 0 01.9 7.4v.05a4.76 4.76 0 003.82 4.66 4.75 4.75 0 01-2.15.08 4.77 4.77 0 004.45 3.3 9.57 9.57 0 01-5.9 2 9.73 9.73 0 01-1.12-.07 13.44 13.44 0 007.3 2.15c8.76 0 13.54-7.26 13.54-13.54 0-.21 0-.42-.02-.63a9.62 9.62 0 002.36-2.45z"/>
              </svg>
            </a>
            </button>
            
          </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
