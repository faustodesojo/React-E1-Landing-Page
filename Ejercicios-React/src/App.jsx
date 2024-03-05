import React from "react";
import AppRoutes  from './routes/Routes';
import { MenuProvider } from "./context/hamburguer_menu";
import "./App.css";
import { ShoppingCartContext } from "./context/ShoppingCartContext";

function App() {
  return (   
    <ShoppingCartContext>
    <MenuProvider>

    <AppRoutes />
    
    </MenuProvider>
    </ShoppingCartContext>
  )
}

export default App;
