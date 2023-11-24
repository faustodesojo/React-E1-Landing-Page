import React, { createContext, useState } from "react";

export const BurguerContext = createContext();

export const MenuProvider = ({ children }) => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <BurguerContext.Provider value={{ click, changeClick }}>
      {children}
    </BurguerContext.Provider>
  );
};
