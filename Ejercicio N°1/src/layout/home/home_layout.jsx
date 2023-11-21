import { ContentContainerStyled } from './styles'
import { Navbar } from '../../components/navbar/navbar'
import {React} from 'react'
import { Footer } from "../../footer/footer";

export const HomeLayout = ({children}) => {
  return (
    <ContentContainerStyled>
      <Navbar />
        {children}
        <Footer />
    </ContentContainerStyled>
  )
}
