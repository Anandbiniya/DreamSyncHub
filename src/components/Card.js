import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Button, Divider, ButtonGroup} from '@chakra-ui/react';
import peerImage from "../Images/peerimage.jpeg"
import sessionimage from "../Images/session.jpeg"

// import { Heading } from '@chakra-ui/react'
function Card1() {
  const headingStyle = {
    textAlign: "center",  
    fontSize: "2xl",     
    fontWeight: "bold",  
    color: "#007BFF",     
  };

  return (

<>
<div className='whatwedo'>

<Heading as="h2" style={headingStyle} >
      What we do
    </Heading>
    <div>

  <div className='d-flex justify-content-center'>
<div className='row m-4 mt-0 mb-0 pt-0 justify-content-evenly'>
<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src='https://images.news18.com/ibnlive/uploads/2021/12/aadhar-voter-id.jpg'
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
      src={peerImage}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
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
<div className='row m-4 mt-0 mb-0 pt-0 justify-content-evenly'>
<Card maxW='xs' className='m-4'>
  <CardBody>
    <Image
      src='https://images.news18.com/ibnlive/uploads/2021/12/aadhar-voter-id.jpg'
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
      src={peerImage}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
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

    </div>
</div>

</>
  );
}

export default Card1;
