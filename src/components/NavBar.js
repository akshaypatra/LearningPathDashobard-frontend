import React from 'react'
import { Link } from 'react-router-dom'
import { SiSimpleanalytics } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { FaUser } from "react-icons/fa6";

export default function NavBar() {
  return (
    <div className='navbar'>
        <h1 className='navbar-header'>Learning Path</h1>
        <div className='navbar-links'>
            <Link to='/' className='navbar-link-dashboard'> <GoHome size={24}  className='react-icons' />Dashboard</Link> 
            <Link to='/analytics' className='navbar-link-dashboard'> <SiSimpleanalytics size={18}  className='react-icons' /> Analytics</Link>
            <Link to='/profile' className='navbar-link-dashboard'> <FaUser size={18}  className='react-icons' /> Profile</Link>
            
        </div>
    </div>
  )
}
