import React from 'react'
import {Link} from 'react-router-dom'; 
import './header.styles.scss';


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to='/' className='title'>DeveloperBug</Link>
                <Link to='/developers'>Developers</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
            <div>
                <div className='break-header'></div>
            </div>
        </div>
    )
}

export default Header; 



