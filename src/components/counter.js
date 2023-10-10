import React from 'react'
import CountingAnimation from './countingfun';
import'./counter.css'
function Counter() {
  return (
    <>
      <div className='digits'>
        <div className='count-div'>
         <CountingAnimation endValue={4} />
         <p>Clubs & Activities</p>
        </div>
        <div className='count-div'>
         <CountingAnimation endValue={15} />
         <p>Careleaver helped</p>
        </div>
        <div className='count-div'>
         <CountingAnimation endValue={50} />
         <p>Document helped</p>
        </div>
        <div className='count-div'>
         <CountingAnimation endValue={2} />
         <p>Location </p>
        </div>
        
         
      </div>
    </>
  )
}

export default Counter;