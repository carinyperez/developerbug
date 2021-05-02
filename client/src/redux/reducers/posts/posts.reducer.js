import PostsActionTypes from './posts.types'; 

const INITIAL_STATE = {
    posts: [], 
    post: null, 
    loading: true, 
    error: {}
}
const postsReducer = (state = INITIAL_STATE, action) => {
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
            loading: false,
            // post: action.payload
            posts: state.posts.map((post) =>
            post._id === action.payload.post_id ? { ...post, likes: action.payload.likes } : post
        ),
        }
        case PostsActionTypes.DELETE_POST:
        return {
            ...state, 
            loading: false, 
            posts: state.posts.filter(post => post._id !== action.payload)
            // posts: action.payload
        }
        case PostsActionTypes.ADD_POST:
        return {
            ...state, 
            loading: false, 
            posts: [action.payload, ...state.posts]
        }   
        case PostsActionTypes.ADD_COMMENT: 
        return {
            ...state,
            loading: false, 
            post: {...state.post, comments: action.payload}
        }
        case PostsActionTypes.DELETE_COMMENT:
        return {
            ...state.post, 
            loading: false,
            post: {
                ...state.post, 
                comments: state.post.comments.filter(comment => comment._id !== action.payload)
            }
        }
        default: {
            return state; 
        }
    }
}
export default postsReducer; 

