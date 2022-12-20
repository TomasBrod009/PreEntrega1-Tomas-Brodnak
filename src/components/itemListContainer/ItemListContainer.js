import React from 'react'
import "../styles/ItemListContainer.css"
import Card from '../Card/Card'


function itemListContainer() {



    const cards = [
      {"name":"Pokemon Rojo", 
      "price":"9,99",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "date":"05-10-1999",
      "img":"https://i.imgur.com/y6x2oJt.jpeg",
      "quantity":1,
      "id":1,
      "console":"Gameboy"},
  
      {"name":"Pokemon Azul",
      "price":"9,99",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "date":"05-10-1999",
      "img":"https://i.imgur.com/ARsMMYa.png",
      "quantity":1,
      "id":2,
      "console":"Gameboy"},
  
      {"name":"Pokemon Oro",
      "price":"9,99",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "date":"06-04-2001",
      "img":"https://i.imgur.com/nGeGYxc.png",
      "quantity":1
      ,"id":3,
      "console":"Gameboy"},
  
      {"name":"Pokemon Plata",
      "price":"9,99",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "date":"06-04-2001",
      "img":"https://i.imgur.com/HO1tgcL.png",
      "quantity":1,
      "id":4,
      "console":"Gameboy"},
  
      {"name":"Pokemon Rubi",
      "price":"9,99",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "date":"23-07-2003",
      "img":"https://i.imgur.com/19DSoeQ.png",
      "quantity":1,
      "id":5,
      "console":"Gameboy"},
  
      {"name":"Pokemon Zafiro",
      "price":"9,99",
      "date":"23-07-2003",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "img":"https://i.imgur.com/io4bkLb.png",
      "quantity":1,
      "id":6,
      "console":"Gameboy"},
  
      {"name":"Pokemon Esmeralda",
      "price":"9,99",
      "date":"21-10-2005",
      "platform":"https://img.icons8.com/color/48/null/visual-game-boy.png",
      "img":"https://i.imgur.com/AH6GnH0.png",
      "quantity":1,
      "id":7,
      "console":"Gameboy"},

      {"name":"Pokemon Diamante",
      "price":"19,99",
      "date":"27-07-2007",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/P9nCQsj.png",
      "quantity":1,
      "id":8,
      "console":"Nintendo DS"},
  
      {"name":"Pokemon Perla",
      "price":"19,99",
      "date":"27-07-2007",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/jXczEJy.png",
      "quantity":1,
      "id":9,
      "console":"Nintendo DS"},
  
      {"name":"Pokemon Negro",
      "price":"19,99",
      "date":"04-03-2011",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/nSVf7Tn.png",
      "quantity":1,
      "id":10,
      "console":"Nintendo DS"},
  
      {"name":"Pokemon Blanco",
      "price":"19,99",
      "date":"04-03-2011",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/TW6zYUr.png",
      "quantity":1,
      "id":11,
      "console":"Nintendo DS"},
  
      {"name":"Pokemon Negro 2",
      "price":"29,99",
      "date":"11-10-2012",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/ZllATvK.png",
      "quantity":1,
      "id":12,
      "console":"Nintendo DS"},
  
      {"name":"Pokemon Blanco 2",
      "price":"29,99",
      "date":"11-10-2012",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/aoq7vAi.png",
      "quantity":1,
      "id":13,
      "console":""},
      
      {"name":"Pokemon X",
      "price":"44,99",
      "date":"12-10-2013",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/994aYnG.png",
      "quantity":1,
      "id":14,
      "console":"Nintendo 3DS"},
  
      {"name":"Pokemon Y",
      "price":"44,99",
      "date":"12-10-2013",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/ifvaxR6.png",
      "quantity":1,
      "id":15,
      "console":"Nintendo 3DS"},
  
      {"name":"Pokemon Sol",
      "price":"44,99",
      "date":"23-11-2016",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/oJJ3uMN.png",
      "quantity":1,
      "id":16,
      "console":"Nintendo 3DS"},
  
      {"name":"Pokemon Luna",
      "price":"44,99",
      "date":"23-11-2016",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/DQagc6S.png",
      "quantity":1,
      "id":17,
      "console":"Nintendo 3DS"},
  
      {"name":"Pokemon Ultrasol",
      "price":"44,99",
      "date":"17-11-2017",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/F0KCQtY.png",
      "quantity":1,
      "id":18,
      "console":"Nintendo 3DS"},
  
      {"name":"Pokemon Ultraluna",
      "price":"44,99",
      "date":"17-11-2017",
      "platform":"https://img.icons8.com/color/48/null/nintendo-ds.png",
      "img":"https://i.imgur.com/2lqrhCF.png",
      "quantity":1,
      "id":19,
      "console":"Nintendo 3DS"},
  
      {"name":"Pokemon Espada",
      "price":"29,99",
      "date":"15-11-2019",
      "platform":"https://img.icons8.com/color/48/null/nintendo-switch-logo.png",
      "img":"https://i.imgur.com/40NDQGZ.png",
      "quantity":1,
      "id":20,
      "console":"Nintendo Switch"},
  
      {"name":"Pokemon Escudo",
      "price":"29,99",
      "date":"15-11-2019",
      "platform":"https://img.icons8.com/color/48/null/nintendo-switch-logo.png",
      "img":"https://i.imgur.com/hwg1FuX.png",
      "quantity":1,
      "id":21,
      "console":"Nintendo switch"}
    ]

  return (
    <div>
      
      <div className="grid grid-cols-2 ">

      {cards.map(({name, date, id, platform, quantity, price, img, console},index) =>

        <Card
        key={index}
        name={name}
        date={date}
        img={img}
        id={id}
        platform={platform}
        price = {price}
        quantity = {quantity}
        console={console}
        />) }
        
      </div>
    </div>
  )
}

export default itemListContainer