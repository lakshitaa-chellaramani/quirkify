import React from 'react'
import HomeProductCards from './HomeProductCards'
import {productdata} from './HomeProductData'
const HomeProductPage = () => {
    return (
        <div>

            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-7xl px-4 md:px-8">
                    <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3">
                    {productdata.map((product,index)=>(
                        <HomeProductCards key={index} {...product}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomeProductPage
