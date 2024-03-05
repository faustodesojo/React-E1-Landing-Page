
import React from "react";
import { BrowserRouter, Route, Routes as ReactDomRoutes } from "react-router-dom";
import { Contact } from "../pages/contact/contact";
import { About } from "../pages/about/about";
import { HomeLayout } from "../layout/home/home_layout";
import { Home } from "../pages/home/home";
import { RoomsWidget } from "../pages/rooms/rooms_widget/rooms_widget";
import {ErrorPage} from "../pages/error/error";
import { Carrito } from "../pages/carrito/Carrito";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsWidget />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="carrito" element={<Carrito />} />
        </ReactDomRoutes>
      </HomeLayout>
    </BrowserRouter>
   
  );
};

export default AppRoutes;
