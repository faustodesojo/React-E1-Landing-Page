import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  gap: 50px;
  width: 100%;
  img {
    width: 750px;
    height: 450px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  div {
    width: 600px;
  }
  h1 {
    margin-bottom: 50px;
  }
  @media (max-width: 1024px) {
    margin-top: 100px;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    height: 800px;
    div {
      width: 100%;
    }
    h1 {
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
