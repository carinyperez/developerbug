import React, {useEffect} from 'react'; 
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { getPosts } from '../../redux/reducers/posts/posts.actions';
import Spinner from '../spinner/spinner.component'; 
import Alert from '../alert/alert.component';

const Posts = ({posts, getPosts}) => {
    useEffect(() => {
        getPosts(); 
    }, [getPosts])
    return (
        <div>
            <Alert/>
            Posts
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