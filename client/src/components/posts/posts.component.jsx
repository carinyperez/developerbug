import React, {useEffect} from 'react'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { getPosts } from '../../redux/reducers/posts/posts.actions';
import Spinner from '../spinner/spinner.component'; 
import Alert from '../alert/alert.component';
import Post from '../post/post.component';
import PostForm from '../postform/postform.component';
import './posts.styles.scss';

const Posts = ({posts : {posts}, getPosts}) => {
    useEffect(() => {
        getPosts(); 
    }, [getPosts])
        return (
            posts.loading ? <Spinner/> : 
            <div className='posts'>
            <Alert/>
            <h1>Posts</h1>
            <h2>Welcome to the community</h2>
            <PostForm/>
            {posts.map(item => <Post key={item._id} post={item}></Post>)}
            </div>
        )
}

const mapStateToProps = state => ({
    posts: state.posts
}) 

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {getPosts})(Posts); 