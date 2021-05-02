import React from 'react'
import './list-experience.styles.scss';
import {deleteExperience} from '../../redux/reducers/profile/profile.actions'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 

const ListExperience = ({experience, deleteExperience}) => {
    return (
        <div className='list-experience'>
            <h2>Experience Credentials</h2>
            <div className='table-container'>
                <table class='styled-table'>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Years</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {experience.map(item => (
                    <tr key={item._id}>
                                <td>{item.company}</td>
                                <td>{item.title}</td>
                                <td>{item.from.split('T')[0]} - {'Now'}
                                </td>
                                <td>
                                <button key={item._id} onClick={() => deleteExperience(item._id)}>Delete</button>
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

ListExperience.propTypes =  {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(ListExperience); 



