import React from 'react'
import img_info from '../../assets/photo1.png'
import './Eventhead.css'
function AEventHead() {
  return (
   <>
        <div className='d-flex flex-row justify-content-center aeventhead'>
            <div className='d-flex justify-content-center flex-column'>
                <h1>
                Events
                </h1>
                <p className='w-75'> 
                Google Open Source sponsors a variety of events across open source, from local meetups to industry-wide conferences, as well as hosting own our events to share Google expertise. We strive to support collaborative and welcoming spaces—please stop by our booths and spaces to say 'hi'! We'd love to meet you.
                </p>
            </div>
            <div className='e-head-up'>
                <div className='e-head-div'>
                    <img className='e-head-img' src={img_info} alt='leftimg'/>
                </div>
            </div>
        </div>
   </>
  )
}

export default AEventHead