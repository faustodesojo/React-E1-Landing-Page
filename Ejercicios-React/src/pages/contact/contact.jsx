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
import { Formik} from "formik";
import Submit from "../../components/utils/Submit/Submit";
import TextAreaInput from "../../components/utils/TextAreaInput/TextAreaInput";
import { Input } from "../../components/utils/Input/Input";
import * as Yup from "yup";


export const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required( 'Por favor ingrese su nombre' ),
    surename: Yup.string().required( 'Por favor ingrese su apellido' ),
    email: Yup.string().required( 'Por favor ingrese su email' ).email( 'El email no es valido' ),
    subject: Yup.string().required( 'Por favor ingrese el asunto' ),
  })
  const initialValues = {
    name: "",
    surename: "",
    email: "",
    subject: "",
    message: "",
  }
//  const { errors ,touched, getFieldProps, handleSubmit } = useFormik({
//  validationSchema,
//  initialValues: {
//    name: "",
//    email: "",
//    subject: "",
//    message: "",
//  },
//  validateOnBlur: true,
//  validateOnChange: true,
//  validateOnMount: false,
//  onSubmit: (values) => {
//    console.log(values);
//  }
//  })
const handleSubmit = (values, {resetForm}) => {
  console.log(values);
  resetForm();
}
  return (
    <ContactContainer>
      <div>
        <h2>Contacto</h2>
        <p>¿Alguna Consulta? ¡Te ayudamos con lo que necesites!</p>
      </div>
      <InfoContainer>
      <Formik   
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {(values, {resetForm}) => handleSubmit (values, resetForm)}
        >
          {({touched, errors}) => (
          <FormContainerStyled>
          <Input label="Nombre"
          type="text"
          name="name" 
          isError= {touched.name && errors.name}
          />
        <Input label="Apellido"
          type="text"
          name="surename" 
          isError= {touched.surename && errors.surename}
        />
          <Input label="Email"
          type="email"
          name="email" 
          isError= {touched.email && errors.email}
         />
          <Input label="Asunto"
          type="text"
          name="subject" 
          isError= {touched.subject && errors.subject}
         />
          <label htmlFor="">Mensaje (opcional)</label>
          <TextAreaInput
          name="message"
          isError= {touched.message && errors.message}
         />
          <Submit onSubmit={handleSubmit} />
        </FormContainerStyled>
          )}
        </Formik>
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
