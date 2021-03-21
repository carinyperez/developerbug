import React from 'react'
import './list-education.styles.scss'; 
import PropTypes from 'prop-types';
import { deleteEducation } from '../../redux/reducers/profile/profile.actions';
import {connect} from 'react-redux'; 

const ListEducation= ({education, deleteEducation}) => {
    return (
        <div className='list-education'>
            <h1>Education Credentials</h1>
            <div className='table-container'>
                <table className='table'>
                        <div className='table-headers'>
                            <span>School</span>
                            <span>Degree</span>
                            <span>Years</span> 
                        </div> 
                    <tr className='table-body'>
                        {education.map(item => (
                            <p key={item._id}>
                                <td>{item.school}</td>
                                <td>{item.degree}</td>
                                <td>{item.from.split('T')[0]} - {'Now'}
                                <button onClick={() => deleteEducation(item._id)}>Delete</button>
                                </td>
                            </p>
                            )
                        )}
                    </tr>        
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



