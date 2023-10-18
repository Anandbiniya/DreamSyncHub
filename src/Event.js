import React from 'react'
import Heroimg from'./components/Heroimg'
import Eventinfocard from './components/eventinfocard'
import { ChakraProvider } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Event() {
  return (

        <>
          <div style={{ paddingTop: '66px' }}>
            <ChakraProvider>
            <Heroimg />
            <Eventinfocard/>
            </ChakraProvider>
          </div>
     
        </>
      
  )
}

export default Event