import PostsActionTypes from "./posts.types";
import axios from 'axios'; 
import { setAlert } from "../alert/alert.actions";


// Get posts 
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('api/posts');
        dispatch(setAlert('Got posts', 'success')); 
        dispatch({
            type: PostsActionTypes.GET_POSTS,
            payload: res.data
        })    
    } catch (err) {
        // console.log(err.response); 
        // console.log(err.response.statusText);
        dispatch({
            type: PostsActionTypes.POSTS_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
          }); 
    }
}

// Get Posts by Id 
export const getPostById = (id) => async dispatch => {
    console.log('getPostById'); 
    try {
        const res = await axios.get(`/api/posts/${id}`); 
        dispatch(setAlert('Got post', 'success'))
        dispatch({
            type: PostsActionTypes.GET_POST, 
            payload: res.data
        })
        console.log(res); 
    } catch (err) {
        console.error(err);
        dispatch({
            type: PostsActionTypes.POSTS_ERROR, 
            payload: {msg: err.response.statusText,status:err.response.status }
        })   
    }
}

// Like a post 
export const likePost = (post_id) => async dispatch =>  {
    console.log('like post'); 
    try {
        const res = await axios.put(`/api/posts/like/${post_id}`); 
        console.log(res);
        dispatch({
            type: PostsActionTypes.UPDATE_LIKES,
            payload: res.data
        }) 
    } catch (err) {
        console.error(err.response); 

    }
}
