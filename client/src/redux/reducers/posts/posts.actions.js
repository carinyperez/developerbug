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
            payload: { msg: err.response.statusText, status: err.response.status }
          }); 
    }
}

// Get post by Id 
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
        dispatch(setAlert('Post liked', 'success'))
        dispatch({
            type: PostsActionTypes.UPDATE_LIKES,
            payload: { post_id, likes: res.data }
        }) 
    } catch (err) {
        dispatch({
            type: PostsActionTypes.POSTS_ERROR, 
            payload: {msg: err.response.statusText,status:err.response.status }
        })

    }
}

//unlike a post 
export const unlikePost = (post_id) => async dispatch =>  {
    console.log('unlike post'); 
    try {
        const res = await axios.put(`/api/posts/unlike/${post_id}`); 
        console.log(res);
        dispatch(setAlert('Post unliked'))
        dispatch({
            type: PostsActionTypes.UPDATE_LIKES,
            payload: { post_id, likes: res.data }
        }) 
    } catch (err) {
        dispatch({
            type: PostsActionTypes.POSTS_ERROR, 
            payload: {msg: err.response.statusText,status:err.response.status }
        })

    }
}

// delete post by id 
export const deletePostById = (post_id) => async dispatch => {
    console.log('delete post');
    try {
        const res = await axios.delete(`/api/posts/${post_id}`); 
        console.log(res);
        dispatch({
            type: PostsActionTypes.DELETE_POST,
            // payload: res.data
            payload: post_id
        }) 
        dispatch(setAlert('Deleted post', 'success'))  
    } catch (err) {
        console.error(err); 
        dispatch({
            type: PostsActionTypes.POSTS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        }) 
    } 
}

// create a post 
export const createPost = (formData) => async dispatch => {
    console.log('create post');
    const config = {
        headers:  {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts', formData,config); 
        console.log(res);
        dispatch(setAlert('Create a post', 'Success'))
        dispatch({
            type: PostsActionTypes.ADD_POST, 
            payload: res.data
        }) 
    } catch (err) {
        console.error(err); 
        dispatch({
            type: PostsActionTypes.POSTS_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// add a comment 
export const addComment = (post_id, formData) => async dispatch => {
    console.log('add comment');
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`/api/posts/comment/${post_id}`,formData,config);
        console.log(res);
        dispatch(setAlert('Posted comment', 'success')) 
        dispatch({
            type: PostsActionTypes.ADD_COMMENT,
            payload: res.data
        })
    } catch (err) {
        console.error(err); 
        dispatch({
            type: PostsActionTypes.POSTS_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// delete comment 
export const deleteComment = (post_id,comment_id) => async dispatch => {
    console.log('delete comment'); 
    try {
        const res = await axios.delete(`/api/posts/comment/${post_id}/${comment_id}`); 
        dispatch(setAlert('Deleted comment', 'success')); 
        dispatch({
            type: PostsActionTypes.DELETE_COMMENT,
            payload: comment_id
        })
    } catch (err) {
        console.error(err);
        dispatch({
            type: PostsActionTypes.POSTS_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        }) 
    }
}
