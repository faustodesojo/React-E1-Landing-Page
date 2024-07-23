import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import {
  InputsContainer,
  PriceContainer,
  RoomCardsContainer,
  RoomInfoContainer,
} from "./styles";

export const RoomsCards = ({ img, name, description, price, id, guests }) => {
  const dispatch = useDispatch();
  const [numberOfNights, setNumberOfNights] = useState(2);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [startDateError, setStartDateError] = useState(false);
  const [minimumNightsError, setMinimumNightsError] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [serverResponse, setServerResponse] = useState(""); 

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

  const handleAddToCart = async () => {
    if (selectedStartDate !== "" && selectedEndDate !== "") {
      setLoading(true);
      setTimeout(() => {
        dispatch(
          addToCart({
            id,
            quantity: 1,
            guests,
            price,
            img,
            name,
            description,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
          })
        );

        setServerResponse("Reserva realizada con éxito!");
        setLoading(false);
      }, 1000); 
    } else {
      setStartDateError(true);
    }
  };

  return (
    <RoomCardsContainer>
      <img src={img} alt={name} />
      <RoomInfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <InputsContainer>
          <div>
            <label htmlFor="dias">¿Cuántos días quieres hospedarte?</label>
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
            <input type="date" id="fecha-final" value={selectedEndDate} disabled />
          </div>
        </InputsContainer>
        {startDateError && (
          <p style={{ color: "red", textAlign: "center" }}>
            Por favor seleccione la fecha inicial
          </p>
        )}
        {minimumNightsError && (
          <p style={{ color: "red", textAlign: "center" }}>
            La estancia mínima es de 2 noches
          </p>
        )}
        <PriceContainer>
          <button onClick={handleAddToCart} disabled={loading}>
            {loading ? "Procesando..." : "Reservar"}
          </button>
          <p>Total: ${total}</p>
        </PriceContainer>
        {serverResponse && (
          <p style={{ color: "green", textAlign: "center" }}>{serverResponse}</p>
        )}
      </RoomInfoContainer>
    </RoomCardsContainer>
  );
};
