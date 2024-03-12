import React, { useContext, useState } from "react";
import { PriceContainer, RoomCardsContainer } from "./styles";
import { InputsContainer } from "./styles";
import { RoomInfoContainer } from "./styles";
import { CartContext } from "../../../context/ShoppingCartContext";

export const RoomsCards = ({ img, name, description, price, id, guests }) => {
  const [cart, setCart] = useContext(CartContext);
  const [numberOfNights, setNumberOfNights] = useState(2);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [startDateError, setStartDateError] = useState(false);
  const [minimumNightsError, setMinimumNightsError] = useState(false);
  const addToCart = () => {
    if (selectedStartDate !== "" && selectedEndDate !== "") {
      setCart((reservas) => [
        ...reservas,
        {
          id,
          quantity: 1,
          price,
          img,
          name,
          description,
          startDate: selectedStartDate,
          endDate: selectedEndDate,
          guests,
        },
      ]);
    } else {
      setStartDateError(true);
    }
  };

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + numberOfNights);
    if (numberOfNights < 2) {
      setMinimumNightsError(true);
    } else {
      setMinimumNightsError(false);
    }

    setSelectedEndDate(endDate.toISOString().split("T")[0]);
    setStartDateError(false);
  };

  const handleNumberOfNightsChange = (value) => {
    setNumberOfNights(value);
    handleStartDateChange(selectedStartDate);
  };

  const total = price * numberOfNights;

  return (
    <RoomCardsContainer>
      <img src={img} alt={name} />
      <RoomInfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <InputsContainer>
          <div>
            <label htmlFor="dias">Cuantos días quieres hospedarte?</label>
            <input
              type="number"
              id="dias"
              value={numberOfNights}
              onChange={(e) =>
                handleNumberOfNightsChange(parseInt(e.target.value))
              }
              min={2}
            />
            <p>
              Precio (por noche): <span>${price}</span>
            </p>
          </div>
          <div>
            <label htmlFor="fecha-inicial">Desde:</label>
            <input
              type="date"
              id="fecha-inicial"
              value={selectedStartDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="fecha-final">Hasta:</label>
            <input
              type="date"
              id="fecha-final"
              value={selectedEndDate}
              disabled
            />
          </div>
        </InputsContainer>
        {startDateError && <p style={{ color: "red", textAlign: "center" }}>Por favor seleccione la fecha inicial</p>}
        <PriceContainer>
          <button onClick={addToCart}>Reservar</button>
          <p>Total: ${total}</p>
        </PriceContainer>
      </RoomInfoContainer>
    </RoomCardsContainer>
  );
};
