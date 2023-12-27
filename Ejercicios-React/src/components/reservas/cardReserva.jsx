import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice';

export const CardReserva = ({img, name, description, price,id}) => {
  const dispatch = useDispatch();
  return (
    <div>
<img src={img} 
alt={name} 
/>
<h3>{name}</h3>
<p>{description}</p>
<div>
<span>${price}</span>
<button onClick={ () => dispatch(addToCart ({id, img, name, description, price}))}>Agregar</button>
</div>
    </div>
  )
}
