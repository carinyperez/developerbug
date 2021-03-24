import ProfileActionTypes from "./profile.types";


const INITIAL_STATE = {
    //user profile 
    profile: null, 
    // other profiles
    profiles: [],
    // gihub repos
    repos: [],
    loading: true,
    error: {} 
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProfileActionTypes.GET_PROFILE:
        case ProfileActionTypes.UPDATE_PROFILE:  
        return {
            ...state, 
            profile: action.payload, 
            loading: false 
        }
        case ProfileActionTypes.GET_PROFILES: 
        return {
            ...state, 
            profiles: action.payload, 
            loading:false
        }
        case ProfileActionTypes.PROFILE_ERROR: 
        return {
            ...state, 
            error: action.payload, 
            loading: false, 
            profile: null 
        }
        case ProfileActionTypes.CLEAR_PROFILE: 
        return {
            ...state, 
            profile: null, 
            repos: [],
            loading: false
        }
        case ProfileActionTypes.GET_REPOS:
        return {
            ...state, 
            repos: action.payload,
            loading: false
        }
        default: 
        return state; 
    }
}

export default profileReducer; 
