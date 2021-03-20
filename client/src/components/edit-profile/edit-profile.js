import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'; 
import {Link, withRouter} from 'react-router-dom'; 
import cat from '../../assets/cat.png'; 
import twitter1 from '../../assets/twitter.png'; 
import facebook1 from '../../assets/facebook.png'; 
import linkedin1 from '../../assets/linkedin.png'; 
import instagram1 from '../../assets/instagram.png';
import youtube1 from '../../assets/youtube.png';  
import './edit-profile.styles.scss';
import { createProfile,getCurrentProfile} from '../../redux/reducers/profile/profile.actions';
import PropTypes from 'prop-types';


const EditProfile = ({profile : {profile, loading}, createProfile,getCurrentProfile, history}) => {  
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
    // passing empty array as second element makes in run on mount and unmount otherwise runs everytime component updates 
    useEffect(() => {
        getCurrentProfile(); 
        // fill in the form with the current formData 

        setFormData({
            // if loading or no company in profile set to null 
            company: loading || !profile.company ? '': profile.company, 
            website: loading || !profile.website ? '': profile.website, 
            location:loading ||!profile.location ? '': profile.location, 
            occupation: loading ||!profile.occupation ? '': profile.occupation,
            skills: loading ||!profile.skills ? '': profile.skills.join(','),
            githubusername: loading ||!profile.githubusername ? '': profile.githubusername,
            bio: loading ||!profile.bio ? '': profile.bio,
            twitter: loading ||!profile.social ? '': profile.social.twitter,
            facebook: loading ||!profile.social ? '': profile.social.facebook,
            linkedin: loading || !profile.social ? '': profile.social.linkedin,
            youtube: loading || !profile.social ? '': profile.social.youtube,
            instagram: loading || !profile.social ? '': profile.social.instagram,
        })
    }, [])

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
        console.log(formData); 
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
                    <input type='text' placeholder='Skills'
                    name='skills'
                    value={skills}
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
                    <textarea
                    name='bio'
                    placeholder='Introduce Yourself'
                    value={bio}
                    onChange={handleChange}
                    ></textarea>
                    {/* on click set selected to true */}
                    <button onClick={ (e) => {
                        e.preventDefault()
                        setSelected(!selected);
                    }}
                    >Add Social Media Links</button>
                    <p>Optional</p>
                    {/*
                        // inline if and && operator 
                        // true && expression evaluates to true 
                        // false && expression evaluates to false

                        let two = 1 + 1; // js expression 

                        console.log(true && two); // two 
                        console.log(false && two); // false 
                    */}
                    
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

// runtime assertion about the correct type of data
EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

// bring in the profile state 

const mapStateToProps = state => ({
    profile : state.profile
})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile)); 
