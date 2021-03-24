import React, {useEffect} from 'react'; 
import {withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import { getCurrentProfile, deleteAccount, getAllProfiles, getProfileById, getGithubRepos} from '../../redux/reducers/profile/profile.actions';
import Spinner from '../spinner/spinner.component'; 
import {Link} from 'react-router-dom'; 
import './dashboard.styles.scss'; 
import Alert from '../alert/alert.component'; 
import ListExperience from '../list-experience/list-experience.component';
import ListEducation from '../list-education/list-education.component';


const Dashboard = ({getCurrentProfile, auth, profile, deleteAccount, history, getAllProfiles, getProfileById, getGithubRepos}) => {
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
            {profile.profile !== null ? (
                <div>
                <div className='dashboard-links'>
                    <Link to='edit-profile'> Edit Profile</Link>
                    <Link to='add-experience'> Add Experience</Link>
                    <Link to='add-education'> Add Education</Link>
                </div>
                <Alert className='alert'/>
                <div className='list-experience'>
                    <ListExperience experience = {profile.profile.experience}/>
                    <ListEducation education = {profile.profile.education}/>
                </div>
                <button className='delete' onClick={() => deleteAccount(history)}>Delete my Account</button>
                <button onClick={() => getAllProfiles()}>Get all profiles</button>
                <button onClick={() => getProfileById(profile.profile.user)}>Get profile by id</button>
                <button onClick={() => getGithubRepos('carinyperez')}>Get github repos</button> 
                </div> 
            ) : (
                <div>
                    <Alert className='alert'/>
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
    profile: PropTypes.object.isRequired, 
    deleteAccount: PropTypes.func.isRequired, 
    getAllProfiles: PropTypes.func.isRequired, 
    getProfileById: PropTypes.func.isRequired, 
    getGithubRepos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth, 
    profile: state.profile , 
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount, getAllProfiles, getProfileById, getGithubRepos})(withRouter(Dashboard)); 
