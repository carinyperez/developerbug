import React, {useEffect} from 'react'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import { getCurrentProfile } from '../../redux/reducers/profile/profile.actions';
import Spinner from '../spinner/spinner.component'; 
import {Link} from 'react-router-dom'; 
import './dashboard.styles.scss'; 
import Alert from '../alert/alert'; 

const Dashboard = ({getCurrentProfile, auth, profile}) => {
    // when we use the empty brackets acts like component did mount, otherwise it's a loop 
    // if component did mount call function 
    useEffect(() => {
        getCurrentProfile(); 
    }, [getCurrentProfile])
    return (
         profile.loading && profile.profile == null ? <Spinner/> : 
        <div className='dashboard-container'>
            {/* If user exists display name*/}
            <p>
                Welcome {auth.user && auth.user.name}
            </p>
            <Alert className='alert'/>
            {profile.profile !== null ? (
                <div className='dashboard-links'>
                    <Link to='edit-profile'> Edit Profile</Link>
                    <Link to='add-experience'> Add Experience</Link>
                    <Link to='add-education'> Add Education</Link>
                </div>
            ) : (
                <div>
                    <p> You have not yet created a profile, please add some info</p>
                    <Link to='/create-profile'>Create Profile</Link>
                </div>
            )
            }
        </div>
    )
}
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired, 
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth, 
    profile: state.profile 
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard); 
