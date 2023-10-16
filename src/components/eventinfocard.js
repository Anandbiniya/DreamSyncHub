import React from 'react'
import './Eventinfo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
function eventinfocard() {

  return (
        <>
        <div className='event-info-div-outer'>
            <div className='event-info-div'>
                <div className='event-icon-div'>
                    <div className='event-icon-inner'>
                        <FontAwesomeIcon icon={faBackward} rotation={90} className='event-icon'/>
                        {/* <AiFillBackward  className='event-icon'/> */}
                        {/* <img className='event-icon' src={arrow} rotation={90} alt='arrow'/> */}
                    </div>
                </div>
                <div className='upcoming-event'>

                    <p>anything</p>
                    <p>anything2</p>
                </div>
            </div>
            <div className='event-info-div'>
                <div className='event-icon-div'>
                    <div className='event-icon-inner'>
                    <FontAwesomeIcon icon={faCircle} className='event-icon'/>
                    </div>
                </div>
                <div className='upcoming-event'>

                    <p>anything</p>
                    <p>anything2</p>
                </div>
            </div>
        </div>
        </>
  )
}

export default eventinfocard