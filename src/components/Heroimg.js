import React from 'react'
import './Heroimg.css'
function Heroimg() {
  return (
    <>
    <div className="framer-1mga373" data-framer-name="Quote" name="Quote">
      <div className="framer-14mdhsx">
        <h2 className="framer-text">“Discover, connect, and grow at Care Leavers’ events”</h2>
      </div>
      <div className="framer-awvwiy" data-framer-name="Image" name="Image">
        <div
          style={{
            position: 'absolute',
            borderRadius: 'inherit',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          data-framer-background-image-wrapper="true"
        >
          <img className='hero_img'
            src="https://framerusercontent.com/images/jlHxfmMsAuYFVYKpe1k0yt0E.jpg?scale-down-to=512"
            alt=""
            srcSet="https://framerusercontent.com/images/jlHxfmMsAuYFVYKpe1k0yt0E.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/jlHxfmMsAuYFVYKpe1k0yt0E.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/jlHxfmMsAuYFVYKpe1k0yt0E.jpg 1200w"
            sizes="100vw"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              objectPosition: 'center',
              objectFit: 'cover',
              imageRendering: 'auto',
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Heroimg