import React, {useState} from 'react'; 
import {Link, withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux'; 
import {addExperience} from '../../redux/reducers/profile/profile.actions';
import './add-experience.styles.scss'; 
import Alert from '../alert/alert.js'; 
import codingCat from '../../assets/coding-cat.png'; 

// onSubmit call addExperience profileaction with form data 
export const AddExperience = ({history, addExperience}) => {
    // set state hook, data is in formData 
    const [formData, setFormData] = useState({
        jobtitle: '', 
        company: '', 
        location: '', 
        fromdate: '',
        todate: '', 
        jobdesc: ''
    }); 
    // destucture the properties from formData 
    const {
        jobtitle, company, location, fromdate, todate,jobdesc
    } = formData; 
    // onChange send values to state 
    // getform data from user 
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
                    name='jobtitle' 
                    value = {jobtitle}
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
                    <input type='text' placeholder='mm/dd/yyyy'
                    onChange={handleChange}
                    value={fromdate}
                    name='fromdate' 
                    ></input>
                    </label>
                    <label> To Date
                    <br/>
                    <input type='text' placeholder='mm/dd/yyyy'
                    name='todate' 
                    onChange={handleChange}
                    value={todate}
                    ></input>
                    </label>
                    <textarea type='text' placeholder='Job Description'
                    name='jobdesc'
                    onChange={handleChange}
                    value={jobdesc}
                    >
                    </textarea>
                    <Alert/>
                    <input type='submit' value='Submit' className='experience-input'/>
                </form>
            </div>
        </div>
    )
}

// AddExperience.propTypes = {
//     addExperience: PropTypes.func.isRequired
// }

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         addExperience: addExperience
//     })
// }

export default connect(null, {addExperience})(withRouter(AddExperience)); 


