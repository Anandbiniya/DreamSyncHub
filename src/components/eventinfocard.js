import React, { useState } from 'react';
import './Eventinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function EventInfoCard() {
    const [show, setShow] = useState(true);

    const handleClose = () =>{
        setShow(false);
        console.log("this is false")
    } 
    const handleShow = () =>{
        setShow(true);
        console.log('this is true')
    
    } 
        

    return (
        <>
            <div className='event-info-div-outer'>
                <div className='event-info-div' onClick={handleShow}>
                    <div className='event-icon-div'>
                        <div className='event-icon-inner'>
                            <FontAwesomeIcon icon={faBackward} rotation={90} className='event-icon'/>
                        </div>
                    </div>
                    <div className='upcoming-event'>
                        <p>upcoming</p>
                        <p>upcoming</p>
                    </div>
                </div>
                

                <Modal show={show} onClick={handleClose} className='outer-model'>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modle-body'>
                        <div class="popup cp-4">
                        <div class="popup-items">
                            <div class="popup-items-inner">
                            <div class="popup-date"><h4>12</h4></div>
                            <div class=" popup-month">12</div>
                            <div class=" popup-time">2</div>
                            <div class=" popup-venue ">venda,jhsdfbljhadbfk adfuag ue</div>
                            <div className='joinus-btn'>                                
                            <a href="https://chat.whatsapp.com/F16qdcRPSR8EevxlT75vYS" target="_blank" class="btn btn-primary">Join</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-8 d-flex flex-column align-self-center p-2">
                            <h2 class="m-0">Event_Title</h2>
                            <p>desc</p>
                        </div>
                        <div class="mt-3 d-flex justify-content-end align-self-center p-3" style={{ height: '150px' }}>
                            <img src="" alt="Event Image" class="img-fluid h-100" />
                        </div>
                        </div>
                    </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="primary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>
                
                <div className='event-info-div'>
                    <div className='event-icon-div'>
                        <div className='event-icon-inner'>
                            <FontAwesomeIcon icon={faCircle} className='event-icon'/>
                        </div>
                    </div>
                    <div className='upcoming-event'>
                        <p>past event</p>
                        <p>past event</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventInfoCard;



