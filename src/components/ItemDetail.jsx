import React from 'react'
import  { useEffect, useState } from 'react'
import logo from './card.webp';
const detail = ({item}) => {
    
    const [contador, setContador] = useState(0)

    const sumar = ()=> {
      if (contador === 0 || contador > 0)
      setContador(contador + 1)
      if (contador >= 10) {
        setContador(contador === 10)
        alert("Solo quedan 10 productos")
      }      
    }
      if (contador < 0) {
        setContador(contador * 0)
      }
  return (
    <div className="contenedor-flex">
      <div className='tarjeta'>
      <img className='imagen' src={item.imagen} />
        <img src="./loho2.png" alt="" />
        <p>{item.titulo}</p>
        {/* <small>{item.descripcion}</small> */}
        <p className='stock'>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
        <div className="junto">   
        <button onClick={()=> setContador(contador - 1)} className='resta'>-</button>
        <p className='contador'>{contador}</p>
        <button onClick={()=> setContador(contador + 1)} className='suma'>+</button>      
      </div>
       <p><button onClick={()=> alert(`Agregar ${contador} productos al carrito?`)} className='add'>Agregar al carrito</button></p>
      </div>     
    </div>
  )
}

export default detail