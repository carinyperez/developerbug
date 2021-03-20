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
        case ProfileActionTypes.PROFILE_ERROR: 
        return {
            ...state, 
            error: action.payload, 
            loading: false 
        }
        case ProfileActionTypes.CLEAR_PROFILE: 
        return {
            ...state, 
            profile: null, 
            repos: [],
            loading: false
        }
        default: 
        return state; 
    }
}

export default profileReducer; 
