import React, {useState} from 'react'
import {connect} from 'react-redux'; 
import {withRouter} from 'react-router-dom'; 
import cat from '../../assets/cat.png'; 
import twitter1 from '../../assets/twitter.png'; 
import facebook1 from '../../assets/facebook.png'; 
import linkedin1 from '../../assets/linkedin.png'; 
import instagram1 from '../../assets/instagram.png';
import youtube1 from '../../assets/youtube.png';  
import './profile.styles.scss';
import {createProfile } from '../../redux/reducers/profile/profile.actions';
import Alert from '../../components/alert/alert.component'; 
import PropTypes from 'prop-types';

const Profile = ({createProfile, history}) => {  
    const [formData, setFormData] = useState({
        company:'',
        website: '',
        location: '', 
        occupation: '', 
        skills: '', 
        githubusername: '', 
        bio: '',
        twitter: '', 
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    }); 

    // destructure fields from FormData
    const {
        company,
        website,
        location, 
        occupation, 
        skills, 
        githubusername, 
        bio,
        twitter, 
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData; 

    const [selected, setSelected] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData, 
            // occupation: 'student'
            [e.target.name]: e.target.value
        })
    }
    // onSubmit send form data to api/profile
    const handleSubmit = e => {
        e.preventDefault(); 
        createProfile(formData, history);
    }
    return (
        <div className='profile-container'>
            <h1>Create your profile</h1>
            <div className='profile'>
                <form className='profile-form'
                onSubmit={handleSubmit}
                >
                    <div className='profile-header'>
                        <img src={cat} alt='cat'></img>
                        <h2>Fill out your info</h2>
                    </div>
                    <select name="occupation" value={occupation} onChange={handleChange}>
                        <option>* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type='text' placeholder='Company'
                    name='company'
                    value={company}
                    onChange={handleChange}
                    ></input>
                    <input type='text' placeholder='Website'
                    name='website'
                    value={website}
                    onChange={handleChange}
                    ></input>
                    <input type='text' placeholder='Location'
                    name='location'
                    value={location}
                    onChange={handleChange}
                    ></input>
                    <input type='text' placeholder='github'
                    name='githubusername'
                    value={githubusername}
                    onChange={handleChange}
                    ></input>
                    <input type='text' placeholder='Skills'
                    name='skills'
                    value={skills}
                    onChange={handleChange}
                    ></input>
                    <textarea
                    name='bio'
                    placeholder='Introduce Yourself'
                    value={bio}
                    onChange={handleChange}
                    ></textarea>
                    <Alert/>
                    {/* on click set selected to true */}
                    <button onClick={ (e) => {
                        e.preventDefault()
                        setSelected(!selected);
                    }}
                    >Add Social Media Links</button>
                    <p>Optional</p>
                    {selected && <div className='social-media'>
                        <img src={twitter1} alt='twitter'></img>
                        <input type='text' placeholder='Twitter URL'
                        name='twitter'
                        value={twitter}
                        onChange={handleChange}
                        ></input>
                        <br/>
                        <img src={facebook1} alt='facebook'></img>
                        <input type='text' placeholder='Facebook URL'
                        name='facebook'
                        value={facebook}
                        onChange={handleChange}
                        ></input>
                        <br/>
                        <img src={linkedin1} alt='linkedin'></img>
                        <input type='text' placeholder='Linkedin URL'
                        name='linkedin'
                        value={linkedin}
                        onChange={handleChange}
                        ></input>
                        <br/>
                        <img src={instagram1} alt='instagram'></img>
                        <input type='text' placeholder='Instagram URL'
                        name='instagram'
                        value={instagram}
                        onChange={handleChange}
                        ></input>
                        <br/>
                        <img src={youtube1} alt='youtube'></img>
                        <input type='text' placeholder='Youtube URL'
                        name='youtube'
                        value={youtube}
                        onChange={handleChange}
                        ></input>
                    </div>
                    }
                    <input type='submit' value='Submit' className='submit-input'/>
                </form>
            </div>
        </div>
    )
}
Profile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}

export default connect(null, {createProfile})(withRouter(Profile)); 
