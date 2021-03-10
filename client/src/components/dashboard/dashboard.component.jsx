import React, {useEffect} from 'react'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import { getCurrentProfile } from '../../redux/reducers/profile/profile.actions';


const Dashboard = ({getCurrentProfile, auth, profile}) => {
    // when we use the empty brackets acts like component did mount, otherwise it's a loop 
    // if component did mount call function 
    useEffect(() => {
        getCurrentProfile(); 
    }, [])
    return (
        <div>
            Dashboard
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
