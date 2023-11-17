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
  Link,
  HomeContainerResponsive,
  NavImg
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { BurguerContext } from "../../context/hamburguer_menu";

export const Navbar = () => {
  const { click, changeClick } = useContext(BurguerContext);

  return (
    <NavbarContainer>
      <NavImg>
        <img
          src="https://yourfiles.cloud/uploads/db9a794ba66478de641d99c640fae616/logo-hotel.png"
          alt="logo-hotel"
        />
      </NavImg>
      <HamburguerMenu onClick={changeClick}>
        {click ? <IoClose /> : <RxHamburgerMenu />}
      </HamburguerMenu>
      <NavbarLink>
        <NavbarList click={click}>
          <Links onClick={changeClick}>
            <Link>Inicio</Link>
          </Links>
          <Links onClick={changeClick}>
            Habitaciones<Link></Link>
          </Links>
          <Links onClick={changeClick}>
            Servicios<Link></Link>
          </Links>
          <Links onClick={changeClick}>
            Galeria<Link></Link>
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
      </NavbarLinks>
    </NavbarContainer>
  );
};
