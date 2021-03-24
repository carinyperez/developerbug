import React from 'react';
import PropTypes from 'prop-types'; 
import './developer.styles.scss'; 

const Developer = ({profile, user}) => { 
    return (
        <div>
        <img src={user.avatar} alt='avatar'></img>
        <p>{user.name}</p>
        <p>{profile.occupation}</p>
        <p>{profile.location}</p>
        {
            profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))
        }
        </div>
    )
}
Developer.propTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}
export default Developer; 