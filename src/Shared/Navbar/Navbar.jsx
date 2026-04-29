import React, { use } from 'react';
import { useState } from 'react';
import './Navbar.scss'





function Navbar({theme, toggleTheme}){
    cosnt [isOpen, setIsOpen] = useState(false);
    const links = ["Home", "About", "Skills", "Projects", "Contact"];





    return(
        <nav className='nav-bar'>
            <div className='nav__logo'>DC.</div>

            {/*Desktop links */}
            <ul>
                {links.map((items, index)=>{
                    return <li key={index}><a href="">{items}</a></li>
                })}
            </ul>

            {/* Right side controls */}
            <div className='navbar__controls'>

              <button className='navbar__theme-toggle' onClick={toggleTheme}> 
                {theme === "dark" ? "☀️" : "🌙"}   
              </button>

              <button className={`navbar__hamburger ${isOpen ? "Open" : ""}`} onClick={()=> setIsOpen(!isOpen)}>

                <span></span>
                <span></span>
                <span></span>

              </button>

            </div>

            {/*Mobile links*/}
            <ul>
                {links.map((items, index)=>{
                    return <li key={index}><a href="">{items}</a></li>
                })}
            </ul>


        </nav>
    )
}
export default Navbar


