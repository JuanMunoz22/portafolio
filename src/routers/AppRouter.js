import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { ContactoScreen } from '../components/contacto/ContactoScreen'
import { HomePage } from '../components/home/HomePage'
import { PortafolioScreen } from '../components/portafolio/PortafolioScreen'
import { TecnologiasScreen } from '../components/tecnologias/TecnologiasScreen'
import { Footer } from '../components/ui/Footer'
import { Navbar } from '../components/ui/Navbar'


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <HomePage/>
      <TecnologiasScreen />
      <PortafolioScreen/>  
      <ContactoScreen />
      <Footer />
    </BrowserRouter>
  )
}
