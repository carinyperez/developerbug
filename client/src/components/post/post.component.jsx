import React from 'react'; 
import {Link} from 'react-router-dom'; 
import Moment from 'react-moment'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { post } from 'request';
import {likePost} from '../../redux/reducers/posts/posts.actions'; 
import Spinner from '../spinner/spinner.component';


const Post = ({post, post : {_id, avatar, name, text, date, comments}, auth :{user}, likePost, auth}) => {

    const handleClick = (e) => {
        e.preventDefault(); 
        likePost(_id); 
    }
    
    return (
        auth.loading ? <Spinner/> : 
        (<div>
           <img src={avatar} alt='avatar'></img>
           <p>{name}</p>
           <p>{text}</p>
           <p>Posted on <Moment format='MM/DD/YYYY'>{date.split('T')[0]}</Moment></p>
           {
                post !== null &&
                <div>
                <button className='like-button' onClick={handleClick}><span>&#128077; Likes : <span>{post.likes.length}</span></span></button>
                <button><span>&#128078;</span></button>
                </div> 
           }

            <br/>
            {
                post !== null && 
                <Link to={`/post/${_id}`}>Discussion : <span>{comments.length} comments</span></Link>
            }
            
            <br/>
           {

               post !== null && user._id === post.user && <button>Delete</button>
           }
        </div>)
    )
}

// show delete button if post belong to user 
const mapStateToProps = state => ({
    auth: state.auth
})

Post.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired, 
    likePost: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {likePost})(Post); 
