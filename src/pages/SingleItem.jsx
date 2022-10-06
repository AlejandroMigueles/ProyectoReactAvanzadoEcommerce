import React from 'react'
import { useParams } from 'react-router-dom'
import fetchProductItem from '../hooks/fetchProductItem'

const SingleItem = () => {
  const { id } = useParams()
  const dataItem = fetchProductItem(id)
  // console.log(dataItem.productSingleItem)
  return (
    <div>
      SingledcdItem
      <div>
        <h1>{dataItem.productSingleItem.product_name}</h1>
        <h4>{dataItem.productSingleItem.brand}</h4>
        <p>{dataItem.productSingleItem.price}</p>
        <img src={dataItem.productSingleItem.image} alt='' />
        <p>{dataItem.productSingleItem.description}</p>
      </div>
    </div>

  )
}

export default SingleItem
