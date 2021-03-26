import React, {useEffect} from 'react';
import {connect}  from 'react-redux';
import { getProfileById } from '../../redux/reducers/profile/profile.actions';
import PropTypes from 'prop-types'; 
import Alert from '../alert/alert.component';
import Spinner from '../spinner/spinner.component';
import {Link} from 'react-router-dom'; 
import twitter1 from '../../assets/twitter.png';
import facebook1 from '../../assets/facebook.png';
import instagram1 from '../../assets/instagram.png';
import youtube1 from '../../assets/youtube.png'; 
import linkedin1 from '../../assets/linkedin.png'; 
import DeveloperAbout from '../developerabout/developerabout.component';
import DeveloperExperience from '../developerexperience/developerexperience.component';
import DeveloperEducation from '../developereducation/developereducation.component';
import './developerprofile.styles.scss';


const DeveloperProfile = ({getProfileById, match: {params}, profile : {profile, loading}, auth}) => {
    useEffect(() => {
        // get id from the url 
       getProfileById(params.id); 
    }, [getProfileById, params.id])
    // make sure profile is loaded 
    return (
        loading ||  profile === null ? <Spinner/> : 
        <div className='developer-profile'>
            <Alert/>
            <div className='developer-header'>
                <img src={profile.user.avatar} alt='avatar' className='avatar'></img>
                <p>{profile.user.name}</p>
                <p>{profile.occupation}{profile.company &&<span> at {profile.company}</span>}</p>
                <p>{profile.location && <p>{profile.location}</p>}</p>
            </div>
            {profile.social && 
                <div className='social'>
                {profile.social.twitter &&
                <a href={profile.social.twitter} target='_blank' rel='noopener noreferrer'>
                <img src={twitter1} alt='twitter'></img>
                </a> 
                }
                {
                    profile.social.facebook &&
                    <a href={profile.social.facebook} target='_blank' rel='noopener noreferrer'>
                    <img src={facebook1} alt='facebook'></img>
                </a>
                }
                {
                    profile.social.linkedin && 
                    <a href={profile.social.linkedin} target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin1} alt='linkedin'></img>
                    </a>
                }
                {
                    profile.social.youtube && 
                    <a href={profile.social.youtube} target='_blank' rel='noopener noreferrer'>
                    <img src={youtube1} alt='youtube'></img>
                    </a>

                }
                {
                    profile.social.youtube && 
                    <a href={profile.social.youtube} target='_blank' rel='noopener noreferrer'>
                    <img src={instagram1} alt='instagram'></img>
                    </a>
                }
                </div>
            }
            <DeveloperAbout profile={profile}/>
            <div className='exp-edu'>
                {profile.experience && profile.experience.length > 0 && <DeveloperExperience profile={profile}/> }
                {profile.education && profile.education.length > 
                0 && <DeveloperEducation profile={profile}/>}
            </div>
            {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile'>Edit Profile</Link>)}
        </div>
        
    )
}

DeveloperProfile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired, 
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile, 
    auth: state.auth
})

export default connect(mapStateToProps, {getProfileById})(DeveloperProfile); 
