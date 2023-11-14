import React from 'react'
import './About.css'
import { Link, useNavigate } from 'react-router-dom'
import aboutpic from '../img/imggg.png'

function About() {
  const navigate = useNavigate()
  return (
    <div>
      <section class="about">
        <div class="main">
          <img className="aboutImg" src={aboutpic} alt="" />
          <div class="about-text">
            <h1> About Us</h1>

            <p>Welcome to the future of efficient and streamlined call center operations with the Call Centre Management System (CMS). Our innovative solution is designed to revolutionize the way call centers operate, empowering organizations to deliver exceptional customer service while optimizing internal processes.</p>

            <Link to="/signup">
              <button className='btn001' type="button"> Let's Begin </button>
            </Link>

          </div>          
        </div>
      </section>
    </div>

  )
}

export default About
