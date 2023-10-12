import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./components/Card";

import Info from "./components/Info"
import Ourteam from "./components/Ourteam"
import Footer from "./components/Footer"
import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import CaroselSimple from './components/Copycode';
import Counter from './components/counter';
library.add(fab, faCheckSquare, faCoffee)

function home() {
  return (
<>
    <ChakraProvider>
      <CaroselSimple/>
      <About/>
      <Card/>
      <Ourteam/>
    </ChakraProvider>
    <Counter/>
    <Info/>
    <Footer/>
</>
  )
}

export default home