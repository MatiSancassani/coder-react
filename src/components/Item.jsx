import React from 'react'
import { Link } from 'react-router-dom'
import logo from './card.webp';

const Item = ({producto}) => {
  return (    
        <>
              <div className='tarjeta'>
                  <img className='imagen' src={producto.imagen} />
                  <p>{producto.titulo}</p>
                  <small>{producto.descripcion}</small>
                  {/* <small>{producto.categoria}</small> */}
                  <small>{producto.precio}</small>
                  <Link to={`/item/${producto.id}`}><button className='add'>Ver mas</button></Link>
                </div>
          </>
    
  )
}

export default Item