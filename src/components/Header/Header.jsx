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
                <li><a href="">About</a></li>
                <li><a href="">Developer</a></li>
              
                <li><a href="" className='botton'>API Docs</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Header