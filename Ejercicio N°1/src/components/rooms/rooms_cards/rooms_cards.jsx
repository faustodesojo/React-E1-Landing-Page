import React from "react";
import { PriceContainer, RoomCardsContainer } from "./styles";
import { InputsContainer } from "./styles";
import { RoomInfoContainer } from "./styles";

export const RoomsCards = ({ img, name, description, price }) => {
  return (
    <RoomCardsContainer>
      <img src={img} alt={name} />
      <RoomInfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <InputsContainer>
          <div>
            <label htmlFor="dias">Cuantos dias quieres hospedarte?</label>
            <input type="number" id="dias" />
          </div>
          <div>
            <label htmlFor="fecha-inicial">Fecha inicial:</label>
            <input type="date" id="fecha-inicial" />
          </div>
        </InputsContainer>
        <PriceContainer>
          <button>Reservar</button>
          <p>
            Precio (por noche): <span>${price}</span>
            </p>
        </PriceContainer>
      </RoomInfoContainer>
    </RoomCardsContainer>
  );
};
