import React, {useEffect} from 'react'; 
import {connect} from 'react-redux'; 
import {getPostById} from '../../redux/reducers/posts/posts.actions'; 
import Alert from '../alert/alert.component'; 
import PropTypes from 'prop-types'; 
// get comments based on match.params 
// get post by id 

const PostDiscussion = ({match, getPostById, post}) => {
    useEffect(() => {
        getPostById(match.params.id); 
    }, [getPostById])
    return (
        <div>
           <Alert/>
           Post discussion 
           {post.comments.map(item => 
            <div>
            <img src={item.avatar} alt='avatar'></img>
            <p>{item.name}</p>
            <p>{item.text}</p>
            </div>
            
            )} 
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.posts.post
})

PostDiscussion.propTypes = {
    match: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {getPostById})(PostDiscussion); 

