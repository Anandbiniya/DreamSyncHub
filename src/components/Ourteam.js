import React from 'react';
import Button from 'react-bootstrap/Button';
import member1 from '../assets/photo1.png'
import './Ourteam.css'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1, // Set this to 3 to display 3 members in each slide
  slidesToScroll: 1, // Set this to 3 as well
};

export default function SimpleSlider() {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const teamMembers = [
    {
      name: 'John Doe',
      occupation: 'Software Developer',
      image: member1,
    },
    {
      name: 'Jane Smith',
      occupation: 'Designer',
      image: member1,
    },
    {
      name: 'Alice Johnson',
      occupation: 'Product Manager',
      image: member1,
    },
    {
      name: 'Bob Johnson',
      occupation: 'QA Engineer',
      image: member1,
    },
    {
      name: 'Eva Brown',
      occupation: 'UI/UX Designer',
      image: member1,
    },
    {
      name: 'Michael Davis',
      occupation: 'Frontend Developer',
      image: member1,
    },

    {
      name: 'anad',
      occupation: 'Frontend Developer',
      image: member1,
    },
    // Add more team members as needed
  ];

  // Create groups of 3 team members for each slide
  const teamMemberGroups = [];
  for (let i = 0; i < teamMembers.length; i += 3) {
    teamMemberGroups.push(teamMembers.slice(i, i + 3));
  }

  return (
    <Box className='tailbox'position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      <div className='container outer_div'>
  <h1 className='text-center font-weight-bold pt-5'>
    Our Team
  </h1>
  
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
      
        {teamMemberGroups.map((group, index) => (
          <div className="d-flex flex-wrap justify-content-center" key={index}>
            {group.map((member, memberIndex) => (
              <div className="col-md-4" key={memberIndex}>
                <div className="card1 w-100 p-0 justify-content-center">
                  <div className="imgdiv p-3 innerdiv">
                    <img src={member.image} alt={member.name} className="rounded-circle cirularimage" />
                    <p className="occupation">{member.occupation}</p>
                    <div className="d-flex justify-content-center">
                      <Button variant="outline-primary profile_button">View profile</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Slider>
      </div>
    </Box>
  );
}
