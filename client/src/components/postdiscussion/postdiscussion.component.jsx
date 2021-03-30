import React, {useEffect} from 'react'; 
import {connect} from 'react-redux'; 
import {getPostById} from '../../redux/reducers/posts/posts.actions'; 
import Alert from '../alert/alert.component'; 
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner.component';
import Moment from 'react-moment'; 

// get comments based on match.params 
// get post by id 

const PostDiscussion = ({match, getPostById, posts, posts: {post, loading}}) => {
    useEffect(() => {
        getPostById(match.params.id); 
    }, [getPostById])
    return (
            loading || post === null ? <Spinner/> : 
            <div>
                <Alert/>
                Post discussion 
                {
                    post &&  
                    <div>
                    <img src={post.avatar} alt='avatar'></img>
                    <p>{post.name}</p>
                    <p>{post.text}</p>
                    <p>Posted on <Moment format='MM/DD/YYYY'>{post.date.split('T')[0]}</Moment></p>
                    </div>  
                }    
            </div>
    )
}


// post.comments.map(item => {
//     <div>
//     <img src={item.avatar} alt='avatar'></img>
//     <p>{item.name}</p>
//     <p>{item.text}</p>
//     </div>
// }

const mapStateToProps = state => ({
    posts: state.posts
})

PostDiscussion.propTypes = {
    match: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    getPostById: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getPostById})(PostDiscussion); 

