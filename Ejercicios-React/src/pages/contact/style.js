import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  background-color: #242424;
  flex-wrap: wrap;
  body {
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 3rem;
    color: #fff;
  }
  p {
    font-style: italic;
    color: #fff;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    background-color: #242424;
    flex-wrap: wrap;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 80%;
  background-image: url("https://blogdelhotel.files.wordpress.com/2015/07/kdp18119.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 120px 0;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    padding: none;
  }
`;

export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  width: 600px;
  opacity: 0.9;
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
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      background-color: #fff;
      padding: 10px;
      border: 1px solid #128cba;
      color: #128cba;
      width: 100px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.6s ease;
    }
    li:hover {
      background-color: #128cba;
      color: #fff;
      cursor: pointer;
    }
    transition: all 0.6s ease;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 85vw;
    box-shadow: none;
    margin: 20px 20px;
  }
`;
export const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  width: 500px;
  opacity: 0.9;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  margin-bottom: 100px;
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
  button {
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
    flex-wrap: wrap;
    width: 85vw;
    box-shadow: none;
    margin: 20px 20px;
  }
`;
