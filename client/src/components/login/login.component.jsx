import React, {useState} from 'react'
import './login.styles.scss';
import {Link, Redirect} from 'react-router-dom'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { login } from '../../redux/reducers/auth/auth.actions';
import Alert from '../alert/alert.component'; 

const Login = ({login, isAuthenticated}) => {
    // use state hook 
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    }); 
    const {email, password} = formData; 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value}); 
    }
    // registers the user in mongoDB using state 
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        login(email, password); 
    }
    //Redirect if logged in 
    if(isAuthenticated) {
        return <Redirect to='/dashboard'/>
    }
    return (
        <div className='login-container'>
            <h1>Welcome back</h1>
            <Alert/>
            <div className='login'>

                <form className='form' onSubmit={event => handleSubmit(event)}>
                    <h2>Login</h2>
                    <input type='text' placeholder='Email'
                    name='email' 
                    value={email}
                    onChange={event => handleChange(event)}
                    required
                    ></input>
                    <input type='text' placeholder='Password'
                    name='password' 
                    value={password}
                    onChange={event => handleChange(event)}
                    minLength='6'
                    ></input>
                    <input type='submit' value='Log In' className='sign-in-input'/>
                </form>
            </div>
            <p> Don't have an account ? <Link to='signup' className='signup'>Sign Up</Link></p>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login); 

