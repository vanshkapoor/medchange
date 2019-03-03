import {REQUESTS_SUCCESS,ACCEPT_MEDICINE,
    REJECT_MEDICINE} from '../actions/types';

const initialState = {
    chemmeds:[ ]
}


export default function(state = initialState,action)
{
    switch(action.type)
    {
        case ACCEPT_MEDICINE:
            return{
                ...state,
            };
        case REJECT_MEDICINE:
            return {
                ...state,
            };
        case REQUESTS_SUCCESS:
            return{
                ...state,
                chemmeds:action.payload
            };
        default:
            return state;
    }
}