import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Button, Divider, ButtonGroup} from '@chakra-ui/react';
import peerImage from "../Images/peerimage.jpeg"
import sessionimage from "../Images/session.jpeg"

// import { Heading } from '@chakra-ui/react'
function Card1() {
  const headingStyle = {
    textAlign: "center",  // Center align the text
    fontSize: "2xl",      // Adjust the font size as needed
    fontWeight: "bold",   // Apply bold font weight
    color: "#007BFF",     // Change the text color to your preferred color
    // Add any additional styles you want here
  };

  return (

<>
<Heading as="h2" style={headingStyle}>
      What we do
    </Heading>
<div className='d-flex justify-content-center'>

<div className='row m-5 justify-content-evenly'>

<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src='https://images.news18.com/ibnlive/uploads/2021/12/aadhar-voter-id.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Documentation</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    
  </CardFooter>
</Card>
<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src={peerImage}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={250}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Peer Mentoring</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    
  </CardFooter>
</Card>
<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src={sessionimage}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={250}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Sessions & Network</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    
  </CardFooter>
</Card>
</div>
</div>
<div className='d-flex justify-content-center'>
<div className='row m-4 justify-content-evenly'>
<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    
  </CardFooter>
</Card>

<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    
  </CardFooter>
</Card>
<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    
  </CardFooter>
</Card>
</div>

</div>

</>
  );
}

export default Card1;
