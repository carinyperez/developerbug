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
            profile.skills.slice(0,3).map((skill, index) => (
                <ul>
                    <li key={index}>{skill}</li>
                </ul>   
            ))
        }
        <br/>
        <Link to={`developer/${user._id}`} className='profile'>View Profile</Link>
        </div>
    )
}
Developer.propTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}
export default Developer; 