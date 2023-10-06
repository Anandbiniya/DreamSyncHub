import "./Footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'





import React from 'react'


function Footer() {
  return (
   <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
         <div className='me-4 text-reset'>
          
        </div>
          <a href='https://open.spotify.com/collection/tracks' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faEnvelope} style={{color: "#74a6fb",}} className="icon-hover"/>
          </a>
          <a href='your-valid-link' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faSquareInstagram} style={{color: "#74a6fb",}} className="icon-hover"/>
          </a>
          <a href='your-valid-link' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faTwitter}  style={{color: "#74a6fb",}} className="icon-hover"/>
          </a>
          <a href='your-valid-link' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faLinkedin}  style={{color: "#74a6fb",}} className="icon-hover"/>
          </a>
          <a href='your-valid-link' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faGithub}  style={{color: "#74a6fb",}} className="icon-hover"/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='h4 fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 dream"/>
                Dream<span className="right-logo">Sync</span>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#74a6fb",}} >Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#74a6fb",}}>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#74a6fb",}}>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          DreamSync
        </a>
      </div>
    </MDBFooter>
  
   </>    
  )
}

export default Footer