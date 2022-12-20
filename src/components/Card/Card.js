import React from 'react'
import itemListContainer from '../itemListContainer/ItemListContainer'
const Card = (props) => {
    const{name, date, id, platform, quantity, price, img} = props
  return (
    
    <div>
    <p className="text-center text-lg">{name}</p>
    <p className="text-center text-lg">{date}</p>
    <p className="text-center text-lg">{id}</p>
    <p className="text-center text-lg">{platform}</p>
    <p className="text-center text-lg">{quantity}</p>
    <p className="text-center text-lg">{price}</p>
    </div>
    
  )
}

export default Card