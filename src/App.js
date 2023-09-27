
import './App.css';
import Card from "./components/Card";
import Nav from "./components/Nav";
import Hero from "./components/Hero"
import Info from "./components/Info"
import Ourteam from "./components/Ourteam"
import Support from "./components/Support"
import Footer from "./components/Footer"
import Core from './components/Core';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
   <>
  <Nav/>
  <Hero/>
  <ChakraProvider>


  <Card/>
  </ChakraProvider>
  <Info/>
  
  <Ourteam/>
  <Support/>
  <Footer/>

   </>
  );
}

export default App;
