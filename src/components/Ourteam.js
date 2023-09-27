import React from 'react'
import Button from 'react-bootstrap/Button';
import member1 from '../assets/photo1.png'
import './Ourteam.css'

function Ourteam() {
  return (
    <>
    
<div className='container outer_div'>
  <h1 className='text-center font-weight-bold pt-5'>
    Our Team
  </h1>
  <p className='head2'> connect with us</p>
  <div className='row'>
    <div className='col-md-4'>
      <div className='card1 w-100 p-0 justify-content-center '>
        <div className=' imgdiv p-3 innerdiv'>
          <img src={member1} alt='member1' className='rounded-circle cirularimage ' />
          <p className='occupation'>
            i am a softare developer
          </p>
          <div className='d-flex justify-content-center'>
            <Button variant="outline-primary profile_button">View profile</Button>{' '}
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='card1 w-100 p-0 justify-content-center'>
        <div className=' imgdiv p-3 innerdiv'>
          <img src={member1} alt='member1' className='rounded-circle cirularimage ' />
          <p className='occupation'>
            i am a softare developer
          </p>
          <div className='d-flex justify-content-center'>
            <Button variant="outline-primary profile_button">View profile</Button>{' '}
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='card1 w-100 p-0 justify-content-center'>
        <div className=' imgdiv p-3 innerdiv'>
          <img src={member1} alt='member1' className='rounded-circle cirularimage ' />
          <p className='occupation'>
            i am a softare developer
          </p>
          <div className='d-flex justify-content-center'>
            <Button variant="outline-primary profile_button">View profile</Button>{' '}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='row'>
    <div className='col-md-4'>
      <div className='card1 p-0 w-100 justify-content-center'>
        <div className=' imgdiv p-3 innerdiv'>
          <img src={member1} alt='member1' className='rounded-circle cirularimage ' />
          <p className='occupation'>
            i am a softare developer
          </p>
          <div className='d-flex justify-content-center'>
            <Button variant="outline-primary profile_button">View profile</Button>{' '}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Ourteam