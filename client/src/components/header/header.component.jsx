import React from 'react'
import {Link} from 'react-router-dom'; 
import './header.styles.scss';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import { logout } from '../../redux/reducers/auth/auth.actions';

const Header = (props) => {
    const {isAuthenticated} = props.auth; 
    const {loading} = props.auth; 
    const {logout} = props;
    console.log(isAuthenticated);

    // auth true and loading false 
    if(!loading && isAuthenticated) {
        return (
        <div className='header-container'>
            <div className='header'>
                <Link to='/' className='title'>DeveloperBug</Link>
                <Link to='/developers'>Developers</Link>
                <a onClick={() => logout()} href='/dashboard' >Logout</a>
            </div>
            <div>
                <div className='break-header'></div>
            </div>
        </div>
        )     
    } else {
        return (
            <div className='header-container'>
            <div className='header'>
                <Link to='/' className='title'>DeveloperBug</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
            <div>
                <div className='break-header'></div>
            </div>
        </div>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}; 

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header); 





