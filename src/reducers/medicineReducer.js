import { GET_MEDICINES, DELETE_MEDICINE,ADD_MEDICINE } from '../actions/types';

const initialState = {  
    medicines:[ ]

}

export default function(state = initialState,action){
    switch(action.type){
        case GET_MEDICINES:
            return{
                ...state,
                medicines:action.payload
            };
        case DELETE_MEDICINE:
            return{
                ...state,
                medicines:state.medicines.filter(
                    medicine => medicine.id !== action.payload
                )
            };
        case ADD_MEDICINE:
        return{
            ...state,
            medicines:[...state.medicines, action.payload]
        }
        default:
            return state;
    }
}