import React from "react";
import { ErrorStyled } from "../TextAreaInput/TextAreaInputStyled";
import { InputStyled } from "./InputStyled";
import { InputContainer } from "./InputStyled";
import { ErrorMessage, Field } from "formik";


export const Input = ({ label, type, name, isError, ...field }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <Field
        type={type}
        id={label}
        name={name}
        error={isError}
        as={InputStyled}
      />
      
      { <ErrorMessage name={name} component={ErrorStyled} />}
    </InputContainer>
  );
};


 