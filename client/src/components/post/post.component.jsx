import React, {useState} from 'react'; 
import {Link} from 'react-router-dom';
import './post.styles.scss';
import Moment from 'react-moment'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { post } from 'request';
import {likePost, unlikePost, deletePostById} from '../../redux/reducers/posts/posts.actions'; 
import Spinner from '../spinner/spinner.component';
import Alert from '../alert/alert.component'; 

const Post = ({post,auth, post : {_id, avatar, name, text, date, comments, likes}, auth :{user}, likePost, unlikePost,deletePostById}) => {
     
    const handleLikeClick = () => {
        likePost(_id); 
    }
    const handleUnlikeClick = () => {
        unlikePost(_id); 
    }
    const handleDelete = () => {
        deletePostById(post._id); 
    }
    return (
        auth.loading ? <Spinner/> : 
        (<div className='post'>
                <img src={avatar} alt='avatar'></img>
                <p>{name}</p>
                <p>{text}</p>
                <p>Posted on <Moment format='MM/DD/YYYY'>{date.split('T')[0]}</Moment></p>
                {
                post !== null && 
                <div>
                <button className='like-button' onClick={handleLikeClick}><span>&#128077; Likes : <span>{likes.length > 0 && <span>{likes.length}</span>}
                </span></span></button>
                <button onClick={handleUnlikeClick}><span>&#128078;</span></button>
                </div> 
                }
                <br/>
                {
                    post !== null && 
                        <Link to={`/post/${_id}`}>Discussion : <span>{comments.length} comments</span></Link>
                    }
                    <br/>
                    {user._id === post.user && 
                        <button onClick={handleDelete}>Delete</button>
                    }
        </div>)
    )
}

// show delete button if post belong to user 
const mapStateToProps = state => ({
    auth: state.auth
})

// default props changed if the prop value passed
// Post.defaultProps = {
//     showActions: true
// }


Post.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired, 
    likePost: PropTypes.func.isRequired,
    unlikePost: PropTypes.func.isRequired,
    deletePostById: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {likePost, unlikePost, deletePostById})(Post); 
