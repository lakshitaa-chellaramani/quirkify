import React from 'react';

const ProductCard = () => {
  // Replace these with your actual product details
  const product = {
    name: "Nike Air MX Super 2500 - Red",
    price: 449,
    discountPrice: 699,
    imageSrc: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=\${encodeURIComponent('Check out this product: ${product.name} - Price: $${product.price})}`;

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover" src={product.imageSrc} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            <span className="text-sm text-slate-900 line-through">${product.discountPrice}</span>
          </p>
          <div className="flex items-center">
            {/* Share on Twitter */}
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="mr-2">
              <svg className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 4.75a9.53 9.53 0 01-2.77.75 4.8 4.8 0 002.1-2.66 9.67 9.67 0 01-3.04 1.16 4.78 4.78 0 00-8.12 4.35 13.57 13.57 0 01-9.86-5 4.76 4.76 0 001.48 6.35A4.74 4.74 0 01.9 7.4v.05a4.76 4.76 0 003.82 4.66 4.75 4.75 0 01-2.15.08 4.77 4.77 0 004.45 3.3 9.57 9.57 0 01-5.9 2 9.73 9.73 0 01-1.12-.07 13.44 13.44 0 007.3 2.15c8.76 0 13.54-7.26 13.54-13.54 0-.21 0-.42-.02-.63a9.62 9.62 0 002.36-2.45z"/>
              </svg>
            </a>
            {/* Share on Instagram */}
            
          </div>
        </div>
        <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;