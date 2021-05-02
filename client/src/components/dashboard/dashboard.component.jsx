import React, {useEffect} from 'react'; 
import {withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import { getCurrentProfile, deleteAccount} from '../../redux/reducers/profile/profile.actions';
import Spinner from '../spinner/spinner.component'; 
import {Link} from 'react-router-dom'; 
import './dashboard.styles.scss'; 
import Alert from '../alert/alert.component'; 
import ListExperience from '../list-experience/list-experience.component';
import ListEducation from '../list-education/list-education.component';


const Dashboard = ({getCurrentProfile, auth, profile, deleteAccount, history}) => {
    // when we use the empty brackets acts like component did mount, otherwise it's a loop 
    // if component did mount call function 
    useEffect(() => {
        getCurrentProfile(); 
    }, [getCurrentProfile])
    const capitalize = (str) =>  {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
    return (
         profile.loading && profile.profile == null ? <Spinner/> : 
        <div className='dashboard-container'>
            {/* If user exists display name*/}
            <h1>
                Welcome, {auth.user && capitalize(auth.user.name)}
            </h1>
            {profile.profile !== null ? (
                <div className='dashboard-divs'>
                <div className='dashboard-links'>
                    <Link to='edit-profile'> Edit Profile</Link>
                    <Link to='add-experience'> Add Experience</Link>
                    <Link to='add-education'> Add Education</Link>
                    <button className='delete' onClick={() => deleteAccount(history)}>Delete my Account</button>
                </div>
                <Alert className='alert'/>
                <div className='list-experience'>
                    <ListExperience experience = {profile.profile.experience}/>
                    <ListEducation education = {profile.profile.education}/>
                </div>
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
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth, 
    profile: state.profile , 
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(withRouter(Dashboard)); 
