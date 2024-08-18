import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import './Slider.css';
import { Link } from 'react-router-dom';

export default function Slide() { 
  return ( 
    <div style={{ display: 'block', width: '100%' }} >  
      <Carousel> 
	
		
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/1371403.jpg"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                 
                  <h1 className="title is-1 has-text-white"><b>CHILD SITTING SERVICES</b></h1>
                  <Link to="/child">
                 <button className="button is-medium">Book the session</button>
                 </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
		
           
		   
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/old-man-nursing-home-helped-by-female-doctor-take-his-medicine_482257-22857.jpg?t=st=1723612178~exp=1723615778~hmac=f26448adcd9eafef8a59049d620ff39d436a5e69d63d45a5a593e0c6c4fe2d03&w=1060"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                <h1 className="title is-1 has-text-white"><b>DAY NURSING SERVICES</b></h1>
                <Link to="/nurse">
                 <button className="button is-medium">Book the session</button>
                 </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
	
         
        
        <Carousel.Item interval={3000}> 
          <img 
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/high-angle-delivery-truck-boxes_23-2148790067.jpg?t=st=1723612065~exp=1723615665~hmac=3eeb3af012df9680f625cf5d56fc782c74dfd9993620b32170a21984196fffec&w=996"
            alt="Image Three"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                <h1 className="title is-1 has-text-white"><b>Free & Fast Shipping Across India</b></h1>
                <Link to="/ship">
                    <button className="button is-medium">EXPLORE</button>
                    </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={3000}> 
          <img 
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/cleaning-home-tools-background-with-large-copy-space_1409-7603.jpg?t=st=1723611913~exp=1723615513~hmac=01bab6592504fe6d262964ad5ea235b435c4deb48b8452cbfcc9c1086b0a0c5c&w=1380"
            alt="Image four"
          /> 
          <Carousel.Caption> 
            <div className="columns">
              <div className="column is-full featured_wrapper p-0">
                <div className="title_wrapper">
                 
                <h1 className="title is-1 has-text-white"><b>Regular Home Services</b></h1>
                <Link to="/service">
                <button className="button is-medium">EXPLORE</button>
                </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
        
        
      </Carousel> 
    </div> 
  ); 
}