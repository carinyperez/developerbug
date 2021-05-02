import React, {useEffect, useState} from 'react'; 
import {connect} from 'react-redux'; 
import {getPostById, addComment} from '../../redux/reducers/posts/posts.actions'; 
import Alert from '../alert/alert.component'; 
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner.component';
import Moment from 'react-moment'; 
import './postdiscussion.styles.scss';
import PostComment from '../postcomment/postcomment.component';
// get comments based on match.params 
// get post by id 

const PostDiscussion = ({match, getPostById,addComment, posts, posts: {post, loading}}) => {

    const [text, setText] = useState(''); 
    useEffect(() => {
        getPostById(match.params.id); 
    }, [getPostById, match.params.id])


    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(match.params.id,{text});  
    }
    return (
            loading || post === null ? <Spinner/> : 
            <div className='post-discussion'>
                <Alert/>
                {
                    post &&  
                    <div>
                    <img src={post.avatar} alt='avatar'></img>
                    <p>{post.name}</p>
                    <p>{post.text}</p>
                    <p>Posted on <Moment format='MM/DD/YYYY'>{post.date.split('T')[0]}</Moment></p>
                    <h2>Leave a comment</h2>
                    <form onSubmit={handleSubmit}>
                    <textarea
                    value={text}
                    placeholder='Leave a comment'
                    onChange={handleChange}
                    ></textarea>
                    <br/>
                    <input type='submit'></input>
                    </form>
                    {post.comments.length > 0 && 
                        <div>
                           {post.comments.map(comment => 
                            <PostComment key={comment._id} comment={comment} post={post}/>
                            )} 
                        </div>
                    }
                    </div>  
                }    
            </div>
    )
}


const mapStateToProps = state => ({
    posts: state.posts
})

PostDiscussion.propTypes = {
    match: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    getPostById: PropTypes.func.isRequired,
    addComment:PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getPostById, addComment})(PostDiscussion); 

