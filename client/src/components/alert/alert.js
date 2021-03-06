import React from 'react'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import './alert.styles.scss'; 

const Alert = ({alerts}) => 
alerts !== null && alerts.length > 0 && alerts.map(alert => (
    // each child must have a unique key 
    <div key={alert.id} className='alert'>
        {alert.msg}
    </div>
))



// data validation 
Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}


// map redux state to props by using connect 
const mapStateToProps = (state) => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert); 

