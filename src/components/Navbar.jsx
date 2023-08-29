import React from 'react'
import './navbar.css'
const Navbar = () => {
    function apple(){
        alert("Do you want to login")
    }
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className="logo">Redbus</span>
            <div className="navItems">
                <button className="navButton" onClick={apple} >SignUp</button>
                <button className="navButton" onClick={apple}>LogIn</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar