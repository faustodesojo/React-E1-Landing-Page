import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { IoBed } from "react-icons/io5";
import { HomeContainer, NavbarContainer, NavbarLinks } from "./styles";
import { NavbarLink } from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <img
          src="https://yourfiles.cloud/uploads/db9a794ba66478de641d99c640fae616/logo-hotel.png"
          alt="logo-hotel"
          />
      </div>
      <NavbarLink>
          <li>Inicio</li>
          <li>Habitaciones</li>
          <li>Servicios</li>
          <li>Galeria</li>
      </NavbarLink>
      <NavbarLinks>
        <HomeContainer>
          <button>
            <BiSolidUser></BiSolidUser>
            <span>Registrarse</span>
          </button>
          <button>
            <IoBed></IoBed>
            <span>Reservas</span>
          </button>
        </HomeContainer>
      </NavbarLinks>
    </NavbarContainer>
  );
};
