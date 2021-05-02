import React, {useEffect} from 'react'; 
import { getAllProfiles } from '../../redux/reducers/profile/profile.actions';
import Developer from '../developer/developer.component';
import {connect} from 'react-redux';
import Alert from '../alert/alert.component'; 
import PropTypes from 'prop-types'; 
import Spinner from '../spinner/spinner.component'; 
import './developers.styles.scss'; 

const Developers = ({getAllProfiles, profile: {profiles, loading}}) => {
    // if array if empty it will only run once 
    useEffect(() => {
        getAllProfiles(); 
    }, [getAllProfiles]); 
    return (
        <div>
        {loading ? <Spinner/> :
        <div className='developer-container'>
            <div className='developer-header'>
            <h1>Developers</h1>
            <Alert className='alert'/>
            <h2>Browse and connect with developers</h2>
            </div>
            <div className='developers'>
            {
                profiles.length > 0 ? (profiles.map(profile => <Developer profile={profile} user={profile.user} key={profile._id} className='developer'/>)) : <h4>No profiles found ...</h4>
            }          
            </div>
        </div>
        }
    </div>
        
    )
};

Developer.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    profile: state.profile
}); 

export default connect(mapStateToProps, {getAllProfiles})(Developers); 
