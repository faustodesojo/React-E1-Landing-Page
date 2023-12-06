import React from "react";
import AppRoutes  from './routes/Routes';
import { MenuProvider } from "./context/hamburguer_menu";
import "./App.css";

function App() {
  return (   
    <MenuProvider>
    <AppRoutes />
    </MenuProvider>
  )
}

export default App;
