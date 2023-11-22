import styled from "styled-components";

export const ContactContainer = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 200px;
  h2 {
    font-size: 3rem;
  }
  p {
    font-style: italic;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center; 
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 80%; 
  background-color: #fff;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    box-shadow: none;
  }
`;

export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    list-style: none;
    gap: 20px;
    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }
    `
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  width: 500px;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input[type="submit"] {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    color: white;
    &:hover {
      border-color: #0d7901;
      transition: 0.7s;
      background-color: var(--background-lightblue);
    } 
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
