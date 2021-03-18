import React from 'react'; 
import spinner from '../../assets/spinner.gif'; 
import './spinner.styles.scss'; 

const Spinner = () => {
    return (
        <div className='img-container'>
           <img src={spinner} alt='spinner'
           ></img> 
        </div>
    )
}

export default Spinner; 
