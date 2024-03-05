import React from "react";
import { useFormikContext } from "formik";

const Submit = () => {
  const formik = useFormikContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return <button type="submit" onClick={(e) => handleSubmit(e)}>Enviar</button>;
};

export default Submit;
