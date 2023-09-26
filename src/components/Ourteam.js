import React from 'react'
import member1 from '../assets/photo1.png'
import './Ourteam.css'

function Ourteam() {
  return (
    <>
<div className='card1'>
  <div className='border imgdiv p-3 '>


      <img src={member1} alt='member1' className='rounded-circle cirularimage ' />
    <p>
      i am a softare developer
    </p>
  </div>
</div>

    </>
  )
}

export default Ourteam