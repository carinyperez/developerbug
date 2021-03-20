import React, {useState} from 'react'; 
import {Link, withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import {addEducation} from '../../redux/reducers/profile/profile.actions';
import './add-education.styles.scss'; 
import graduateCat from '../../assets/graduate-cat.png'; 


const AddEducation = ({history, addEducation}) => {
    const [formData, setFormData] = useState({
        school: '', 
        degree: '', 
        fieldofstudy: '', 
        from: '',
        to: '', 
        current: false,
        description: ''
    }); 
    // lesson 50 @ 12:42
    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        school, degree, fieldofstudy, from, to, current,description
    } = formData; 

    // fill in the form with current data 

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        })        
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // console.log(formData);
        // console.log(addExperience(formData, history)); 
        addEducation(formData, history); 
    }
    return (
        <div className='education-container'>
        <h1>Add your education</h1>
            <div className='education'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='education-header'>
                            <img src={graduateCat} alt='graduate-cat'></img>
                            <h2>Add any schools or bootcamps you've attended</h2>
                    </div>
                    <input type='text' placeholder='School or Bootcamp'
                    onChange={handleChange}
                    name='school' 
                    value = {school}
                    required
                    ></input>
                    <input type='text' placeholder='Degree or certificate'
                    onChange={handleChange}
                    value={degree}
                    name='degree' 
                    required
                    ></input>
                    <input type='text' placeholder='Field of Study'
                    onChange={handleChange}
                    value={fieldofstudy}
                    name='fieldofstudy'
                    required 
                    ></input>
                    <label> From Date
                    <br/>
                    <input type='date'
                    onChange={handleChange}
                    value={from}
                    name='from' 
                    required
                    ></input>
                    </label>
                    <label className='checkbox'>
                    <input
                    type='checkbox'
                    name='current'
                    checked={current}
                    onChange={e => {
                        setFormData({
                            ...formData, current: !current
                        })
                        // set to true when clicked 
                        toggleDisabled(!toDateDisabled)
                    }}
                    >
                    </input>{' '}
                    Current program
                    </label>
                    <label> To Date
                    <br/>
                    <input type='date'
                    name='to' 
                    onChange={handleChange}
                    value={to}
                    // if checkbox is checked set field to disabled
                    disabled={toDateDisabled ? 'disabled' : ''}
                    ></input>
                    </label>
                    <textarea type='text' placeholder='Program Description'
                    name='description'
                    onChange={handleChange}
                    value={description}
                    >
                    </textarea>
                    <input type='submit' value='Submit' className='education-input'/>
                </form>
            </div>
        </div>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

// bring in the profile state

const mapStateToProps = state => ({
    profile: state. profile
})

export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation)); 