import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #128cba;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    color: black;
    text-decoration: underline;
    transition: 0.5s;
    transform: scale(1.1);
    font-weight: bold;
  }
`;
