import React from 'react'
import'./CartWidget.css'

const CartWidget = () => {
    const imgLuna = 'https://www.nationalgeographic.com.es/medio/2022/02/08/imagen-de-la-luna-tomada-en-1991_682424f4_800x800.jpg'
  return (
    <div>
        <img className='imgLuna'src= {imgLuna} alt="Luna" />
        <strong>3</strong>
    </div>
  )
}

export default CartWidget