import React from 'react'; 
import PropTypes from 'prop-types'; 
import './developerabout.styles.scss'; 

const DeveloperAbout = ({profile}) => {
    // console.log(profile && <p>hello</p>); 
    return (
        <div className='developer-about'>
            {profile.bio && 
                <div>
                    <p>{profile.user.name}'s bio</p>
                    <p>{profile.bio}</p>
                </div>
            }
            {profile.skills && 
                <p>{profile.skills.map((skill, index) => <span key={index}> &#9989; {skill.toUpperCase()}</span>)}</p>
            }
        </div>
    )
}
DeveloperAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default DeveloperAbout; 
