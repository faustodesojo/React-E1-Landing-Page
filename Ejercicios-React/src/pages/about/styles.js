import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: max-content;
  width: 100%;
  margin-bottom: 100px;
  margin-top: 100px;
  h2 {
    margin-bottom: 50px;
    text-align: center;
    font-size: 3rem;
    font-style: italic;
  }
  p {
    width: 60vw;
    margin-bottom: 50px;
    text-align: center;
    line-height: 2;
  }
  @media (max-width: 1024px) {
    height: max-content;
    width: 100%;
    p {
      width: 80vw;
    }
  }
`;
export const AboutImg = styled.img`
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  object-fit: cover;
  height: 600px;
`;
