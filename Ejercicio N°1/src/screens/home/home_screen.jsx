// rafc **para  crear componentes automaticamente//extension**
import React from 'react'
import { Hero } from '../../components/hero/hero'
import { Header } from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import {HomeLayout} from '../../layout/home/home_layout'
import { RoomsWidget } from '../../components/rooms/rooms_widget/rooms_widget'
import { Footer } from '../../footer/footer'

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <Header />
        <Hero />
      <RoomsWidget />
      </HomeLayout>
      <Footer />
    </>
  )
}