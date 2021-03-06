// Set the current day of the week to a variable, with 1 being Monday and 7 being Sunday
const day = 5;
console.log(day);

switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}

const INITIAL_STATE  = {
    token: 'token', 
    isAuthenticated: null,
    loading: true,
    user: null
}

const payload = {msg: 'Error', alertType: 'danger', token: 'token'}; 

// code calls action(with dispatch) calls which calls the reducer 
const setAlert = (msg, alertType) => {
    return {
        type: 'REGISTER_SUCCESS',
        payload: {msg, alertType}
    };
}

// reducer 
const authReducer = (state, action) => {
    const storeToken = [];
    switch(action) {
        case 'REGISTER_SUCCESS':
        // pushes token to storage  
        storeToken.push(payload.token);
        {/* { token: 'token',
        isAuthenticated: true,
        loading: false,
        user: null,
        msg: 'Error',
        alertType: 'danger' }*/}
        // returns one beautiful object 
        return {
            ...state,
            ...payload,
            isAuthenticated: true, 
            loading: false 
        }
    }
}


// console.log(setAlert(payload)); 
console.log(authReducer(INITIAL_STATE, 'REGISTER_SUCCESS')); 




