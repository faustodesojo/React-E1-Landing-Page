import styled from "styled-components";

export const RoomCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 400px;
  margin-top: 150px;
  background-color: var(--background-lightgray);
  h3 {
    text-align: center;
    font-size: 2rem;
  }
  img {
    width: 350px;
    height: 250px;
  }
  h3 {
    color: var(--background-lightblue);
  }
  span {
    font-weight: bold;
  }
  label {
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    height: 700px;
    align-items: center;
    text-align: center;
    img {
      width: 400px;
      height: 300px;
    }
    @media (max-width: 425px) {
      height: 900px;
      justify-content: space-between;
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  margin-bottom: 20px;
  input[type="number"] {
    width: 7%;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const RoomInfoContainer = styled.div`
  max-width: 700px;
`;
