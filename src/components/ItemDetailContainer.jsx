import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { ItemPorId } from '../helper/pedirDatos'

const DetailContainer = () => {


  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    ItemPorId((id))
    .then((res) => {
      setItem(res);
    })
  }, [id])


  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default DetailContainer