import React,{useEffect,useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import './card.css';

function Card() {
  return (

<>
<div className="card-slideshow">
      {/* First Slide */}
      <div className="card-slide">
        <div className="card medium">
        <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/150" // Replace with the profile picture URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <button className="button">Know More</button>
      </div>
    </div>
        </div>
        <div className="card medium">
        <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/150" // Replace with the profile picture URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <button className="button">Know More</button>
      </div>
    </div>
        </div>
        <div className="card medium">
        <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/150" // Replace with the profile picture URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <button className="button">Know More</button>
      </div>
    </div>
          {/* Card content for the third card */}
        </div>
      </div>

      {/* Second Slide */}
      <div className="card-slide">
        <div className="card medium">
        <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/150" // Replace with the profile picture URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <button className="button">Know More</button>
      </div>
    </div>
        </div>
        <div className="card medium">
        <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/150" // Replace with the profile picture URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <button className="button">Know More</button>
      </div>
    </div>
        </div>
        <div className="card medium">
        <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/150" // Replace with the profile picture URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <button className="button">Know More</button>
      </div>
    </div>
        </div>
      </div>

      {/* Add more slides as needed */}
    </div></>
    // <div className="card-container">
    //   <div className="card medium">
    //     <div className="card-image">
    //       <div className="circular-image">
    //         {/* Placeholder image */}
    //         <img
    //           src="https://via.placeholder.com/150" // Replace with your image URL
    //           alt="Something Awesome"
    //           className="card-img-circle"
    //         />
    //       </div>
    //     </div>
    //     <div className="card-content">
    //       <h2 className="card-title">Something Awesome</h2>
    //       <p className="card-body">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
    //         culpa.
    //       </p>
    //       <a href="#" className="button">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card medium">
    //     <div className="card-image">
    //       <div className="circular-image">
    //         {/* Placeholder image */}
    //         <img
    //           src="https://via.placeholder.com/150" // Replace with your image URL
    //           alt="Something Awesome"
    //           className="card-img-circle"
    //         />
    //       </div>
    //     </div>
    //     <div className="card-content">
    //       <h2 className="card-title">Something Awesome</h2>
    //       <p className="card-body">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
    //         culpa.
    //       </p>
    //       <a href="#" className="button">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card medium">
    //     <div className="card-image">
    //       <div className="circular-image">
    //         {/* Placeholder image */}
    //         <img
    //           src="https://via.placeholder.com/150" // Replace with your image URL
    //           alt="Something Awesome"
    //           className="card-img-circle"
    //         />
    //       </div>
    //     </div>
    //     <div className="card-content">
    //       <h2 className="card-title">Something Awesome</h2>
    //       <p className="card-body">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
    //         culpa.
    //       </p>
    //       <a href="#" className="button">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card medium">
    //     <div className="card-image">
    //       <div className="circular-image">
    //         {/* Placeholder image */}
    //         <img
    //           src="https://via.placeholder.com/150" // Replace with your image URL
    //           alt="Something Awesome"
    //           className="card-img-circle"
    //         />
    //       </div>
    //     </div>
    //     <div className="card-content">
    //       <h2 className="card-title">Something Awesome</h2>
    //       <p className="card-body">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
    //         culpa.
    //       </p>
    //       <a href="#" className="button">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card medium">
    //     <div className="card-image">
    //       <div className="circular-image">
    //         {/* Placeholder image */}
    //         <img
    //           src="https://via.placeholder.com/150" // Replace with your image URL
    //           alt="Something Awesome"
    //           className="card-img-circle"
    //         />
    //       </div>
    //     </div>
    //     <div className="card-content">
    //       <h2 className="card-title">Something Awesome</h2>
    //       <p className="card-body">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
    //         culpa.
    //       </p>
    //       <a href="#" className="button">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>
    //     <div className="card medium">
    //     <div className="card-image">
    //       <div className="circular-image">
    //         {/* Placeholder image */}
    //         <img
    //           src="https://via.placeholder.com/150" // Replace with your image URL
    //           alt="Something Awesome"
    //           className="card-img-circle"
    //         />
    //       </div>
    //     </div>
    //     <div className="card-content">
    //       <h2 className="card-title">Something Awesome</h2>
    //       <p className="card-body">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
    //         culpa.
    //       </p>
    //       <a href="#" className="button">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>

      // {/* Add more cards as needed */}
    // </div>
  );
}

export default Card;
