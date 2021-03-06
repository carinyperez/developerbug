import React, {useState} from 'react'
import './signup.styles.scss';
import {Link} from 'react-router-dom'; 
import {connect} from 'react-redux'; 
import { setAlert } from '../../redux/reducers/alert/alert.actions';
import PropTypes from 'prop-types'; 
import avatar from '../../assets/avatar.png'
import Alert from '../alert/alert';
import { signup } from '../../redux/reducers/auth/auth.actions';

const SignUp = ({setAlert, signup}) => {
    // use state hook 
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        password: '',
        password2: ''
    }); 

    const {name, email, password, password2} = formData; 

    const handleChange = (event) => {
        // console.log(event.target.name); 
        // console.log(event.target.value); 
        setFormData({...formData, [event.target.name]: event.target.value}); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        if(password !== password2) {
           setAlert('Passwords do not match', 'danger'); 
        } else { 
            //{name: "", email: "", password: ""}
            signup({name, email, password});
        }
    }
    return (
        <div className='signup-container'>
            <h1>Create your account</h1>
            <div className='signup'>
                <form className='form' onSubmit={event => handleSubmit(event)}>
                    <div className='signup-header'>
                            <img src={avatar} alt='avatar'></img>
                            <h2>Start Coding</h2>
                    </div>
                    <input type='text' placeholder='Pick a username'
                    name='name' 
                    value={name}
                    onChange={event => handleChange(event)}
                    // required
                    ></input>
                    <input type='text' placeholder='Your email'
                    name='email' 
                    value={email}
                    onChange={event => handleChange(event)}
                    // required
                    ></input>
                    <input type='text' placeholder='Create a password'
                    name='password' 
                    value={password}
                    onChange={event => handleChange(event)}
                    // minLength='6'
                    ></input>
                    <input type='text' placeholder='Confirm your password'
                    name='password2' 
                    value={password2}
                    onChange={event => handleChange(event)}
                    // minLength='6'
                    ></input>
                    <Alert/>
                    <input type='submit' value='Sign Up' className='sign-up-input'/>
                </form>
            </div>
            <div className='footer'>
                <p> Already have an account? <Link to='login' className='login'>Log In</Link></p>
            </div>
        </div>
    )
}


// data validation
SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired
}

// export default connect(null, {setAlert})(SignUp);
export default connect(null, {setAlert, signup})(SignUp); 
