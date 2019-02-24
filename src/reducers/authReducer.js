import { TEST_DISPATCH ,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED,USER_LOADING,
    AUTH_ERROR,LOGOUT_SUCCESS,REGISTER_SUCCESS,REGISTER_FAIL }
 from '../actions/types';


const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    user:{}
}

export default function(state = initialState,action){

    switch(action.type){
        case TEST_DISPATCH:
            return{
                ...state,
                user:action.payload,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);

            return{
                ...state,
                //user:action.payload,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
            };
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            };
        case USER_LOADED:
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload
            };
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false
            };
            
        default:
            return state;
    }
}
