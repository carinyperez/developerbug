import React from 'react'
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

const Homepage = () => {
    return (
        <div className='homepage'>
            <h2>Practice speaking new programming languages <br/> by connecting to other developers near you</h2>
            <div className='break'></div>
            <img className='python' src={python} alt='python logo'></img>
            <img className='js' src={js} alt='js logo'></img>
            <img className='c' src={c} alt='c logo'></img>
            <img className='java' src={java} alt='java logo'></img>
            <div className='break'></div>
            <img className='sloth' src={owl} alt='owl logo'></img>
        </div>
    )
}
export default Homepage; 
