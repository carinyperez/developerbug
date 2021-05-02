import React from 'react'
import PropTypes from 'prop-types';
import './list-education.styles.scss'; 
import { deleteEducation } from '../../redux/reducers/profile/profile.actions';
import {connect} from 'react-redux'; 

const ListEducation= ({education, deleteEducation}) => {
    return (
        <div className='list-education'>
            <h2>Education Credentials</h2>
            <div className='table-container'>
                <table class='styled-table'>
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Years</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {education.map(item => (
                    <tr key={item._id}>
                                <td>{item.school}</td>
                                <td>{item.degree}</td>
                                <td>{item.from.split('T')[0]} - {'Now'}
                                </td>
                                <td>
                                <button key={item._id} onClick={() => deleteEducation(item._id)}>Delete</button>
                                </td>
                    </tr>
                    )
                    )} 
                    </tbody>
                </table> 
            </div>   
        </div>
    ) 
}  

ListEducation.propTypes = {
    education: PropTypes.array.isRequired, 
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(ListEducation); 



