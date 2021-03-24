import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 
import './developer.styles.scss'; 

const Developer = ({profile, user}) => { 
    return (
        <div className='developer'>
        <img src={user.avatar} alt='avatar'></img>
        <p>{user.name}</p>
        <p>{profile.occupation}</p>
        <p>{profile.location}</p>
        {
            profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))
        }
        <br/>
        <Link to={`/profile/${user._id}`} className='profile'> View Profile</Link>
        </div>
    )
}
Developer.propTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}
export default Developer; 