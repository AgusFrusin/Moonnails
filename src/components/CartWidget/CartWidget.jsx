import React from 'react'
import'./CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  return (
    <div>
        <img className='imgCarrito'src= {imgCarrito} alt="Luna" />
        <strong>3</strong>
    </div>
  )
}

export default CartWidget