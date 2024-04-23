import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 150px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 500px;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

export const ItemDetails = styled.div`
  background: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  padding: 10px;
`;

export const SuccessMessage = styled.div`
  color: green;
  font-weight: bold;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.5rem;
  color: var(--background-lightblue);
  font-style: italic;
  text-decoration: underline;
`;

export const CheckIn = styled.div`
  font-weight: bold;
  color: green;
`;

export const CheckOut = styled.div`
  font-weight: bold;
  color: darkred;
`;
