import React from 'react'; 
import moment from 'moment'; 
import PropTypes from 'prop-types'; 
import './developerexperience.styles.scss'; 

const DeveloperExperience = ({profile, profile : {experience}}) => {
    return (
        <div>
        {experience && 
            <div className='experience'>
                <h1>Experience</h1>
                <div className='experience-map'>{experience.map(item =>
                    <p key={item._id}>
                        <strong>{item.company}</strong>
                        <br/>
                        {moment(item.from.split('T')[0]).format('MM/DD/YYYY')} - {!item.to ? 'Now' : <span>{moment(item.to.split('T')[0]).format('MM/DD/YYYY')}</span>}
                        <br/>
                        <strong>Position</strong>: <span>{profile.occupation}</span>
                        <br/>
                        <strong>Description</strong>: <span>{item.description}</span>
                    </p>
                )}
                </div>
            </div>

        }
        </div>
    )
}

DeveloperExperience.propTypes = {
    profile: PropTypes.object.isRequired
}


export default DeveloperExperience; 
