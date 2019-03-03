import {CHEMREGISTER_SUCCESS,CHEMREGISTER_FAIL,CHEMAUTH_ERROR,
    CHEMUSER_LOADED,CHEMUSER_LOADING,CHEMLOGIN_SUCCESS,
    CHEMLOGIN_FAIL,CHEMLOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    chemuser:{}
}

export default function(state = initialState,action)
{
    switch(action.type)
    {
        case CHEMLOGIN_SUCCESS:
        case CHEMREGISTER_SUCCESS:
            localStorage.setItem("token",action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            };
        case CHEMUSER_LOADING:
        return{
                ...state,
                isLoading:true
        };
        case CHEMUSER_LOADED:
        return{
            ...state,
            isLoading:false,
            isAuthenticated:true,
            chemuser:action.payload
        };
        case CHEMLOGIN_FAIL:
        case CHEMLOGOUT_SUCCESS:
        case CHEMAUTH_ERROR:
        case CHEMREGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                chemuser:null,
                isAuthenticated:false,
                isLoading:false
            };

        default:
            return state;
    }
}

