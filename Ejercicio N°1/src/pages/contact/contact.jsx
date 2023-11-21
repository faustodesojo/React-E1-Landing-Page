import React from 'react'
import { ContactContainer, FormContainer } from './style'
export const Contact = () => {
  return (
    <ContactContainer>
        <div>
        <h2>Contactanos</h2>
        <p>¿Alguna Consulta? ¡Te ayudamos con lo que necesites!</p>
        </div>
        <FormContainer action="">
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Asunto</label>
            <input type="text" />
            <label htmlFor="">Mensaje</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Enviar" />
        </FormContainer>
    </ContactContainer>
  )
}
