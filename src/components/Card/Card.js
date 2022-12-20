import React from 'react'
import itemListContainer from '../itemListContainer/ItemListContainer'
import "../styles/Card.css"
import Item from '../Item/Item'

const Card = (props) => {
    const{name, date, id, platform, quantity, price, img, console} = props
  return (
    
    <div className=" m-auto  border-solid border-2 border-sky-500 p-16 mt-4 " >
    <p className="text-center text-lg invisible" >{date}</p>
    <p className="text-center text-lg invisible">{id}</p>
    <img src={img} className="max-w-xs max-h-xs" alt="" />
    <p className="text-center text-lg">{name}</p>
    <img src={platform} alt="" className="m-auto" />
    <p className="text-center text-lg">{quantity}</p>
    <button className="bg-blue-500 rounded-full text-lg ml-16" id='buttonbuy' onClick={Item}>Comprar</button>
    <p className="text-center text-lg">{price}</p>
    <p className='invisible'>{console}</p>
    </div>
    
  )
}

export default Card