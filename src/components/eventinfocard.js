import React from 'react';
import './Eventinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Button} from '@chakra-ui/react'
import img_info from '../assets/photo1.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function EventInfoCard() { 

    return (
        <>
            <div style={{ justifyContent: 'center', display:'flex' }}>            
                <div className='event-info-div-outer'>
                    <div className='event-info-div'>
                        <div className='event-icon-div'>
                            <div className='event-icon-inner'>
                                <FontAwesomeIcon icon={faBackward} rotation={90} className='event-icon'/>
                            </div>
                        </div>
                        <div className='upcoming-event'>
                            <p className='event-text'>upcoming</p>
                            <p>upcoming</p>
                        </div>
                    </div>
                    
                    <div className='event-info-div'>
                        <div className='event-icon-div'>
                            <div className='event-icon-inner'>
                                <FontAwesomeIcon icon={faCircle} className='event-icon'/>
                            </div>
                        </div>
                        <div className='upcoming-event'>
                            <p className='event-text'>past event</p>
                            <p>past event</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-outer-div'>
                <div className='image-topic'>
                    <h2 className='image-topic-h'>
                        Sneek peek
                    </h2>
                </div>
                <div className='image-div'>
                    <div className='image-left'>
                        <div className='left-div'>
                            <div className='left-inner'>
                                <img className='left-img' src={img_info} alt='leftimg'/>
                            </div>
                        </div>

                    </div>
                    <div className='image-right-group'>
                        <div className='img1-div'>
                            <div className='img-group-1'>
                                <img className='left-img' src={img_info} alt='leftimg'/>
                            </div>

                        </div>
                        <div className='img1-div'>
                            <div className='img-group-1'>
                                <img className='left-img' src={img_info} alt='leftimg'/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                <div className='pb-5'>
                    <h1>
                        Join us
                    </h1>
                </div>
                <div className='w-30'>
                    <p className='text-center joinus-text'>
                        Create butiful moments
                    </p>
                </div>
                <div>
                    <Button className='m-5' colorScheme='blue'>Button</Button>
                </div>
            </div>
        </>
    );
}

export default EventInfoCard;



