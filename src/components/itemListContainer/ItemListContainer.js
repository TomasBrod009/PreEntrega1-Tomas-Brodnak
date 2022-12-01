import React from 'react'

function itemListContainer(props) {
    const {greeting} = props;
  return (
    <h1 className="bg-danger"> Bienvenido , {greeting}.</h1>
  )
}

export default itemListContainer