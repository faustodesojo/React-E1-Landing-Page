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
  margin-bottom: 10px;
  padding: 10px;
  width: 500px;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: auto;
`;

export const ItemDetails = styled.div`
  margin-left: 20px;
`;
