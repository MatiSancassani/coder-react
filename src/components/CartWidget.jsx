import React from 'react'
import { useState } from 'react'
import {StarIcon} from '@chakra-ui/icons'


const CartWidget = () => {  

  const [contador, setContador] = useState(0)

  console.log(contador)


  return (
    <>
    <div>
      <StarIcon />
      <small>{contador}</small>
      </div>
    </>
  )
}

export default CartWidget