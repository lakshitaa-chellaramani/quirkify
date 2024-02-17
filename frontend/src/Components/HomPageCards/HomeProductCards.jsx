import React from 'react'

const HomeProductCards = ({image,price,title,sale,mrp}) => {
  return (
    <div>
    <div>
    <a href="#" class="group relative mb-2 border py-4 rounded-3xl block h-80 overflow-hidden  bg-white  lg:mb-3">
      <img src={image} loading="lazy" alt="Photo by Rachit Tank" class="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
      <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">{sale}</span>
    </a>

    <div>
      <a href="#" class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{title}</a>

      <div class="flex items-end gap-2">
        <span class="font-bold text-gray-800 lg:text-lg">{price}</span>
        <span class="mb-0.5 text-red-500 line-through">{mrp}</span>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HomeProductCards
