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
            <h1 className='title'>Developer Bug</h1>
            <div className='break1'></div>
            <img className='python' src={python}></img>
            <img className='js' src={js}></img>
            <img className='c' src={c}></img>
            <img className='java' src={java}></img>
            <div className='break'></div>
            <img className='sloth' src={owl}></img>
        </div>
    )
}
export default Homepage; 
