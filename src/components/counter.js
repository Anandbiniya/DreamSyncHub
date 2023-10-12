import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CountingAnimation from './countingfun';
import'./counter.css'
function Counter() {
  const tooltip = (
    <Tooltip id="tooltip">Your Tooltip Content</Tooltip>
  );
  return (
    <>
      <div className='digits'>
      <OverlayTrigger placement="top" overlay={tooltip}>
        <div className='count-div'>
         <CountingAnimation endValue={4} />
         <p>Clubs & Activities</p>
        </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={tooltip}>
        <div className='count-div'>
         <CountingAnimation endValue={15} />
         <p>Careleaver helped</p>
        </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={tooltip}>
        <div className='count-div'>
         <CountingAnimation endValue={50} />
         <p>Document helped</p>
        </div>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={tooltip}>
        <div className='count-div'>
         <CountingAnimation endValue={2} />
         <p>Location </p>
        </div>
        </OverlayTrigger>
        
         
      </div>
    </>
  )
}

export default Counter;