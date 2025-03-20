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
                    <a href='/insta'><FaInstagram /></a>
                    <a href='/threads'><FaThreads /></a>
                    <a href='/twitter '><FaXTwitter /></a>
                    <a href='/whatsapp'><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
                
                <div className='pages'>
                    <h3>Pages</h3>
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/brands">Brands</a>
                    <a href="/deals">Deals</a>
                    <a href="/about">About Us</a>
                </div>
                <div className="innerpages">
                    <h3>Inner Pages</h3>
                    <a href="/news">Newsletter</a>
                    <a href="/offer">Special Offers</a>
                    <a href="/events">Upcoming Events</a>
                    <a href="/gallery">Testimonial Gallery</a>
                </div>
                <div className='info'>
                    <h3>Information</h3>
                    <a href="/conditons">Terms & Conditions</a>
                    <a href="/policy">Privacy Policy</a>
                    <a href="/contact">Contacts Us</a>
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
                                    I agree with the <a href="/conditions">terms & conditions</a>.
                            </label>
                        </div>
                        </form>
                  </div> 
        </div>
        

    </>
  )
}

export default Footer