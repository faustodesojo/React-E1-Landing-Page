import React, { useState } from "react";
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
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };
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
          <Links onClick={ChangeClick}>
            <Link>Inicio</Link>
          </Links>
          <Links onClick={ChangeClick}>
            Habitaciones<Link></Link>
          </Links>
          <Links onClick={ChangeClick}>
            Servicios<Link></Link>
          </Links>
          <Links onClick={ChangeClick}>
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
        <HamburguerMenu onClick={ChangeClick}>
          {click ? <IoClose /> : <RxHamburgerMenu />}
        </HamburguerMenu>
      </NavbarLinks>
    </NavbarContainer>
  );
};
