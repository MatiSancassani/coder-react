import React from 'react'
import { useState } from 'react'


const CartWidget = ({cards}) => {
  return (
    <>
    <div>
      <i className="bi bi-cart carrito"></i>     
      <small className='numerito'>0</small>
      </div>
    </>
  )
}

export default CartWidget