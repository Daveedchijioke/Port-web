import { useState } from 'react';
import './Navbar.scss'
import { FaMoon, FaSun} from "react-icons/fa";



function Navbar({theme, toggleTheme}){
    const [isOpen, setIsOpen] = useState(false);
    const links = ["Home", "About", "Skills", "Projects", "Contact"];





    return(
        <nav className='navbar'>
            <div className='navbar__logo'>DC.</div>

            {/*Desktop links and mobile links */}
            <ul className= {`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
                {links.map((items, index)=>{
                    return <li key={index} className='navbar__item'><a href="" className='navbar__link'>{items}</a></li>
                })}
            </ul>
               
            {/* Right side controls */}
            <div className='navbar__controls'>

              <button className='navbar__theme-toggle' onClick={toggleTheme}> 
                {theme === "dark" ? <FaSun /> : <FaMoon />}   
              </button>

              <button className={`navbar__hamburger ${isOpen ? "open" : ""}`} onClick={()=> setIsOpen(!isOpen)}>

                <span></span>
                <span></span>
                <span></span>

              </button>

            </div>

            


        </nav>
    )
}
export default Navbar


