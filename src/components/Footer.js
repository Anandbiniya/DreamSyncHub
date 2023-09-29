import "./Footer.css"

import React from 'react'

function Footer() {
  return (
   <>
      <div cLassName="footer">
        <div className="sb__footer section_padding"> 
        <div className= "sb__footer-links">
          <div className="sb__footer-links-div">
            
            <h4>For Business</h4>
            <a href="/resource">
              <p>Employer</p>
            </a> 
            <a href=" healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div cLassName="sb__fo0ter-links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p> 
            </a> 
            <a href="/resource">
              <p>Testimonials</p> 
            </a>
            <a href="/resource">
              <p>svt</p>
            </a> 
          </div>
          <div cLassName="sb__footer-links_div">
            <h4>Patners</h4>
            <a href="/emloyer">
              <p>swing tech</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>company</h4>
            <a href="/about">
              <p>about</p> 
            </a> 
            <a href="/press">
              <p>press</p> 
            </a>
            <a href="/career">
              <p>career</p>
            </a> 
            <a href="/contact">
              <p>contact</p>
            </a>
          </div>
          <div cLassName="sb__footer-links_div">
            <h4>Coming soon on</h4> 
            <div className="socialmedia">
            <p><img src="" alt="" /></p>
            <p><img src="" alt="" /></p>
            <p><img src="" alt="" /></p>
          </div>
          </div> 

        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} dreamSync. All right reserved
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href= "/Terms & conditions" ><div><p>Terms & conditions</p></div></a>
            <a href= "/privacy policies" ><div><p>privacy policies</p></div></a>
            <a href= "/security" ><div><p>security</p></div></a>
            <a href= "/cookie" ><div><p>cookie</p></div></a>
            

          </div>
        </div>
      </div>
    </div>
   </>    
  )
}

export default Footer