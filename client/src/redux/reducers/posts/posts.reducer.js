import PostsActionTypes from './posts.types'; 

const INITIAL_STATE = {
    posts: [], 
    post: null, 
    loading: true, 
    error: {}
}

const postsReducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload); 
    switch(action.type) {
        case PostsActionTypes.GET_POSTS:  
        return {
            ...state, 
            posts: action.payload, 
            loading: false
        }
        case PostsActionTypes.POSTS_ERROR: 
        return {
            ...state, 
            error: action.payload,
            loading: false
        }
        case PostsActionTypes.GET_POST: 
        return {
            ...state, 
            post: action.payload,
            loading: false
        }
        case PostsActionTypes.UPDATE_LIKES:
        return {
            ...state, 
            post: action.payload,
            loading: false
        }
        default: {
            return state; 
        }
    }
}
export default postsReducer; 

