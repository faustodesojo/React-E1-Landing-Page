import React, { useContext } from "react";
import { BiSolidUser } from "react-icons/bi";
import { IoBed, IoClose } from "react-icons/io5";
import {
  HomeContainer,
  NavbarContainer,
  NavbarLinks,
  NavbarLink,
  HamburguerMenu,
  NavbarList,
  Links,
  LinkItem,
  HomeContainerResponsive,
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { BurguerContext } from "../../context/hamburguer_menu";

export const Navbar = () => {
  const { click, changeClick } = useContext(BurguerContext);

  return (
    <NavbarContainer>
      <div>
        <img
          src="https://yourfiles.cloud/uploads/db9a794ba66478de641d99c640fae616/logo-hotel.png"
          alt="logo-hotel"
        />
      </div>
      <NavbarLink>
        <NavbarList click={click}>
          <Links onClick={changeClick}>
            <LinkItem to="/">Inicio</LinkItem>
          </Links>
          <Links onClick={changeClick}>
            <LinkItem to="rooms"> Habitaciones</LinkItem>
          </Links>
          <Links onClick={changeClick}>
            <LinkItem to="contact">Contacto</LinkItem>
          </Links>
          <Links onClick={changeClick}>
            <LinkItem to="about">Sobre Nosotros</LinkItem>
          </Links>
          <div>
            <HomeContainerResponsive>
              <button>
                <BiSolidUser></BiSolidUser>
                <span>Registrarse</span>
              </button>
              <button>
                <IoBed></IoBed>
                <span>Reservas</span>
              </button>
            </HomeContainerResponsive>
          </div>
        </NavbarList>
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
        <HamburguerMenu onClick={changeClick}>
          {click ? <IoClose /> : <RxHamburgerMenu />}
        </HamburguerMenu>
      </NavbarLinks>
    </NavbarContainer>
  );
};
