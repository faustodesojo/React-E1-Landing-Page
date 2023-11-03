// rafc **para  crear componentes automaticamente//extension**
import React from 'react'
import { Hero } from '../components/hero/hero'
import { Header } from '../components/header/header'
import { Navbar } from '../components/navbar/navbar'

export const HomeScreen = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Navbar></Navbar>
    </div>
  )
}
