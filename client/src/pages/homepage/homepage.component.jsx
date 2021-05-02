import React from 'react';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import {Redirect} from 'react-router-dom'; 
import owl from '../../assets/owl.png'
import './homepage.scss'; 
import java from '../../assets/java.png'
import './homepage.scss'; 
import js from '../../assets/js.png'
import './homepage.scss'; 
import python from '../../assets/python.png'
import './homepage.scss'; 
import c from '../../assets/c.png'
import './homepage.scss'; 

const Homepage = ({isAuthenticated}) => {
    if(isAuthenticated) {
        return <Redirect to='/dashboard'/>
    }
    return (
        <div className='homepage'>
            <div className='images'>
                <img className='python' src={python} alt='python logo'></img>
                <img className='js' src={js} alt='js logo'></img>
                <img className='c' src={c} alt='c logo'></img>
                <img className='java' src={java} alt='java logo'></img>
                <h2>Practice speaking new programming languages <br/> by connecting to other developers near you</h2>
                {/* <div className='break'></div> */}
            </div>
            <div className='footer'>
                <img className='owl' src={owl} alt='owl logo'></img>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

Homepage.propTypes = { 
    isAuthenticated: PropTypes.bool
}


export default connect(mapStateToProps)(Homepage); 
