import React, {useEffect} from 'react'; 
import { getAllProfiles } from '../../redux/reducers/profile/profile.actions';
import Developer from '../developer/developer.component';
import {connect} from 'react-redux';
import Alert from '../alert/alert.component'; 
import PropTypes from 'prop-types'; 
import './developers.styles.scss'; 

const Developers = ({getAllProfiles, profiles}) => {
    // if array if empty it will only run once 
    useEffect(() => {
        getAllProfiles(); 
    }, [getAllProfiles]); 
    return (
        <div>
            <h1>Developers</h1>
            <Alert className='alert'/>
            <h2>Browse and connect with developers</h2> 
            {profiles.map(profile => <Developer profile={profile} user={profile.user} key={profile._id}/>)}        
        </div>
    )
};

Developer.propTypes = {
    getAllProfiles: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    profiles: state.profile.profiles
}); 

export default connect(mapStateToProps, {getAllProfiles})(Developers); 
