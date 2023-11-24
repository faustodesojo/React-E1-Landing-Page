import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 1000px;
  margin-top: 80px;
  color: white;
  h1 {
    font-size: 5rem;
  }
  span {
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
`;

export const HeaderOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  z-index: 1;
  background: url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/343366714.jpg?k=dbeef7c3b968ee39760493d442cf3f8eccafc30b78f43a980f6dd203bb8008b0&o=&hp=1");
  opacity: 0.7;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;
