import React, {useState} from 'react'
import './login.styles.scss';
import profile from '../../assets/user.png'
import {Link} from 'react-router-dom'; 

const Login = () => {
    // use state hook 
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    }); 

    const {email, password} = formData; 

    const handleChange = (event) => {
        // console.log(event.target.name); 
        // console.log(event.target.value); 
        setFormData({...formData, [event.target.name]: event.target.value}); 
    }

    // registers the user in mongoDB using state 
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log('Success');
    }

    return (
        <div className='login-container'>
            <h1>Log In</h1>
            <div className='login-header'>
                    <img src={profile} alt='profile'></img>
                    <h2>Sign into your account</h2>
            </div>
            <div className='login'>
                <form className='form' onSubmit={event => handleSubmit(event)}>
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

export default Login; 

