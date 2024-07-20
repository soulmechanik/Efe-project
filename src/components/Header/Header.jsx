import React from 'react'
import './Header.scss'


const Header = () => {
  return (
    <div className='Header-wrapper'>
    <div className="Header-container">
        <div className="Header">
            <nav>
            <div className="logo"><span className='logo'>Ehiaghe Efe</span> </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="https://ng.linkedin.com/in/efe-ehiaghe-330292318">About</a></li>
                <li><a href="https://ng.linkedin.com/in/efe-ehiaghe-330292318">Developer</a></li>
              
                <li><a href="" className='botton'>API Docs</a></li>
                <li><a href="https://ng.linkedin.com/in/efe-ehiaghe-330292318">Contact Me</a></li>
            </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Header