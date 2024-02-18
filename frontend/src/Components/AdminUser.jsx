import React, { useEffect, useState } from 'react'

const AdminUser = () => {
    const allUsersData = [
        {
            username: "Milind",
            email: "test1@gmail.com",
            phone: "2345678901"
        }
    ]
    return (
        <>
            <section>
                <div className="admin_container2">
                    <table>
                        <caption className='bg-lightblue'>User Details</caption>
                        <thead>
                            <tr className='bg-lavender'>
                                <th><p className='table_p'>Username</p></th>
                                <th><p className='table_p'>Email</p></th>
                                <th><p className='table_p'>Phone</p></th>
                                <th><p className='table_p'>Update</p></th>
                                <th><p className='table_p'>Delete</p></th>
                            </tr>
                        </thead>
                        {
                            allUsersData.map((data, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td><button>Edit</button></td>
                                            <td><button>Delete</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })}

                    </table>
                </div>
            </section>
        </>
    )
}

export default AdminUser


