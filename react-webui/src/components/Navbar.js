import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

import { Button } from './Button'
function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick =() => setClick(!click)
    const closedMobileMenu = () => setClick(false)
    const [button, setButton]=useState(true)
    const showButton=()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton)
    return ( 
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="//" className="navbar-logo">
                       WebUI <i class="fas fa-birthday-cake"></i>
                    </Link> 
                    <div className = 'menu-icon'  onClick={handleClick}>
                        <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to ='/' className='nav-links' onClick={closedMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to ='/services' className='nav-links' onClick={closedMobileMenu}>
                            Services
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to ='/products' className='nav-links' onClick={closedMobileMenu}>
                               Products
                            </Link>
                        </li>
                           <li className='nav-items'>
                            <Link to ='/signs-up' className='nav-links-mobile' onClick={closedMobileMenu}>
                               Sign-Up
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign-UP</Button>}
                   </div>
                   </nav> 
        </>
    )
}

export default Navbar
