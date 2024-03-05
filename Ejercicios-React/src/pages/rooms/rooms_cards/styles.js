import styled from "styled-components";

export const RoomCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 200px;
  height: 450px;
  margin-bottom: 150px;
  background-color: var(--background-lightgray);
  h3 {
    text-align: center;
    font-size: 2rem;
  }
  img {
    width: 350px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    height: 900px;
    align-items: center;
    text-align: center;
    gap: 0;

    img {
      width: 500px;
      height: 300px;
    }
    @media (max-width: 768px) {
      height: 1000px;
      img {
        max-width: 100%;
      }
    }
    @media (max-width: 425px) {
      height: 900px;
      justify-content: space-between;
      text-align: center;
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
    height: 30px;
  }
  input[type="date"] {
    width: 105px;
    height: 30px;
  }
  @media (max-width: 768px) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const RoomInfoContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
