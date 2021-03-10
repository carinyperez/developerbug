import React from 'react';
import {Route, Redirect} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 

// private routes require a component 
// from component passed in destructure component 
const PrivateRoute = ({component: Component,auth, ...rest}) => {
    return (
        <div>
            {/*If not authenticated and not loading redirect to login otherwise render component passed in */}
           <Route {...rest} render={props => 
            !auth.isAuthenticated && !auth.loading ?
            // if logged in false and loading false
            (<Redirect to='/login'/>) : 
            // if logged in auth is true and loading false
            (<Component {...props}/>)
            }/>
        </div>
    )
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth 
})

export default connect(mapStateToProps)(PrivateRoute); 
