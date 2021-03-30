import React, {useState} from 'react'; 
import {connect} from 'react-redux'; 
import {createPost} from '../../redux/reducers/posts/posts.actions'; 
import PropTypes from 'prop-types'; 
import './postform.styles.scss';

export const PostForm = ({createPost}) => {
    const [text, setText] = (useState('')); 
    const handleChange = (e) => {
        setText(
            e.target.value
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        //data: "{"text":"hello"}"
        createPost({text}); 
        setText(''); 
    }
    return (
        <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <textarea
                placeholder = 'Write a post'
                name='text'
                value={text}
                onChange={handleChange}
                > Create a post</textarea>
                <input type='submit'/>
            </form>
        </div>
    )
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm); 


