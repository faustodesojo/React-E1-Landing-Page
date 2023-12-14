import React from 'react';
import {
    FoundContainerStyled,
    FoundTextStyled,
    FoundTitleStyled,
  } from './style';


export const  ErrorPage = () => {
  return (
    <div>
    <FoundContainerStyled>
        <FoundTextStyled>
      <FoundTitleStyled>Error 404: Página no encontrada</FoundTitleStyled>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={() => window.history.back()}>Volver</button>
      </FoundTextStyled>
    </FoundContainerStyled>
    </div>
  );
};
