import React from 'react'
import img1 from '../Assets/asset1.png'

const MyOrder = () => {
  return (
    <>
        <div className='MyOrderHead'>
            <img src={img1} alt='' />
            <h1>MY ORDERS</h1>
        </div>
        
        <div>
            <h3>All Orders</h3>
            <h3>In</h3>
            <h3>All Orders</h3>
            <h3>All Orders</h3>

        </div>
    </>
  )
}

export default MyOrder