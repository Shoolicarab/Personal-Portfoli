import React from 'react'
import '../global.css'
import Image from '../image/logo.png'
function Header() {
  return (
    <div className='header'> 
    <div className="div">
      <div>
        {/* <img src={Image} alt="logo" /> */}
        <h2>Shooli</h2>
      </div>
    </div>
    
     <nav>
    <a href="#Home">Home</a>
    <a href="#About">Bio</a>
    <a href="#skills">skills</a>
    <a href="#About">projects</a>
    <a href="">contacts</a>
          </nav>
         
          </div>
          
  )
}

export default Header