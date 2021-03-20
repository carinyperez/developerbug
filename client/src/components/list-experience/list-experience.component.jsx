import React from 'react'
import './list-experience.styles.scss'; 
import {connect} from 'react-redux'; 

const ListExperience = ({profile : {profile : {experience}}}) => {
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
                    <tr>
                        {experience.map(item => (
                            <p key={item._id}>
                                <td>{item.company}</td>
                                <td>{item.title}</td>
                                <td>{item.from.split('T')[0]} - {'Now'}
                                <button>Delete</button>
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

const mapStateToProps = state =>  ({
    profile: state.profile
})

export default connect(mapStateToProps)(ListExperience); 



