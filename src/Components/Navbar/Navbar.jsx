import React, { useState } from "react";
import './Navbar.css';
import logo from '../../Assets/Images/Logo.png';
import { RiAccountPinCircleLine } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";
import { LuHeart } from "react-icons/lu";
import { RiCloseFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    const clearSearch = () => {
        setQuery(""); 
    };
    const [showmenu,setshowmenu]=useState(false);
    const handlemenu=()=>{
        setshowmenu(!showmenu);
    };

    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="searchbar">
                        <input 
                            type="text" 
                            value={query} 
                            onChange={handleInputChange} 
                            placeholder={placeholder || "Search..."} 
                        />
                        {query && <button className='clr-btn' onClick={clearSearch}><RiCloseFill /></button>}
                    </div>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/shop">Shop</a>
                        <a href="/brands">Brands</a>
                        <a href="/deals">Deals</a>
                        <a href="/contact_us">Contact Us</a>
                    </div>
                    <div className="nav-icons">
                        <a href="/account"><RiAccountPinCircleLine /></a>
                        <a href="/cart"><PiShoppingCartFill /></a>
                        <a href="/wishlist"><LuHeart /></a>
                    </div>
                    <div className='hamburger'><button onClick={handlemenu}>
                        <AiOutlineMenu /></button>
                        {showmenu &&
                            <div className='menu-1' >
                                <a href="/">Home</a>
                                <a href="/shop">Shop</a>
                                <a href="/brands">Brands</a>
                                <a href="/deals">Deals</a>
                                <a href="/contact_us">Contact Us</a>
                                <div className="nav-icons-1">
                                    <a href="/account"><RiAccountPinCircleLine /></a>
                                    <a href="/cart"><PiShoppingCartFill /></a>
                                    <a href="/wishlist"><LuHeart /></a>
                                </div>
                            </div>
                        }
            
                    </div>
                </div>
                
            </nav>
            
        </>
    );
};

export default Navbar;
