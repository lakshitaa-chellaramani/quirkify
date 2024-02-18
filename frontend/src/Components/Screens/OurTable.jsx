import React from 'react'
import Navbar from '../Nabvar'

const OurTable = () => {
  return (
    <>
        {/* <Navbar/> */}
        
      <div className="tableWrapper">
        <div className="tableCloth">
          <div className="pizza group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Item Name</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="wings group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Item Name</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="burger group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Item Name</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="ic group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Item Name</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="pasta group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Item Name</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
          <div className="brownie group">
            <div className="dishContent opacity-0 group-hover:opacity-100">
              <h1 className=' text-xl translate-y-8 group-hover:translate-y-0'>Item Name</h1>
              <p className=' text-xs translate-y-8 group-hover:translate-y-0'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-lavender px-[0.75em] py-[0.25em] text-xs rounded-md translate-y-8 group-hover:translate-y-0'>Add to Cart</button>
            </div>
          </div>
        </div>
        
        <button className="viewMenuBtn sticky bottom-8 bg-lavender px-[1.5em] py-[0.75em] rounded-lg text-white text-lg">View Entire Menu</button>
      </div>
    </>
  )
}

export default OurTable