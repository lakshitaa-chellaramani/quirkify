import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function AdminOrder() {
  const [users, setUsers] = useState([])
  const getAllOrders = async () => {
    const response = await fetch('http://localhost:4000/api/orders/getOrders', {
      method: "GET"
    })
    const data = await response.json()
    if (response.ok) {
      setUsers(data.orders)
      console.log(data)
    }
  }
  useEffect(() => {
    getAllOrders()
  }, [])
  return (
    <>
      <div className="orderWrapper">
        <section>
          <div className="admin_container2">
            <table>
              <caption className='bg-lightblue'>User Details</caption>
              <thead>
                <tr className='bg-lavender'>
                  <th><p className='table_p'>Owner</p></th>
                  <th><p className='table_p'>Item</p></th>
                  <th><p className='table_p'>Price</p></th>
                  <th><p className='table_p'>isReady</p></th>
                  <th><p className='table_p'>isPickedup</p></th>
                </tr>
              </thead>
              {
                users.map((data, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{data.orderOwner}</td>
                        <td>{data.orderItem}</td>
                        <td>{data.orderPrice}</td>
                        <td><button>Ready</button></td>
                        <td><button>Picked Up</button></td>
                      </tr>
                    </tbody>
                  )
                })}

            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default AdminOrder