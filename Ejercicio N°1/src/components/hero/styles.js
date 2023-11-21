import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  gap: 50px;
  width: 100%;
  margin-bottom: 100px;
  img {
    width: 650px;
    height: 350px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  div {
    width: 600px;
  }
  h2 {
    margin-bottom: 50px;
    text-align: center;
    font-size: 3rem;
  }
  @media (max-width: 1024px) {
    margin-top: 100px;
    flex-direction: column;
    height: 800px;
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    height: 800px;
    div {
      width: 100%;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      width: 100%;
    }
  }
`;
