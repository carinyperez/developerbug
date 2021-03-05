import React, {useState} from 'react'
import './signup.styles.scss';
import profile from '../../assets/user.png'
import {Link} from 'react-router-dom'; 


const SignUp = () => {
    // use state hook 
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        password: '',
        password2: ''
    }); 

    const {name, email, password, password2} = formData; 
    console.log(formData);

    const handleChange = (event) => {
        // console.log(event.target.name); 
        // console.log(event.target.value); 
        setFormData({...formData, [event.target.name]: event.target.value}); 
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(password !== password2) {
            console.log('Passwords do not match')
        } else{ 
            console.log(formData);
        }
    }

    return (
        <div className='signup-container'>
            <h1>SignUp</h1>
            <div className='signup-header'>
                    <img src={profile} alt='profile'></img>
                    <h2>Create your account</h2>
            </div>
            <div className='signup'>
                <form className='form' onSubmit={event => handleSubmit(event)}>
                    <input type='text' placeholder='Name'
                    name='name' 
                    value={name}
                    onChange={event => handleChange(event)}
                    required
                    ></input>
                    <input type='text' placeholder='Email address'
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
                    <input type='text' placeholder='Confirm Password'
                    name='password2' 
                    value={password2}
                    onChange={event => handleChange(event)}
                    minLength='6'
                    ></input>
                    <input type='submit' value='Sign Up' className='sign-up-input'/>
                </form>
            </div>
            <p> Already have an account? <Link to='login' className='login'>Log In</Link></p>
        </div>
    )
}

export default SignUp; 