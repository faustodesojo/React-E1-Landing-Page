import styled from "styled-components";

export const RoomCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 300px;  
    margin-top: 150px;
    background-color: lightgray;
    img {
        width: 350px;
        height: 250px;
    }
    `

    export const InputsContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: start;
    margin-bottom: 20px;
    input[type="number"] {
        width: 5%;
    }
    `