
// const INITIAL_STATE = {
//     // do we need profile and profiles ? 
//     profile: null, 
//     profiles: [], 
//     posts: [], 
//     loading: true, 
//     error: {}
// }

// const postsReducer = (state = INITIAL_STATE, action) => {
//     console.log('posts reducer'); 
//     switch(action) {
//         case 'hello': 
//         //{ profile: 'hello' }  
//         return {
//             // if no ...state, won't return the updated state 
//             profile: 'hello'
//         }
//         // { profile: null, profiles: [],posts: [],loading: true,error: {} }
//         default: {
//             return state; 
//         }
    
//     }

// }

// const postsReducer2 = (state = INITIAL_STATE,action ) => {
//     if(action === 'hello') {
//         //profile: 'hello',profiles: [],posts: [],loading: true,error: {} }
//         return {
//             ...state, 
//             profile: 'hello'
//         }
//     } else {
//         return {
//             state
//         }
//     }
// }

// // console.log(postsReducer(INITIAL_STATE)); 

// console.log(postsReducer2(INITIAL_STATE, 'hello')); 

// console.log('2021-03-26T23:29:26.949Z'.split('T')[0])

console.log(Math.floor(Math.random() * 10)); 