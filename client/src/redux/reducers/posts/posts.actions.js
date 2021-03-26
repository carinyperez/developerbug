import PostsActionTypes from "./posts.types";
import axios from 'axios'; 
import { setAlert } from "../alert/alert.actions";


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

