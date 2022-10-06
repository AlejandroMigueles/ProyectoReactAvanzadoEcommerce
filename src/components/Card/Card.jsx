/* eslint-disable no-undef */
import React from 'react'
import './Card.scss'

const Card = ({ id, title, price, image }) => {
  return (
    <div className='container col-md-3 mb-2 p-2 '>
      <div className='card box2' style={{ width: '18rem' }}>
        <img src={image} className='card-img-top' alt='...' height={300} />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>${price}</p>
        </div>
      </div>

    </div>
  )
}

export default Card
