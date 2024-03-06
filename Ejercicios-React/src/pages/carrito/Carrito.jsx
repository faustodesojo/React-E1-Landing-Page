import React, { useContext } from 'react';
import { CartContext } from '../../context/ShoppingCartContext';
import { CartContainer, ItemContainer, ItemDetails, ItemImage } from './style';

export const Carrito = () => {
  const [cart, setCart] = useContext(CartContext);

  const calculateTotalPrice = (item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && startDate <= endDate) {
      const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      return item.price * numberOfNights;
    } else {
      return 0;
    }
  };

  const totalPrice = cart.reduce(
    (acc, curr) => acc + calculateTotalPrice(curr),
    0
  );

  return (
    <CartContainer>
        {cart.map((item) => (
          <ItemContainer key={item.id}>
            <div>
            <ItemImage src={item.img} alt={item.name} />
            </div>
            <ItemDetails>
              <div>{item.name}</div>
              <div>Precio por noche: ${item.price}</div>
              <div>Cantidad de noches: {
                !isNaN(new Date(item.endDate).getTime()) && !isNaN(new Date(item.startDate).getTime()) ? 
                Math.ceil((new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24)) : 0
              }</div>
              <div>Cantidad de personas: {item.guests}</div>
              <div>Precio total: ${calculateTotalPrice(item)}</div>
              <div>Check In: {item.startDate}</div>
              <div>Check Out: {item.endDate}</div>
            </ItemDetails>
          </ItemContainer>
        ))}
    </CartContainer>
  );
};
