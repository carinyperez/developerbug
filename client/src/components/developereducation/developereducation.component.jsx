import React from 'react'; 
import Moment from 'react-moment'; 
import PropTypes from 'prop-types'; 
import './developereducation.styles.scss'; 

const DeveloperEducation = ({profile, profile : {education}}) => {
    return (
        <div>
        {education && 
            <div className='education'>
                <h1>Education</h1>
                <div className='education-map'>{education.map(item =>
                    <p key={item._id}>
                        <strong>{item.school}</strong>
                        <br/>
                        <Moment format='MM/DD/YYYY'>{(item.from.split('T')[0])}</Moment> - {!item.to ? 'Now' : <Moment format='MM/DD/YYYY'>{(item.to.split('T')[0])}</Moment>}
                        <br/>
                        <strong>Degree</strong>: <span>{item.degree}</span>
                        <br/>
                        <strong>Field of study</strong>: <span>{item.fieldofstudy}</span>
                        <br/>
                        <strong>Description</strong>: <span>{item.description}</span>
                    </p>
                )}</div>
            </div>
        }
        </div>
    )
}

DeveloperEducation.propTypes = {
    profile: PropTypes.object.isRequired,
}


export default DeveloperEducation; 

