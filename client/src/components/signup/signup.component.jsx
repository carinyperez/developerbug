import React, {useState} from 'react'
import './signup.styles.scss';
import profile from '../../assets/user.png'
import {Link} from 'react-router-dom'; 
import {connect} from 'react-redux'; 
import { setAlert } from '../../redux/reducers/alert/alert.actions';



const SignUp = (props) => {
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
            props.setAlert('Passwords do not match', 'danger'); 
        } else { 
            console.log('Success');
        }
    }
    return (
        <div className='signup-container'>
            <h1>Sign Up</h1>
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



const mapDispatchToProps = dispatch => ({
    // action creator object will be merged into the component's props
    // dispatch is used with user actions  
    setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType))
}); 


// export default connect(null, {setAlert})(SignUp);
export default connect(null, mapDispatchToProps)(SignUp); 