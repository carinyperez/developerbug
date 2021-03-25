import React, {useState} from 'react'; 
import {withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import {addExperience} from '../../redux/reducers/profile/profile.actions';
import './add-experience.styles.scss'; 
import codingCat from '../../assets/coding-cat.png'; 

const AddExperience = ({history, addExperience}) => {
    const [formData, setFormData] = useState({
        title: '', 
        company: '', 
        location: '', 
        from: '',
        to: '', 
        current: false,
        description: ''
    }); 
    // lesson 50 @ 12:42
    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        title, company, location, from, to, current,description
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
        addExperience(formData, history); 
    }
    return (
        <div className='experience-container'>
        <h1>Add an Experience</h1>
            <div className='experience'>
                <form className='form'onSubmit={handleSubmit}>
                    <div className='experience-header'>
                            <img src={codingCat} alt='coding-cat'></img>
                            <h2>Add your past coding experience</h2>
                    </div>
                    <input type='text' placeholder='Job Title'
                    onChange={handleChange}
                    name='title' 
                    value = {title}
                    required
                    ></input>
                    <input type='text' placeholder='Company'
                    onChange={handleChange}
                    value={company}
                    name='company' 
                    required
                    ></input>
                    <input type='text' placeholder='Location'
                    onChange={handleChange}
                    value={location}
                    name='location' 
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
                    Current job
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
                    <textarea type='text' placeholder='Job Description'
                    name='description'
                    onChange={handleChange}
                    value={description}
                    >
                    </textarea>
                    <input type='submit' value='Submit' className='experience-input'/>
                </form>
            </div>
        </div>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

// bring in the profile state

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {addExperience})(withRouter(AddExperience)); 


