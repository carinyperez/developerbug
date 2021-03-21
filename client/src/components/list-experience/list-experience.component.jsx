import React from 'react'
import './list-experience.styles.scss';
import {deleteExperience} from '../../redux/reducers/profile/profile.actions'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 

const ListExperience = ({experience, deleteExperience}) => {
    return (
        <div className='list-experience'>
            <h1>Experience Credentials</h1>
            <div className='table-container'>
                <table className='table'>
                        <div className='table-headers'>
                            <span>Company</span>
                            <span>Title</span>
                            <span>Years</span> 
                        </div> 
                    <tr className='table-body'>
                        {experience.map(item => (
                            <p key={item._id}>
                                <td>{item.company}</td>
                                <td>{item.title}</td>
                                <td>{item.from.split('T')[0]} - {'Now'}
                                <button key={item._id} onClick={() => deleteExperience('001')}>Delete</button>
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

ListExperience.propTypes =  {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(ListExperience); 



