import React from 'react'; 
import './developer.styles.scss'; 

const Developer = ({profile}) => { 
    return (
        <div>
        {profile._id.occupation}
        I am a developer 
        </div>
    )
}

export default Developer; 