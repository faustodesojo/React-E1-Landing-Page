import React, { useState } from 'react';
import { ButtonsContainer, CartContainer, CheckIn, CheckOut, ItemContainer, ItemDetails, Name, SuccessMessage } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cartSlice';

export const Carrito = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
    dispatch(removeFromCart(item));
    setReserveMessage('Reserva exitosa. ¡Muchas gracias!');
    setTimeout(() => {
      setReserveMessage('');
    }, 2000);
  };
  
  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };
  
  return (
    <CartContainer>
      {cart.length > 0 ? (
        cart.map((item) => (
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
              <CheckIn>Check In:  {item.startDate}</CheckIn>
              <CheckOut>Check Out:{item.endDate} </CheckOut>
              <ButtonsContainer>
                <button onClick={() => handleDelete(item)}>Eliminar</button>
                <button onClick={() => handleReserve(item)}>Reservar</button>
              </ButtonsContainer>
            </ItemDetails>
          </ItemContainer>
        ))
      ) : (
        <div>El carrito está vacío</div>
      )}
      {reserveMessage && <SuccessMessage>{reserveMessage}</SuccessMessage>}
    </CartContainer>
  );
};
