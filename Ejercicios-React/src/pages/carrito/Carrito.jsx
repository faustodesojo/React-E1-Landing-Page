import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/ShoppingCartContext';
import { ButtonsContainer, CartContainer, ItemContainer, ItemDetails, Name, SuccessMessage } from './style';

export const Carrito = () => {
  const [cart, setCart] = useContext(CartContext);
  const [reserveMessage, setReserveMessage] = useState('');

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

  const handleReserve = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
    setReserveMessage('Reserva exitosa. ¡Muchas gracias!');
    setTimeout(() => {
      setReserveMessage('');
    }, 2000);
  };

  const handleDelete = (itemToDelete) => {
    const updatedCart = cart.filter((item) => item !== itemToDelete);
    setCart(updatedCart);
  };
  

  const totalPrice = cart.reduce(
    (acc, curr) => acc + calculateTotalPrice(curr),
    0
  );

  return (
    <CartContainer>
        {cart.map((item) => (
          <ItemContainer key={item.id} backgroundImage={item.img}>
            <ItemDetails>
              <Name>{item.name}</Name>
              <div>Precio por noche: ${item.price}</div>
              <div>Cantidad de noches: {
                !isNaN(new Date(item.endDate).getTime()) && !isNaN(new Date(item.startDate).getTime()) ? 
                Math.ceil((new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24)) : 0
              }</div>
              <div>Cantidad de personas: {item.guests}</div>
              <div>Precio total: ${calculateTotalPrice(item)}</div>
              <div>Check In: {item.startDate}</div>
              <div>Check Out: {item.endDate}</div>
              <ButtonsContainer>
              <button onClick={() => handleDelete(item)}>Eliminar</button>
              <button onClick={() => handleReserve(item)}>Reservar</button>
              </ButtonsContainer>
            </ItemDetails>
          </ItemContainer>
        ))}
        {reserveMessage && <SuccessMessage>{reserveMessage}</SuccessMessage>}
    </CartContainer>
  );
};
