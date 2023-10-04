
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Hero from "./components/Hero"
import Info from "./components/Info"
import Ourteam from "./components/Ourteam"
import Support from "./components/Support"
import Footer from "./components/Footer"
import Core from './components/Core';
import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About';
// import CaptionCarousel from './components/NewCarosel';
import SimpleSlider from './components/NewCarosel';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import CaroselSimple from './components/Copycode';

library.add(fab, faCheckSquare, faCoffee)



function App() {
  return (
   <>
  <Nav/>
  {/* <Hero/> */}
  
  <ChakraProvider>
{/* <SimpleSlider/> */}
<CaroselSimple/>
<About/>
 <Card/>


  <Card/>

  </ChakraProvider>
  <Info/>
  
  <Ourteam/>
{/* <Core/> */}
  <Support/>
  <Footer/>

   </>
  );
}

export default App;
