import React from "react";
import { HeroContainer } from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h1>Summer Dream´s Carilo Hotel & Spa</h1>
        <p>
          Summer Dream´s es un hotel ubicado en Cariló, Buenos Aires, frente al
          mar. Nuestra inmejorable ubicación ofrece comodidad para los viajeros,
          con habitaciones elegantes, una amplia gama de comodidades, un
          servicio excepcional y acceso a las bellezas naturales de Cariló.
          Comprometidos con tu seguridad, hemos implementado protocolos de
          limpieza rigurosos. Te invitamos a vivir una experiencia inolvidable
          en Summer Dream´s y disfrutar de la serenidad de la costa argentina.
          ¡Esperamos darte la bienvenida pronto!
        </p>
        <a href="Rooms">
          <button>Habitaciones</button>
        </a>
      </div>
      <img
        src="https://yourfiles.cloud/uploads/e203a9912ba1a647c2d83afe42a739af/habitacion-summer.jpg"
        alt="habitacion hotel"
      />
    </HeroContainer>
  );
};
