import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 300px;
  width: 200px;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
  h3 {
    font-size: 16px;
    font-style: italic;
    margin-top: 10px;
    height: 30px;
  }
`;

export const HabitacionesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 20px;
  height: 500px;
  width: 100%;
  background-color: var(--background-lightgray);
`;
