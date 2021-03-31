import React from 'react'; 
import Moment from 'react-moment';
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import { deleteComment } from '../../redux/reducers/posts/posts.actions';
import Alert from '../alert/alert.component';
import './postcomment.styles.scss';

// delete comment if it matches auth user 
const PostComment = ({comment, auth, deleteComment, post}) => {
    const handleClick = (e) => {
        e.preventDefault(); 
        deleteComment(post._id, comment._id); 
    }
    return (
        <div>
        <Alert/>
        <img src={comment.avatar} alt='avatar'></img>
        <p>{comment.text}</p>
        <p>{`Posted on `}
        <Moment format='MM/DD/YYYY'>
        {comment.date.split('T')[0]}</Moment>
        </p>
        {!auth.loading && comment.user === auth.user._id && <button onClick={handleClick}>delete</button>}
        </div>
    )
}

PostComment.propTypes = {
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deleteComment})(PostComment); 
