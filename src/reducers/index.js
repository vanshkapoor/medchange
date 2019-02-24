import { combineReducers } from 'redux';
import authReducer from './authReducer';
import medicineReducer from './medicineReducer';

export default combineReducers({
    auth:authReducer,
    medicines:medicineReducer

});
