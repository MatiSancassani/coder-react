import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import pedirDatos from '../helper/pedirDatos.js'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
      pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
        } else {
          setProductos(res);
        }
        
      })
  }, [categoria])
        
  return (
    <>

      <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer