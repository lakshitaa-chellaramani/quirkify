import React from 'react'
import AdminUser from './AdminUser'
import AdminOrder from './AdminOrder'

const Admin = () => {
  return (
    <div className='adminWrapper'>
        <div className="adminNav py-8 flex justify-center items-center gap-1 flex-wrap">    
            <button className='adminNavButton text-lg px-7 py-2 border-2 rounded-[0.25rem] border-[#9381FF] text-[#9381FF]'>Users</button>
            <button className='adminNavButton text-lg px-7 py-2 border-2 rounded-[0.25rem] border-[#9381FF] text-[#9381FF]'>Orders</button>
            <button className='adminNavButton text-lg px-7 py-2 border-2 rounded-[0.25rem] border-[#9381FF] text-[#9381FF]'>Feedbacks</button>
            <button className='adminNavButton text-lg px-7 py-2 border-2 rounded-[0.25rem] border-[#9381FF] text-[#9381FF]'>Analytics</button>
        </div>

        <div className="adminContent">
          <AdminUser></AdminUser>
          <AdminOrder></AdminOrder>
        </div>
        {/* user item price picked-up ready pickup-time */}
    </div>
  )
}

export default Admin