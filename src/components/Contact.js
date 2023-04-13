import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Import the CSS file

import insta from './images/insta_logo.png';
import fb from './images/fb_logo.png';
import linkedin from './images/linkedin_logo.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2u9is8",
        "template_h16l3xd",
        form.current,
        "gAQDfDZVVgmEQqHat"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container" id="contact">

      <div className="contact_heading">
        <h1>Contact me</h1>
      </div>

      <div className="form_area">

        <form className="form" ref={form} onSubmit={sendEmail}>
          <label className="label">Name</label>
          <input className="input" type="text" name="from_name" placeholder="Enter your name" />
          <label className="label">Email</label>
          <input className="input" type="email" name="from_email" placeholder="Enter your email id" />
          <label className="label">Message</label>
          <textarea className="textarea" name="message" />
          <div className="btn">

          <input className="submitBtn" type="submit" value="Send" placeholder="Enter text here" />
          </div>
        </form>
      </div>
      <div className="note">
      
          Note:-The information you enter will be sent to kunal2103goyal@gmail.com

        </div>
      <div className="social_logo">
        <div className="fb">
        <a href="https://www.facebook.com/profile.php?id=100074365672421" target="_blank">

          <img src={fb} alt="" />
          </a>

        </div>
        <div className="linkdin" classNamesocial_img>
          <a href="https://www.linkedin.com/in/kunal-goyal-b45579249/" target="_blank">

          <img src={linkedin} alt="" className="social_img"/>
          </a>
        </div>
        <div className="insta"></div>

          <a href="https://www.instagram.com/goyal_kunal21/" target="_blank">
        <img src={insta} alt="" className="social_img"/>
        </a>
      </div>
      </div>
    
  );
};

export default Contact;
