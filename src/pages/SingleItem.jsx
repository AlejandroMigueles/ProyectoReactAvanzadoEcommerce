import React from 'react'
import { useParams } from 'react-router-dom'
import fetchProductItem from '../hooks/fetchProductItem'

const SingleItem = () => {
  const { id } = useParams()
  const dataItem = fetchProductItem(id)
  console.log(dataItem.productSingleItem)
  return (
    <div>
      SingledcdItem
      <div>
        <h1>{dataItem.productSingleItem.product_name}</h1>
        <h4>{dataItem.productSingleItem.brand}</h4>
        <p>{dataItem.productSingleItem.price}</p>
        <img src={dataItem.productSingleItem.image} alt='' />
        <p>{dataItem.productSingleItem.description}</p>
        <img src='https://i.pinimg.com/originals/f4/fb/89/f4fb89e0b418002bd8d6953138990840.jpg' alt='' />
      </div>
    </div>

  )
}

export default SingleItem
