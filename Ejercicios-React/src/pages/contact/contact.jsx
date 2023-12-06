import React from "react";
import {
  ContactContainer,
  FormContainerStyled,
  InfoContainer,
  RedesContainer,
} from "./style";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

export const Contact = () => {
  return (
    <ContactContainer>
      <div>
        <h2>Contacto</h2>
        <p>¿Alguna Consulta? ¡Te ayudamos con lo que necesites!</p>
      </div>
      <InfoContainer>
        <FormContainerStyled action="">
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Asunto</label>
          <input type="text" />
          <label htmlFor="">Mensaje</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Enviar</button>
        </FormContainerStyled>
        <RedesContainer>
          <h3>Redes Sociales</h3>
          <div>
            <ul>
              <li>
                <FaFacebookF />
                <h4> Facebook </h4>
              </li>
              <li>
                <AiFillInstagram />
                <h4>Instagram </h4>
              </li>
              <li>
                <FaTwitter />
                <h4> Twitter</h4>
              </li>
              <li>
                {" "}
                <FaLinkedin /> <h4> Linkedin </h4>
              </li>
            </ul>
          </div>
          <div>
            <h3>Información</h3>
            <div>
              <ul>
                <li>
                  <CiLocationOn />
                  <h4> Ubicacion </h4>
                </li>
                <li>
                  <MdOutlineLocalPhone />
                  <h4> Telefono </h4>
                </li>
                <li>
                  <MdOutlineEmail />
                  <h4> Email </h4>
                </li>
                <li>
                  <BsWhatsapp />
                  <h4> Whatsapp </h4>
                </li>
              </ul>
            </div>
          </div>
        </RedesContainer>
      </InfoContainer>
    </ContactContainer>
  );
};
