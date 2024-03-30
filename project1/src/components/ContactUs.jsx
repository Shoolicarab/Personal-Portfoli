import React from 'react'
import image from '../image/256606.jpg'


function ContactUs() {
  return (
    <div>
      <div class="contact-form"  id='Contact' >
       <h1>Contact Us</h1>
       <div class="container">
       <div class="main">
       <div class="content">
       <h2>Contact Us</h2>
       <form action="#" method="post">
       <input type="text" name="name" placeholder="Enter Your Name"></input>
       <input type="email" name="name" placeholder="Enter Your Email"></input>
       <textarea name="message" placeholder="Your Message"></textarea>                   
       <button type="submit" class="btn">Send <i class="fas fa-paper-plane"></i></button>
       </form>
       </div>
       <div class="form-img">
                  <img src={image} alt="256606.jpg" />
                </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default ContactUs