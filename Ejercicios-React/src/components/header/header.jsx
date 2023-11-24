import React from "react";
import { HeaderContainer, HeaderOverlay } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>"Despierta con el sonido de las olas."</h1>
        <span>Summer Dream´s Carilo Hotel & Spa</span>
      </div>
      <HeaderOverlay />
    </HeaderContainer>
  );
};