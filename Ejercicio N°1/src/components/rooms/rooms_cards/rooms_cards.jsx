import React from 'react'
import { RoomCardsContainer } from './styles'
import { InputsContainer } from './styles'


export const RoomsCards = ({img, name, description, price}) => {
  return (
    <RoomCardsContainer>
        <img src={img} alt={name}/>
        <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <InputsContainer>
        <label htmlFor="dias">Cuantos dias quieres hospedarte?</label>
  <input type="number" id="dias"/>
        <label htmlFor="fecha-inicial">Fecha inicial:</label>
  <input type="date" id="fecha-inicial"/>
  </InputsContainer>
        <button>Reservar</button>
        <p>${price}</p> 
        </div>
    </RoomCardsContainer>
  )
}
