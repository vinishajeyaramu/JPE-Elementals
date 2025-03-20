import {React,useState} from 'react'
import './Footer.css'
import logo_foot from '../../Assets/Images/Logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
     const [isChecked, setIsChecked] = useState(false);
    
        const handleSubmit = (e) => {
          if (!isChecked) {
            e.preventDefault();
            alert("Please agree to the terms and conditions before submitting.");
          }
        }
    
  return (
    <>
        <div className='footer'>
            <div className="f-content">
            <img src={logo_foot} alt="" />
            <p className='f-c'>Power Your PC with Quality Parts – Where Performance Meets Precision!</p>
            
            
                <div className='social-link'>
                    <h2>Follow Us On Social</h2>
                    <div className='sl-icon'>
                    <a href=''><FaInstagram /></a>
                    <a href=''><FaThreads /></a>
                    <a href=' '><FaXTwitter /></a>
                    <a href=''><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
                
                <div className='pages'>
                    <h3>Pages</h3>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Brands</a>
                    <a href="">Deals</a>
                    <a href="">About Us</a>
                </div>
                <div className="innerpages">
                    <h3>Inner Pages</h3>
                    <a href="">Newsletter</a>
                    <a href="">Special Offers</a>
                    <a href="">Upcoming Events</a>
                    <a href="">Testimonial Gallery</a>
                </div>
                <div className='info'>
                    <h3>Information</h3>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Contacts Us</a>
                </div>
                
                <div class="trends-section">
                    <h3>Stay On Top Of The Latest Trends</h3>
                    <form onSubmit={handleSubmit}>
                       
                            <div className="ts-cont">
                            <input type="email" placeholder='E-mail' />
                            <button type="submit">Submit</button>
                            </div>
                            <div className="checkbox-container">
                            <input
                                    type="checkbox"
                                    id="agreeCheckbox"
                                    checked={isChecked}
                                     onChange={(e) => setIsChecked(e.target.checked)}
                             />
                            <label htmlFor="agreeCheckbox">
                                    I agree with the <a href="#">terms & conditions</a>.
                            </label>
                        </div>
                        </form>
                  </div> 
        </div>
        

    </>
  )
}

export default Footer