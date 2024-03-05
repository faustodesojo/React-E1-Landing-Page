import React from "react";
import { ErrorStyled } from "./TextAreaInputStyled";

const TextAreaInput = ({name, isError }) => {
  return (
    <div>
      <textarea rows={10} cols={50} id={name} name={name} error={isError} />
      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </div>
  );
};

export default TextAreaInput;