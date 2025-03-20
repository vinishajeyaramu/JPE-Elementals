import React, { useEffect, useState } from "react";
import "./HomeMain.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slider1 from '../../Assets/Images/Newlaunch-img1.jpeg'
import Slider2 from '../../Assets/Images/Newlaunch-img2.jpeg'
import Slider3 from '../../Assets/Images/Newlaunch-img3.webp'
import Slider4 from '../../Assets/Images/Newlaunch-img4.webp'
import Slider5 from '../../Assets/Images/Newlaunch-img5.jpg'
import Slider6 from '../../Assets/Images/Newlaunch-img6.jpeg'
import Slider7 from '../../Assets/Images/Newlaunch-img7.jpg'
import Slider8 from '../../Assets/Images/Newlanuch-img8.png'
import Slider9 from '../../Assets/Images/Newlaunch-img9.jpg'
import Brand1 from '../../Assets/Images/Brand1.avif'
import Brand2 from '../../Assets/Images/Brand2.png'
import Brand3 from '../../Assets/Images/Brand3.png'
import Brand4 from '../../Assets/Images/Brand4.jpeg'
import Brand5 from '../../Assets/Images/Brand5.jpeg'
import Brand6 from '../../Assets/Images/brand6.png'
import Brand7 from '../../Assets/Images/Brand7.png'
import Brand8 from '../../Assets/Images/Brand8.png'
import Brand9 from '../../Assets/Images/brand9.jpeg'
import Brand10 from '../../Assets/Images/Brand10.png'
import Brand11 from '../../Assets/Images/Brand11.png'
import Brand12 from '../../Assets/Images/Brand12.jpeg'
import Brand13 from '../../Assets/Images/Brand13.jpeg'
import Brand14 from '../../Assets/Images/Brand14.jpg'
import Brand15 from '../../Assets/Images/Brand15.jpeg'
import Brand16 from '../../Assets/Images/Brand16.jpeg'
import { GoCopy } from "react-icons/go";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSolidStore } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { TfiPackage } from "react-icons/tfi";
import faq_img from '../../Assets/Images/faq-img.png'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import repair_img from '../../Assets/Images/Repair-img.png'
import { useMediaQuery } from "react-responsive";

const HomeMain = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          user_name: `${data.firstname} ${data.lastname}`,
          user_email: data.email,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      alert("Registration successful! Check your email for a welcome message.");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-05T23:59:59").getTime();

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup interval on component unmount
  }, []);
  const projects = [
    {
      id: 1,
      title: "intel Core Ultra 200S Series (Arrow Lake S)",
      category: "Processor",
      image: Slider1,
    },
    {
      id: 2,
      title: "AMD Ryzen 9000 Series: AMD's Zen 5 architecture-based Ryzen 9000 series",
      category: "Processor",
      image: Slider2,
    },
    {
      id: 3,
      title: "Intel 800-series",
      category: "Chipset and Motherboard",
      image: Slider3,
    },
    {
      id: 4,
      title: "AMD Radeon RX 8000 series",
      category: "Graphics Card",
      image: Slider4,
    },
    {
      id: 5,
      title: "Samsung 990 EVO Plus",
      category: "SSD",
      image: Slider5,
    },
    {
      id: 6,
      title: "GDDR7 Graphics Memory",
      category: "Memory",
      image: Slider6,
    },
    {
      id: 7,
      title: "Intel Arc B580 'Battlemage' GPU",
      category: "Mid range graphic card",
      image: Slider7,
    },
    {
      id: 8,
      title: "MSI MAG Z890 TOMAHAWK WIFI Motherboard",
      category: "Motherboard",
      image: Slider8,
    },
    {
      id: 9,
      title: "iBuyPower Y40 Pre-built Gaming Desktop",
      category: "Pre built gaming desktop",
      image: Slider9,
    },
  ];
  const pcHardwareBrands = [
    {
      id: 1,
      name:"Inter Core",
      image: Brand1,
    },
    {
      id: 2,
      name:"AMD Ryzen",
      image: Brand2,
    },
    {
      id: 3,
      name: "NVIDIA",
      image: Brand3,
    },
    {
      id: 4,
      name: "AMD Radeon ",
      image: Brand4,
    },
    {
      id: 5,
      name: "ASUS ROG ",
      image: Brand5,
    },
    {
      id: 6,
      name: "MSI",
      image:Brand6,
    },
    {
      id: 7,
      name: "Corsair",
      image: Brand7,
    },
    {
      id: 8,
      name: "G.Skill",
      image: Brand8,
    },
    {
      id: 9,
      name: "Samsung",
      image: Brand9,
    },
    {
      id: 10,
      name: "WD",
      image: Brand10,
    },
    {
      id: 11,
      name: "Seasonic",
      image: Brand11,
    },
    {
      id: 12,
      name: "Corsair RM850x",
      image: Brand12,
    },
    {
      id: 13,
      name: "NZXT",
      image: Brand13,
    },
    {
      id: 14,
      name: "Noctua",
      image: Brand14,
    },
    {
      id: 15,
      name: "LG",
      image: Brand15,
    },
    {
      id: 16,
      name: "Samsung Odyssey",
      image: Brand16,
    },
  ];
  const Categories = [
    { id: 1, name: "Processors (CPUs)"},
    { id: 2, name: "Graphics Cards (GPUs)" },
    { id: 3, name: "Motherboards" },
    { id: 4, name: "RAM (Memory)" },
    { id: 5, name: "Storage Devices" },
    { id: 6, name: "Power Supply Units (PSUs)" },
    { id: 7, name: "Cooling Solutions" },
    { id: 8, name: "PC Cases" },
    { id: 9, name: "Monitors" },
    { id: 10, name: "Keyboards & Mice" },
    { id: 11, name: "Audio Devices" },
    { id: 12, name: "Networking Components" },
    { id: 13, name: "External Devices" },
    { id: 14, name: "PC Accessories" },
    { id: 15, name: "Upgrades & Modding" }
  ];
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id); 
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="hero-section">
        <div className="hr-s">
          <h1 className="hero-head">Welcome to J's PC Elementals</h1>
          <p className="hero-content">
            From Bits to Builds: We've Got You Covered! Find the best components
            to build your dream PC. Quality parts, expert support.
          </p>
          <button className="hero-btn">Shop Now</button>
          </div>
          <div className="register">
        <div className="left-div">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="authentication">
        {/* First Name */}
        <div className="email">
          <legend>First Name</legend>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstname", { required: "First name is required" })}
          />
          {errors.firstname && <span>{errors.firstname.message}</span>}
        </div>

        {/* Last Name */}
        <div className="email">
          <legend>Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastname", { required: "Last name is required" })}
          />
          {errors.lastname && <span>{errors.lastname.message}</span>}
        </div>

        {/* Email */}
        <div className="email">
          <legend>Email</legend>
          <input
            type="email"
            placeholder="Example@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className="email">
          <legend>Password</legend>
          <input
            type="password"
            placeholder="At least 8 characters"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters long" },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        {/* Confirm Password */}
        <div className="email">
          <legend>Confirm Password</legend>
          <input
            type="password"
            placeholder="Re-enter Password"
            {...register("confirmpassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
        </div>
      </div>

      {/* Submit Button */}
      <button className="sign-up" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Sign Up"}
      </button>
    </form>
        </div>
        <div className="right-div"></div>
      </div>
      </div>
      <div className="offers">
        <div className="offers-content">
          <p className="off-cont">ACT FAST</p>
          <h1 className="off-head">Tech Deals Expire Soon - Shop Now!</h1>
          <div className="countdown-timer">
            <div className="time-box">
              <span>{timeLeft.days}</span>
              <hr />
              <p>Days</p>
            </div>
            <p className="colon">:</p>
            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <hr />
              <p>Hrs</p>
            </div>
            <p className="colon">:</p>
            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <hr />
              <p>Mins</p>
            </div>
            <p className="colon">:</p>
            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <hr />
              <p>Secs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="new-launches">
        <div className="marquee-tag">
        <marquee loop="2" className="nl-marquee">New Launches  <span className="nl">New Launches</span>  New Launches  <span className="nl">New Launches</span> New Launches  <span className="nl">New Launches</span>  New Launches  <span className="nl">New Launches</span></marquee>
        </div>
        <Swiper
        slidesPerView={isSmallScreen ? 1 : 3}
        spaceBetween={isSmallScreen ? 10 : 30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div>
        <h1 className="brand-head">TOP BRANDS</h1>
        <p className="brand-content">Gear Up for Maximum Performance</p>
      </div>
      <div className="grid-container">
      {pcHardwareBrands.map((brand) => (
        <div key={brand.id} className="grid-item">
          <img src={brand.image} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
      ))}
      </div>
      <div className="discounts-marquee">
        <marquee behavior="" direction="" className='mrq-cont'>Best Deals of the Week $10 Cashback  |  Top Tech Deals Up To 25% Off  |  Super Saver Deals Extra 5% Off  |  Exclusive Electronics Discounts </marquee>
      </div>
      <div>
        <h1 className="category-head">Categories</h1>
        <p className="category-content">Innovating Your Tomorrow, Today.</p>
      </div>
      <div className="c-grid-container">
      {Categories.map((category) => (
        <div key={category.id} className="c-grid-item">
          <h3>{category.name}</h3>
        </div>
      ))}
      </div>
      <div className="c-whole">
      <div className="c-whole-left">
        <div className="widget-sec">
          <p className="w-icon"><RiSecurePaymentFill /></p>
          <div className="w-cont"><p>Trusted Partners</p><h2>Secured Payment</h2></div>
          <p className="w-icon"><BiSolidStore /></p>
          <div className="w-cont"><p>Purchase at ease</p><h2>In-Store Pickup</h2></div>
          <p className="w-icon"><BiSolidOffer /></p>
          <div className="w-cont"><p>Specials Deals Weekly</p><h2>Limited Time Offers</h2></div>
          <p className="w-icon"><TfiPackage /></p>
          <div className="w-cont-1"><p>Anytime Anywhere</p><h2>All Over India</h2></div>
        </div>
      </div>
      <div className="c-whole-right">
      <div className="coupon-section">
      <p>On All Electronic Products, don’t miss this ! Use code :</p>
      <button>Jelementalsoff11<GoCopy /></button>
      </div>
      <div className="faq">
        <h5 className="ans">Looking for Answers</h5>
        <h1>Frequent Asked Questions</h1>
        <div className="faq-img">
          <img src={faq_img} alt="" />
          <p className="consult-support">
            Question? <b>Consult Our Support</b>
          </p>
        </div>
        <div className="faq-questions">
          {[
            {
              id: 1,
              question: "Do You Offer Extended Warranties?",
              answer:"Yes, we do! Extended warranties are available to provide additional coverage and peace of mind beyond the standard warranty period.",
            },
            {
              id: 2,
              question: "What does Express shipping mean?",
              answer: "Delivers within 3-6 business days"
            },
            {
              id: 3,
              question: "How Can My Billing Information Be Updated?",
              answer: "You can update your billing information through your online account, by contacting customer support, or visiting a store if applicable.",
            },
            {
              id: 4,
              question: "How Is The Limit On My Credit Determined?",
              answer: "Your credit limit is based on factors like your credit score, income, debt-to-income ratio, and credit history.",
            },
            {
              id: 5,
              question: "What does Standard shipping mean?",
              answer: "Delivers around 10+ business days"
            },
          ].map((faq) => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                <h3>{faq.question}</h3>
                {openFaq === faq.id ? (
                  <AiOutlineMinus className="faq-icon" />
                ) : (
                  <AiOutlinePlus className="faq-icon" />
                )}
              </div>
              {openFaq === faq.id && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
      <div class="contact-container">
  <div class="contact-form">
    <h2>Contact Us!</h2>
    <form id="contactForm" onsubmit="return validateForm()">
      <div class="form-group">
        <input type="text" id="name" placeholder="Name *" required />
        <small class="error-message" id="nameError"></small>
      </div>
      <div class="form-group">
        <input type="email" id="email" placeholder="Email*" required />
        <small class="error-message" id="emailError"></small>
      </div>
      <div class="form-group">
        <input type="text" id="phone" placeholder="Phone" />
      </div>
      <div class="form-group">
        <textarea id="message" placeholder="Please describe what you need. *" required></textarea>
        <small class="error-message" id="messageError"></small>
      </div>
      <button type="submit" class="submit-btn">Send Now</button>
    </form>
  </div>
  <div class="contact-info">
  <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.4103512684246!2d77.64110587325429!3d10.14726077048713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07438fed36b551%3A0x3aca91c132235da0!2sPallivasal%20Street%2C%20Devadanapatti%2C%20Tamil%20Nadu%20625602!5e0!3m2!1sen!2sin!4v1735352605773!5m2!1sen!2sin" width="500" height="250" ></iframe>
    < FaPhone className="c-icon" />
    <h3>Make A Call</h3>
    <p>+91 7010456733</p>
    <p>+91 9994475103</p>
    <IoMailUnreadOutline className="c-icon-1"/>
    <h3>Email</h3>
    <p>info@J.com</p>
    <p>support@J.com</p>
  </div>
</div>
    <div className='repair-1'>
        <div className='repair-img-1'>
        <img src={repair_img} alt="" />
        </div>
        <div className='repair-cont-1'>
            <h3>Want to repair gadget ?</h3>
            <p className='r-c-1'>Tech Repairs Done Right, Every Time.</p>
            <a href="" className='rc-link-1'>Contact Us</a>
        </div>
    </div>
           
    </>
  );
};

export default HomeMain;
