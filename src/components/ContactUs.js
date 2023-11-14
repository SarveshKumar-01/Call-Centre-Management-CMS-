import React from 'react'
import './ContactUs.css'


function ContactUs() {
  return (
    <div className='tst1'>
      <section class="contact">
        <div class="content">
            <h2>Contact Us</h2>
            <p>If you have general questions about the Call Centre Management System (CMS) or would like more information, our dedicated team is here to help. Please feel free to reach out to us via email or phone:</p>
        </div>
        
        <div class="container001">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>Call Centre Management System <br/>123 Tech Drive <br/>Cityville, New Delhi 12345 <br/>India </p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>info.cmsofficial@gmail.com <br/>support@cms.com </p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required"/> <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required"/> <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea required=" required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name="" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    </section>

    </div>
  )
}

export default ContactUs